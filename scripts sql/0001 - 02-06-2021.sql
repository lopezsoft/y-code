CREATE TABLE `resolution_sale` (
	`id` BIGINT NOT NULL AUTO_INCREMENT,
	`resolution_id` BIGINT NOT NULL,
	`sale_id` BIGINT NOT NULL,
	INDEX `resolution_id` (`resolution_id`),
	INDEX `sale_id` (`sale_id`),
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_unicode_ci'
;

ALTER TABLE `resolution_sale`
	ADD CONSTRAINT `FK_resolution_sale_resolutions` FOREIGN KEY (`resolution_id`) REFERENCES `resolutions` (`id`) ON UPDATE CASCADE ON DELETE RESTRICT,
	ADD CONSTRAINT `FK_resolution_sale_sales_master` FOREIGN KEY (`sale_id`) REFERENCES `sales_master` (`id`) ON UPDATE CASCADE ON DELETE CASCADE;
