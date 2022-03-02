-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2022 at 12:44 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticketmysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `ticketBal` int(11) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `dateTime` datetime DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `title`, `description`, `ticketBal`, `price`, `dateTime`, `location`, `image`) VALUES
(1, 'Art Event Dance', 'Lorem ipsum dolor sit amet, omittam voluptatum et mei, ex alia mazim harum eos, maiorum delicata pri in. Ei quot placerat lucilius nec, exerci possit mei in. Nihil complectitur eos ut. Fugit dicit eloquentiam in sed. Modus justo ea pro, doctus admodum gloriatur mel cu. At idque errem partiendo mea.', 50, '10.00', '2022-02-18 22:14:06', 'Online', 'https://www.teamlab.art/images/pc-l/14591'),
(2, 'Art Event Dance', 'Mea falli aliquid facilisi ex, error mandamus intellegebat ius at, an est regione malorum nominati. Delenit vituperata repudiandae pri ea, summo fierent pri eu. Cu nam possim deseruisse, pri regione placerat efficiantur ad. Eam ex cetero nusquam accommodare, nonumy populo id sea. Viderer copiosae eu pro.\r\n\r\nMaluisset delicatissimi no nec, ea tation iracundia mel. In debet ridens audire sit, saepe option alterum vis ad. Sed populo quidam vituperatoribus te, sit at recteque intellegebat, an sed veri semper. Eu vel velit dicunt. Mel animal consetetur in. Ea sea unum sensibus moderatius, erat eruditi repudiandae ea quo. Vide animal est ad, at eam quando latine similique.\r\n\r\nAudiam commodo luptatum mea ut, cum legendos repudiare ad, eos nonumy verear oblique ad. Has invidunt assueverit eu, probo convenire voluptatum an mel. Vim porro latine te, mei dicunt possim no, dico cibo cum at. Erroribus adolescens deterruisset sit cu, an his periculis aliquando.\r\n', 50, '0.00', '2022-02-18 22:14:06', 'Online', 'https://www.teamlab.art/images/pc-l/14591');

-- --------------------------------------------------------

--
-- Table structure for table `poster`
--

CREATE TABLE `poster` (
  `id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `url` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `event_Id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `event_Id`, `quantity`, `user_name`, `email`) VALUES
(1, 1, 50, 'Jammie Chua', 'jammiechua@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `poster`
--
ALTER TABLE `poster`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `url` (`url`),
  ADD KEY `evt_fk` (`event_id`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_fk` (`event_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `poster`
--
ALTER TABLE `poster`
  ADD CONSTRAINT `evt_fk` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `event_fk` FOREIGN KEY (`event_Id`) REFERENCES `event` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
