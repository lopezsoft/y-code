CREATE TRIGGER `branch_offices_after_insert` AFTER INSERT ON `branch_offices` FOR EACH ROW BEGIN
	IF NEW.is_point_of_sale = 1 AND NEW.is_branch = 1 THEN 
		INSERT INTO points_of_sale (parent_id, child_id, status) 
		VALUES(NEW.id, NEW.id , 1);
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.currency_sys_before_insert
DROP TRIGGER IF EXISTS `currency_sys_before_insert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `currency_sys_before_insert` BEFORE INSERT ON `currency_sys` FOR EACH ROW BEGIN
	IF NEW.national_currency = 1 THEN 
		SET  NEW.exchange_rate_value = 1;
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.currency_sys_before_update
DROP TRIGGER IF EXISTS `currency_sys_before_update`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `currency_sys_before_update` BEFORE UPDATE ON `currency_sys` FOR EACH ROW BEGIN
	IF NEW.national_currency = 1 THEN 
		SET  NEW.exchange_rate_value = 1;
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.invoice_detail_after_insert
DROP TRIGGER IF EXISTS `invoice_detail_after_insert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `invoice_detail_after_insert` AFTER INSERT ON `invoice_detail` FOR EACH ROW BEGIN
	INSERT INTO stock_control (product_id,description,entries,unit_cost,
	freight,entry_date,batch,fabrication_date,expiration_date, invoice_id, 
	tax_sale_id, tax_bill_id,point_of_sale_id) 
	VALUES (NEW.product_id, 'COMPRAS', NEW.amount, NEW.unit_cost, NEW.freight, 
	NEW.admission_date, NEW.batch, NEW.fabrication_date, NEW.expiration_date,
	NEW.invoice_id, NEW.tax_sale_id, NEW.tax_bill_id, 
	(SELECT a.point_of_sale_id FROM invoices AS a WHERE a.id = NEW.invoice_id LIMIT 1 ));
	UPDATE products a SET a.purchase_cost = NEW.unit_cost, 
		a.sale_price = NEW.sale_price, a.tax_sales_id = NEW.tax_sale_id,
		a.tax_bill_id = NEW.tax_bill_id WHERE a.id = NEW.product_id LIMIT 1;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.invoice_detail_before_insert
DROP TRIGGER IF EXISTS `invoice_detail_before_insert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `invoice_detail_before_insert` BEFORE INSERT ON `invoice_detail` FOR EACH ROW BEGIN
 	IF ISNULL(NEW.admission_date) THEN 
		SET NEW.admission_date = (SELECT t.admission_date FROM invoices AS t 
											WHERE t.id = NEW.invoice_id LIMIT 1);
	END IF;
	IF ISNULL(NEW.batch) THEN 
		SET NEW.expiration_date = NULL;
		SET NEW.fabrication_date= NULL;
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.invoice_detail_before_update
DROP TRIGGER IF EXISTS `invoice_detail_before_update`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `invoice_detail_before_update` BEFORE UPDATE ON `invoice_detail` FOR EACH ROW BEGIN
	IF ISNULL(NEW.batch) OR LENGTH(NEW.batch) <= 0 THEN 
		SET NEW.expiration_date = NULL;
		SET NEW.fabrication_date= NULL;
	END IF;
	
	UPDATE stock_control a SET a.unit_cost = NEW.unit_cost, 
	a.fabrication_date = NEW.fabrication_date, a.expiration_date = NEW.expiration_date,
	a.batch = NEW.batch, a.tax_sale_id = NEW.tax_sale_id, 
	a.tax_bill_id = NEW.tax_bill_id, a.product_id = NEW.product_id,
	a.entries = NEW.amount
	WHERE a.product_id = OLD.product_id AND a.invoice_id = NEW.invoice_id LIMIT 1;
	
	UPDATE products a SET a.purchase_cost = NEW.unit_cost, 
		a.sale_price = NEW.sale_price, a.tax_sales_id = NEW.tax_sale_id,
		a.tax_bill_id = NEW.tax_bill_id WHERE a.id = NEW.product_id LIMIT 1;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.products_after_insert
DROP TRIGGER IF EXISTS `products_after_insert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `products_after_insert` AFTER INSERT ON `products` FOR EACH ROW BEGIN
	INSERT INTO product_branch (product_id, point_of_sale_id)
 	SELECT NEW.id, a.id
 	FROM points_of_sale AS ps
 	LEFT JOIN branch_offices AS a ON ps.child_id = a.id
 	LEFT JOIN branch_offices AS f ON (ps.parent_id = f.id AND f.is_branch = 1);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.products_before_insert
