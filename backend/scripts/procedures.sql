CREATE PROCEDURE `sp_kardex_invoice`(
	IN `PSaleId` BIGINT,
	IN `PProductId` BIGINT
)
BEGIN
	DECLARE VSaleId, VDone,VProductId, VStockId, VDone2 BIGINT DEFAULT 0;
	DECLARE VBranchId SMALLINT DEFAULT 0;
	DECLARE VSalePrice, VAmount, VDiscount, VStock, VTotal DECIMAL(22,2) DEFAULT 0;
	DECLARE VSalaDate DATE;
	DECLARE cur CURSOR FOR SELECT td.id, td.product_id,td.amount, 
		if(td.discount < 0, ROUND(td.unit_price + ((td.discount * -1) / td.amount),2), 
		td.unit_price - (td.discount/ td.amount)) AS sale_price,
		if(td.discount > 0, td.discount,0) discount, mv.invoice_date, td.total,
		mv.point_of_sale_id
		FROM sales_detail AS td
		LEFT JOIN products AS ta ON td.product_id = ta.id
		LEFT JOIN sales_master AS mv ON td.sale_id = mv.id
		WHERE td.product_id = PProductId AND td.sale_id = PSaleId;			

	DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET VDone = 1;

	OPEN cur;
	REPEAT 
		FETCH cur INTO VSaleId, VProductId, VAmount, VSalePrice, VDiscount, VSalaDate, VTotal, VBranchId;
		IF NOT VDone THEN 
			SET VDone2 = 0;
			REPEAT 
				SELECT a.id, a.stock INTO VStockId, VStock FROM stock_control AS a
				WHERE a.stock > 0 AND a.product_id = VProductId AND a.point_of_sale_id = VBranchId
				ORDER BY a.entry_date LIMIT 1;

				IF VStock >= VAmount THEN 
					INSERT INTO stock_outings (stock_id,outputs,sale_price,discount,departure_date,sale_detail_id,stock) 
					VALUES(VStockId,VAmount,VSalePrice,VDiscount,VSalaDate,VSaleId,VStock - VAmount) ;

					UPDATE stock_control SET outputs = outputs +  VAmount WHERE id = VStockId LIMIT 1;
					SET VDone2 = 1;
				ELSEIF VAmount > VStock THEN 
					INSERT INTO stock_outings (stock_id,outputs,sale_price,discount,departure_date,sale_detail_id,stock) 
					VALUES(VStockId,VStock,VSalePrice,VDiscount,VSalaDate,VSaleId,VAmount - VStock) ;

					UPDATE stock_control SET outputs = outputs +  VStock WHERE id = VStockId LIMIT 1;
					IF (VAmount - VStock) = 0 THEN 
						SET VDone2 = 1;
					END IF;
				END IF;
		 	UNTIL VDone2 = 1 END REPEAT;
		END IF;
	UNTIL VDone END REPEAT;
	CLOSE cur;
END//
DELIMITER ;

-- Volcando estructura para procedimiento y_code.sp_select_customer_sale
DROP PROCEDURE IF EXISTS `sp_select_customer_sale`;
DELIMITER //
CREATE PROCEDURE `sp_select_customer_sale`(
	IN `PSaleId` BIGINT
)
BEGIN
	SELECT tm.id, RIGHT(CONCAT('00000000000',tm.invoice_nro),9) AS invoice_nro,
	tm.prefix AS prefix_invo, if(isnull(tp.full_name), (SELECT value FROM general_settings WHERE tag = 19),
	TRIM(tp.full_name)) AS customer_name, tp.dv, tp.identity_document_id, tp.type_organization_id,
	tp.tax_level_id, tp.tax_regime_id,
	if(isnull(tp.dni),0,tp.dni) AS dni, ti.document_name, ti.abbrev,
	tp.mobile, tp.phone, tp.location, tp.address, tp.postal_code, tp.email, tp.city_id,
	tp.country_id, tp.merchant_registration,
	tc.city_code, tc.name_city, dp.name_departament, co.abbreviation_A3,
	co.country_name, tl.code AS tax_level, tg.description AS tax_regime, 
	o.description AS organization
	FROM sales_master AS tm 
	LEFT JOIN customers_sale AS cs ON cs.sale_id = tm.id
	LEFT JOIN persons AS tp ON cs.customer_id = tp.id
	LEFT JOIN identity_documents AS ti ON tp.identity_document_id = ti.id
	LEFT JOIN cities AS tc ON tp.city_id = tc.id 
	LEFT JOIN departments AS dp ON tc.departament_id = dp.id
	LEFT JOIN countries AS co ON dp.country_id = co.id
	LEFT JOIN fe_tax_level AS tl ON tp.tax_level_id = tl.id
	LEFT JOIN fe_tax_regime AS tg ON tp.tax_regime_id = tg.id
	LEFT JOIN type_organization AS o ON tp.type_organization_id = o.id
	WHERE tm.active >= 1 AND tm.id = PSaleId;
