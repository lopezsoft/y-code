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
