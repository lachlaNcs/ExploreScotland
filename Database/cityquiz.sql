-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 11, 2024 at 07:45 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cityquiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `CityId` varchar(30) NOT NULL,
  `CityName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`CityId`, `CityName`) VALUES
('city_1', 'Glasgow'),
('city_2', 'Edinburgh');

-- --------------------------------------------------------

--
-- Table structure for table `landmark`
--

CREATE TABLE `landmark` (
  `LandmarkId` varchar(30) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `CityCityId` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `landmark`
--

INSERT INTO `landmark` (`LandmarkId`, `Name`, `CityCityId`) VALUES
('landmark_1', 'Necropolis', 'city_1'),
('landmark_2', 'Kelvingrove Park', 'city_1'),
('landmark_3', 'George Square', 'city_1'),
('landmark_4', 'Edinburgh Castle', 'city_2'),
('landmark_5', 'Holyrood Palace', 'city_2'),
('landmark_6', 'Royal Mile', 'city_2');

-- --------------------------------------------------------

--
-- Table structure for table `Question`
--

CREATE TABLE `Question` (
  `QuestionId` varchar(30) NOT NULL,
  `QuizQuizId` varchar(30) DEFAULT NULL,
  `Prompt` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Question`
--

INSERT INTO `Question` (`QuestionId`, `QuizQuizId`, `Prompt`) VALUES
('question_1', 'quiz_1', 'What river runs through Glasgow and has played a key role in its history?'),
('question_10', 'quiz_1', 'What nickname is commonly used for Glasgow?'),
('question_11', 'quiz_1', 'Which Glasgow landmark was gifted to the city by the shipbuilding magnate Lord Provost Sir James Campbell?'),
('question_12', 'quiz_1', 'Glasgow was designated as a European City of Culture in which year?'),
('question_13', 'quiz_1', 'The Glasgow Necropolis is often referred to as what?'),
('question_14', 'quiz_1', 'Who was the first woman to have a statue in Kelvingrove Park?'),
('question_15', 'quiz_1', 'Which Victorian architectural style is Glasgow Central Station known for?'),
('question_16', 'quiz_1', 'What famous ship was built in Glasgow and became the longest-serving Cunard ocean liner?'),
('question_17', 'quiz_1', 'Which event, celebrated by a massive exposition at Kelvingrove Park, took place in Glasgow in 1888?'),
('question_18', 'quiz_2', 'What is the oldest part of Edinburgh Castle?'),
('question_19', 'quiz_2', 'Holyrood Palace was originally founded as what type of building?'),
('question_2', 'quiz_1', 'Which architect designed the Glasgow School of Art?'),
('question_20', 'quiz_2', 'Which monarch ordered the construction of Holyrood Palace as a royal residence?'),
('question_21', 'quiz_2', 'In what century was Edinburgh Castle built?'),
('question_22', 'quiz_2', 'The \"Stone of Destiny,\" which is part of Edinburgh Castle\'s history, was used in the coronation of Scottish kings. Where is it now?'),
('question_23', 'quiz_2', 'What is the name of the oldest known building in Edinburgh?'),
('question_24', 'quiz_2', 'Which famous queen lived at Holyrood Palace during part of her reign?'),
('question_25', 'quiz_2', 'Edinburgh Castle sits on an extinct volcano known as what?'),
('question_26', 'quiz_2', 'Who famously held court at Holyrood Palace in the 16th century?'),
('question_27', 'quiz_2', 'What military ceremony is held daily at Edinburgh Castle?'),
('question_28', 'quiz_2', 'The Royal Mile stretches between which two iconic Edinburgh landmarks?'),
('question_29', 'quiz_2', 'Which king of Scotland was born at Edinburgh Castle?'),
('question_3', 'quiz_1', 'The Glasgow Necropolis was inspired by which famous cemetery?'),
('question_30', 'quiz_2', 'What is the purpose of the Great Hall in Edinburgh Castle?'),
('question_31', 'quiz_2', 'Who was murdered at Holyrood Palace in 1566, reportedly in front of Mary, Queen of Scots?'),
('question_32', 'quiz_2', 'Which part of Edinburgh Castle served as a prison for captured soldiers?'),
('question_33', 'quiz_2', 'What significant artifact related to Scottish royalty can be found at Edinburgh Castle?'),
('question_34', 'quiz_2', 'What marks the end of the Royal Mile in Edinburgh?'),
('question_35', 'quiz_2', 'Holyrood Abbey, located next to Holyrood Palace, was founded by which king?'),
('question_36', 'quiz_2', 'Which king of England captured Edinburgh Castle in 1296?'),
('question_37', 'quiz_2', 'Edinburgh Castle was a prominent stronghold during which historical conflict?'),
('question_4', 'quiz_1', 'Kelvingrove Art Gallery and Museum opened in which year?'),
('question_5', 'quiz_1', 'What style is the Kelvingrove Art Gallery and Museum known for?'),
('question_6', 'quiz_1', 'Which important industry helped Glasgow prosper in the 19th century?'),
('question_7', 'quiz_1', 'What year was the University of Glasgow founded?'),
('question_8', 'quiz_1', 'Who is buried in the Glasgow Necropolis?'),
('question_9', 'quiz_1', 'The statue of which Scottish historical figure stands at the main entrance of the Glasgow Necropolis?');