END//
DELIMITER ;

-- Volcando estructura para procedimiento y_code.sp_select_invoice_detail
DROP PROCEDURE IF EXISTS `sp_select_invoice_detail`;
DELIMITER //
CREATE PROCEDURE `sp_select_invoice_detail`(
	IN `PInvoideID` BIGINT
)
BEGIN
	SELECT a.*, a.amount AS quantity, a.tax_sale_id AS tax_sales_id,
	a.unit_cost AS purchase_cost, a.total_cost AS total_cost, a.vat AS tax_amount,
	b.internal_code, b.product_name, b.barcode, b.perishable, c.rate_value AS tax_sale, 
	c.rate_value AS tax_sales, d.rate_value AS tax_bill, f.winery_name
	FROM invoice_detail AS a
	LEFT JOIN products AS b ON a.product_id = b.id
	LEFT JOIN tax_rates AS c ON a.tax_sale_id = c.id
	LEFT JOIN tax_rates AS d ON a.tax_bill_id = d.id
	LEFT JOIN warehouse_inventory AS e ON e.bill_id = a.invoice_id
	LEFT JOIN warehouse AS f ON e.warehouse_id = f.id
	WHERE a.invoice_id = PInvoideID AND a.state = 1;
END//
DELIMITER ;

-- Volcando estructura para procedimiento y_code.sp_select_products_all
DROP PROCEDURE IF EXISTS `sp_select_products_all`;
DELIMITER //
CREATE PROCEDURE `sp_select_products_all`(
	IN `PPoint_of_sale_id` INT
)
BEGIN
	IF PPoint_of_sale_id > 0 THEN 
		(SELECT a.id, a.class_id, a.unit_id, a.tax_sales_id, a.tax_bill_id, a.internal_code, a.sku, 
		a.qr_code, a.barcode, if(LENGTH(a.description_sales) > 0, a.description_sales, a.product_name) AS product_name, 
		a.image, a.stock_min, a.stock_max, a.notes, a.perishable, a.recipe, a.sale_price, 
		a.purchase_cost, a.percentage_gain, a.base_factor, a.vat_included, 
		a.selling_out_of_inventory, a.state, b.product_class_name, c.rate_value AS tax_sales, 
		c.decimal_rate AS tax_sale_rate,
       d.rate_value AS tax_bill, d.decimal_rate AS tax_bill_rate, e.brand_id, 
		 f.category_id, g.category_id AS sub_category_id,
		 (SELECT if(ISNULL(SUM(sc.stock)),0, SUM(sc.stock)) FROM  stock_control AS sc 
		 	WHERE sc.product_id = a.id AND sc.point_of_sale_id = i.id 
		 ) AS stock, 0 AS product_unit_id, '' AS unit_name, 0 AS factor, '' AS unit_description, j.abbre_unit
       FROM products a
       LEFT JOIN product_class AS b ON a.class_id = b.id
       LEFT JOIN tax_rates AS c ON a.tax_sales_id = c.id
       LEFT JOIN tax_rates AS d ON a.tax_bill_id = d.id
       LEFT JOIN product_brands AS e ON e.product_id = a.id
       LEFT JOIN product_categories AS f ON f.product_id = a.id
       LEFT JOIN product_subcategories AS g ON g.product_id = a.id
       LEFT JOIN product_branch AS h ON h.product_id = a.id
       LEFT JOIN branch_offices AS i ON h.point_of_sale_id = i.id
       LEFT JOIN standard_measurement_units AS j ON a.unit_id = j.id
       WHERE a.state = 1 AND i.id = PPoint_of_sale_id) 
       UNION 
       (SELECT a.id, a.class_id, a.unit_id, a.tax_sales_id, a.tax_bill_id, a.internal_code, a.sku, 
		a.qr_code, a.barcode, if(LENGTH(a.description_sales) > 0, a.description_sales, a.product_name) AS product_name, 
		a.image, a.stock_min, a.stock_max, a.notes, a.perishable, a.recipe, j.sale_price, 
		j.purchase_cost, a.percentage_gain, a.base_factor, a.vat_included, 
		a.selling_out_of_inventory, a.state, b.product_class_name, c.rate_value AS tax_sales, 
		c.decimal_rate AS tax_sale_rate,
       d.rate_value AS tax_bill, d.decimal_rate AS tax_bill_rate, e.brand_id, 
		 f.category_id, g.category_id AS sub_category_id,
		 (SELECT if(ISNULL(SUM(sc.stock)),0, SUM(sc.stock)) FROM  stock_control AS sc 
		 	WHERE sc.product_id = a.id AND sc.point_of_sale_id = i.id 
		 ) AS stock, j.id AS product_unit_id, j.unit_name, k.factor, k.unit_description, l.abbre_unit
       FROM products a
       LEFT JOIN product_class AS b ON a.class_id = b.id
       LEFT JOIN tax_rates AS c ON a.tax_sales_id = c.id
       LEFT JOIN tax_rates AS d ON a.tax_bill_id = d.id
       LEFT JOIN product_brands AS e ON e.product_id = a.id
       LEFT JOIN product_categories AS f ON f.product_id = a.id
       LEFT JOIN product_subcategories AS g ON g.product_id = a.id
       LEFT JOIN product_branch AS h ON h.product_id = a.id
       LEFT JOIN branch_offices AS i ON h.point_of_sale_id = i.id
       LEFT JOIN product_units_measure AS j ON j.product_id = a.id
       LEFT JOIN measurement_units AS k ON j.unit_id = k.id
       LEFT JOIN standard_measurement_units AS l ON k.base_unit_id = l.id
       WHERE a.state = 1 AND i.id = PPoint_of_sale_id AND j.product_id = a.id AND j.state = 1)
       ORDER BY product_name;
	ELSE
		SELECT a.*, b.product_class_name, c.rate_value AS tax_sales,  c.decimal_rate AS tax_sale_rate,
      d.rate_value AS tax_bill, d.decimal_rate AS tax_bill_rate, e.brand_id, f.category_id, 
		g.category_id AS sub_category_id
       FROM products a
       LEFT JOIN product_class AS b ON a.class_id = b.id
       LEFT JOIN tax_rates AS c ON a.tax_sales_id = c.id
       LEFT JOIN tax_rates AS d ON a.tax_bill_id = d.id
       LEFT JOIN product_brands AS e ON e.product_id = a.id
       LEFT JOIN product_categories AS f ON f.product_id = a.id
       LEFT JOIN product_subcategories AS g ON g.product_id = a.id
       WHERE a.state = 1
       ORDER BY a.product_name;
	END IF;
