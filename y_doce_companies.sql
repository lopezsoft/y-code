-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.3.23-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.0.0.6062
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para y_doce_companies
CREATE DATABASE IF NOT EXISTS `y_doce_companies` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `y_doce_companies`;

-- Volcando estructura para tabla y_doce_companies.business_users
CREATE TABLE IF NOT EXISTS `business_users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `company_id` bigint(20) NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `FK_aux_users_companies_companies` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `FK_aux_users_companies_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla auxiliar para relacionar usuarios con empresas';

-- Volcando datos para la tabla y_doce_companies.business_users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `business_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `business_users` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.companies
CREATE TABLE IF NOT EXISTS `companies` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `country_id` int(11) NOT NULL COMMENT 'Pais al que pertence',
  `company_name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Nombre de la empresa',
  `dni` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Numero de identificacion',
  `database_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Nombre de la base de datos',
  `folder_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Nombre del directorio donde se guardaran los archivos de cada empresa',
  `lockdate` date DEFAULT NULL COMMENT 'Fecha de bloque del sistema o vencimiento de menbresia',
  `active` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  KEY `country_id` (`country_id`),
  FULLTEXT KEY `company_name` (`company_name`),
  CONSTRAINT `FK_companies_countries` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla y_doce_companies.companies: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.countries
