ALTER TABLE `stock_outings`
	CHANGE COLUMN `sale_id` `sale_detail_id` BIGINT(20) NOT NULL AFTER `stock_id`,
	DROP INDEX `sale_id`,
	DROP FOREIGN KEY `FK_stock_outings_sales_master`;

ALTER TABLE `stock_outings`
	ADD INDEX `sale_detail_id` (`sale_detail_id`),
	ADD CONSTRAINT `FK_stock_outings_sales_master` FOREIGN KEY (`sale_detail_id`) REFERENCES `sales_master` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT;