END//
DELIMITER ;

-- Volcando estructura para procedimiento y_code.sp_select_sales_detail
DROP PROCEDURE IF EXISTS `sp_select_sales_detail`;
DELIMITER //
CREATE PROCEDURE `sp_select_sales_detail`(
	IN `PSaleId` BIGINT
)
BEGIN

SELECT td.sale_id, td.id, td.product_id, ta.internal_code ,if(td.amount < 0,td.amount*-1,td.amount) amount, 
	td.unit_price, if(td.discount < 0,td.discount *-1,td.discount) discount, 
	tx.rate_value AS vat, mv.invoice_date, mv.invoice_time,
	if(td.total < 0,td.total*-1,td.total) total, TRIM(ta.product_name) AS detail, 
	td.charge, td.reason, tx2.id AS tax_id, tx.id AS tax_rate_id, tx2.name_taxe, 1 AS sale_type, 
	td.purchase_price, a.tax_value AS tax,
	ta.class_id, if(ISNULL(e.abbre_unit), au.abbre_unit, e.abbre_unit) AS abbre_unit, 
	td.with_units, b.base_factor, b.factor, c.unit_name, tx.is_exempt
	FROM sales_detail AS td
	LEFT JOIN products AS ta ON td.product_id = ta.id
	LEFT JOIN sales_master AS mv ON td.sale_id = mv.id
	LEFT JOIN sales_detail_taxes AS a ON a.sale_detail_id = td.id
	LEFT JOIN tax_rates AS tx ON a.tax_rate_id = tx.id 
	LEFT JOIN tax_group AS tx2 ON tx.tax_gruop_id = tx2.id 
	LEFT JOIN standard_measurement_units AS au ON ta.unit_id = au.id
	LEFT JOIN sales_detail_units AS b ON b.sale_detail_id = td.id
	LEFT JOIN product_units_measure AS c ON (c.product_id = ta.id AND b.product_unit_id = c.id)
	LEFT JOIN measurement_units AS d ON c.unit_id = d.id
	LEFT JOIN standard_measurement_units AS e ON d.base_unit_id = e.id
	WHERE td.sale_id = PSaleId
	ORDER BY td.sale_id, detail;