CREATE TABLE IF NOT EXISTS `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ContinentA2` varchar(2) NOT NULL DEFAULT '',
  `abbreviation_A2` varchar(6) NOT NULL,
  `abbreviation_A3` varchar(6) NOT NULL DEFAULT '',
  `FIPS` varchar(4) NOT NULL DEFAULT '',
  `NUTS` varchar(2) NOT NULL DEFAULT '',
  `HASC` varchar(2) NOT NULL DEFAULT '',
  `country_name` varchar(150) NOT NULL,
  `language` varchar(3) NOT NULL DEFAULT '',
  `LanguagePC` varchar(10) NOT NULL DEFAULT '',
  `phone_code` varchar(6) NOT NULL DEFAULT '',
  `TLD` varchar(6) NOT NULL DEFAULT '',
  `Latitude` int(11) NOT NULL DEFAULT 0,
  `Longitude` int(11) NOT NULL DEFAULT 0,
  `Altitude` int(11) NOT NULL DEFAULT 0,
  `TerritoryOf` varchar(3) NOT NULL DEFAULT '',
  `image` varchar(120) NOT NULL DEFAULT '',
  `active` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `abbreviation_A2` (`abbreviation_A2`) USING BTREE,
  UNIQUE KEY `phone_code` (`phone_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1255 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla y_doce_companies.countries: ~250 rows (aproximadamente)
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` (`id`, `ContinentA2`, `abbreviation_A2`, `abbreviation_A3`, `FIPS`, `NUTS`, `HASC`, `country_name`, `language`, `LanguagePC`, `phone_code`, `TLD`, `Latitude`, `Longitude`, `Altitude`, `TerritoryOf`, `image`, `active`) VALUES
	(1, '', 'AIA', '', '', '', '', 'Anguila', '', '', '1 264', '', 0, 0, 0, '0', 'anguila.png', 0),
	(2, '', 'ATG', '', '', '', '', 'Antigua y Barbuda', '', '', '1 268', '', 0, 0, 0, '0', 'antigua y barbuda.png', 0),
	(3, '', 'BHS', '', '', '', '', 'Bahamas', '', '', '1 242', '', 0, 0, 0, '0', 'bahamas.png', 0),
	(4, '', 'BRB', '', '', '', '', 'Barbados', '', '', '1 246', '', 0, 0, 0, '0', 'barbados.png', 0),
	(5, 'AS', 'BD', 'BGD', 'BG00', '', 'BD', 'Bangladesh', 'BN', 'EN', '880', '.bd', 24309, 90058, 85, '', '', 0),
	(6, '', 'DMA', '', '', '', '', 'Dominica', '', '', '1 767', '', 0, 0, 0, '0', 'dominica.png', 0),
	(7, '', 'SVK', '', '', '', '', 'Eslovaquia', '', '', '421', '', 0, 0, 0, '0', 'eslovaquia.png', 0),
	(8, '', 'GRD', '', '', '', '', 'Granada', '', '', '1 473', '', 0, 0, 0, '0', 'granada.png', 0),
	(9, '', 'BMU', '', '', '', '', 'Islas Bermudas', '', '', '1 441', '', 0, 0, 0, '0', 'islas bermudas.png', 0),
	(10, '', 'CYM', '', '', '', '', 'Islas Caimán', '', '', '1 345', '', 0, 0, 0, '0', 'islas caiman.png', 0),
	(11, '', 'MNP', '', '', '', '', 'Islas Marianas del Norte', '', '', '1 670', '', 0, 0, 0, '0', 'islas marianas del norte.png', 0),
	(12, '', 'PCN', '', '', '', '', 'Islas Pitcairn', '', '', '870', '', 0, 0, 0, '0', 'islas pitcairn.png', 0),
	(13, '', 'TCA', '', '', '', '', 'Islas Turcas y Caicos', '', '', '1 649', '', 0, 0, 0, '0', 'islas turcas y caicos.png', 0),
	(14, '', 'VIR', '', '', '', '', 'Islas Vírgenes de los Estados Unidos', '', '', '1 340', '', 0, 0, 0, '0', 'islas virgenes de los estados unidos.png', 0),
	(15, '', 'JAM', '', '', '', '', 'Jamaica', '', '', '1 876', '', 0, 0, 0, '0', 'jamaica.png', 0),
	(16, '', 'KGZ', '', '', '', '', 'Kirgizstán', '', '', '996', '', 0, 0, 0, '0', 'kirgizstan.png', 0),
	(17, '', 'LIE', '', '', '', '', 'Liechtenstein', '', '', '423', '', 0, 0, 0, '0', 'liechtenstein.png', 0),
	(18, '', 'MCO', '', '', '', '', 'Mónaco', '', '', '377', '', 0, 0, 0, '0', 'monaco.png', 0),
	(19, '', 'MNE', '', '', '', '', 'Montenegro', '', '', '382', '', 0, 0, 0, '0', 'montenegro.png', 0),
	(20, '', 'MSR', '', '', '', '', 'Montserrat', '', '', '1 664', '', 0, 0, 0, '0', 'montserrat.png', 0),
	(21, '', 'CZE', '', '', '', '', 'República Checa', '', '', '420', '', 0, 0, 0, '0', 'republica checa.png', 0),
	(22, '', 'DOM', '', '', '', '', 'República Dominicana', '', '', '1 809', '', 0, 0, 0, '0', 'republica dominicana.png', 0),
	(23, '', 'ASM', '', '', '', '', 'Samoa Americana', '', '', '1 684', '', 0, 0, 0, '0', 'samoa americana.png', 0),
	(24, '', 'KNA', '', '', '', '', 'San Cristóbal y Nieves', '', '', '1 869', '', 0, 0, 0, '0', 'san cristobal y nieves.png', 0),
	(25, '', 'MAF', '', '', '', '', 'San Martín (Francia)', '', '', '1 599', '', 0, 0, 0, '0', 'san martin (francia).png', 0),
	(26, '', 'VCT', '', '', '', '', 'San Vicente y las Granadinas', '', '', '1 784', '', 0, 0, 0, '0', 'san vicente y las granadinas.png', 0),
	(27, '', 'LCA', '', '', '', '', 'Santa Lucía', '', '', '1 758', '', 0, 0, 0, '0', 'santa lucia.png', 0),
	(28, '', 'TJK', '', '', '', '', 'Tadjikistán', '', '', '992', '', 0, 0, 0, '0', 'tadjikistan.png', 0),
	(29, '', 'TTO', '', '', '', '', 'Trinidad y Tobago', '', '', '1 868', '', 0, 0, 0, '0', 'trinidad y tobago.png', 0),
	(30, '', 'UZB', '', '', '', '', 'Uzbekistán', '', '', '998', '', 0, 0, 0, '0', 'uzbekistan.png', 0),
	(31, 'AS', 'AF', 'AFG', 'AF00', '', 'AF', 'Afghanistan', 'FA', 'EN', '93', '.af', 33833, 66025, 1884, '', '', 0),
	(32, 'EU', 'AX', 'ALA', '-', '', 'AX', 'Åland Islands', 'SV', 'EN,SV', '+358-1', '.ax', 60202, 19965, 4, 'FI', '', 0),
	(33, 'EU', 'AL', 'ALB', 'AL00', '', 'AL', 'Albania', 'SQ', 'SQ', '355', '.al', 41111, 20027, 708, '', '', 0),
	(34, 'AF', 'DZ', 'DZA', 'AG00', '', 'DZ', 'Algeria', 'AR', 'FR', '213', '.dz', 28214, 2655, 800, '', '', 0),
	(35, 'OC', 'AS', 'ASM', 'AQ00', '', 'AS', 'American Samoa', 'EN', 'EN', '684', '.as', -14330, -170750, 193, 'US', '', 0),
	(36, 'EU', 'AD', 'AND', 'AN00', '', 'AD', 'Andorra', 'CA', 'CA', '376', '.ad', 42551, 1576, 1996, '', '', 0),
	(37, 'AF', 'AO', 'AGO', 'AO00', '', 'AO', 'Angola', 'PT', 'PT', '244', '.ao', -12333, 17539, 1112, '', '', 0),
	(38, 'NA', 'AG', 'ATG', 'AC00', '', 'AG', 'Antigua and Barbuda', 'EN', 'EN', '1268', '.ag', 17146, -61821, 62, '', '', 0),
	(39, 'SA', 'AR', 'ARG', 'AR00', '', 'AR', 'Argentina', 'ES', 'ES', '54', '.ar', -35630, -65159, 595, '', 'argentina.png', 1),
	(40, 'AS', 'AM', 'ARM', 'AM00', '', 'AM', 'Armenia', 'HY', 'EN,HY', '374', '.am', 40292, 44937, 1792, '', '', 0),
	(41, 'NA', 'AW', 'ABW', 'AA00', '', 'AW', 'Aruba', 'NL', 'NL', '297', '.aw', 12498, -69937, 65, 'NL', '', 0),
	(42, 'EU', 'AT', 'AUT', 'AU00', 'AT', 'AT', 'Austria', 'DE', 'DE', '43', '.at', 47589, 14140, 910, '', '', 0),
	(43, 'AS', 'AZ', 'AZE', 'AJ00', '', 'AZ', 'Azerbaijan', 'AZ', 'EN,AZ', '994', '.az', 40356, 47869, 384, '', '', 0),
	(44, 'AS', 'BH', 'BHR', 'BA00', '', 'BH', 'Bahrain', 'AR', 'EN', '973', '.bh', 26094, 50543, 24, '', '', 0),
	(45, 'SA', 'CO', 'COL', 'CO00', '', 'CO', 'Colombia', 'ES', 'ES', '57', '.co', 3998, -73278, 593, '', 'colombia.png', 1),
	(46, 'NA', 'BB', 'BRB', 'BB00', '', 'BB', 'Barbados', 'EN', 'EN', '246', '.bb', 13178, -59549, 67, '', '', 0),
	(47, 'EU', 'BY', 'BLR', 'BO00', '', 'BY', 'Belarus', 'BE', 'EN,RU', '375', '.by', 53543, 28055, 160, '', '', 0),
	(48, 'EU', 'BE', 'BEL', 'BE00', 'BE', 'BE', 'Belgium', 'FR', 'FR,NL', '32', '.be', 50649, 4642, 181, '', '', 0),
	(49, 'SA', 'BZ', 'BLZ', 'BH00', '', 'BZ', 'Belize', 'EN', 'EN', '501', '.bz', 17330, -88630, 173, '', '', 0),
	(50, 'AF', 'BJ', 'BEN', 'BN00', '', 'BJ', 'Benin', 'FR', 'FR', '229', '.bj', 9624, 2338, 273, '', '', 0),
	(51, 'NA', 'BM', 'BMU', 'BD00', '', 'BM', 'Bermuda', 'EN', 'EN', '441', '.bm', 32303, -64752, 15, 'GB', '', 0),
	(52, 'AS', 'BT', 'BTN', 'BT00', '', 'BT', 'Bhutan', 'DZ', 'EN', '975', '.bt', 27417, 90435, 2220, '', '', 0),
	(53, 'SA', 'BO', 'BOL', 'BL00', '', 'BO', 'Bolivia', 'ES', 'ES', '591', '.bo', -16712, -64666, 1192, '', 'bolivia.png', 1),
	(54, 'EU', 'BA', 'BIH', 'BK00', '', 'BA', 'Bosnia and Herzegovina', 'BS', 'BS', '387', '.ba', 44169, 17783, 500, '', '', 0),
	(55, 'AF', 'BW', 'BWA', 'BC00', '', 'BW', 'Botswana', 'EN', 'EN', '267', '.bw', -22189, 23814, 1013, '', '', 0),
	(56, 'SA', 'BR', 'BRA', 'BR00', '', 'BR', 'Brazil', 'PT', 'PT', '55', '.br', -10808, -52975, 320, '', '', 0),
	(57, 'EU', 'IO', 'IOT', 'IO00', '', 'IO', 'British Indian Ocean Territory', 'EN', 'EN', '284', '.io', -6108, 71889, 3, 'GB', '', 0),
	(58, 'NA', 'VG', 'VGB', 'VI00', '', 'VG', 'British Virgin Islands', 'EN', 'EN', '1340', '.vg', 18492, -64551, 104, 'GB', '', 0),
	(59, 'AS', 'BN', 'BRN', 'BX00', '', 'BN', 'Brunei Darussalam', 'MS', 'EN', '673', '.bn', 4570, 114748, 36, '', '', 0),
	(60, 'EU', 'BG', 'BGR', 'BU00', 'BG', 'BG', 'Bulgaria', 'BG', 'EN,BG', '359', '.bg', 42767, 25282, 472, '', '', 0),
	(61, 'AF', 'BF', 'BFA', 'UV00', '', 'BF', 'Burkina Faso', 'FR', 'FR', '226', '.bf', 12285, -1746, 297, '', '', 0),
	(62, 'AF', 'BI', 'BDI', 'BY00', '', 'BI', 'Burundi', 'FR', 'FR', '257', '.bi', -3365, 29887, 1504, '', '', 0),
	(63, 'AS', 'KH', 'KHM', 'CB00', '', 'KH', 'Cambodia', 'KM', 'EN', '855', '.kh', 12570, 104814, 126, '', '', 0),
	(64, 'AF', 'CM', 'CMR', 'CM00', '', 'CM', 'Cameroon', 'FR', 'FR', '237', '.cm', 5685, 12723, 667, '', '', 0),
	(65, 'AF', 'CV', 'CPV', 'CV00', '', 'CV', 'Cape Verde', 'PT', 'PT', '238', '.cv', 16315, -24035, 565, '', '', 0),
	(66, 'NA', 'KY', 'CYM', 'CJ00', '', 'KY', 'Cayman Islands', 'EN', 'EN', '345', '.ky', 19511, -80605, 9, 'GB', '', 0),
	(67, 'AF', 'CF', 'CAF', 'CT00', '', 'CF', 'Central African Republic', 'FR', 'FR', '236', '.cf', 6574, 20487, 635, '', '', 0),
	(68, 'AF', 'TD', 'TCD', 'CD00', '', 'TD', 'Chad', 'FR', 'FR', '235', '.td', 15943, 18943, 543, '', '', 0),
	(69, 'SA', 'CL', 'CHL', 'CI00', '', 'CL', 'Chile', 'ES', 'ES', '56', '.cl', -39117, -72441, 1871, '', 'chile.png', 1),
	(70, 'AS', 'CN', 'CHN', 'CH00', '', 'CN', 'China', 'ZH', 'EN,ZH', '86', '.cn', 36554, 104056, 1840, '', '', 0),
	(71, 'AS', 'CC', 'CCK', 'CK00', '', 'CC', 'Cocos (Keeling) Islands', 'MS', 'EN,MS', '61', '.cc', -12043, 96893, 1, 'AU', '', 0),
	(72, 'AF', 'CG', 'COG', 'CF00', '', 'CG', 'Congo (Brazzaville)', 'FR', 'FR', '242', '.cg', -641, 15638, 320, '', '', 0),
	(73, 'AF', 'CD', 'COD', 'CG00', '', 'CD', 'Congo DR', 'FR', 'FR', '243', '.cd', -2880, 23656, 726, '', '', 0),
	(74, 'OC', 'CK', 'COK', 'CW00', '', 'CK', 'Cook Islands', 'EN', 'EN', '682', '.ck', -21234, -159778, 130, 'NZ', '', 0),
	(75, 'SA', 'CR', 'CRI', 'CS00', '', 'CR', 'Costa Rica', 'ES', 'ES', '506', '.cr', 10000, -83881, 746, '', 'costa rica.png', 1),
	(76, 'AF', 'CI', 'CIV', 'IV00', '', 'CI', 'Côte D\'Ivoire', 'FR', 'FR', '225', '.ci', 7599, -5553, 237, '', '', 0),
	(77, 'EU', 'HR', 'HRV', 'HR00', 'HR', 'HR', 'Croatia', 'HR', 'HR', '385', '.hr', 45743, 17099, 331, '', '', 0),
	(78, 'NA', 'CU', 'CUB', 'CU00', '', 'CU', 'Cuba', 'ES', 'ES', '53', '.cu', 22103, -79014, 108, '', 'cuba.png', 1),
	(79, 'NA', 'CW', 'CUW', 'UC00', '', 'CW', 'Curaçao', 'NL', 'NL', '599-9', '.cw', 12145, -68919, 75, 'NL', '', 0),
	(80, 'AS', 'CY', 'CYP', 'CY00', 'CY', 'CY', 'Cyprus', 'EL', 'EN,EL', '357', '.cy', 35051, 33295, 91, '', '', 0),
	(81, 'EU', 'DK', 'DNK', 'DA00', '', 'DK', 'Denmark', 'DA', 'DA', '45', '.dk', 56102, 9556, 34, '', '', 0),
	(82, 'AF', 'DJ', 'DJI', 'DJ00', '', 'DJ', 'Djibouti', 'FR', 'FR', '253', '.dj', 11743, 42632, 430, '', '', 0),
	(83, 'NA', 'DM', 'DMA', 'DO00', '', 'DM', 'Dominica', 'EN', 'EN', '767', '.dm', 15399, -61339, 289, '', '', 0),
	(84, 'SA', 'EC', 'ECU', 'EC00', '', 'EC', 'Ecuador', 'ES', 'ES', '593', '.ec', -1422, -78871, 1117, '', 'ecuador.png', 1),
	(85, 'AF', 'EG', 'EGY', 'EG00', '', 'EG', 'Egypt', 'AR', 'EN', '20', '.eg', 26747, 29869, 321, '', '', 0),
	(86, 'SA', 'SV', 'SLV', 'ES00', '', 'SV', 'El Salvador', 'ES', 'ES', '503', '.sv', 13669, -88866, 442, '', 'el salvador.png', 1),
	(87, 'AF', 'GQ', 'GNQ', 'EK00', '', 'GQ', 'Equatorial Guinea', 'ES', 'ES', '240', '.gq', 1533, 10373, 577, '', 'equatorial guinea.png', 1),
	(88, 'AF', 'ER', 'ERI', 'ER00', '', 'ER', 'Eritrea', 'AA', 'EN', '291', '.er', 15638, 38851, 853, '', '', 0),
	(89, 'EU', 'EE', 'EST', 'EN00', 'EE', 'EE', 'Estonia', 'ET', 'ET', '372', '.ee', 58694, 25253, 61, '', '', 0),
	(90, 'AF', 'ET', 'ETH', 'ET00', '', 'ET', 'Ethiopia', 'AM', 'EN', '251', '.et', 8622, 39635, 1330, '', '', 0),
	(91, 'SA', 'FK', 'FLK', 'FK00', '', 'FK', 'Falkland Islands', 'EN', 'EN', '500', '.fk', -51773, -59728, 141, 'GB', '', 0),
	(92, 'EU', 'FO', 'FRO', 'FO00', '', 'FO', 'Faroe Islands', 'FO', 'FO', '298', '.fo', 61954, -6857, 176, 'DK', '', 0),
	(93, 'OC', 'FJ', 'FJI', 'FJ00', '', 'FJ', 'Fiji', 'EN', 'EN', '679', '.fj', -16514, 179454, 264, '', '', 0),
	(94, 'EU', 'FI', 'FIN', 'FI00', 'FI', 'FI', 'Finland', 'FI', 'FI,SV', '358', '.fi', 64290, 25992, 164, '', '', 0),
	(95, 'EU', 'FR', 'FRA', 'FR00', 'FR', 'FR', 'France', 'FR', 'FR', '33', '.fr', 46642, 2338, 375, '', '', 0),
	(96, 'SA', 'GF', 'GUF', 'FG00', '', 'GF', 'French Guiana', 'FR', 'FR', '594', '.gf', 4118, -53134, 168, 'FR', '', 0),
	(97, 'OC', 'PF', 'PYF', 'FP00', '', 'PF', 'French Polynesia', 'FR', 'FR', '689', '.pf', -18280, -142223, 448, 'FR', '', 0),
	(98, 'AF', 'GA', 'GAB', 'GB00', '', 'GA', 'Gabon', 'FR', 'FR', '241', '.ga', -635, 11739, 377, '', '', 0),
	(99, 'AF', 'GM', 'GMB', 'GA00', '', 'GM', 'Gambia', 'EN', 'EN', '220', '.gm', 13440, -15491, 34, '', '', 0),
	(100, 'EU', 'DE', 'DEU', 'GM00', 'DE', 'DE', 'Germany', 'DE', 'DE', '49', '.de', 51202, 10382, 263, '', '', 0),
	(101, 'AF', 'GH', 'GHA', 'GH00', '', 'GH', 'Ghana', 'EN', 'EN', '233', '.gh', 7921, -1204, 190, '', '', 0),
	(102, 'EU', 'GI', 'GIB', 'GI00', '', 'GI', 'Gibraltar', 'EN', 'EN', '350', '.gi', 36136, -5349, 43, 'GB', '', 0),
	(103, 'EU', 'GR', 'GRC', 'GR00', 'EL', 'GR', 'Greece', 'EL', 'EN,EL', '30', '.gr', 38301, 23741, 498, '', '', 0),
	(104, 'NA', 'GL', 'GRL', 'GL00', '', 'GL', 'Greenland', 'KL', 'DA', '299', '.gl', 74350, -41090, 1792, 'DK', '', 0),
	(105, 'NA', 'GD', 'GRD', 'GJ00', '', 'GD', 'Grenada', 'EN', 'EN', '473', '.gd', 12196, -61640, 132, '', '', 0),
	(106, 'OC', 'GU', 'GUM', 'GQ00', '', 'GU', 'Guam', 'EN', 'EN', '671', '.gu', 13124, 144694, 41, 'US', '', 0),
	(107, 'SA', 'GT', 'GTM', 'GT00', '', 'GT', 'Guatemala', 'ES', 'ES', '502', '.gt', 15478, -90156, 759, '', 'guatemala.png', 1),
	(108, 'EU', 'GG', 'GGY', 'GK00', '', 'GG', 'Guernsey', 'EN', 'EN', '+44-14', '.gg', 49528, -2406, 22, 'GB', '', 0),
	(109, 'AF', 'GN', 'GIN', 'GV00', '', 'GN', 'Guinea', 'FR', 'FR', '224', '.gn', 10967, -10922, 472, '', '', 0),
	(110, 'AF', 'GW', 'GNB', 'PU00', '', 'GW', 'Guinea-Bissau', 'PT', 'PT', '245', '.gw', 11904, -15163, 70, '', '', 0),
	(111, 'SA', 'GY', 'GUY', 'GY00', '', 'GY', 'Guyana', 'EN', 'EN', '592', '.gy', 5097, -59048, 207, '', '', 0),
	(112, 'NA', 'HT', 'HTI', 'HA00', '', 'HT', 'Haiti', 'HT', 'FR', '509', '.ht', 19090, -72438, 470, '', '', 0),
	(113, 'SA', 'HN', 'HND', 'HO00', '', 'HN', 'Honduras', 'ES', 'ES', '504', '.hn', 14974, -86267, 684, '', 'honduras.png', 1),
	(114, 'AS', 'HK', 'HKG', 'HK00', '', 'HK', 'Hong Kong', 'ZH', 'EN', '852', '.hk', 22336, 114187, 191, 'CN', '', 0),
	(115, 'EU', 'HU', 'HUN', 'HU00', 'HU', 'HU', 'Hungary', 'HU', 'HU', '36', '.hu', 47166, 19418, 143, '', '', 0),
	(116, 'EU', 'IS', 'ISL', 'IC00', 'IS', 'IS', 'Iceland', 'IS', 'IS', '354', '.is', 64929, -18962, 557, '', '', 0),
	(117, 'AS', 'IN', 'IND', 'IN00', '', 'IN', 'India', 'TA', 'EN', '91', '.in', 22671, 79144, 160, '', '', 0),
	(118, 'AS', 'ID', 'IDN', 'ID00', '', 'ID', 'Indonesia', 'ID', 'EN', '62', '.id', -2956, 119521, 367, '', '', 0),
	(119, 'AS', 'IR', 'IRN', 'IR00', '', 'IR', 'Iran', 'FA', 'EN', '98', '.ir', 32496, 54295, 1305, '', '', 0),
	(120, 'AS', 'IQ', 'IRQ', 'IZ00', '', 'IQ', 'Iraq', 'AR', 'EN,AR', '964', '.iq', 33045, 43797, 312, '', '', 0),
	(121, 'EU', 'IE', 'IRL', 'EI00', 'IE', 'IE', 'Ireland', 'EN', 'EN', '353', '.ie', 53183, -8199, 118, '', '', 0),
	(122, 'EU', 'IM', 'IMN', 'IM00', '', 'IM', 'Isle of Man', 'EN', 'EN', '+44-16', '.im', 54225, -4562, 89, 'GB', '', 0),
	(123, 'AS', 'IL', 'ISR', 'IS00', '', 'IL', 'Israel', 'HE', 'EN,HE', '972', '.il', 31608, 34818, 508, '', '', 0),
	(124, 'EU', 'IT', 'ITA', 'IT00', 'IT', 'IT', 'Italy', 'IT', 'IT', '39', '.it', 42768, 12492, 538, '', '', 0),
	(125, 'AS', 'JP', 'JPN', 'JA00', '', 'JP', 'Japan', 'JA', 'EN,JA,AI', '81', '.jp', 35156, 136060, 438, '', '', 0),
	(126, 'EU', 'JE', 'JEY', 'JE00', '', 'JE', 'Jersey', 'EN', 'EN', '+44-15', '.je', 49229, -2123, 28, 'GB', '', 0),
	(127, 'AS', 'JO', 'JOR', 'JO00', '', 'JO', 'Jordan', 'AR', 'EN', '962', '.jo', 31212, 36385, 812, '', '', 0),
	(128, 'AF', 'KE', 'KEN', 'KE00', '', 'KE', 'Kenya', 'SW', 'EN', '254', '.ke', 511, 37878, 762, '', '', 0),
	(129, 'OC', 'KI', 'KIR', 'KR00', '', 'KI', 'Kiribati', 'EN', 'EN', '686', '.ki', -539, 174228, 16, '', '', 0),
	(130, 'AS', 'KW', 'KWT', 'KU00', '', 'KW', 'Kuwait', 'AR', 'EN,AR', '965', '.kw', 29427, 47452, 108, '', '', 0),
	(131, 'AS', 'LA', 'LAO', 'LA00', '', 'LA', 'Laos', 'LO', 'EN', '856', '.la', 19074, 103361, 710, '', '', 0),
	(132, 'EU', 'LV', 'LVA', 'LG00', 'LV', 'LV', 'Latvia', 'LV', 'LV', '371', '.lv', 56869, 24841, 87, '', '', 0),
	(133, 'AS', 'LB', 'LBN', 'LE00', '', 'LB', 'Lebanon', 'AR', 'EN,AR', '961', '.lb', 33946, 35809, 1250, '', '', 0),
	(134, 'AF', 'LS', 'LSO', 'LT00', '', 'LS', 'Lesotho', 'EN', 'EN', '266', '.ls', -29580, 28254, 2161, '', '', 0),
	(135, 'AF', 'LR', 'LBR', 'LI00', '', 'LR', 'Liberia', 'EN', 'EN', '231', '.lr', 6412, -9323, 243, '', '', 0),
	(136, 'AF', 'LY', 'LBY', 'LY00', '', 'LY', 'Libya', 'AR', 'EN', '218', '.ly', 27236, 18044, 423, '', '', 0),
	(137, 'EU', 'LT', 'LTU', 'LH00', 'LT', 'LT', 'Lithuania', 'LT', 'LT', '370', '.lt', 55338, 23874, 110, '', '', 0),
	(138, 'EU', 'LU', 'LUX', 'LU00', 'LU', 'LU', 'Luxembourg', 'FR', 'FR', '352', '.lu', 49778, 6095, 325, '', '', 0),
	(139, 'AS', 'MO', 'MAC', 'MC00', '', 'MO', 'Macau', 'ZH', 'EN', '853', '.mo', 22128, 113576, 34, 'CN', '', 0),
	(140, 'EU', 'MK', 'MKD', 'MK00', 'MK', 'MK', 'Macedonia', 'MK', 'EN,MK', '389', '.mk', 41603, 21715, 741, '', '', 0),
	(141, 'AF', 'MG', 'MDG', 'MA00', '', 'MG', 'Madagascar', 'FR', 'FR', '261', '.mg', -19272, 46698, 615, '', '', 0),
	(142, 'AF', 'MW', 'MWI', 'MI00', '', 'MW', 'Malawi', 'NY', 'EN', '265', '.mw', -13350, 33754, 779, '', '', 0),
	(143, 'AS', 'MY', 'MYS', 'MY00', '', 'MY', 'Malaysia', 'MS', 'EN', '60', '.my', 4404, 102235, 419, '', '', 0),
	(144, 'AS', 'MV', 'MDV', 'MV00', '', 'MV', 'Maldives', 'DI', 'EN', '960', '.mv', 3092, 73056, 1, '', '', 0),
	(145, 'AF', 'ML', 'MLI', 'ML00', '', 'ML', 'Mali', 'FR', 'FR', '223', '.ml', 17358, -3526, 343, '', '', 0),
	(146, 'EU', 'MT', 'MLT', 'MT00', 'MT', 'MT', 'Malta', 'MT', 'EN,MT', '356', '.mt', 35933, 14381, 50, '', '', 0),
	(147, 'OC', 'MH', 'MHL', 'RM00', '', 'MH', 'Marshall Islands', 'MH', 'EN,MH', '692', '.mh', 10786, 169134, 2, 'US', '', 0),
	(148, 'NA', 'MQ', 'MTQ', 'MB00', '', 'MQ', 'Martinique', 'FR', 'FR', '596', '.mq', 14643, -60978, 123, 'FR', '', 0),
	(149, 'AF', 'MR', 'MRT', 'MR00', '', 'MR', 'Mauritania', 'AR', 'EN', '222', '.mr', 20259, -10364, 276, '', '', 0),
	(150, 'AF', 'MU', 'MUS', 'MP00', '', 'MU', 'Mauritius', 'EN', 'EN', '230', '.mu', -20220, 57589, 165, '', '', 0),
	(151, 'AF', 'YT', 'MYT', 'MF00', '', 'YT', 'Mayotte', 'FR', 'FR', '269', '.yt', -12796, 45142, 132, 'FR', '', 0),
	(152, 'NA', 'MX', 'MEX', 'MX00', '', 'MX', 'Mexico', 'ES', 'ES', '52', '.mx', 23909, -102634, 1111, '', 'mexico.png', 1),
	(153, 'AS', 'FM', 'FSM', 'FM00', '', 'FM', 'Micronesia', 'EN', 'EN', '691', '.fm', 5865, 151521, 21, 'US', '', 0),
	(154, 'EU', 'MD', 'MDA', 'MD00', '', 'MD', 'Moldova', 'RO', 'RO', '373', '.md', 47203, 28473, 139, '', '', 0),
	(155, 'EU', 'MC', 'MCO', 'MN00', '', 'MC', 'Monaco', 'FR', 'FR', '337', '.mc', 43740, 7427, 32, '', '', 0),
	(156, 'AS', 'MN', 'MNG', 'MG00', '', 'MN', 'Mongolia', 'MN', 'EN,MN', '976', '.mn', 46836, 103067, 1528, '', '', 0),
	(157, 'AF', 'MZ', 'MOZ', 'MZ00', '', 'MZ', 'Mozambique', 'PT', 'PT', '258', '.mz', -17906, 35347, 345, '', '', 0),
	(158, 'AS', 'MM', 'MMR', 'BM00', '', 'MM', 'Myanmar', 'MY', 'EN', '95', '.mm', 21406, 96108, 826, '', '', 0),
	(159, 'AF', 'NA', 'NAM', 'WA00', '', 'NA', 'Namibia', 'EN', 'EN', '264', '.na', -22149, 17180, 1141, '', '', 0),
	(160, 'OC', 'NR', 'NRU', 'NR00', '', 'NR', 'Nauru', 'NA', 'EN', '674', '.nr', -528, 166933, 14, '', '', 0),
	(161, 'AS', 'NP', 'NPL', 'NP00', '', 'NP', 'Nepal', 'NE', 'EN', '977', '.np', 28264, 83931, 2565, '', '', 0),
	(162, 'EU', 'NL', 'NLD', 'NL00', 'NL', 'NL', 'Netherlands', 'NL', 'NL', '31', '.nl', 52342, 5528, 30, '', '', 0),
	(163, 'EU', 'AN', 'ANT', '-', '', 'AN', 'Netherlands Antilles', 'NL', 'NL', '599', '.an', 12331, -68812, 57, 'NL', '', 0),
	(164, 'OC', 'NC', 'NCL', 'NC00', '', 'NC', 'New Caledonia', 'FR', 'FR', '687', '.nc', -20992, 165019, 325, 'FR', '', 0),
	(165, 'OC', 'NZ', 'NZL', 'NZ00', '', 'NZ', 'New Zealand', 'EN', 'EN', '64', '.nz', -41667, 172941, 388, '', '', 0),
	(166, 'SA', 'NI', 'NIC', 'NU00', '', 'NI', 'Nicaragua', 'ES', 'ES', '505', '.ni', 12904, -84922, 298, '', 'nicaragua.png', 1),
	(167, 'AF', 'NE', 'NER', 'NG00', '', 'NE', 'Niger', 'FR', 'FR', '227', '.ne', 17424, 9401, 474, '', '', 0),
	(168, 'AF', 'NG', 'NGA', 'NI00', '', 'NG', 'Nigeria', 'EN', 'EN', '234', '.ng', 9559, 8078, 380, '', '', 0),
	(169, 'OC', 'NU', 'NIU', 'NE00', '', 'NU', 'Niue', 'NI', 'EN', '683', '.nu', -19051, -169860, 13, 'NZ', '', 0),
	(170, 'OC', 'NF', 'NFK', 'NF00', '', 'NF', 'Norfolk Island', 'EN', 'EN', '672', '.nf', -29033, 167951, 63, 'AU', '', 0),
	(171, 'AS', 'KP', 'PRK', 'KN00', '', 'KP', 'North Korea', 'KO', 'EN', '850', '.kp', 40279, 126663, 600, '', '', 0),
	(172, 'OC', 'MP', 'MNP', 'CQ00', '', 'MP', 'Northern Mariana Islands', 'FI', 'EN', '670', '.mp', 18289, 145699, 193, 'US', '', 0),
	(173, 'AS', 'OM', 'OMN', 'MU00', '', 'OM', 'Oman', 'AR', 'EN', '968', '.om', 21010, 56854, 310, '', '', 0),
	(174, 'AS', 'PK', 'PAK', 'PK00', '', 'PK', 'Pakistan', 'UR', 'EN', '92', '.pk', 29316, 68765, 900, '', '', 0),
	(175, 'OC', 'PW', 'PLW', 'PS00', '', 'PW', 'Palau', 'PW', 'EN,PW', '680', '.pw', 7317, 134403, 37, '', '', 0),
	(176, 'AS', 'PS', 'PSE', 'GZ00', '', 'PS', 'Palestinian Territory (Gaza Strip)', 'AR', 'EN', '970', '.ps', 31407, 34393, 206, '', '', 0),
	(177, 'SA', 'PA', 'PAN', 'PM00', '', 'PA', 'Panama', 'ES', 'ES', '507', '.pa', 8599, -80410, 360, '', 'panama.png', 1),
	(178, 'OC', 'PG', 'PNG', 'PP00', '', 'PG', 'Papua New Guinea', 'EN', 'EN', '675', '.pg', -6121, 146858, 667, '', '', 0),
	(179, 'SA', 'PY', 'PRY', 'PA00', '', 'PY', 'Paraguay', 'ES', 'ES', '595', '.py', -23244, -58394, 178, '', 'paraguay.png', 1),
	(180, 'SA', 'PE', 'PER', 'PE00', '', 'PE', 'Peru', 'ES', 'ES', '51', '.pe', -9213, -75112, 1555, '', 'peru.png', 1),
	(181, 'AS', 'PH', 'PHL', 'RP00', '', 'PH', 'Philippines', 'EN', 'EN', '63', '.ph', 12023, 122714, 442, '', '', 0),
	(182, 'OC', 'PN', 'PCN', 'PC00', '', 'PN', 'Pitcairn Islands', 'EN', 'EN', '', '.pn', -24378, -128325, 69, 'GB', '', 0),
	(183, 'EU', 'PL', 'POL', 'PL00', 'PL', 'PL', 'Poland', 'PL', 'PL', '48', '.pl', 52147, 19378, 173, '', '', 0),
	(184, 'EU', 'PT', 'PRT', 'PO00', 'PT', 'PT', 'Portugal', 'PT', 'PT', '351', '.pt', 39642, -8346, 372, '', '', 0),
	(185, 'AS', 'QA', 'QAT', 'QA00', '', 'QA', 'Qatar', 'AR', 'EN', '974', '.qa', 25414, 51260, 28, '', '', 0),
	(186, 'AF', 'RE', 'REU', 'RE00', '', 'RE', 'Réunion', 'FR', 'FR', '262', '.re', -21143, 55532, 327, 'FR', '', 0),
	(187, 'EU', 'RO', 'ROU', 'RO00', 'RO', 'RO', 'Romania', 'RO', 'RO', '40', '.ro', 45839, 25009, 414, '', '', 0),
	(188, 'AF', 'RW', 'RWA', 'RW00', '', 'RW', 'Rwanda', 'RW', 'FR', '250', '.rw', -2003, 29923, 1598, '', '', 0),
	(189, 'AF', 'EH', 'ESH', 'WI00', '', 'EH', 'Sahrawi Arab (Western Sahara)', 'AR', 'EN', '212', '.eh', 24666, -13191, 161, '', '', 0),
	(190, 'AF', 'SH', 'SHN', 'SH00', '', 'SH', 'Saint Helena, Ascension and Tristan Da Cunha', 'EN', 'EN', '290', '.sh', -15831, -5618, 55, 'GB', '', 0),
	(191, 'NA', 'KN', 'KNA', 'SC00', '', 'KN', 'Saint Kitts and Nevis', 'EN', 'EN', '869', '.kn', 17244, -62643, 138, '', '', 0),
	(192, 'NA', 'LC', 'LCA', 'ST00', '', 'LC', 'Saint Lucia', 'EN', 'EN', '758', '.lc', 13889, -60965, 190, '', '', 0),
	(193, 'NA', 'MF', 'MAF', 'RN00', '', 'MF', 'Saint Martin', 'FR', 'FR', '590', '.gp', 18044, -63057, 84, 'FR', '', 0),
	(194, 'NA', 'PM', 'SPM', 'SB00', '', 'PM', 'Saint Pierre and Miquelon', 'FR', 'FR', '508', '.pm', 46906, -56337, 48, 'FR', '', 0),
	(195, 'NA', 'VC', 'VCT', 'VC00', '', 'VC', 'Saint Vincent and the Grenadines', 'EN', 'EN', '809', '.vc', 13185, -61229, 189, '', '', 0),
	(196, 'OC', 'WS', 'WSM', 'WS00', '', 'WS', 'Samoa', 'SM', 'SM', '685', '.ws', -13852, -172031, 127, '', '', 0),
	(197, 'EU', 'SM', 'SMR', 'SM00', '', 'SM', 'San Marino', 'IT', 'IT', '378', '.sm', 43944, 12459, 112, '', '', 0),
	(198, 'AF', 'ST', 'STP', 'TP00', '', 'ST', 'São Tomé and Príncipe', 'PT', 'PT', '239', '.st', 820, 7002, 327, '', '', 0),
	(199, 'AS', 'SA', 'SAU', 'SA00', '', 'SA', 'Saudi Arabia', 'AR', 'EN', '966', '.sa', 23888, 44442, 665, '', '', 0),
	(200, 'AF', 'SN', 'SEN', 'SG00', '', 'SN', 'Senegal', 'FR', 'FR', '221', '.sn', 14900, -14599, 69, '', '', 0),
	(201, 'AS', 'RS', 'SRB', 'RI00', '', 'RS', 'Serbia', 'SR', 'EN,SR', '381', '.yu', 43855, 20590, 442, '', '', 0),
	(202, 'AF', 'SC', 'SYC', 'SE00', '', 'SC', 'Seychelles', 'EN', 'EN', '248', '.sc', -4685, 55482, 132, '', '', 0),
	(203, 'AF', 'SL', 'SLE', 'SL00', '', 'SL', 'Sierra Leone', 'EN', 'EN', '232', '.sl', 8521, -11844, 279, '', '', 0),
	(204, 'AS', 'SG', 'SGP', 'SN00', '', 'SG', 'Singapore', 'ZH', 'EN', '65', '.sg', 1322, 103821, 32, '', '', 0),
	(205, 'NA', 'SX', 'MAF', 'NN00', '', 'SX', 'Sint Maarten', 'NL', 'NL', '721', '.an', 18044, -63082, 48, 'NL', '', 0),
	(206, 'EU', 'SK', 'SVK', 'LO00', 'SK', 'SK', 'Slovakia', 'SK', 'SK', '42', '.sk', 48707, 19487, 458, '', '', 0),
	(207, 'EU', 'SI', 'SVN', 'SI00', 'SI', 'SI', 'Slovenia', 'SL', 'SL', '386', '.si', 46120, 14821, 492, '', '', 0),
	(208, 'OC', 'SB', 'SLB', 'BP00', '', 'SB', 'Solomon Islands', 'EN', 'EN', '677', '.sb', -9149, 160987, 51, '', '', 0),
	(209, 'AF', 'SO', 'SOM', 'SO00', '', 'SO', 'Somalia', 'SO', 'EN', '252', '.so', 9460, 47167, 410, '', '', 0),
	(210, 'AF', 'ZA', 'ZAF', 'SF00', '', 'ZA', 'South Africa', 'EN', 'EN', '27', '.za', -29046, 25063, 1034, '', '', 0),
	(211, 'AN', 'GS', 'SGS', 'SX00', '', 'GS', 'South Georgia and the South Sandwich Islands', 'EN', 'EN', '995', '.gs', -54401, -36586, 7, 'GB', '', 0),
	(212, 'AS', 'KR', 'KOR', 'KS00', '', 'KR', 'South Korea', 'KO', 'EN,KO', '82', '.kr', 36097, 127513, 282, '', '', 0),
	(213, 'AF', 'SS', 'SSD', 'OD00', '', 'SS', 'South Sudan', 'AR', 'EN', '211', '.ss', 7515, 30121, 637, '', '', 0),
	(214, 'EU', 'ES', 'ESP', 'SP00', 'ES', 'ES', 'España', 'ES', 'ES', '34', '.es', 40396, -3551, 660, '', 'spain.png', 1),
	(215, 'AS', 'LK', 'LKA', 'CE00', '', 'LK', 'Sri Lanka', 'SI', 'EN', '94', '.lk', 7789, 80681, 228, '', '', 0),
	(216, 'AF', 'SD', 'SDN', 'SU00', '', 'SD', 'Sudan', 'AR', 'EN', '249', '.sd', 13933, 30152, 568, '', '', 0),
	(217, 'SA', 'SR', 'SUR', 'NS00', '', 'SR', 'Suriname', 'NL', 'NL', '597', '.sr', 4217, -55889, 246, '', '', 0),
	(218, 'EU', 'SJ', 'SJM', 'SV00', '', 'SJ', 'Svalbard and Jan Mayen', 'NO', 'NO', '47', '.sj', 77270, 14380, 189, 'NO', '', 0),
	(219, 'AF', 'SZ', 'SWZ', 'WZ00', '', 'SZ', 'Swaziland', 'EN', 'EN', '268', '.sz', -26565, 31501, 305, '', '', 0),
	(220, 'EU', 'SE', 'SWE', 'SW00', 'SE', 'SE', 'Sweden', 'SV', 'SV', '46', '.se', 62915, 16237, 320, '', '', 0),
	(221, 'EU', 'CH', 'CHE', 'SZ00', '', 'CH', 'Switzerland', 'DE', 'DE,FR,IT', '41', '.ch', 46806, 8226, 1350, '', '', 0),
	(222, 'AS', 'SY', 'SYR', 'SY00', '', 'SY', 'Syria', 'SY', 'EN,AR', '963', '.sy', 35030, 38469, 514, '', '', 0),
	(223, 'AS', 'TW', 'TWN', 'TW00', '', 'TW', 'Taiwan', 'CH', 'EN,ZH', '886', '.tw', 23686, 120897, 1150, '', '', 0),
	(224, 'AF', 'TZ', 'TZA', 'TZ00', '', 'TZ', 'Tanzania', 'SW', 'EN', '255', '.tz', -6307, 34854, 1018, '', '', 0),
	(225, 'AS', 'TH', 'THA', 'TH00', '', 'TH', 'Thailand', 'TH', 'EN,TH', '66', '.th', 15229, 101100, 287, '', '', 0),
	(226, 'AF', 'TG', 'TGO', 'TO00', '', 'TG', 'Togo', 'FR', 'FR', '228', '.tg', 8513, 980, 236, '', '', 0),
	(227, 'OC', 'TK', 'TKL', 'TL00', '', 'TK', 'Tokelau', 'TK', 'EN', '690', '.tk', -9150, -171815, 1, 'NZ', '', 0),
	(228, 'OC', 'TO', 'TON', 'TN00', '', 'TO', 'Tonga', 'TO', 'EN', '676', '.to', -18985, -174586, 206, '', '', 0),
	(229, 'NA', 'TT', 'TTO', 'TD00', '', 'TT', 'Trinidad and Tobago', 'EN', 'EN', '868', '.tt', 10701, -61152, 83, '', '', 0),
	(230, 'AF', 'TN', 'TUN', 'TS00', '', 'TN', 'Tunisia', 'AR', 'FR', '216', '.tn', 34356, 9754, 246, '', '', 0),
	(231, 'EU', 'TR', 'TUR', 'TU00', 'TR', 'TR', 'Turkey', 'TR', 'TR', '90', '.tr', 39051, 34930, 1132, '', '', 0),
	(232, 'AS', 'TM', 'TKM', 'TX00', '', 'TM', 'Turkmenistan', 'TK', 'EN', '993', '.tm', 39201, 59082, 230, '', '', 0),
	(233, 'NA', 'TC', 'TCA', 'TK00', '', 'TC', 'Turks and Caicos', 'EN', 'EN', '649', '.tc', 21505, -71754, 9, 'GB', '', 0),
	(234, 'OC', 'TV', 'TUV', 'TV00', '', 'TV', 'Tuvalu', 'TV', 'EN', '688', '.tv', -8507, 179196, 1, '', '', 0),
	(235, 'AF', 'UG', 'UGA', 'UG00', '', 'UG', 'Uganda', 'EN', 'EN', '256', '.ug', 1282, 32388, 989, '', '', 0),
	(236, 'EU', 'UA', 'UKR', 'UP00', '', 'UA', 'Ukraine', 'UK', 'EN,UK', '380', '.ua', 48927, 31478, 175, '', '', 0),
	(237, 'AS', 'AE', 'ARE', 'AE00', '', 'AE', 'United Arab Emirates', 'AR', 'EN', '971', '.ae', 23685, 54204, 149, '', '', 0),
	(238, 'EU', 'GB', 'GBR', 'UK00', 'UK', 'GB', 'United Kingdom', 'EN', 'EN', '44', '.uk', 54071, -2784, 162, '', '', 0),
	(239, 'NA', 'US', 'USA', 'US00', '', 'US', 'United States', 'EN', 'EN', '1', '.us', 39450, -98908, 760, '', '', 0),
	(240, 'SA', 'UY', 'URY', 'UY00', '', 'UY', 'Uruguay', 'ES', 'ES', '598', '.uy', -32863, -56007, 109, '', 'uruguay.png', 1),
	(241, 'NA', 'VI', 'VIR', 'VQ00', '', 'VI', 'US Virgin Islands', 'EN', 'EN', '340', '.vi', 17753, -64735, 39, 'US', '', 0),
	(242, 'AS', 'UZ', 'UZB', 'UZ00', '', 'UZ', 'Uzbekistan', 'UZ', 'EN,RU', '7', '.uz', 41772, 63146, 928, '', '', 0),
	(243, 'OC', 'VU', 'VUT', 'NH00', '', 'VU', 'Vanuatu', 'BI', 'EN', '678', '.vu', -16651, 168022, 375, '', '', 0),
	(244, 'EU', 'VA', 'VAT', 'VT00', '', 'VA', 'Vatican City', 'LA', 'LA', '379', '.va', 41903, 12453, 15, '', '', 0),
	(245, 'SA', 'VE', 'VEN', 'VE00', '', 'VE', 'Venezuela', 'ES', 'ES', '58', '.ve', 7674, -66150, 450, '', 'venezuela.png', 1),
	(246, 'AS', 'VN', 'VNM', 'VM00', '', 'VN', 'Viet Nam', 'VI', 'VI', '84', '.vn', 16803, 106993, 327, '', '', 0),
	(247, 'OC', 'WF', 'WLF', 'WF00', '', 'WF', 'Wallis and Futuna', 'WL', 'FR', '681', '.wf', -11417, -177703, 73, 'FR', '', 0),
	(248, 'AS', 'YE', 'YEM', 'YM00', '', 'YE', 'Yemen', 'AR', 'EN,AR', '967', '.ye', 15341, 47908, 999, '', '', 0),
	(249, 'AF', 'ZM', 'ZMB', 'ZA00', '', 'ZM', 'Zambia', 'EN', 'EN', '260', '.zm', -14197, 27996, 1138, '', '', 0),
	(260, 'AF', 'ZW', 'ZWE', 'ZI00', '', 'ZW', 'Zimbabwe', 'EN', 'EN', '263', '.zw', -19000, 29869, 961, '', '', 0);
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla y_doce_companies.failed_jobs: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.membership_plans
CREATE TABLE IF NOT EXISTS `membership_plans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `plan_value` decimal(20,4) NOT NULL DEFAULT 0.0000,
  `is_demo` tinyint(1) NOT NULL DEFAULT 0,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla y_doce_companies.membership_plans: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `membership_plans` DISABLE KEYS */;
/*!40000 ALTER TABLE `membership_plans` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla y_doce_companies.migrations: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(22, '2014_10_12_000000_create_users_table', 1),
	(23, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
	(24, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
	(25, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
	(26, '2016_06_01_000004_create_oauth_clients_table', 1),
	(27, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
	(28, '2019_08_19_000000_create_failed_jobs_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.oauth_access_tokens
CREATE TABLE IF NOT EXISTS `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla y_doce_companies.oauth_access_tokens: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.oauth_auth_codes
CREATE TABLE IF NOT EXISTS `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla y_doce_companies.oauth_auth_codes: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.oauth_clients
CREATE TABLE IF NOT EXISTS `oauth_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla y_doce_companies.oauth_clients: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.oauth_personal_access_clients
CREATE TABLE IF NOT EXISTS `oauth_personal_access_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla y_doce_companies.oauth_personal_access_clients: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.oauth_refresh_tokens
CREATE TABLE IF NOT EXISTS `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla y_doce_companies.oauth_refresh_tokens: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.tb_audit
CREATE TABLE IF NOT EXISTS `tb_audit` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `ip` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `table` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `what_did` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `data` longtext COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `ip` (`ip`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE,
  CONSTRAINT `FK_tb_audit_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla y_doce_companies.tb_audit: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tb_audit` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_audit` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `type_id` smallint(6) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `activation_token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `FK_users_user_types` FOREIGN KEY (`type_id`) REFERENCES `user_types` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla y_doce_companies.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Volcando estructura para tabla y_doce_companies.user_types
CREATE TABLE IF NOT EXISTS `user_types` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `user_type_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_administrator` tinyint(1) NOT NULL DEFAULT 0,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='Tipos de usuarios del sistema';

-- Volcando datos para la tabla y_doce_companies.user_types: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `user_types` DISABLE KEYS */;
INSERT INTO `user_types` (`id`, `user_type_name`, `is_administrator`, `active`) VALUES
	(1, 'ADMINISTRADOR', 1, 1),
	(2, 'ESTANDAR', 0, 1);
/*!40000 ALTER TABLE `user_types` ENABLE KEYS */;

-- Volcando estructura para disparador y_doce_companies.companies_before_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `companies_before_insert` BEFORE INSERT ON `companies` FOR EACH ROW BEGIN
	IF ISNULL(NEW.lockdate) THEN 
		SET NEW.lockdate = DATE_ADD(CURDATE(),INTERVAL 30 DAY) ;
	END IF;
	
	IF ISNULL(NEW.dni) THEN 
		SET NEW.dni = RAND(30);
	END IF;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