-- --------------------------------------------------------

--
-- Table structure for table `questionchoices`
--

CREATE TABLE `questionchoices` (
  `ChoiceId` varchar(30) NOT NULL,
  `Text` varchar(100) NOT NULL,
  `IsCorrect` bit(1) NOT NULL,
  `QuestionQuestionId` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questionchoices`
--

INSERT INTO `questionchoices` (`ChoiceId`, `Text`, `IsCorrect`, `QuestionQuestionId`) VALUES
('choice_1', 'River Clyde', b'1', 'question_1'),
('choice_2', 'River Tay', b'0', 'question_1'),
('choice_3', 'River Tweed', b'0', 'question_1'),
('choice_4', 'River Dee', b'0', 'question_1'),
('q10_choice_1', 'The Granite City', b'0', 'question_10'),
('q10_choice_2', 'The Flower of Scotland', b'0', 'question_10'),
('q10_choice_3', 'The City of Love', b'0', 'question_10'),
('q10_choice_4', 'The Dear Green Place', b'1', 'question_10'),
('q11_choice_1', 'The People’s Palace', b'0', 'question_11'),
('q11_choice_2', 'Kelvingrove Park', b'1', 'question_11'),
('q11_choice_3', 'The Mitchell Library', b'0', 'question_11'),
('q11_choice_4', 'St. Mungo’s Cathedral', b'0', 'question_11'),
('q12_choice_1', '1985', b'0', 'question_12'),
('q12_choice_2', '1990', b'1', 'question_12'),
('q12_choice_3', '1995', b'0', 'question_12'),
('q12_choice_4', '2000', b'0', 'question_12'),
('q13_choice_1', 'The City of the Dead', b'1', 'question_13'),
('q13_choice_2', 'The Land of Lost Souls', b'0', 'question_13'),
('q13_choice_3', 'The Valley of Rest', b'0', 'question_13'),
('q13_choice_4', 'The Hill of Ancestors', b'0', 'question_13'),
('q14_choice_1', 'Queen Victoria', b'0', 'question_14'),
('q14_choice_2', 'Florence Nightingale', b'1', 'question_14'),
('q14_choice_3', 'Mary Barbour', b'0', 'question_14'),
('q14_choice_4', 'Helen Crawfurd', b'0', 'question_14'),
('q15_choice_1', 'Gothic Revival', b'0', 'question_15'),
('q15_choice_2', 'Art Nouveau', b'1', 'question_15'),
('q15_choice_3', 'Romanesque', b'0', 'question_15'),
('q15_choice_4', 'Baroque', b'0', 'question_15'),
('q16_choice_1', 'Titanic', b'0', 'question_16'),
('q16_choice_2', 'Queen Mary', b'0', 'question_16'),
('q16_choice_3', 'Queen Elizabeth 2', b'1', 'question_16'),
('q16_choice_4', 'Lusitania', b'0', 'question_16'),
('q18_choice_1', 'The Glasgow Industrial Exhibition', b'0', 'question_18'),
('q18_choice_2', 'The International Exhibition', b'1', 'question_18'),
('q18_choice_3', 'The British Empire Exhibition', b'0', 'question_18'),
('q18_choice_4', 'The Scottish World’s Fair', b'0', 'question_18'),
('q19_choice_1', 'Castle', b'0', 'question_19'),
('q19_choice_2', 'Abbey', b'1', 'question_19'),
('q19_choice_3', 'Manor', b'0', 'question_19'),
('q19_choice_4', 'Fort', b'0', 'question_19'),
('q20_choice_1', 'Robert the Bruce', b'0', 'question_20'),
('q20_choice_2', 'Mary, Queen of Scots', b'0', 'question_20'),
('q20_choice_3', 'James IV', b'1', 'question_20'),
('q20_choice_4', 'William Wallace', b'0', 'question_20'),
('q21_choice_1', '9th century', b'0', 'question_21'),
('q21_choice_2', '12th century', b'1', 'question_21'),
('q21_choice_3', '14th century', b'0', 'question_21'),
('q21_choice_4', '16th century', b'0', 'question_21'),
('q22_choice_1', 'Westminster Abbey', b'1', 'question_22'),
('q22_choice_2', 'St. Giles\' Cathedral', b'0', 'question_22'),
('q22_choice_3', 'Holyrood Palace', b'0', 'question_22'),
('q22_choice_4', 'In a museum in Stirling', b'0', 'question_22'),
('q23_choice_1', 'Holyrood Palace', b'0', 'question_23'),
('q23_choice_2', 'St. Giles\' Cathedral', b'0', 'question_23'),
('q23_choice_3', 'Edinburgh Castle', b'0', 'question_23'),
('q23_choice_4', 'St. Margaret\'s Chapel', b'1', 'question_23'),
('q24_choice_1', 'Mary, Queen of Scots', b'1', 'question_24'),
('q24_choice_2', 'Queen Victoria', b'0', 'question_24'),
('q24_choice_3', 'Queen Elizabeth I', b'0', 'question_24'),
('q24_choice_4', 'Queen Anne', b'0', 'question_24'),
('q25_choice_1', 'Castle Hill', b'1', 'question_25'),
('q25_choice_2', 'Calton Hill', b'0', 'question_25'),
('q25_choice_3', 'Arthur\'s Seat', b'0', 'question_25'),
('q25_choice_4', 'The Mound', b'0', 'question_25'),
('q26_choice_1', 'Queen Elizabeth I', b'0', 'question_26'),
('q26_choice_2', 'King Henry VIII', b'0', 'question_26'),
('q26_choice_3', 'Mary, Queen of Scots', b'1', 'question_26'),
('q26_choice_4', 'King James I', b'0', 'question_26'),
('q27_choice_1', 'The Changing of the Guard', b'0', 'question_27'),
('q27_choice_2', 'The Firing of the One O\'Clock Gun', b'1', 'question_27'),
('q27_choice_3', 'The Ceremonial Sword Presentation', b'0', 'question_27'),
('q27_choice_4', 'The Bagpipe Procession', b'0', 'question_27'),
('q28_choice_1', 'Edinburgh Castle and Calton Hill', b'0', 'question_28'),
('q28_choice_2', 'Holyrood Palace and St. Giles\' Cathedral', b'0', 'question_28'),
('q28_choice_3', 'Edinburgh Castle and Holyrood Palace', b'1', 'question_28'),
('q28_choice_4', 'The Mound and Calton Hill', b'0', 'question_28'),
('q29_choice_1', 'King James I', b'0', 'question_29'),
('q29_choice_2', 'King Robert the Bruce', b'0', 'question_29'),
('q29_choice_3', 'King James VI', b'1', 'question_29'),
('q29_choice_4', 'King David II', b'0', 'question_29'),
('q2_choice_1', 'Sir Robert Rowand Anderson', b'0', 'question_2'),
('q2_choice_2', 'Charles Rennie Mackintosh', b'1', 'question_2'),
('q2_choice_3', 'Alexander Thomson', b'0', 'question_2'),
('q2_choice_4', 'Norman Foster', b'0', 'question_2'),
('q30_choice_1', 'It served as a courtroom', b'0', 'question_30'),
('q30_choice_2', 'It was used for grand banquets and ceremonies', b'1', 'question_30'),
('q30_choice_3', 'It was a private chapel', b'0', 'question_30'),
('q30_choice_4', 'It housed prisoners', b'0', 'question_30'),
('q31_choice_1', 'King Henry VIII', b'0', 'question_31'),
('q31_choice_2', 'David Rizzio', b'1', 'question_31'),
('q31_choice_3', 'Lord Darnley', b'0', 'question_31'),
('q31_choice_4', 'James IV', b'0', 'question_31'),
('q32_choice_1', 'The Great Hall', b'0', 'question_32'),
('q32_choice_2', 'The Vaults', b'1', 'question_32'),
('q32_choice_3', 'St. Margaret\'s Chapel', b'0', 'question_32'),
('q32_choice_4', 'Crown Square', b'0', 'question_32'),
('q33_choice_1', 'The Scottish Crown Jewels', b'1', 'question_33'),
('q33_choice_2', 'The Magna Carta', b'0', 'question_33'),
('q33_choice_3', 'The Sword of State', b'0', 'question_33'),
('q33_choice_4', 'The Spear of Destiny', b'0', 'question_33'),
('q34_choice_1', 'Edinburgh Castle', b'0', 'question_34'),
('q34_choice_2', 'Holyrood Palace', b'1', 'question_34'),
('q34_choice_3', 'St. Giles\' Cathedral', b'0', 'question_34'),
('q34_choice_4', 'Calton Hill', b'0', 'question_34'),
('q35_choice_1', 'David I', b'1', 'question_35'),
('q35_choice_2', 'Alexander III', b'0', 'question_35'),
('q35_choice_3', 'James VI', b'0', 'question_35'),
('q35_choice_4', 'Robert the Bruce', b'0', 'question_35'),
('q36_choice_1', 'Edward I', b'1', 'question_36'),
('q36_choice_2', 'Richard the Lionheart', b'0', 'question_36'),
('q36_choice_3', 'Henry V', b'0', 'question_36'),
('q36_choice_4', 'William the Conqueror', b'0', 'question_36'),
('q37_choice_1', 'The Hundred Years\' War', b'0', 'question_37'),
('q37_choice_2', 'The Wars of Scottish Independence', b'1', 'question_37'),
('q37_choice_3', 'The Jacobite Rebellion', b'0', 'question_37'),
('q37_choice_4', 'The English Civil War', b'0', 'question_37'),
('q3_choice_1', 'Père Lachaise in Paris', b'1', 'question_3'),
('q3_choice_2', 'Highgate in London', b'0', 'question_3'),
('q3_choice_3', 'Arlington in Washington, D.C.', b'0', 'question_3'),
('q3_choice_4', 'Mount Auburn in Cambridge, MA', b'0', 'question_3'),
('q4_choice_1', '1851', b'0', 'question_4'),
('q4_choice_2', '1901', b'1', 'question_4'),
('q4_choice_3', '1925', b'0', 'question_4'),
('q4_choice_4', '1950', b'0', 'question_4'),
('q5_choice_1', 'Gothic Revival', b'0', 'question_5'),
('q5_choice_2', 'Neoclassical', b'0', 'question_5'),
('q5_choice_3', 'Spanish Baroque', b'1', 'question_5'),
('q5_choice_4', 'Art Deco', b'0', 'question_5'),
('q6_choice_1', 'Textile', b'0', 'question_6'),
('q6_choice_2', 'Shipbuilding', b'1', 'question_6'),
('q6_choice_3', 'Coal Mining', b'0', 'question_6'),
('q6_choice_4', 'Agriculture', b'0', 'question_6'),
('q7_choice_1', '1351', b'0', 'question_7'),
('q7_choice_2', '1451', b'1', 'question_7'),
('q7_choice_3', '1551', b'0', 'question_7'),
('q7_choice_4', '1651', b'0', 'question_7'),
('q8_choice_1', 'Alexander Thomson', b'1', 'question_8'),
('q8_choice_2', 'Thomas Telford', b'0', 'question_8'),
('q8_choice_3', 'Charles Rennie Mackintosh', b'0', 'question_8'),
('q8_choice_4', 'William Wallace', b'0', 'question_8'),
('q9_choice_1', 'Robert Burns', b'0', 'question_9'),
('q9_choice_2', 'William Wallace', b'0', 'question_9'),
('q9_choice_3', 'John Knox', b'1', 'question_9'),
('q9_choice_4', 'Mary, Queen of Scots', b'0', 'question_9');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `QuizId` varchar(30) NOT NULL,
  `QuizName` varchar(500) DEFAULT NULL,
  `CityCityId` varchar(30) DEFAULT NULL,
  `userId` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`QuizId`, `QuizName`, `CityCityId`, `userId`) VALUES
('quiz_1', 'Glasgow City Quiz', 'city_1', NULL),
('quiz_2', 'Edinburgh City Quiz', 'city_2', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` varchar(30) NOT NULL,
  `emailAddress` varchar(50) NOT NULL,
  `password` varchar(15) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`CityId`);

