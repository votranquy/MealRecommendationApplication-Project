-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th3 30, 2019 lúc 11:33 AM
-- Phiên bản máy phục vụ: 10.1.37-MariaDB
-- Phiên bản PHP: 7.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `MealRecommendationApp`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `FOOD`
--

CREATE TABLE `FOOD` (
  `id` int(10) NOT NULL,
  `food_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `food_detail` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `id_food_category` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `FOOD_CATEGORY`
--

CREATE TABLE `FOOD_CATEGORY` (
  `id` int(10) NOT NULL,
  `category_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `category_detail` varchar(1000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `FOOD_IMAGE`
--

CREATE TABLE `FOOD_IMAGE` (
  `id` int(10) NOT NULL,
  `id_food` int(10) NOT NULL,
  `img_path` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `KEYWORD`
--

CREATE TABLE `KEYWORD` (
  `id` int(10) NOT NULL,
  `keyword` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `times` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `KEYWORD_AND_FOOD`
--

CREATE TABLE `KEYWORD_AND_FOOD` (
  `id` int(10) NOT NULL,
  `id_food` int(10) NOT NULL,
  `id_keyword` int(10) NOT NULL,
  `times` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `MARK`
--

CREATE TABLE `MARK` (
  `id` int(10) NOT NULL,
  `id_user` int(10) NOT NULL,
  `id_food` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ROLE`
--

CREATE TABLE `ROLE` (
  `id` int(10) NOT NULL,
  `role_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `role_detail` varchar(1000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `ROLE`
--

INSERT INTO `ROLE` (`id`, `role_name`, `role_detail`) VALUES
(1, 'USER', 'Users who use the application'),
(2, 'ADMIN', 'Administrators who manage the application');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `SEARCH_HISTORY`
--

CREATE TABLE `SEARCH_HISTORY` (
  `id` int(10) NOT NULL,
  `id_user` int(10) NOT NULL,
  `id_keyword` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `USER`
--

CREATE TABLE `USER` (
  `id` int(10) NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `id_role` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `USER`
--

INSERT INTO `USER` (`id`, `username`, `password`, `phone_number`, `id_role`) VALUES
(1, 'votranquy', '1422fd0b46ef896dc640de942ef5345d', '0369380628', 1),
(2, 'teo', 'e827aa1ed78e96a113182dce12143f9f', '0988765456', 1),
(3, 'ti', 'ti', '3453453', 1),
(4, 'lan', 'lan', '3567', 1),
(5, 'ngoc', 'ngoc', '902939', 1),
(6, 'quynh', 'quynh', '345678', 1),
(7, 'binh', 'binh', '3456789', 1),
(8, 'quy', 'quy', '34567890', 1),
(9, 'tung', 'tung', '34567890', 1),
(10, 'dinh', 'dinh', '34567890', 1),
(11, 'cuong', 'cuong', '23456789', 1),
(12, 'tuyen', 'tuyen', '34567890', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `USER_IMAGE`
--

CREATE TABLE `USER_IMAGE` (
  `id` int(10) NOT NULL,
  `id_user` int(10) NOT NULL,
  `img_path` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `VOTE`
--

CREATE TABLE `VOTE` (
  `id` int(10) NOT NULL,
  `id_user` int(10) NOT NULL,
  `id_food` int(10) NOT NULL,
  `score` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `FOOD`
--
ALTER TABLE `FOOD`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_food_category` (`id_food_category`);

--
-- Chỉ mục cho bảng `FOOD_CATEGORY`
--
ALTER TABLE `FOOD_CATEGORY`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `FOOD_IMAGE`
--
ALTER TABLE `FOOD_IMAGE`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_food` (`id_food`);

--
-- Chỉ mục cho bảng `KEYWORD`
--
ALTER TABLE `KEYWORD`
  ADD PRIMARY KEY (`id`),
  ADD KEY `keyword` (`keyword`);

--
-- Chỉ mục cho bảng `KEYWORD_AND_FOOD`
--
ALTER TABLE `KEYWORD_AND_FOOD`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_food` (`id_food`),
  ADD KEY `id_keyword` (`id_keyword`);

--
-- Chỉ mục cho bảng `MARK`
--
ALTER TABLE `MARK`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_food` (`id_food`);

--
-- Chỉ mục cho bảng `ROLE`
--
ALTER TABLE `ROLE`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `SEARCH_HISTORY`
--
ALTER TABLE `SEARCH_HISTORY`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_keyword` (`id_keyword`);

--
-- Chỉ mục cho bảng `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_role` (`id_role`);

--
-- Chỉ mục cho bảng `USER_IMAGE`
--
ALTER TABLE `USER_IMAGE`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Chỉ mục cho bảng `VOTE`
--
ALTER TABLE `VOTE`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_food` (`id_food`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `FOOD`
--
ALTER TABLE `FOOD`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `FOOD_CATEGORY`
--
ALTER TABLE `FOOD_CATEGORY`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `FOOD_IMAGE`
--
ALTER TABLE `FOOD_IMAGE`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `KEYWORD`
--
ALTER TABLE `KEYWORD`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `KEYWORD_AND_FOOD`
--
ALTER TABLE `KEYWORD_AND_FOOD`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `MARK`
--
ALTER TABLE `MARK`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `ROLE`
--
ALTER TABLE `ROLE`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `SEARCH_HISTORY`
--
ALTER TABLE `SEARCH_HISTORY`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `USER`
--
ALTER TABLE `USER`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `USER_IMAGE`
--
ALTER TABLE `USER_IMAGE`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `VOTE`
--
ALTER TABLE `VOTE`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `FOOD`
--
ALTER TABLE `FOOD`
  ADD CONSTRAINT `FOOD_ibfk_1` FOREIGN KEY (`id_food_category`) REFERENCES `FOOD_CATEGORY` (`id`);

--
-- Các ràng buộc cho bảng `FOOD_IMAGE`
--
ALTER TABLE `FOOD_IMAGE`
  ADD CONSTRAINT `FOOD_IMAGE_ibfk_1` FOREIGN KEY (`id_food`) REFERENCES `FOOD` (`id`);

--
-- Các ràng buộc cho bảng `KEYWORD_AND_FOOD`
--
ALTER TABLE `KEYWORD_AND_FOOD`
  ADD CONSTRAINT `KEYWORD_AND_FOOD_ibfk_1` FOREIGN KEY (`id_keyword`) REFERENCES `KEYWORD` (`id`),
  ADD CONSTRAINT `KEYWORD_AND_FOOD_ibfk_2` FOREIGN KEY (`id_food`) REFERENCES `FOOD` (`id`);

--
-- Các ràng buộc cho bảng `MARK`
--
ALTER TABLE `MARK`
  ADD CONSTRAINT `MARK_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `USER` (`id`),
  ADD CONSTRAINT `MARK_ibfk_2` FOREIGN KEY (`id_food`) REFERENCES `FOOD` (`id`);

--
-- Các ràng buộc cho bảng `SEARCH_HISTORY`
--
ALTER TABLE `SEARCH_HISTORY`
  ADD CONSTRAINT `SEARCH_HISTORY_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `USER` (`id`),
  ADD CONSTRAINT `SEARCH_HISTORY_ibfk_2` FOREIGN KEY (`id_keyword`) REFERENCES `KEYWORD` (`id`);

--
-- Các ràng buộc cho bảng `USER`
--
ALTER TABLE `USER`
  ADD CONSTRAINT `USER_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `ROLE` (`id`);

--
-- Các ràng buộc cho bảng `USER_IMAGE`
--
ALTER TABLE `USER_IMAGE`
  ADD CONSTRAINT `USER_IMAGE_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `USER` (`id`);

--
-- Các ràng buộc cho bảng `VOTE`
--
ALTER TABLE `VOTE`
  ADD CONSTRAINT `VOTE_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `USER` (`id`),
  ADD CONSTRAINT `VOTE_ibfk_2` FOREIGN KEY (`id_food`) REFERENCES `FOOD` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