END//
DELIMITER ;

-- Volcando estructura para procedimiento y_code.sp_select_sales_master
DROP PROCEDURE IF EXISTS `sp_select_sales_master`;
DELIMITER //
CREATE PROCEDURE `sp_select_sales_master`(
	IN `PCompanyId` BIGINT,
	IN `PSaleId` BIGINT,
	IN `PActive` INT,
	IN `PIDate` DATE,
	IN `PFDate` DATE,
	IN `PType` INT
)
BEGIN
	DECLARE VFilter VARCHAR(250) DEFAULT '';
	
	IF PSaleId <> 0 THEN 
		SET VFilter = CONCAT(" AND tm.id=",PSaleId);
	END IF;

	IF PActive > 0 THEN 
		SET VFilter = CONCAT(VFilter," AND tm.active=",PActive);
	END IF;

	IF NOT ISNULL(PIDate) AND NOT ISNULL(PFDate) THEN
		SET VFilter = CONCAT(VFilter," AND tm.invoice_date BETWEEN '",PIDate,"' AND '",PFDate,"'");
	END IF;

	IF PType > 0 THEN 
		SET VFilter = CONCAT(VFilter," AND tm.invoice_type_id = ",PType);
	END IF;

 	SET @sqlSelect = CONCAT("SELECT tm.id, LPAD(tm.invoice_nro,8,'0') AS invoice_nro, 
	tm.path_report, tm.path_ticket,
	tm.prefix, tm.subtotal, tm.tax_value, tm.discount, tm.total, tm.cash, tc.customer_id,
	tm.payment_change, tm.invoice_date, tm.expiration_date, time(tm.invoice_time) AS invoice_time, 
	tm.`status`, tm.invoice_type_id,	tm.total_allowance, tm.total_charges, pm.payment_method,
	tm.payment_method_id, (SELECT mp.payment_method FROM means_payment_sale mps 
	LEFT JOIN means_payment mp ON mps.means_payment_id = mp.id 
	WHERE mps.sale_id = tm.id LIMIT 1) AS means_name, 
	(SELECT mp.id FROM means_payment_sale mps 
	LEFT JOIN means_payment mp ON mps.means_payment_id = mp.id 
	WHERE mps.sale_id = tm.id LIMIT 1) AS means_payment_id, rs.id AS resolution_id,
	cr.id AS currency_id, cr.CurrencyISO, cr.Money, ad.code AS code_ad, ad.voucher_name, 
	ad.prefix AS prefix_doc, ad.electronic, ad.apply_notes,
	ts.id AS time_limit_id, tl.term_name AS time_limit, tl.term_value, tl.months, tm.active, 
	cs.dni, if(ISNULL(cs.id),(SELECT gs.value FROM general_settings gs WHERE gs.tag = 19), cs.full_name) AS company_name,
	cs.address, cs.location, cs.postal_code, cs.mobile, cs.phone, cs.email, cs.city_name, cs.state_name,
	tog.description AS typeorganization, cr.Symbol,
	rs.headerline1, rs.headerline2, rs.footline1, rs.footline2, rs.footline3, rs.footline4, a.image,
	ts.username, tm.notes, b.plural_name, b.singular_name, b.denomination, rs.invoice_name
	FROM sales_master AS tm 
	LEFT JOIN company AS a ON a.id > 0
	LEFT JOIN customers_sale AS tc ON tc.sale_id = tm.id
	LEFT JOIN persons AS cs ON tc.customer_id = cs.id
	LEFT JOIN payment_methods AS pm ON tm.payment_method_id = pm.id
	LEFT JOIN sales_currency AS sc ON sc.sale_id = tm.id
	LEFT JOIN currency_sys AS b ON (sc.currency_id = b.id)
	LEFT JOIN currency AS cr ON b.currency_id = cr.id
	LEFT JOIN accounting_documents AS ad ON tm.invoice_type_id = ad.id
	LEFT JOIN tb_time_limit AS tl ON tm.time_limit_id = tl.id
	LEFT JOIN type_organization AS tog ON cs.type_organization_id = tog.id
	LEFT JOIN resolution_sale AS rsv ON rsv.sale_id = tm.id
	LEFT JOIN resolutions AS rs ON (rs.id = rsv.resolution_id)
	LEFT JOIN user_sales AS us ON us.sale_id = tm.id
	LEFT JOIN users AS ts ON us.user_id = ts.id
	WHERE tm.active > 0 AND rs.active = 1 ",VFilter,"  ORDER BY tm.invoice_nro DESC");
	PREPARE smtp FROM @sqlSelect;
	EXECUTE smtp;
	DEALLOCATE PREPARE smtp;
END//
DELIMITER ;

-- Volcando estructura para procedimiento y_code.sp_select_sales_master_by_id
DROP PROCEDURE IF EXISTS `sp_select_sales_master_by_id`;
DELIMITER //
CREATE PROCEDURE `sp_select_sales_master_by_id`(
	IN `PSaleId` BIGINT
)
BEGIN
	SELECT a.*, c.currency_id, d.resolution_id, e.customer_id, f.means_payment_id
	FROM sales_master AS a
	LEFT JOIN sales_currency AS b ON b.sale_id = a.id
	LEFT JOIN currency_sys AS c ON b.currency_id = c.id
	LEFT JOIN resolution_sale AS d ON d.sale_id = a.id
	LEFT JOIN customers_sale AS e ON e.sale_id = a.id
	LEFT JOIN means_payment_sale AS f ON f.sale_id = a.id
	WHERE a.id = PSaleId;
END//
DELIMITER ;

-- Volcando estructura para procedimiento y_code.sp_select_sales_products
DROP PROCEDURE IF EXISTS `sp_select_sales_products`;
DELIMITER //
CREATE PROCEDURE `sp_select_sales_products`(
	IN `PPoint_of_sale_id` BIGINT,
	IN `PQuery` VARCHAR(50),
	IN `PType` SMALLINT,
	IN `PStart` SMALLINT,
	IN `PLimit` SMALLINT
)
BEGIN
	SET @whereSearch 	= "";
	SET @limitList 	= "";
	IF PLimit > 0 THEN 
		SET @limitList = CONCAT(" LIMIT ", PStart, PLimit);
	END IF;
	/*Realiza la búsqueda*/
	IF LENGTH(PQuery) >= 2 THEN
		CASE PType
			WHEN 2 THEN /*Búsqueda por SKU*/
				SET  @whereSearch = CONCAT(" AND a.sku LIKE '%", PQuery, "%'");
			WHEN 3 THEN /*Búsqueda por codigo de barras*/
				SET  @whereSearch = CONCAT(" AND a.barcode LIKE '%", PQuery, "%'");
			ELSE /*Búsqueda por nombre del producto*/
				SET  @whereSearch = CONCAT(" AND a.product_name LIKE '%", PQuery, "%'");
		END CASE;
	END IF;
	SET @sqlSelect =CONCAT("(SELECT a.id, a.class_id, a.unit_id, a.tax_sales_id, a.tax_bill_id, a.internal_code, a.sku, 
	a.qr_code, a.barcode, if(LENGTH(a.description_sales) > 0, a.description_sales, a.product_name) AS product_name, 
	a.image, a.stock_min, a.stock_max, a.notes, a.perishable, a.recipe, a.sale_price, 
	a.purchase_cost, a.percentage_gain, a.base_factor, a.vat_included, 
	a.selling_out_of_inventory, a.state, b.product_class_name, c.rate_value AS tax_sales, 
	c.decimal_rate AS tax_sale_rate,
    d.rate_value AS tax_bill, d.decimal_rate AS tax_bill_rate, e.brand_id, 
	 f.category_id, g.category_id AS sub_category_id,
	 (SELECT if(ISNULL(SUM(sc.stock)),0, SUM(sc.stock)) FROM  stock_control AS sc 
	 	WHERE sc.product_id = a.id AND sc.point_of_sale_id = i.id 
	 ) AS stock, 0 AS product_unit_id, '' AS unit_name, 0 AS factor, '' AS unit_description, j.abbre_unit
    FROM products a
    LEFT JOIN product_class AS b ON a.class_id = b.id
    LEFT JOIN tax_rates AS c ON a.tax_sales_id = c.id
    LEFT JOIN tax_rates AS d ON a.tax_bill_id = d.id
    LEFT JOIN product_brands AS e ON e.product_id = a.id
    LEFT JOIN product_categories AS f ON f.product_id = a.id
    LEFT JOIN product_subcategories AS g ON g.product_id = a.id
    LEFT JOIN product_branch AS h ON h.product_id = a.id
    LEFT JOIN branch_offices AS i ON h.point_of_sale_id = i.id
    LEFT JOIN standard_measurement_units AS j ON a.unit_id = j.id
    WHERE a.state = 1 AND i.id =",PPoint_of_sale_id, @whereSearch, @limitList,") 
    UNION 
    (SELECT a.id, a.class_id, a.unit_id, a.tax_sales_id, a.tax_bill_id, a.internal_code, a.sku, 
	a.qr_code, a.barcode, if(LENGTH(a.description_sales) > 0, a.description_sales, a.product_name) AS product_name, 
	a.image, a.stock_min, a.stock_max, a.notes, a.perishable, a.recipe, j.sale_price, 
	j.purchase_cost, a.percentage_gain, a.base_factor, a.vat_included, 
	a.selling_out_of_inventory, a.state, b.product_class_name, c.rate_value AS tax_sales, 
	c.decimal_rate AS tax_sale_rate,
    d.rate_value AS tax_bill, d.decimal_rate AS tax_bill_rate, e.brand_id, 
	 f.category_id, g.category_id AS sub_category_id,
	 (SELECT if(ISNULL(SUM(sc.stock)),0, SUM(sc.stock)) FROM  stock_control AS sc 
	 	WHERE sc.product_id = a.id AND sc.point_of_sale_id = i.id 
	 ) AS stock, j.id AS product_unit_id, j.unit_name, k.factor, k.unit_description, l.abbre_unit
    FROM products a
    LEFT JOIN product_class AS b ON a.class_id = b.id
    LEFT JOIN tax_rates AS c ON a.tax_sales_id = c.id
    LEFT JOIN tax_rates AS d ON a.tax_bill_id = d.id
    LEFT JOIN product_brands AS e ON e.product_id = a.id
    LEFT JOIN product_categories AS f ON f.product_id = a.id
    LEFT JOIN product_subcategories AS g ON g.product_id = a.id
    LEFT JOIN product_branch AS h ON h.product_id = a.id
    LEFT JOIN branch_offices AS i ON h.point_of_sale_id = i.id
    LEFT JOIN product_units_measure AS j ON j.product_id = a.id
    LEFT JOIN measurement_units AS k ON j.unit_id = k.id
    LEFT JOIN standard_measurement_units AS l ON k.base_unit_id = l.id
    WHERE a.state = 1 AND i.id =", PPoint_of_sale_id," AND j.product_id = a.id AND j.state = 1", @whereSearch, @limitList,")
    ORDER BY product_name");
    
    PREPARE smtp FROM @sqlSelect;
    EXECUTE smtp;
    DEALLOCATE PREPARE smtp;
END//
DELIMITER ;

-- Volcando estructura para procedimiento y_code.sp_select_sales_taxes
DROP PROCEDURE IF EXISTS `sp_select_sales_taxes`;
DELIMITER //
CREATE PROCEDURE `sp_select_sales_taxes`(
	IN `PSaleId` BIGINT
)
BEGIN
	SET @sqlSelect = CONCAT("SELECT tx.id, td.sale_id,  
	SUM(ROUND(td.total - a.tax_value,2)) AS base, 
	SUM(ROUND( a.tax_value,2)) AS tax_value,
	SUM(td.total) AS total, tx.rate_value, tx.rate_abbre,
	tx.tax_gruop_id, tx2.name_taxe, tx.rate_name
	FROM sales_detail AS td
	LEFT JOIN sales_detail_taxes AS a ON a.sale_detail_id = td.id
	LEFT JOIN tax_rates AS tx ON a.tax_rate_id = tx.id 
	LEFT JOIN tax_group AS tx2 ON tx.tax_gruop_id = tx2.id
	WHERE td.sale_id=",PSaleId," 
	GROUP BY td.sale_id, tx.id
	ORDER BY sale_id");	
	PREPARE smtp FROM @sqlSelect;
	EXECUTE smtp;
	DEALLOCATE PREPARE smtp;
END//
DELIMITER ;

-- Volcando estructura para procedimiento y_code.sp_select_vat
DROP PROCEDURE IF EXISTS `sp_select_vat`;
DELIMITER //
CREATE PROCEDURE `sp_select_vat`()
BEGIN
	SELECT a.*, b.name_taxe FROM tax_rates AS a 
	LEFT JOIN tax_group AS b ON a.tax_gruop_id = b.id
	WHERE b.is_vat = 1 
	ORDER BY  a.is_exempt DESC, a.decimal_rate, a.rate_name;
END//
DELIMITER ;

-- Volcando estructura para procedimiento y_code.sp_update_kardex
DROP PROCEDURE IF EXISTS `sp_update_kardex`;
DELIMITER //
CREATE PROCEDURE `sp_update_kardex`(
	IN `PSaleId` BIGINT
)
BEGIN
	DECLARE VSaleId, VProductId BIGINT DEFAULT 0;
	DECLARE VDone BOOL DEFAULT 0;
	DECLARE cur CURSOR FOR SELECT a.id, a.product_id
		FROM sales_detail AS a 
		LEFT JOIN products AS b ON a.product_id = b.id 
		LEFT JOIN sales_master AS c ON a.sale_id = c.id
		WHERE a.sale_id = PSaleId AND b.class_id <> 2
		AND NOT EXISTS(
			SELECT c.id FROM stock_outings AS c WHERE c.sale_detail_id = a.id
		) AND c.invoice_type_id IN (1,2,7);		
	DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET VDone = 1;

	OPEN cur;
	REPEAT 
		FETCH cur INTO VSaleId, VProductId;
		IF NOT VDone THEN  
			CALL sp_kardex_invoice (PSaleId, VProductId);
		END IF;
	UNTIL VDone END REPEAT;