--
-- Indexes for table `landmark`
--
ALTER TABLE `landmark`
  ADD PRIMARY KEY (`LandmarkId`),
  ADD KEY `CityCityId` (`CityCityId`);

--
-- Indexes for table `Question`
--
ALTER TABLE `Question`
  ADD PRIMARY KEY (`QuestionId`),
  ADD KEY `QuizQuizId` (`QuizQuizId`);

--
-- Indexes for table `questionchoices`
--
ALTER TABLE `questionchoices`
  ADD PRIMARY KEY (`ChoiceId`),
  ADD KEY `QuestionQuestionId` (`QuestionQuestionId`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`QuizId`),
  ADD KEY `CityCityId` (`CityCityId`),
  ADD KEY `fk_user_id` (`userId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `landmark`
--
ALTER TABLE `landmark`
  ADD CONSTRAINT `landmark_ibfk_1` FOREIGN KEY (`CityCityId`) REFERENCES `city` (`CityId`);

--
-- Constraints for table `Question`
--
ALTER TABLE `Question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`QuizQuizId`) REFERENCES `quiz` (`QuizId`);

--
-- Constraints for table `questionchoices`
--
ALTER TABLE `questionchoices`
  ADD CONSTRAINT `fk_questionchoices_question` FOREIGN KEY (`QuestionQuestionId`) REFERENCES `Question` (`QuestionId`),
  ADD CONSTRAINT `questionchoices_ibfk_1` FOREIGN KEY (`QuestionQuestionId`) REFERENCES `question` (`QuestionId`);

--
-- Constraints for table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  ADD CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`CityCityId`) REFERENCES `city` (`CityId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
