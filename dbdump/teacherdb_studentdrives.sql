-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: teacherdb
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `studentdrives`
--

DROP TABLE IF EXISTS `studentdrives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `studentdrives` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `driveId` int(11) DEFAULT NULL,
  `studentId` int(11) DEFAULT NULL,
  `appliedOn` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `studentName` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `emailId` varchar(255) DEFAULT NULL,
  `aggreagate` double DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `activeBacklog` int(11) DEFAULT NULL,
  `placed` int(11) DEFAULT NULL,
  `placedCompany` int(11) DEFAULT NULL,
  `tenPercentage` double DEFAULT NULL,
  `twelfthPercentage` double DEFAULT NULL,
  `tenBoard` varchar(255) DEFAULT NULL,
  `twelfthBoard` varchar(255) DEFAULT NULL,
  `diploma` double DEFAULT NULL,
  `gap` int(11) DEFAULT NULL,
  `enteranceRank` int(11) DEFAULT NULL,
  `resumeUrl` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `SEARCH_STUDENTDRIVES` (`studentName`,`phone`,`emailId`,`dob`,`tenBoard`,`twelfthBoard`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentdrives`
--

LOCK TABLES `studentdrives` WRITE;
/*!40000 ALTER TABLE `studentdrives` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentdrives` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-01 15:53:40