DROP TRIGGER IF EXISTS `products_before_insert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `products_before_insert` BEFORE INSERT ON `products` FOR EACH ROW BEGIN
	SELECT CAST(VALUE AS INT) INTO @act FROM general_settings WHERE tag = 13 LIMIT 1;
	IF @act = 1 THEN 
		UPDATE product_code_control SET value = value + 1;
		SELECT value INTO @acount FROM product_code_control;
		SET NEW.internal_code	= RIGHT(CONCAT('000000000000',@acount),12);
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.sales_detail_after_insert
DROP TRIGGER IF EXISTS `sales_detail_after_insert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `sales_detail_after_insert` AFTER INSERT ON `sales_detail` FOR EACH ROW BEGIN
	SELECT t.class_id INTO @typep FROM products AS t WHERE t.id = NEW.product_id LIMIT 1;
	IF NEW.amount > 0 AND @typep <> 2 THEN 
		/*CALL sp_kardex_invoice(NEW.sale_id, NEW.product_id);*/
		SET @ft = 1;
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.sales_detail_before_update
DROP TRIGGER IF EXISTS `sales_detail_before_update`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `sales_detail_before_update` BEFORE UPDATE ON `sales_detail` FOR EACH ROW BEGIN
	IF (NEW.active = 0) OR (NEW.active = 1 AND OLD.active = 0) THEN /* Canceled */
		SET NEW.amount 	= NEW.amount * -1;
		SET NEW.discount	= NEW.discount * -1;
		SET NEW.total		= NEW.total * -1;
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.stock_control_after_insert
DROP TRIGGER IF EXISTS `stock_control_after_insert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `stock_control_after_insert` AFTER INSERT ON `stock_control` FOR EACH ROW BEGIN
	IF NEW.entries <> 0 THEN
		UPDATE product_branch AS a SET stock = stock + NEW.entries 
		WHERE a.point_of_sale_id = NEW.point_of_sale_id AND 
		a.product_id = NEW.product_id LIMIT 1;
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.stock_control_before_insert
DROP TRIGGER IF EXISTS `stock_control_before_insert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `stock_control_before_insert` BEFORE INSERT ON `stock_control` FOR EACH ROW BEGIN
	IF ISNULL(NEW.entry_date) THEN
		SET NEW.entry_date = CURRENT_DATE();
	END IF;
	SET NEW.stock = NEW.entries - NEW.outputs;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.stock_control_before_update
DROP TRIGGER IF EXISTS `stock_control_before_update`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `stock_control_before_update` BEFORE UPDATE ON `stock_control` FOR EACH ROW BEGIN
	IF ISNULL(NEW.entry_date) THEN
		SET NEW.entry_date = CURRENT_DATE();
	END IF;
	SET NEW.stock = NEW.entries - NEW.outputs;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- Volcando estructura para disparador y_code.stock_outings_before_insert
DROP TRIGGER IF EXISTS `stock_outings_before_insert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';
DELIMITER //
CREATE TRIGGER `stock_outings_before_insert` BEFORE INSERT ON `stock_outings` FOR EACH ROW BEGIN
	DECLARE VUnitCost, VFreight, VVat, BVat DECIMAL(32,4) DEFAULT 0;
	IF ISNULL(NEW.departure_date) THEN 
		SET NEW.departure_date = CURDATE();
	END IF;

	IF NEW.outputs > 0 THEN
		 SET NEW.notes = 'Ventas';
		 SELECT sc.unit_cost, sc.freight, tr.decimal_rate, tb.decimal_rate
		 INTO VUnitCost, VFreight, VVat, BVat
		 FROM stock_control AS sc 
		 LEFT JOIN tax_rates AS tr ON sc.tax_sale_id = tr.id
		 LEFT JOIN tax_rates AS tb ON sc.tax_bill_id = tb.id
		 WHERE sc.id = NEW.stock_id LIMIT 1;

		 SET NEW.profits	= ROUND(((NEW.sale_price / VVat) - (VUnitCost / BVat)),4);
		 SET NEW.profits	= NEW.profits * NEW.outputs;
	ELSE 
		SET NEW.notes = 'Devoluciones';	
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
