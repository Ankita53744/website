-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2024 at 08:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elder_care_harmony`
--

-- --------------------------------------------------------

--
-- Table structure for table `nurses`
--

CREATE TABLE `nurses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `specialty` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `contact_info` varchar(255) DEFAULT NULL,
  `photo_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nurses`
--

INSERT INTO `nurses` (`id`, `name`, `specialty`, `city`, `contact_info`, `photo_url`) VALUES
(1, 'Alice Smith', 'Pediatric Nurse', 'New York', 'alice@example.com', 'path/to/alice_photo.jpg'),
(2, 'John Doe', 'Cardiac Nurse', 'Los Angeles', 'john@example.com', 'path/to/john_photo.jpg'),
(3, 'Alice Smith', 'Pediatric Nurse', 'New York', 'alice@example.com', 'path/to/alice_photo.jpg'),
(4, 'John Doe', 'Cardiac Nurse', 'Los Angeles', 'john@example.com', 'path/to/john_photo.jpg'),
(5, 'Alice Smith', 'Pediatric Nurse', 'New York', 'alice@example.com', 'path/to/alice_photo.jpg'),
(6, 'John Doe', 'Cardiac Nurse', 'Los Angeles', 'john@example.com', 'path/to/john_photo.jpg'),
(7, 'Alice Smith', 'Pediatric Nurse', 'New York', 'alice@example.com', 'path/to/alice_photo.jpg'),
(8, 'John Doe', 'Cardiac Nurse', 'Los Angeles', 'john@example.com', 'path/to/john_photo.jpg'),
(9, 'Alice Smith', 'Pediatric Nurse', 'New York', 'alice@example.com', 'path/to/alice_photo.jpg'),
(10, 'John Doe', 'Cardiac Nurse', 'Los Angeles', 'john@example.com', 'path/to/john_photo.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nurses`
--
ALTER TABLE `nurses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nurses`
--
ALTER TABLE `nurses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
