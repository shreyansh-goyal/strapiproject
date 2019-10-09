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
-- Table structure for table `testw`
--

DROP TABLE IF EXISTS `testw`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `testw` (
  `studentId` int(11) NOT NULL AUTO_INCREMENT,
  `enrollmentNo` varchar(50) NOT NULL DEFAULT '0',
  `rollNo` int(11) NOT NULL DEFAULT '0',
  `courseId` int(11) NOT NULL DEFAULT '0',
  `semester` int(11) NOT NULL DEFAULT '0',
  `year` int(11) NOT NULL DEFAULT '0',
  `section` varchar(5) NOT NULL DEFAULT '0',
  `group` varchar(5) NOT NULL DEFAULT '0',
  `studentName` varchar(50) NOT NULL DEFAULT '0',
  `fatherName` varchar(50) NOT NULL DEFAULT '0',
  `motherName` varchar(50) NOT NULL DEFAULT '0',
  `gender` char(1) NOT NULL DEFAULT '0',
  `dob` varchar(50) NOT NULL DEFAULT '0',
  `phoneNo` varchar(15) NOT NULL DEFAULT '0',
  `fatherPhoneNo` varchar(15) NOT NULL DEFAULT '0',
  `emailId` varchar(50) NOT NULL DEFAULT '0',
  `fatherEmailId` varchar(50) NOT NULL DEFAULT '0',
  `isDropped` tinyint(4) NOT NULL DEFAULT '0',
  `dropReason` varchar(200) NOT NULL DEFAULT '0',
  `aggregate` float NOT NULL DEFAULT '0',
  `activeBacklogs` int(11) NOT NULL DEFAULT '0',
  `placed` int(11) NOT NULL DEFAULT '0',
  `companyName` varchar(100) NOT NULL DEFAULT '0',
  `tenPercentage` float NOT NULL DEFAULT '0',
  `twelfthPercentage` float NOT NULL DEFAULT '0',
  `diploma` varchar(50) NOT NULL DEFAULT '0' COMMENT '// to enter na...',
  `gap` int(11) NOT NULL DEFAULT '0',
  `enteranceRank` int(11) NOT NULL DEFAULT '0',
  `resumeUrl` varchar(500) NOT NULL DEFAULT '0',
  `blockedFromDrive` int(11) NOT NULL DEFAULT '0',
  `libraryId` varchar(50) NOT NULL DEFAULT '0',
  `libraryFine` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`studentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testw`
--

LOCK TABLES `testw` WRITE;
/*!40000 ALTER TABLE `testw` DISABLE KEYS */;
/*!40000 ALTER TABLE `testw` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-01 15:53:39
