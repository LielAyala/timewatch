-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2023 at 04:32 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `timewatch`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`) VALUES
(7, 'nj'),
(20, 'dor'),
(21, 'eliya'),
(25, 'ayalal'),
(26, 'ayalak'),
(27, 'ayalad'),
(28, 'ayalaliel'),
(29, 'raad'),
(30, 'צצלצ');

-- --------------------------------------------------------

--
-- Table structure for table `employees_time`
--

CREATE TABLE `employees_time` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `time_start` time DEFAULT NULL,
  `time_end` time DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees_time`
--

INSERT INTO `employees_time` (`id`, `name`, `time_start`, `time_end`, `date`) VALUES
(3, 'ayala', '10:00:00', '14:00:00', NULL),
(4, 'ayalal', NULL, NULL, NULL),
(6, 'ayalaliel', NULL, NULL, NULL),
(11, 'raed', '20:13:13', '20:13:29', '2023-09-27'),
(15, 'ayalak', '20:51:59', NULL, '2023-09-27'),
(18, 'raad', '21:01:15', '21:01:19', '2023-09-27'),
(19, 'eliya', '21:02:40', '21:02:44', '2023-09-27'),
(20, 'צצלצ', '11:43:16', '11:43:22', '2023-09-28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees_time`
--
ALTER TABLE `employees_time`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `employees_time`
--
ALTER TABLE `employees_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
