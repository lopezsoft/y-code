/* Viernes 28 de agosto*/

TRUNCATE `warehouse`;
ALTER TABLE `warehouse`
	DROP INDEX `department_id`,
	DROP FOREIGN KEY `FK_warehouse_company_departments`;


ALTER TABLE `warehouse`
	CHANGE COLUMN `department_id` `branch_id` INT(11) NOT NULL AFTER `id`,
	ADD INDEX `branch_id` (`branch_id`);


ALTER TABLE `warehouse`
	CHANGE COLUMN `branch_id` `branch_id` SMALLINT NOT NULL AFTER `id`,
	ADD CONSTRAINT `FK_warehouse_branch_offices` FOREIGN KEY (`branch_id`) REFERENCES `branch_offices` (`id`) ON UPDATE CASCADE;

CREATE TABLE `wineries_departments` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`department_id` INT(11) NOT NULL,
	`wineries_id` INT(11) NOT NULL,
	`state` SMALLINT(1) NOT NULL DEFAULT '1',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `department_id` (`department_id`) USING BTREE,
	INDEX `wineries_id` (`wineries_id`) USING BTREE,
	CONSTRAINT `FK_wineries_departments_company_departments` FOREIGN KEY (`department_id`) REFERENCES `y_code`.`company_departments` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT,
	CONSTRAINT `FK_wineries_departments_warehouse` FOREIGN KEY (`wineries_id`) REFERENCES `y_code`.`warehouse` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT
)
COMMENT='Departamentos asignados a bodegas'
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
;



/********************************* 19-09-2020 ***************************/

ALTER TABLE `categories`
	ADD COLUMN `imagen` VARCHAR(120) NULL DEFAULT NULL AFTER `is_subcategory`;

ALTER TABLE `attributes`
	CHANGE COLUMN `status` `state` SMALLINT(1) NOT NULL DEFAULT '1' AFTER `attribute_name`;


/************************* 22-29-2020 ***********************************/

ALTER TABLE `product_class`
	ADD COLUMN `active` TINYINT(1) NOT NULL DEFAULT 1 AFTER `product_class_name`;


ALTER TABLE `products`
	CHANGE COLUMN `product_description` `description_sales` VARCHAR(250) NULL DEFAULT NULL COLLATE 'utf8_general_ci' AFTER `product_name`,
	ADD COLUMN `shopping_description` VARCHAR(250) NULL DEFAULT NULL AFTER `description_sales`,
	DROP INDEX `product_description`,
	ADD INDEX `product_description` (`description_sales`) USING BTREE;


ALTER TABLE `products`
	DROP COLUMN `item_type_id`,
	DROP INDEX `item_type_id`;

ALTER TABLE `products`
	ADD CONSTRAINT `FK_products_product_class` FOREIGN KEY (`class_id`) REFERENCES `product_class` (`id`) ON UPDATE CASCADE;
