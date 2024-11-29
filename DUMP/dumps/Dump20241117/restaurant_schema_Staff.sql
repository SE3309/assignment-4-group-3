-- MySQL dump 10.13  Distrib 8.0.40, for macos14 (x86_64)
--
-- Host: localhost    Database: restaurant_schema
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Staff`
--

DROP TABLE IF EXISTS `Staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Staff` (
  `staffID` int NOT NULL AUTO_INCREMENT,
  `jobTitle` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `wage` decimal(4,2) NOT NULL,
  `hireDate` date NOT NULL,
  PRIMARY KEY (`staffID`)
) ENGINE=InnoDB AUTO_INCREMENT=501 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Staff`
--

LOCK TABLES `Staff` WRITE;
/*!40000 ALTER TABLE `Staff` DISABLE KEYS */;
INSERT INTO `Staff` VALUES (1,'Manager','Candace Ortega',14.32,'2018-02-11'),(2,'Cleaner','Trevor Simpson',16.11,'2020-02-01'),(3,'Server','Katie Bradley',21.15,'2018-04-03'),(4,'Cleaner','Roger Williams',14.38,'2017-06-28'),(5,'Server','Nicholas Fletcher',14.23,'2023-01-20'),(6,'Chef','Antonio Salinas',15.59,'2017-02-26'),(7,'Cleaner','Michelle Bowman',24.02,'2017-06-22'),(8,'Cleaner','Robert Vance',20.64,'2015-11-10'),(9,'Chef','Albert Arnold',19.36,'2018-06-02'),(10,'Server','Natalie Arroyo',24.85,'2023-10-07'),(11,'Chef','Harold Sutton',22.99,'2022-08-13'),(12,'Server','April Tucker',18.35,'2017-05-09'),(13,'Manager','Mallory Odonnell',13.88,'2019-03-26'),(14,'Server','Christina Miller',23.67,'2016-10-03'),(15,'Chef','Stephanie Martin',20.93,'2021-07-21'),(16,'Manager','Jennifer Zimmerman',21.97,'2020-12-27'),(17,'Chef','Lydia Robinson',15.03,'2016-11-02'),(18,'Chef','Cindy Casey DVM',17.35,'2021-08-08'),(19,'Chef','Joshua Sanchez',13.91,'2022-01-24'),(20,'Manager','Juan Wood',20.42,'2020-01-21'),(21,'Manager','Robert Wilson',16.82,'2014-12-18'),(22,'Manager','Susan Smith',11.86,'2015-01-18'),(23,'Chef','Daniel Hill',19.97,'2019-03-12'),(24,'Cleaner','Teresa French',14.23,'2019-05-25'),(25,'Cleaner','John Duncan',24.65,'2024-03-26'),(26,'Server','Stephanie Richard',16.26,'2017-10-06'),(27,'Chef','William Haney',18.99,'2023-05-26'),(28,'Manager','Julia Moyer',14.22,'2015-08-22'),(29,'Server','Holly Perez',10.17,'2022-06-22'),(30,'Cleaner','Jeremy Richard',24.57,'2019-07-19'),(31,'Server','Charles Jones',14.86,'2017-12-18'),(32,'Server','Jason Wright',10.10,'2023-11-16'),(33,'Manager','Heather Love',12.08,'2015-03-02'),(34,'Cleaner','Brian Carter MD',10.17,'2021-06-06'),(35,'Chef','Dave Smith',14.47,'2024-01-01'),(36,'Chef','George Cervantes',14.62,'2023-06-16'),(37,'Cleaner','Ronald Rose',20.16,'2015-04-28'),(38,'Chef','Joseph Green MD',22.96,'2021-10-04'),(39,'Chef','Bradley Miller',12.72,'2015-09-11'),(40,'Manager','Natasha Wilson',21.47,'2020-09-17'),(41,'Server','Brian Ramirez',21.83,'2021-05-24'),(42,'Manager','Gavin Potter',20.01,'2019-07-27'),(43,'Cleaner','Anthony Davis',10.61,'2016-07-31'),(44,'Chef','John Monroe',19.07,'2024-02-15'),(45,'Manager','Regina Villegas',16.18,'2022-02-28'),(46,'Cleaner','Krystal West',10.52,'2021-05-11'),(47,'Cleaner','Joseph Nelson',13.02,'2024-01-11'),(48,'Cleaner','Dr. Donald Wright DVM',19.30,'2023-05-25'),(49,'Manager','Katelyn Wallace',11.11,'2024-04-03'),(50,'Chef','Joseph Graves',16.86,'2018-10-25'),(51,'Cleaner','Kristie Horton',18.90,'2022-09-28'),(52,'Chef','Carolyn Rose',16.13,'2019-07-04'),(53,'Manager','Alex Doyle',14.70,'2023-05-07'),(54,'Chef','Roger Hogan',24.15,'2023-01-12'),(55,'Chef','Christopher Huynh',21.62,'2023-11-23'),(56,'Chef','Dustin Patton',17.17,'2022-06-30'),(57,'Cleaner','Lori Lopez',22.47,'2023-10-10'),(58,'Manager','Bernard Carroll',13.93,'2021-05-15'),(59,'Cleaner','Cody Simmons',22.91,'2023-06-23'),(60,'Cleaner','Scott Morrow',19.32,'2018-05-19'),(61,'Cleaner','Theresa Wilkinson',16.79,'2021-07-24'),(62,'Manager','Jennifer Rogers',20.60,'2023-12-23'),(63,'Chef','Lisa Garcia',11.80,'2024-09-06'),(64,'Chef','Ian Barry',22.25,'2024-01-17'),(65,'Server','Jamie Marks',16.74,'2018-05-06'),(66,'Manager','Kim Cook',21.59,'2019-03-15'),(67,'Cleaner','Dylan Davis',14.94,'2015-05-22'),(68,'Manager','Brandy Harmon',17.55,'2016-01-09'),(69,'Server','Kaitlyn Whitehead',18.97,'2018-07-30'),(70,'Manager','Julie Moore',20.20,'2015-01-07'),(71,'Manager','Jeffrey Marshall',22.67,'2019-01-12'),(72,'Chef','Daniel Dunn',19.53,'2022-01-11'),(73,'Server','Kevin Ford',22.58,'2019-01-15'),(74,'Chef','Mark Hart',12.17,'2016-05-26'),(75,'Manager','Joseph Krause',10.93,'2018-10-11'),(76,'Cleaner','Eric Sanders',14.68,'2023-09-16'),(77,'Chef','Ashley Allen',19.09,'2018-10-25'),(78,'Chef','David Garcia',22.66,'2022-04-09'),(79,'Cleaner','Alexandria Rivers',14.69,'2024-04-22'),(80,'Server','Edwin Holmes',24.02,'2020-08-23'),(81,'Server','Joshua Garcia',16.05,'2020-04-09'),(82,'Server','Daisy Sanders',10.08,'2020-11-09'),(83,'Manager','Leonard Woods',24.63,'2021-12-28'),(84,'Cleaner','Tony Serrano',17.98,'2021-06-10'),(85,'Chef','Joel Phelps',10.71,'2024-01-31'),(86,'Cleaner','Mark Snyder',23.74,'2018-09-03'),(87,'Cleaner','Cynthia Landry',14.87,'2020-07-14'),(88,'Chef','Jill Gutierrez',18.87,'2020-12-24'),(89,'Manager','Nicholas Jefferson',15.04,'2022-01-31'),(90,'Server','Natalie Parks',15.17,'2022-06-12'),(91,'Chef','Brandon Mitchell',13.31,'2016-05-21'),(92,'Cleaner','Robert Odonnell',20.40,'2021-03-01'),(93,'Cleaner','Zoe Mckay',25.00,'2016-08-05'),(94,'Cleaner','Courtney Dunlap',10.52,'2016-04-20'),(95,'Chef','Crystal Ramsey',16.58,'2021-03-31'),(96,'Chef','Brian Patterson',23.51,'2023-05-14'),(97,'Chef','Christopher Johnson',24.58,'2023-10-17'),(98,'Manager','Tony Walker',11.07,'2017-09-21'),(99,'Manager','James Smith DDS',13.37,'2016-10-25'),(100,'Manager','Tony Sexton',15.72,'2023-07-21'),(101,'Cleaner','Katherine Sherman',15.58,'2020-07-19'),(102,'Cleaner','Michael Ortiz',21.84,'2018-07-16'),(103,'Manager','Jenny Thompson',22.19,'2017-03-08'),(104,'Manager','Christopher Miller',11.58,'2023-08-08'),(105,'Cleaner','Megan Johnson',19.20,'2018-09-12'),(106,'Cleaner','William Miller',17.51,'2018-03-04'),(107,'Manager','Carol Gutierrez',20.83,'2015-08-27'),(108,'Chef','Michael Woodward',12.55,'2016-05-08'),(109,'Manager','Miguel Sanders',24.87,'2020-08-11'),(110,'Manager','John Lee',20.11,'2024-06-23'),(111,'Chef','John Griffin',22.92,'2020-12-02'),(112,'Manager','Jenna Valencia',24.38,'2017-09-30'),(113,'Manager','Karen Walter',18.38,'2019-10-26'),(114,'Manager','William Williams',12.16,'2019-08-27'),(115,'Manager','Reginald Bender',12.88,'2021-08-29'),(116,'Server','Kristin Lopez',14.93,'2020-01-19'),(117,'Cleaner','Gregory Hamilton',11.72,'2022-08-31'),(118,'Manager','Richard Wilson',14.25,'2019-12-06'),(119,'Manager','Kimberly Jackson',17.25,'2017-11-16'),(120,'Manager','Jennifer Vazquez',23.49,'2021-11-24'),(121,'Manager','Sharon Hill',13.08,'2020-10-24'),(122,'Server','Michelle Beck',17.46,'2022-05-12'),(123,'Manager','Carl Cruz',22.13,'2020-03-26'),(124,'Manager','Jessica Malone',12.45,'2019-01-12'),(125,'Cleaner','Beth Nguyen',16.58,'2015-02-26'),(126,'Cleaner','David Grant',10.38,'2020-11-25'),(127,'Server','Christopher Jones',12.11,'2015-03-19'),(128,'Cleaner','Robin Levine',10.89,'2016-05-01'),(129,'Chef','Vanessa Anderson',10.72,'2022-12-24'),(130,'Manager','Joshua Whitney',11.21,'2022-05-28'),(131,'Manager','Rhonda Hall',16.97,'2017-06-08'),(132,'Manager','Juan Hill',13.31,'2019-07-21'),(133,'Cleaner','Cathy Levy',11.01,'2015-03-25'),(134,'Manager','Brian Baldwin',16.13,'2016-07-19'),(135,'Chef','Kyle Harris',20.76,'2016-04-08'),(136,'Manager','Daniel Smith',18.09,'2016-10-29'),(137,'Manager','Jordan Johnson',19.36,'2023-11-21'),(138,'Manager','Kimberly Hamilton',19.21,'2017-02-14'),(139,'Manager','Debra Wright',18.31,'2023-12-04'),(140,'Server','Keith Rodriguez',21.77,'2015-05-19'),(141,'Chef','Michael Cline',13.54,'2020-12-20'),(142,'Cleaner','Cody Stevens',13.06,'2016-11-05'),(143,'Server','David Howard',18.04,'2020-01-16'),(144,'Manager','Joseph Miller',21.59,'2017-02-04'),(145,'Chef','Dorothy Petty',10.71,'2021-09-22'),(146,'Cleaner','Sarah Navarro',13.63,'2023-11-24'),(147,'Chef','Angela Ferguson',22.33,'2021-09-06'),(148,'Cleaner','Denise Russell',20.27,'2024-04-13'),(149,'Manager','Katie Howard',23.24,'2021-09-06'),(150,'Manager','Andrew Butler',23.62,'2022-04-04'),(151,'Manager','Annette Burns',19.13,'2018-11-12'),(152,'Manager','William Murphy',10.18,'2019-12-30'),(153,'Manager','William Nguyen',12.29,'2023-02-09'),(154,'Manager','Amanda House',11.83,'2023-10-31'),(155,'Chef','Joshua Houston',18.17,'2019-06-16'),(156,'Server','Erik Allen',13.15,'2018-05-25'),(157,'Manager','Gregory Chavez',18.24,'2023-04-30'),(158,'Manager','Cynthia Perry',15.21,'2021-07-13'),(159,'Manager','Raymond Murphy',23.33,'2023-06-23'),(160,'Manager','Joseph Nguyen',21.54,'2018-03-25'),(161,'Chef','Deanna Phelps MD',24.81,'2018-10-27'),(162,'Cleaner','David Miller',20.77,'2018-03-24'),(163,'Server','Wayne Mclean',22.69,'2017-04-06'),(164,'Chef','Sarah Stewart',15.94,'2016-09-30'),(165,'Chef','Jesus Gilbert',20.58,'2024-04-13'),(166,'Chef','Michael Alexander',24.13,'2020-12-15'),(167,'Cleaner','John Austin',20.81,'2018-01-28'),(168,'Manager','Wayne Jones',22.23,'2018-01-30'),(169,'Manager','Tanner Neal',12.62,'2024-07-15'),(170,'Server','Alexa Heath',22.03,'2020-04-21'),(171,'Cleaner','Emily Robertson',11.48,'2022-10-27'),(172,'Server','Tiffany Williams',10.39,'2020-11-22'),(173,'Cleaner','Scott Wong',10.51,'2016-03-30'),(174,'Server','John Bryant',21.71,'2021-10-04'),(175,'Chef','Kirsten Murray',14.30,'2021-07-28'),(176,'Manager','Sharon Holloway',10.55,'2023-07-26'),(177,'Manager','Nicole Wilson',22.29,'2017-12-09'),(178,'Chef','Christine Simmons',19.54,'2021-02-15'),(179,'Cleaner','Jonathan Thompson',15.83,'2021-06-17'),(180,'Chef','Jessica Sanchez',22.96,'2019-12-02'),(181,'Manager','John Baker',20.61,'2016-11-12'),(182,'Chef','Nicole Smith',14.58,'2016-03-18'),(183,'Chef','Jeremy Davis',11.84,'2024-03-23'),(184,'Manager','Kathryn Chen',14.78,'2015-05-26'),(185,'Cleaner','Gregory Ali',10.81,'2015-03-23'),(186,'Server','Briana Williams',24.32,'2017-01-25'),(187,'Server','Elizabeth Peters',15.73,'2021-04-02'),(188,'Cleaner','Jennifer Clarke',18.87,'2014-12-11'),(189,'Server','Bobby Allen',21.61,'2015-11-10'),(190,'Manager','Laura Morrow',23.20,'2019-04-07'),(191,'Server','Michael Brewer',20.22,'2021-08-22'),(192,'Manager','Monica Harris',23.89,'2016-09-09'),(193,'Server','Jonathan Jarvis',24.21,'2018-10-29'),(194,'Manager','Lori Ramsey',11.81,'2019-07-08'),(195,'Server','Charles Logan',16.16,'2024-10-09'),(196,'Server','Ivan Powers',14.97,'2019-04-05'),(197,'Cleaner','John Simpson',20.47,'2019-01-20'),(198,'Chef','Angela Charles',10.06,'2017-01-26'),(199,'Cleaner','James Little',16.03,'2016-01-27'),(200,'Manager','John Rogers',24.25,'2019-02-01'),(201,'Manager','Lacey Sullivan',12.75,'2017-07-31'),(202,'Manager','Amanda Whitehead',10.14,'2017-03-31'),(203,'Server','Christie Barrett',22.50,'2015-07-22'),(204,'Cleaner','Marie Mccarthy',17.21,'2022-02-14'),(205,'Server','Jordan Macias',13.39,'2020-07-30'),(206,'Manager','Casey Walker',20.14,'2022-06-28'),(207,'Chef','Julian Sullivan',13.03,'2021-05-11'),(208,'Cleaner','Kenneth Green',12.07,'2023-06-11'),(209,'Cleaner','Mrs. Audrey Cole',11.53,'2020-06-19'),(210,'Cleaner','Logan Martin',16.51,'2024-05-21'),(211,'Chef','Jose Ramos',14.49,'2024-01-23'),(212,'Manager','Tammy Anderson',20.32,'2018-11-22'),(213,'Cleaner','Deborah Anderson',10.77,'2021-04-30'),(214,'Server','Michael Miller',16.28,'2017-11-13'),(215,'Chef','Eric Strickland',15.33,'2021-04-15'),(216,'Server','Dr. Alicia Clark',16.21,'2021-05-26'),(217,'Server','Rachel Weber',17.30,'2023-11-15'),(218,'Server','Amanda Orr',10.77,'2022-01-02'),(219,'Manager','Sarah Gray',18.45,'2020-05-20'),(220,'Server','Gina Coleman',22.61,'2022-02-02'),(221,'Chef','Sharon Wright',12.76,'2024-04-13'),(222,'Server','Jesse Guzman',16.24,'2016-01-14'),(223,'Server','Dr. Courtney Irwin DVM',19.89,'2018-07-10'),(224,'Server','Joseph Kelly',15.03,'2015-08-31'),(225,'Cleaner','David Kennedy',20.42,'2017-10-25'),(226,'Chef','Danielle Glass',15.99,'2017-03-24'),(227,'Cleaner','Tami Washington',12.64,'2018-04-25'),(228,'Manager','Wayne Trujillo',16.67,'2022-07-19'),(229,'Manager','Emma Ray',13.97,'2018-10-28'),(230,'Server','Bobby Mullins',23.88,'2023-02-18'),(231,'Manager','James Jefferson',24.97,'2018-06-24'),(232,'Cleaner','Matthew Robinson',23.33,'2015-02-24'),(233,'Chef','Aaron Torres',16.78,'2020-02-15'),(234,'Manager','Megan Stevens',24.55,'2017-07-15'),(235,'Cleaner','Alexander Adams',19.90,'2022-04-20'),(236,'Server','Karina Carpenter',13.43,'2018-03-23'),(237,'Chef','Kelsey Lawrence',20.22,'2016-02-03'),(238,'Manager','Christopher Copeland',17.27,'2022-11-21'),(239,'Chef','Jerome Campbell',20.08,'2015-09-17'),(240,'Manager','Ann Riggs',17.47,'2016-01-28'),(241,'Server','Ethan James',10.90,'2024-04-19'),(242,'Cleaner','Eduardo Pugh',22.48,'2019-11-15'),(243,'Server','Donna Ramirez',13.21,'2022-07-12'),(244,'Manager','Douglas Williams',21.87,'2019-04-18'),(245,'Manager','Todd Hernandez',18.25,'2016-08-15'),(246,'Server','Allen Baker',22.76,'2015-08-13'),(247,'Server','Karen Berry',16.66,'2024-05-16'),(248,'Server','Shane Lopez',23.57,'2018-09-15'),(249,'Chef','Helen Gonzalez',23.99,'2022-06-18'),(250,'Server','Monica Mckee',13.28,'2022-11-27'),(251,'Manager','Tammie Weber',11.31,'2022-07-19'),(252,'Server','Ashley Simpson',20.20,'2018-02-10'),(253,'Server','Robert Patterson',16.86,'2016-11-02'),(254,'Chef','Alicia Lucas',11.44,'2024-10-29'),(255,'Manager','Brian Waters MD',20.71,'2015-03-24'),(256,'Cleaner','Zachary Keith',10.02,'2023-10-27'),(257,'Server','Mary Rivera',11.78,'2021-01-08'),(258,'Manager','Christopher Wong',12.20,'2020-02-21'),(259,'Cleaner','Anna Peters',15.67,'2024-05-29'),(260,'Chef','Justin White',17.00,'2021-05-14'),(261,'Chef','Christopher Walker',23.82,'2016-05-14'),(262,'Chef','Timothy Jordan',13.52,'2022-03-10'),(263,'Chef','Sarah Lloyd',14.59,'2023-04-17'),(264,'Cleaner','Stephanie Kim',10.22,'2018-02-12'),(265,'Cleaner','Donna Cisneros',11.25,'2024-01-05'),(266,'Server','Edward Hinton',13.22,'2021-12-21'),(267,'Manager','Timothy Page',22.15,'2017-03-21'),(268,'Cleaner','Heather Rich',14.06,'2016-06-02'),(269,'Manager','Corey Carter',21.15,'2018-03-26'),(270,'Manager','Christopher Baker',22.11,'2020-06-05'),(271,'Chef','Logan Ramsey',15.85,'2024-01-17'),(272,'Chef','Jose Adams',14.66,'2016-04-27'),(273,'Server','Joseph Carter',20.58,'2015-11-05'),(274,'Manager','Shelby Carlson',16.93,'2017-06-28'),(275,'Server','Nicole Phelps',16.84,'2017-10-07'),(276,'Manager','Andrew Rodriguez',13.98,'2020-09-21'),(277,'Cleaner','Terry Sanford',12.02,'2023-09-29'),(278,'Manager','Robert Padilla',16.41,'2023-02-16'),(279,'Server','Kyle Lee',22.74,'2018-09-22'),(280,'Chef','Ricky Daniels',12.93,'2020-12-21'),(281,'Cleaner','Nicholas Reed',12.97,'2016-08-25'),(282,'Manager','George Torres',19.69,'2019-02-10'),(283,'Cleaner','Miss Rhonda Robinson',10.34,'2024-06-27'),(284,'Server','Ray Carr',23.95,'2024-08-31'),(285,'Cleaner','Kelli Adams',12.87,'2021-03-29'),(286,'Manager','Daniel Lawrence',21.12,'2015-08-17'),(287,'Manager','Thomas Walsh',17.05,'2017-09-13'),(288,'Server','Julia Parker',11.72,'2021-05-14'),(289,'Manager','Micheal Rangel',11.38,'2018-03-01'),(290,'Manager','Norman Wilkinson',13.58,'2024-05-21'),(291,'Manager','David Huynh',23.21,'2016-01-25'),(292,'Manager','John Yates',20.30,'2018-01-11'),(293,'Chef','Janet Ross',22.96,'2017-06-06'),(294,'Server','David Carter',11.48,'2018-09-15'),(295,'Server','Benjamin Sparks',24.71,'2022-01-07'),(296,'Manager','Lisa Sanchez',12.69,'2022-01-23'),(297,'Cleaner','Gerald Frederick',21.41,'2015-02-05'),(298,'Manager','Ronald Williams',16.73,'2024-06-11'),(299,'Server','Joshua Rivera',20.72,'2021-08-13'),(300,'Chef','Pamela Torres',11.05,'2022-01-30'),(301,'Manager','Paul Lopez',21.92,'2023-02-28'),(302,'Manager','Edward Thomas',20.50,'2018-03-19'),(303,'Server','Carlos Ho',19.99,'2018-07-16'),(304,'Cleaner','Brooke Arias',21.01,'2024-08-05'),(305,'Manager','Michael Ford',12.39,'2024-02-04'),(306,'Cleaner','Nicole Valenzuela',24.80,'2024-06-28'),(307,'Manager','Holly Merritt',17.05,'2022-08-01'),(308,'Manager','Briana Hall',11.53,'2015-04-01'),(309,'Server','Casey Howell',22.05,'2023-10-05'),(310,'Chef','Jenna Kline',16.18,'2021-02-18'),(311,'Server','Greg Johnson',11.89,'2015-11-24'),(312,'Chef','Heather Chavez',18.47,'2021-05-22'),(313,'Manager','Daniel Hansen',13.44,'2023-06-13'),(314,'Chef','Cynthia Clark',14.10,'2015-04-26'),(315,'Cleaner','Mandy Clements',19.77,'2016-10-09'),(316,'Server','Elizabeth Vazquez',21.64,'2022-07-29'),(317,'Manager','Thomas Ward',19.24,'2024-01-22'),(318,'Cleaner','Laura Garcia',24.80,'2016-03-16'),(319,'Cleaner','Henry Ritter',22.78,'2015-07-28'),(320,'Server','Lisa Bennett',18.95,'2022-09-11'),(321,'Chef','Tyler Evans',18.54,'2019-06-16'),(322,'Manager','Rachel West',12.75,'2019-07-16'),(323,'Cleaner','Megan White',12.17,'2017-07-22'),(324,'Server','Robert Reilly',24.60,'2023-08-28'),(325,'Chef','Joshua Harvey',13.69,'2016-11-24'),(326,'Cleaner','Robert Ball',15.07,'2018-10-29'),(327,'Server','David Leonard',12.55,'2018-05-14'),(328,'Chef','Justin Jordan',15.05,'2019-09-11'),(329,'Server','Sean Huang',19.45,'2017-02-11'),(330,'Manager','John White',11.64,'2023-06-13'),(331,'Cleaner','Brenda Henry',21.28,'2023-02-18'),(332,'Cleaner','Jeremy Davis',20.69,'2024-03-08'),(333,'Manager','Dale Miller',18.53,'2015-11-28'),(334,'Cleaner','Adrian Moore',11.92,'2019-06-05'),(335,'Chef','Jack Stuart',22.60,'2016-01-08'),(336,'Manager','Stacey Silva',23.64,'2023-06-27'),(337,'Server','Michele Daniel',24.53,'2018-04-07'),(338,'Manager','Stephen Holland',12.32,'2022-01-20'),(339,'Cleaner','Jaime Melendez',15.06,'2020-11-04'),(340,'Cleaner','Roger Paul',14.79,'2023-09-09'),(341,'Chef','Scott Burke',13.67,'2017-02-23'),(342,'Chef','Vicki Olsen',24.99,'2023-08-18'),(343,'Chef','Debbie Campbell',18.86,'2023-03-05'),(344,'Server','Matthew Mills',22.91,'2019-12-08'),(345,'Manager','Anna Jacobs',24.01,'2020-04-20'),(346,'Manager','Kenneth Jennings',15.07,'2017-10-12'),(347,'Chef','Becky Thompson',15.39,'2017-03-30'),(348,'Server','Mr. Jonathan Campbell DDS',18.00,'2015-02-21'),(349,'Server','Daniel Mills',24.61,'2023-03-20'),(350,'Cleaner','Kristen Marsh',20.63,'2015-04-27'),(351,'Server','Trevor King',18.42,'2015-06-30'),(352,'Cleaner','David Powers',24.11,'2015-11-19'),(353,'Cleaner','Barbara Castaneda',15.20,'2023-06-23'),(354,'Manager','Shirley House',14.94,'2019-07-03'),(355,'Cleaner','Doris Stewart',24.59,'2024-04-20'),(356,'Manager','Derrick Alexander',17.65,'2014-12-25'),(357,'Cleaner','Darryl Davis',16.01,'2019-08-02'),(358,'Manager','Andrea Strickland',17.04,'2016-05-28'),(359,'Server','Amber Waters',15.77,'2020-08-01'),(360,'Chef','Jessica Page',15.49,'2015-06-10'),(361,'Manager','Paul Love',16.34,'2016-11-27'),(362,'Manager','Ronald Kirk',18.96,'2021-08-28'),(363,'Server','Taylor Mendoza',15.96,'2015-11-22'),(364,'Cleaner','Nathan Mendoza',22.56,'2020-12-29'),(365,'Cleaner','Terri Hernandez',22.15,'2019-01-10'),(366,'Server','Nicole Spears',12.81,'2021-12-03'),(367,'Chef','Jennifer Simon',14.71,'2016-12-10'),(368,'Chef','Colleen Young',14.50,'2024-04-12'),(369,'Cleaner','Justin Wells',18.94,'2021-10-03'),(370,'Chef','Kevin King',22.43,'2019-11-07'),(371,'Cleaner','Michael Ortiz',20.55,'2016-01-13'),(372,'Server','Kyle Murphy',10.23,'2016-01-01'),(373,'Server','Brandon Harris',20.98,'2015-11-30'),(374,'Cleaner','Tommy Brown',11.56,'2016-01-12'),(375,'Cleaner','Rachel Horn',23.10,'2023-06-30'),(376,'Cleaner','Aaron Mejia',16.26,'2021-12-01'),(377,'Manager','Karen Cortez',23.06,'2020-01-14'),(378,'Chef','Mary Sandoval',13.45,'2016-03-02'),(379,'Cleaner','Joseph Baker',18.67,'2023-06-21'),(380,'Chef','Miss Rebecca Hudson MD',15.76,'2016-08-08'),(381,'Chef','Terry Fernandez',23.62,'2018-05-26'),(382,'Manager','Ronnie Lopez',21.65,'2024-04-02'),(383,'Server','Roberto Cooley',14.83,'2022-01-27'),(384,'Server','Mary Moore',20.95,'2022-10-17'),(385,'Cleaner','Adam Miller',16.42,'2019-05-10'),(386,'Chef','Yvette Jackson',16.15,'2017-04-23'),(387,'Manager','Ryan Norris',24.42,'2024-05-14'),(388,'Manager','Scott Schwartz',22.24,'2017-07-10'),(389,'Cleaner','Candace Lynn',24.54,'2016-12-05'),(390,'Server','Yvonne Copeland',15.13,'2021-01-15'),(391,'Server','Rebecca Glover',17.79,'2023-03-27'),(392,'Manager','Ashley Baker',10.74,'2023-09-16'),(393,'Chef','David Yates',11.01,'2016-05-01'),(394,'Cleaner','Adam Rivera',19.29,'2017-04-18'),(395,'Server','James Snow',13.99,'2017-06-30'),(396,'Chef','Christina Graham',19.26,'2023-08-19'),(397,'Manager','Anthony Johnson',20.59,'2018-07-03'),(398,'Server','Jessica Lowery',10.69,'2016-05-17'),(399,'Manager','Reginald Johnson Jr.',16.05,'2024-11-01'),(400,'Manager','Jennifer Henderson',21.06,'2019-02-28'),(401,'Chef','Diane Edwards',16.83,'2019-03-23'),(402,'Cleaner','Mark Herrera',22.89,'2016-10-07'),(403,'Server','Hector Patel',13.69,'2021-02-16'),(404,'Cleaner','Jody Weaver',22.05,'2020-05-14'),(405,'Chef','Nathan Jenkins',24.91,'2015-03-21'),(406,'Chef','John Lee',10.11,'2024-08-26'),(407,'Server','Timothy Gomez',21.86,'2024-04-22'),(408,'Cleaner','Nancy Wagner',14.91,'2023-06-05'),(409,'Server','Cheryl Richmond',10.01,'2018-06-24'),(410,'Cleaner','Christopher Wolf',15.53,'2016-09-16'),(411,'Server','Destiny Cortez',16.63,'2016-07-12'),(412,'Manager','Laurie Bennett',10.25,'2016-10-07'),(413,'Manager','Brooke Gonzales',14.74,'2018-10-26'),(414,'Cleaner','Jacqueline Nelson',21.08,'2020-10-13'),(415,'Cleaner','Carla Bowman',12.75,'2019-09-27'),(416,'Cleaner','Barbara Vance',14.43,'2018-01-05'),(417,'Cleaner','Joshua Brady',13.75,'2015-03-29'),(418,'Chef','Dr. Angela Mooney',14.19,'2020-11-26'),(419,'Server','Hannah Shelton',19.03,'2018-08-04'),(420,'Cleaner','James Garza',16.00,'2020-10-02'),(421,'Cleaner','Lisa Collins MD',20.41,'2021-06-07'),(422,'Chef','Michael Lewis',14.75,'2016-01-16'),(423,'Manager','Kyle Dawson',19.35,'2020-09-17'),(424,'Manager','Felicia Turner',22.01,'2021-10-23'),(425,'Chef','Charles Lucas',10.93,'2022-09-24'),(426,'Server','Daniel Taylor PhD',21.15,'2020-06-10'),(427,'Cleaner','Derrick Hayes',13.95,'2024-01-15'),(428,'Server','Timothy Webster',11.07,'2022-06-17'),(429,'Chef','Steven Banks',13.62,'2020-02-09'),(430,'Cleaner','Luis Martinez',13.91,'2018-12-18'),(431,'Chef','Jessica Hicks',19.46,'2020-06-01'),(432,'Chef','David Wilson',19.53,'2015-05-17'),(433,'Chef','Jamie Brown',12.57,'2019-12-15'),(434,'Chef','Joyce Mccullough',20.98,'2024-06-19'),(435,'Chef','Dawn Whitaker',10.83,'2022-10-26'),(436,'Manager','Justin Morales',16.97,'2014-11-19'),(437,'Server','Juan Russell',19.18,'2023-04-13'),(438,'Server','Alexander Joseph',20.08,'2017-03-15'),(439,'Manager','David Brown',12.44,'2019-01-30'),(440,'Manager','Monica Fitzpatrick',16.25,'2022-11-09'),(441,'Manager','Anita Hess',20.16,'2019-08-09'),(442,'Cleaner','Daniel Vargas',23.87,'2021-01-04'),(443,'Manager','Alan Turner',22.35,'2019-09-07'),(444,'Server','Mr. Gabriel Lowe',21.27,'2021-10-03'),(445,'Cleaner','Nancy Adams',23.99,'2015-01-28'),(446,'Cleaner','Matthew Bowman',17.65,'2023-04-28'),(447,'Chef','Mikayla Wilkins',21.26,'2021-08-24'),(448,'Manager','Elizabeth Day',12.43,'2020-03-24'),(449,'Cleaner','David Garza',19.59,'2021-09-24'),(450,'Server','Hannah Ortiz',12.94,'2017-12-25'),(451,'Chef','Todd Peck',19.30,'2022-07-15'),(452,'Manager','Rebecca Walker',19.03,'2016-09-07'),(453,'Chef','Patrick Casey',24.47,'2023-03-24'),(454,'Cleaner','Steven Peters',21.49,'2023-01-15'),(455,'Chef','Gerald Munoz',11.86,'2018-06-21'),(456,'Cleaner','Gregory Holmes',11.68,'2020-10-01'),(457,'Cleaner','Lindsey Perez',15.64,'2022-09-15'),(458,'Server','Mr. Ronald Craig',13.58,'2020-10-04'),(459,'Server','Eric Patterson',13.92,'2024-01-28'),(460,'Chef','Michael Collins',14.15,'2023-08-14'),(461,'Chef','Nicole Hart',20.62,'2021-05-22'),(462,'Server','Ashley Andrews',18.13,'2020-04-17'),(463,'Cleaner','Courtney Ford',11.23,'2021-05-12'),(464,'Chef','Nicole Liu',11.77,'2020-12-21'),(465,'Server','Devin Nolan',21.80,'2016-05-20'),(466,'Manager','Kathleen Holder',19.75,'2017-09-26'),(467,'Manager','Andrew Fitzgerald',16.24,'2021-02-07'),(468,'Server','Heather Stewart',19.04,'2024-02-08'),(469,'Server','Wanda Horn',21.01,'2022-12-01'),(470,'Chef','Kristy Ruiz',23.52,'2017-12-16'),(471,'Server','Victoria Newton',20.43,'2015-07-14'),(472,'Cleaner','Phillip Meadows',23.71,'2024-08-30'),(473,'Cleaner','Cynthia Stone',22.38,'2021-09-17'),(474,'Server','Michael Hawkins',14.35,'2015-02-15'),(475,'Server','Stacy Oneill',24.15,'2019-10-29'),(476,'Manager','Kylie Graves',16.33,'2018-05-02'),(477,'Chef','Kevin Lutz',16.15,'2023-11-19'),(478,'Cleaner','Eric French',20.70,'2016-10-06'),(479,'Manager','Emily Wood',10.68,'2021-05-29'),(480,'Manager','Charles Moreno',17.37,'2015-06-23'),(481,'Cleaner','Maria Kane',11.76,'2023-07-11'),(482,'Chef','Jacob Parker',16.64,'2017-08-15'),(483,'Manager','Jason Murray',17.89,'2024-10-06'),(484,'Cleaner','Patricia Lopez',22.00,'2015-12-12'),(485,'Chef','Vincent Munoz',24.61,'2021-05-11'),(486,'Cleaner','Thomas Anderson',14.32,'2022-12-06'),(487,'Chef','Bridget Kelley',23.92,'2019-10-26'),(488,'Server','Gabrielle Gill',20.74,'2021-12-31'),(489,'Server','Jennifer Garrison',21.34,'2017-09-22'),(490,'Chef','Susan Forbes',21.66,'2016-11-27'),(491,'Cleaner','Mary Baker',16.02,'2023-09-10'),(492,'Server','Kara Nolan',19.63,'2023-03-06'),(493,'Chef','Johnny Oconnor',24.66,'2020-06-20'),(494,'Cleaner','Brenda Christian MD',17.02,'2022-11-02'),(495,'Server','Thomas Weiss',20.26,'2015-01-09'),(496,'Manager','Lisa Mckinney',10.10,'2020-09-08'),(497,'Manager','Wendy Bryant',15.27,'2015-08-31'),(498,'Cleaner','James Frost',11.30,'2022-09-02'),(499,'Chef','Tina Luna',20.43,'2023-08-30'),(500,'Server','Nathan Brewer',18.23,'2021-02-15');
/*!40000 ALTER TABLE `Staff` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-17 21:30:30