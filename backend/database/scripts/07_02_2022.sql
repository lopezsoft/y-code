ALTER TABLE `stock_outings`
	DROP FOREIGN KEY `FK_stock_outings_sales_master`;
ALTER TABLE `stock_outings`
	ADD CONSTRAINT `FK_stock_outings_sales_detail` FOREIGN KEY (`sale_detail_id`) REFERENCES `sales_detail` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT;


-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.3.23-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6399
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para procedimiento y_code.sp_kardex_invoice
DROP PROCEDURE IF EXISTS `sp_kardex_invoice`;
DELIMITER //
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
	CLOSE cur;
END//
DELIMITER ;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
