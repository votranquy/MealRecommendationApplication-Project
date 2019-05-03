-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th4 03, 2019 lúc 12:55 PM
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
  `address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_food_category` int(10) NOT NULL,
  `district` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `worktime` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `rate` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `FOOD`
--

INSERT INTO `FOOD` (`id`, `food_name`, `address`, `id_food_category`, `district`, `latitude`, `longitude`, `worktime`, `rate`) VALUES
(347, 'Ship Đồ Ăn Đêm Đà Thành', '273 Đống Đa ', 68, 'Quận Hải Châu', 16.0734, 108.214, ' 18:00 - 00:30', 7.6),
(348, 'Rómy Food - Giao Đồ Ăn Tận Nơi', '356 Ngũ Hành Sơn', 69, 'Quận Ngũ Hành Sơn', 16.0405, 108.242, ' 07:00 - 20:00', 7.7),
(349, 'Đồ Ăn Đặc Sản Các Miền Nana - Shop Online', '160/38 Nguyễn Hoàng', 69, 'Quận Hải Châu', 16.0646, 108.214, ' 08:00 - 22:00', 9),
(350, 'Mumtaz - Ẩm Thực Ấn Độ', '69 Hoài Thanh', 70, 'Quận Ngũ Hành Sơn', 16.0486, 108.237, ' 10:00 - 22:00', 8.2),
(351, 'Tandoori Nights - Nhà Hàng Ấn Độ', '12 An Thượng 5, P. Mỹ An', 70, 'Quận Ngũ Hành Sơn', 16.0489, 108.245, ' 07:00 - 22:00', 9.4),
(352, 'Nơm Bistro - Món Việt', 'Lô A1 - 04 Khu Biệt Thự Đảo Xanh', 70, 'Quận Hải Châu', 16.0474, 108.228, ' 07:00 - 22:00', 7.6),
(353, 'Nhà Hàng Đủng Đỉnh - Các Món Ăn Việt Nam', '207 Nguyễn Văn Thoại', 70, 'Quận Sơn Trà', 16.0556, 108.244, ' 00:00 - 03:00 | 09:', 8.6),
(354, 'Pozaa Tea - Bùi Quốc Hưng', '22 Bùi Quốc Hưng', 71, 'Quận Sơn Trà', 16.1012, 108.244, ' 07:00 - 21:30', 9.7),
(355, 'Hương Vị Bắc - TTTM Parkson Đà Nẵng', 'Tầng 4, TTTM Parkson, 255 - 257 Hùng Vương', 70, 'Quận Thanh Khê', 16.0666, 108.213, ' 10:00 - 21:00', 7.8),
(356, 'An Nam Restaurant - Ẩm Thực Việt', '38 Hồ Xuân Hương', 70, 'Quận Ngũ Hành Sơn', 16.0389, 108.245, ' 06:00 - 22:00', 9),
(357, 'Takumi Restaurant - Ẩm Thực Nhật', '33 Chu Văn An, P. Bình Thuận', 70, 'Quận Hải Châu', 16.0569, 108.218, ' 11:00 - 13:30 | 17:', 8.2),
(358, 'Đặc Sản Lào - Nhậu Bình Dân', 'Lô 1409 Xô Viết Nghệ Tĩnh (Số 108 Xô Viết Nghệ Tĩnh)', 72, 'Quận Hải Châu', 16.0321, 108.215, ' 08:30 - 23:30', 7),
(359, 'Little Tokyo - Restaurant & Bar', '372 - 376 Võ Nguyên Giáp', 70, 'Quận Ngũ Hành Sơn', 16.0436, 108.248, ' 10:00 - 23:00', 7.7),
(360, 'Lem Food - Shop Online', 'K94 Lê Hữu Trác', 69, 'Quận Sơn Trà', 16.058, 108.239, ' 08:00 - 22:00', 8.3),
(361, 'Bếp Nhà Tui Nấu - Shop Online', 'K16/306 Hùng Vương ', 69, 'Quận Hải Châu', 16.0686, 108.225, ' 06:30 - 21:30', 4.2),
(362, 'Tiệm Ăn Triều Hợp', '26 Trần Bình Trọng', 68, 'Quận Hải Châu', 16.0662, 108.219, ' 10:00 - 22:00', 7.8),
(363, 'ANS - Đặc Sản Chay Đà Nẵng', '169F Trưng Nữ Vương', 73, 'Quận Hải Châu', 16.0553, 108.22, ' 07:30 - 22:00', 7),
(364, 'The Authentic Hoian Restaurant & Cafe', '02 Lê Thanh Nghị', 74, 'Quận Hải Châu', 16.0443, 108.217, ' 06:00 - 22:00', 8.5),
(365, 'Tranquilos - Restaurant & Bar', '6 An Thượng 1, P. Mỹ An', 75, 'Quận Ngũ Hành Sơn', 16.0499, 108.248, ' 08:00 - 22:00', 7.9),
(366, 'Mây Restaurant - Món Việt', 'K25/16 Lý Thường Kiệt', 70, 'Quận Hải Châu', 16.08, 108.221, ' 11:00 - 22:00', 8.1),
(367, 'Hải Sản Phố', '51 Võ Nguyên Giáp', 70, 'Quận Ngũ Hành Sơn', 16.0561, 108.247, ' 10:00 - 23:00', 7.5),
(368, 'An Viên Coffee', '45 Hoàng Thị Loan', 71, 'Quận Liên Chiểu', 16.0635, 108.176, ' 07:00 - 22:00', 7.7),
(369, '3Ly Coffee House & Food', '67 Đinh Công Trứ', 71, 'Quận Sơn Trà', 16.0683, 108.231, ' 09:00 - 21:00', 8),
(370, 'Nhà Hàng Chả Cá Toàn Thắng', '60 Pasteur', 70, 'Quận Hải Châu', 16.0698, 108.218, ' 11:00 - 22:00', 8.5),
(371, 'Chân Gà Sả Ớt Hà An', 'K129/80 Tiểu La, P. Hòa Cường Bắc', 76, 'Quận Hải Châu', 16.0455, 108.218, ' 07:00 - 23:30', 7.2),
(372, 'Tư Hề - Đặc Sản Nướng', 'Kiệt 408 Hoàng Diệu', 68, 'Quận Hải Châu', 16.0546, 108.217, ' 16:30 - 22:30', 7.2),
(373, 'Bà Nội Quán - Yên Bái', 'Ngã Ba Yên Bái - Phạm Hồng Thái', 76, 'Quận Hải Châu', 16.067, 108.222, ' 06:00 - 18:00', 6.8),
(374, 'Quán Dê 86', '86 Châu Thị Vĩnh Tế, P. Mỹ An', 77, 'Quận Ngũ Hành Sơn', 16.0513, 108.24, ' 16:00 - 22:00', 7.8),
(375, 'New Space - Cafe & Các Món Nhậu', '457 Điện Biên Phủ', 78, 'Quận Thanh Khê', 16.0655, 108.187, ' 06:30 - 23:00', 7.6),
(376, 'Simple - Trái Cây Lắc & Tháp Trà Sữa', '137 Huỳnh Thúc Kháng', 76, 'Quận Hải Châu', 16.0587, 108.218, ' 13:30 - 22:00', 7.6),
(377, 'Phì Lũ 1', '225 Nguyễn Chí Thanh', 74, 'Quận Hải Châu', 16.067, 108.221, ' 08:00 - 22:30', 7.6),
(378, 'Thực Dưỡng Bảo An', '56 Hoàng Bích Sơn', 73, 'Quận Sơn Trà', 16.0753, 108.241, ' 06:00 - 19:30', 6.3),
(379, 'Bà Tình - Bánh Xèo Miền Trung - Phan Đăng Lưu', '1 Phan Đăng Lưu, Khu Ẩm Thực Helio', 68, 'Quận Hải Châu', 16.0391, 108.226, ' 17:00 - 22:30', 7.9),
(380, 'Chu Chu - Nhà Hàng Hàn Quốc', '118 Yên Bái', 70, 'Quận Hải Châu', 16.0653, 108.222, ' 10:00 - 21:00', 8.9),
(381, 'Quán Cay - Nhậu Bình Dân', 'Lô 11-A1 Khu Dân Cư Vạn Tường, Nguyễn An Ninh', 72, 'Quận Liên Chiểu', 16.089, 108.15, ' 10:00 - 22:00', 9.2),
(382, 'Golden Crack - Coffee - Bar & Restaurant', '13 An Thượng 31', 71, 'Quận Ngũ Hành Sơn', 16.0506, 108.247, ' 09:00 - 23:00', 8.8),
(383, 'Bún Đậu Thị Mẹt - Đỗ Quang', '115 Đỗ Quang, P. Vĩnh Trung', 68, 'Quận Thanh Khê', 16.0586, 108.212, ' 10:00 - 21:00', 6.4),
(384, 'FULL HOUSE Everywhere - Milk Tea & Pizza', '4 Trần Văn Đang, P. Khuê Trung', 68, 'Quận Cẩm Lệ', 16.0199, 108.208, ' 09:00 - 22:00', 7.1),
(385, 'Lệ Lùn - Bún Đậu & Mì Cay', '19 An Hải Bắc 7', 68, 'Quận Sơn Trà', 16.0797, 108.232, ' 15:00 - 22:00', 3),
(386, 'Kawaii Milktea - Núi Thành', '466 Núi Thành (1 Trịnh Công Sơn)', 76, 'Quận Hải Châu', 16.0346, 108.222, ' 18:00 - 22:00', 8.4),
(387, 'Đặc Sản Truyền Thống - Bánh Đúc & Bánh Tổ', '521 Trần Cao Vân', 68, 'Quận Thanh Khê', 16.0712, 108.19, ' 07:00 - 21:00', 2.8),
(388, 'Liều - Trà Sữa & Ăn Vặt', '31 Đoàn Phú Tứ', 76, 'Quận Liên Chiểu', 16.0686, 108.146, ' 06:00 - 22:00', 8.8),
(389, 'Quán Chay An Lạc Tâm', '117 Phan Đăng Lưu', 68, 'Quận Hải Châu', 16.0361, 108.216, ' 06:30 - 14:00 | 16:', 7.3),
(390, 'Nhà Hàng Sinh Thái Chân Trời Góc Bể', 'Lô 3 Lê Văn Duyệt', 70, 'Quận Sơn Trà', 16.0966, 108.224, ' 06:00 - 20:00', 7.3),
(391, 'Quán 48 - Cháo Gà & Vịt', '48 Trưng Nữ Vương', 68, 'Quận Hải Châu', 16.0598, 108.222, ' 09:00 - 21:00', 6.6),
(392, 'Đại Hỷ Quán - Gà & Hải Sản Tự Chọn', '1369 Nguyễn Tất Thành', 68, 'Quận Thanh Khê', 16.0749, 108.181, ' 11:00 - 23:00', 7.2),
(393, 'Sáu Hào - Đặc Sản Gỏi Cá', '232 Trần Cao Vân', 68, 'Quận Thanh Khê', 16.0719, 108.206, ' 10:00 - 23:00', 7.5),
(394, 'Paramount Steak & Coffee', '122 Quang Trung, P. Thạch Thang', 70, 'Quận Hải Châu', 16.0743, 108.217, ' 09:00 - 21:00', 8.2),
(395, 'Asagi Store - Trái Cây Sạch', '38 Lê Vĩnh Khanh, P. Hoà An', 79, 'Quận Cẩm Lệ', 16.0503, 108.175, ' 08:00 - 21:00', 7.8),
(396, 'Quán Nhậu Đổi Gió - Nguyễn Văn Linh', '258 Nguyễn Văn Linh (Số Mới)', 68, 'Quận Thanh Khê', 16.0595, 108.209, ' 17:00 - 22:00', 6.9),
(397, 'Pizza Base', '126/30 Nguyễn Duy Hiệu', 68, 'Quận Sơn Trà', 16.055, 108.241, ' 10:00 - 22:00', 7.7),
(398, 'Nhà Hàng Phố Đêm - Nguyễn Tất Thành', '247 Nguyễn Tất Thành', 70, 'Quận Thanh Khê', 16.0803, 108.211, ' 09:30 - 23:00', 7),
(399, 'The Salmon Restaurant', '57 Hoàng Văn Thụ', 70, 'Quận Hải Châu', 16.0629, 108.221, ' 10:00 - 22:00', 8.4),
(400, 'Nhà Hàng Cham - Món Việt', '5 - 7 Lê Quang Hòa, P, Hòa Xuân', 70, 'Quận Cẩm Lệ', 16.0239, 108.225, ' 10:00 - 22:00', 9.1),
(401, 'Mozzafiato Restaurant - Hoàng Kế Viêm', '85 Hoàng Kế Viêm, P. Bắc Mỹ An', 70, 'Quận Ngũ Hành Sơn', 16.0492, 108.244, ' 10:00 - 23:00', 7.5),
(402, 'Epice Restaurant - Pullman Danang Beach Resort', 'Pullman Danang Beach Resort, 101 Võ Nguyên Giáp, P. Khuê Mỹ', 74, 'Quận Ngũ Hành Sơn', 16.0404, 108.25, ' 06:30 - 22:00', 8.9),
(403, 'Cây Dừa II - Đặc Sản Vùng Miền', '531 Nguyễn Tất Thành', 68, 'Quận Thanh Khê', 16.0741, 108.204, ' 09:00 - 23:00', 7),
(404, 'Si Quán - Nhậu Bình Dân', 'Lô 1404 Xô Viết Nghệ Tĩnh', 72, 'Quận Hải Châu', 16.0326, 108.219, ' 09:00 - 22:30', 6.6),
(405, 'Hải Sản Cây Dừa I', '413 Nguyễn Tất Thành, P. Tam Thuận', 68, 'Quận Thanh Khê', 16.0766, 108.208, ' 16:00 - 22:30', 6.5),
(406, 'The Garden House Cafe Bistro', '275 Nguyễn Văn Linh', 71, 'Quận Thanh Khê', 16.0598, 108.211, ' 07:00 - 22:00', 7.3),
(407, 'PapaSteak - Beefsteak', '152 Phan Thanh', 70, 'Quận Thanh Khê', 16.0603, 108.209, ' 06:00 - 22:00', 7.7),
(408, 'Tamarind Tree Restaurant - Món Việt', 'Lô 46, Mỹ Khê 4, P. Phước Mỹ', 70, 'Quận Sơn Trà', 16.0577, 108.246, ' 09:00 - 22:00', 8.8),
(409, 'Draft Beer - 2 Tháng 9', '6 Đường 2 Tháng 9', 80, 'Quận Hải Châu', 16.0593, 108.223, ' 17:00 - 23:30', 7.2),
(410, 'Boardgame Đà Nẵng', '148/5 Lý Tự Trọng', 71, 'Quận Hải Châu', 16.0775, 108.216, ' 08:30 - 21:30', 8),
(411, 'Võ Sĩ Đạo Restaurant - Ẩm Thực Nhật', '90 Đường 2 Tháng 9', 70, 'Quận Hải Châu', 16.0563, 108.222, ' 10:00 - 22:00', 8),
(412, 'Mì Quảng 1A', '1A Hải Phòng', 68, 'Quận Hải Châu', 16.0725, 108.219, ' 07:00 - 22:00', 7.1),
(413, 'Mì Quảng Thi - Hoàng Diệu', '251 Hoàng Diệu', 68, 'Quận Hải Châu', 16.0585, 108.217, ' 06:30 - 14:00 | 16:', 7.8),
(414, 'Mì Quảng Hương Quê - Phan Thanh', '78 Phan Thanh', 68, 'Quận Thanh Khê', 16.0636, 108.209, ' 07:00 - 21:00', 7.5),
(415, 'Mì Quảng Đồng Quê', '46 Nguyễn Hữu Thọ', 68, 'Quận Hải Châu', 16.0483, 108.209, ' 06:00 - 22:00', 7.2),
(416, 'Mì Quảng Bích - Đặng Dung', '1 - 5 Đặng Dung', 68, 'Quận Liên Chiểu', 16.0714, 108.15, ' 06:00 - 21:00', 7.2),
(417, 'Mì Quảng Hường', '175 Lê Thanh Nghị', 68, 'Quận Hải Châu', 16.0379, 108.218, ' 06:00 - 13:30', 7.9),
(418, 'Mì Quảng Mến', '203 Lê Thanh Nghị', 68, 'Quận Hải Châu', 16.0391, 108.218, ' 06:00 - 22:00', 6.3),
(419, 'Mì Quảng Bà Anh', 'K152/4 Phan Thanh', 68, 'Quận Thanh Khê', 16.0603, 108.209, ' 06:00 - 09:30', 8),
(420, 'Mì Quảng Bà Ngân', '108 Đống Đa', 68, 'Quận Hải Châu', 16.0809, 108.219, ' 09:00 - 21:00', 7.2),
(421, 'Mì Quảng Bà Ngân 3', 'Lô 22A Phan Thành Tài', 68, 'Quận Hải Châu', 16.054, 108.221, ' 07:00 - 21:00', 7.1),
(422, 'Mì Quảng Sứa Hồng Vân', '59 Lê Hồng Phong, P. Phước Ninh', 68, 'Quận Hải Châu', 16.0638, 108.22, ' 15:00 - 21:30', 7.8),
(423, 'Mì Quảng 24/7', '163 Hồ Nghinh', 68, 'Quận Sơn Trà', 16.0685, 108.243, ' 07:00 - 22:00', 5.9),
(424, 'Mì Quảng Hải Mân - Nguyễn Hữu Thọ', '205 Nguyễn Hữu Thọ', 68, 'Quận Hải Châu', 16.0434, 108.21, ' 06:30 - 22:00', 7.6),
(425, 'Mì Quảng Gà Quê Tam Kỳ', '51 Thái Thị Bôi', 68, 'Quận Thanh Khê', 16.0683, 108.199, ' 06:00 - 10:00', 8.1),
(426, 'Mì Quảng Bà Mua - Nguyễn Tri Phương', '95A Nguyễn Tri Phương', 68, 'Quận Hải Châu', 16.0564, 108.207, ' 06:30 - 21:00', 7),
(427, 'Mỳ Quảng Quê - Tinh Hoa Ẩm Thực Đất Quảng', '258 Đống Đa', 68, 'Quận Hải Châu', 16.0767, 108.216, ' 06:00 - 21:30', 8.1),
(428, 'Mì Quảng Bà Mua - Đặng Dung', '16 Đặng Dung, P. Hòa Khánh Bắc', 68, 'Quận Liên Chiểu', 16.0709, 108.15, ' 06:00 - 22:00', 7.5),
(429, 'Quán Tâm - Mì Quảng Cá Lóc Đại Lộc', '65 Vũ Ngọc Phan ', 68, 'Quận Liên Chiểu', 16.0688, 108.149, ' 06:00 - 21:00', 7.9),
(430, 'Mì Quảng Quỳnh', '486 Nguyễn Tri Phương', 68, 'Quận Hải Châu', 16.0507, 108.213, ' 07:00 - 21:30', 7.4),
(431, 'Mì Quảng Gà Xuân', '77 Hà Huy Tập, P. Chính Gián', 68, 'Quận Thanh Khê', 16.0676, 108.192, ' 07:00 - 21:30', 7.7),
(432, 'Mì Quảng Nhung - Nguyễn Tất Thành', '135 Nguyễn Tất Thành', 68, 'Quận Hải Châu', 16.0829, 108.213, ' 06:00 - 10:00', 9.3),
(433, 'Ba Châu - Mì Quảng Phú Chiêm', '809 Ngô Quyền', 68, 'Quận Sơn Trà', 16.0688, 108.232, ' 06:00 - 21:00', 8.1),
(434, 'Đặc Sản Mỳ Quảng Bà Lanh', '178 Thái Thị Bôi', 68, 'Quận Thanh Khê', 16.0685, 108.196, ' 06:00 - 21:00', 9.1),
(435, 'Mì Quảng Bích - Phạm Tu', '88 Phạm Tu', 68, 'Quận Sơn Trà', 16.0669, 108.24, ' 06:00 - 10:00', 8.5),
(436, 'Mì Quảng Phú Chiêm - Phan Thanh', '14 Phan Thanh', 68, 'Quận Thanh Khê', 16.0658, 108.208, ' 06:00 - 10:00', 8.2),
(437, 'Mì Quảng Đại Lộc - Trương Chí Cương', '29 Trương Chí Cương', 68, 'Quận Hải Châu', 16.0304, 108.226, ' 07:00 - 20:30', 8.5),
(438, 'Mì Quảng Quê Hương', '150 Ông Ích Khiêm', 68, 'Quận Hải Châu', 16.0757, 108.212, ' 06:30 - 21:30', 7.9),
(439, 'Mì Quảng Thanh', '86 Hoàng Hoa Thám, P. Thạc Gián', 68, 'Quận Thanh Khê', 16.0679, 108.21, ' 06:00 - 10:00', 7.7),
(440, 'Mì Quảng Phương - Phan Tứ', '1 Phan Tứ, P. Mỹ An', 68, 'Quận Ngũ Hành Sơn', 16.0451, 108.241, ' 06:00 - 23:00', 7.8),
(441, 'Mì Quảng Bà Lạc', '41 Đào Duy Anh', 68, 'Quận Hải Châu', 16.0591, 108.21, ' 06:00 - 22:00', 8),
(442, 'Mì Quảng Bà Mua - Ngũ Hành Sơn', '40 Ngũ Hành Sơn', 68, 'Quận Ngũ Hành Sơn', 16.0503, 108.238, ' 06:30 - 22:00', 7.2),
(443, 'Quê Xưa - Mì Quảng & Bánh Tráng Thịt Heo - Núi Thành', '165 Núi Thành', 68, 'Quận Hải Châu', 16.0466, 108.221, ' 06:00 - 22:00', 7.5),
(444, 'Mì Quảng Tiên', '6 Đặng Thai Mai', 68, 'Quận Thanh Khê', 16.0609, 108.212, ' 06:30 - 17:30', 7.8),
(445, 'Mì Quảng Cô Nuôi', '908 Ngô Quyền (Ngã Tư Nguyễn Công Trứ - Ngô Quyền)', 68, 'Quận Sơn Trà', 16.0676, 108.232, ' 14:30 - 23:59', 9.3),
(446, 'Bà Hoành - Cháo & Mì Quảng', '152 Nguyễn Hoàng', 68, 'Quận Thanh Khê', 16.062, 108.214, ' 06:00 - 13:30 | 16:', 7.5),
(447, 'Mì Quảng Bà Dinh', '42 Đào Duy Từ', 68, 'Quận Thanh Khê', 16.068, 108.213, ' 06:00 - 11:00', 8.7),
(448, 'Như - Mì Quảng Phú Chiêm', '63 Phạm Văn Nghị, P. Thạc Gián', 68, 'Quận Thanh Khê', 16.0573, 108.21, ' 05:00 - 13:00', 8.5),
(449, 'Mì Quảng Bà Mua - Ngô Quyền', '454 Ngô Quyền ', 68, 'Quận Sơn Trà', 16.0866, 108.24, ' 06:00 - 22:00', 5.8),
(450, 'Mì Quảng Bà Sâm - Phạm Cự Lượng', '103 Phạm Cự Lượng', 68, 'Quận Sơn Trà', 16.0567, 108.237, ' 06:00 - 11:00', 9),
(451, 'Đại Đồng - Bánh Tráng Thịt Heo & Mì Quảng', '100 Hà Huy Tập', 68, 'Quận Thanh Khê', 16.0674, 108.192, ' 06:00 - 22:00', 6.6),
(452, 'Mì Quảng 200', '200 Đống Đa, P. Thuận Phước', 68, 'Quận Hải Châu', 16.079, 108.217, ' 16:00 - 21:00', 7.9),
(453, 'Mì Quảng Bà Thị', '445 Núi Thành', 68, 'Quận Hải Châu', 16.0371, 108.222, ' 06:00 - 10:00', 8.2),
(454, 'A Châu - Phở & Mì Quảng', '178 Huỳnh Thúc Kháng', 68, 'Quận Hải Châu', 16.0572, 108.218, ' 07:00 - 21:00', 8);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `FOOD_CATEGORY`
--

CREATE TABLE `FOOD_CATEGORY` (
  `id` int(10) NOT NULL,
  `category_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `category_detail` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `FOOD_CATEGORY`
--

INSERT INTO `FOOD_CATEGORY` (`id`, `category_name`, `category_detail`) VALUES
(68, 'Quán ăn', NULL),
(69, 'Shop Online', NULL),
(70, 'Nhà hàng', NULL),
(71, 'Café/Dessert', NULL),
(72, 'Quán nhậu', NULL),
(73, 'Ăn chay', NULL),
(74, 'Nhà hàng, ', NULL),
(75, 'Bar/Pub', NULL),
(76, 'Ăn vặt/vỉa hè', NULL),
(77, 'Quán ăn, ', NULL),
(78, 'Café/Dessert, ', NULL),
(79, 'Shop Online, ', NULL),
(80, 'Beer club', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `FOOD_IMAGE`
--

CREATE TABLE `FOOD_IMAGE` (
  `id` int(10) NOT NULL,
  `id_food` int(10) NOT NULL,
  `img_path` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `FOOD_IMAGE`
--

INSERT INTO `FOOD_IMAGE` (`id`, `id_food`, `img_path`) VALUES
(1, 347, 'j09G51xoD/foody-mobile-da-jpg-590-636378645860798197.jpg'),
(2, 348, 'qn-bkmgH7C/foody-mobile-thai-jpg-834-636090331106103322.jpg'),
(3, 349, 'nxXIvOUwku/foody-mobile-m-banh-jpg-889-636147317263910778.jpg'),
(4, 350, 'rhs6tFK7R/foody-upload-api-foody-mobile-mumtaz-am-thuc-an-do-180621104835.jpg'),
(5, 351, 'v4RNkuxov/foody-mobile-an-do-jpg-181-636340694275758391.jpg'),
(6, 352, '9mxJz7aSG/foody-thumbnail%20web-636368568199988016.jpg'),
(7, 353, 'bJ-jaND9j/foody-upload-api-foody-mobile-ghe-rang-me-3-190108172909.jpg'),
(8, 354, 'STiPVcnopB/foody-upload-api-foody-mobile-y-190215150742.jpg'),
(9, 355, 'QKvltiAv4/foody-mobile-foody-huong-vi-bac-t-913-635754901115389232.jpg'),
(10, 356, '014wMc6NR/foody-upload-api-foody-mobile-an-nam-1-jpg-181101085906.jpg'),
(11, 357, 'u24y0nX63/foody-mobile-sashimi-2-jpg-266-635689400759751481.jpg'),
(13, 358, 'sdb36vHl7/foody-upload-api-foody-mobile-dac-san-lao-jpg-180912112427.jpg'),
(14, 359, 'r7q7W9wTi/foody-thumb-636432260642801786.jpg'),
(15, 360, 'X_nUyRhZb/foody-mobile-334555-jpg-213-636202637586366441.jpg'),
(16, 361, '0XwTkRABa/foody-mobile-m-bep-jpg-575-636298512190894263.jpg'),
(17, 362, 'TM96yJiHC/foody-mobile-thop-jpg-950-636383830500844179.jpg'),
(18, 363, 'aL7NxjpY6/foody-upload-api-foody-mobile-quan-chay-an-s-jpg-180620083338.jpg'),
(19, 364, '2HDyir8rr/foody-upload-api-foody-mobile-the-authentic-hoian--180621110223.jpg'),
(20, 365, '4eTM28y1m/foody-mobile-trp-jpg-468-636246493856572179.jpg'),
(21, 366, '3XEyw_dbV/foody-mobile-m-mon-jpg-561-636377031232657561.jpg'),
(22, 367, 'BROwHs1wt/foody-thumbail%20web-636413401239790903.jpg'),
(23, 368, 'JDCTzXlvi/foody-^05b5b06808c0586076455f2da6bbc1481c9771674337ea8ac1^pimgpsh_fullsize_distr-636313291984590442.jpg'),
(24, 369, '7Ik8BGDDH/foody-mobile-ly-jpg.jpg'),
(25, 370, 'pQWZ8DMy0/foody-upload-api-foody-foody-upload-api-foody-album1-4-jpg-18122111-190111184117.jpg'),
(26, 371, '2VIn3Syl8/foody-upload-api-foody-mobile-ha-an-jpg-180417114036.jpg'),
(27, 372, 'G-22MCks9/foody-mobile-hr-jpg-651-636137618433401192.jpg'),
(28, 373, 'KYzosRj_k/foody-mobile-ba-noi-quan-jpg-741-636052324658563776.jpg'),
(29, 374, 'HFS1vZo_w/foody-mobile-de2-jpg-176-635877637542280629.jpg'),
(30, 375, 'OE_REDu5-/foody-mobile-2-cua-hap-2-jpg-241-635950989389504069.jpg'),
(31, 376, 'YYOFE8Pig/foody-mobile-iaqb7ibx-jpg-633-636232700749620879.jpg'),
(32, 377, 'HmSdxU9rs/foody-upload-api-foody-mobile-phi-lu-1-jpg-180620093908.jpg'),
(33, 378, '8Ysv5QIWU/foody-mobile-bao-an-jpg-494-636295950564299402.jpg'),
(34, 379, 'sgNUA5yxC/foody-mobile-xeo-tinh-jpg-336-636343319362357517.jpg'),
(35, 380, 'XRRcf3Tad/foody-upload-api-foody-32944454_1421662357934227_677838968373169356-180518170854.jpg'),
(36, 381, 'RuERzBtCM/foody-upload-api-foody-foody-quan-cay-nhau-binh-dan-860-63663959982-181221172343.jpg'),
(37, 382, 'UeuYRBkAb/foody-upload-api-foody-mobile-te-jpg-180608111342.jpg'),
(38, 383, 'Ozi-KwNdz/foody-upload-api-foody-mobile-foody-bun-dau-thi-me-180704170113.jpg'),
(39, 384, 'DxleKa5VW/foody-upload-api-foody-mobile-full-house-jpeg-180807145613.jpg'),
(40, 385, 'n3O3Ra2h2/foody-upload-api-foody-mobile-45011775_19638527125-181102083826.jpg'),
(41, 386, 'n8295qzCm/foody-upload-api-foody-mobile-tra-sua-jpg-181106112601.jpg'),
(42, 387, '_NNVHT9ZB/foody-upload-api-foody-mobile-banh-duc-jpg-181218165239.jpg'),
(43, 388, '4QdEe4LFo/foody-upload-api-foody-mobile-47377660_75378880162-181207090730.jpg'),
(44, 389, 'DiBlTzLsE/foody-mobile--05ef15dc394a15fbd36-964-636034008801586360.jpg'),
(45, 390, 'TrMhzI_r-/foody-mobile-foody-khu-du-lich-si-869-636002052117705992.jpg'),
(46, 391, 'aSaY1Fxkh/foody-mobile-2488-jpg-166-636185210747045114.jpg'),
(47, 392, 'MjS1u0nGQ/foody-upload-api-foody-mobile-cua-jpg-180329135141.jpg'),
(48, 393, 'mn6IUn0ap/foody-thumbnail%20web-636359962550902407.jpg'),
(49, 394, 'tEm08WWYa/foody-upload-api-foody-foody-paramount-restaurant-888-6367580506183-181221155344.jpg'),
(50, 395, '7-0wLsXqx/foody-mobile-nho-jpg-734-636266517880323151.jpg'),
(51, 396, 'UcgaLTE08/foody-upload-api-foody-mobile-quan-nhau-doi-gio-ng-180629101655.jpg'),
(52, 397, 'SQNcYhVz5/foody-mobile--20-_hinhmob-jpg-819-635756016442769441.jpg'),
(53, 398, 'iW9D0P6e-/foody-mobile-2-cua-hap-2-jpg-183-635937221045520658.jpg'),
(54, 399, 'WrSYT0nTF/foody-foody-album1-jpg-970-636020990481181336-636288982703196109.jpg'),
(55, 400, 'F-3cl4iSp/foody-upload-api-foody-foody-upload-api-foody-album1-1-jpg-18082410-180824173144.jpg'),
(56, 401, '9Td6mNLSL/foody-upload-api-foody-foody-mozafiato-restaurant-461-6367003862357-180817174909.jpg'),
(57, 402, 'Ny0gtqs5V/foody-upload-api-foody-mobile-epice-restaurant-jpg-180711103517.jpg'),
(58, 403, '5t6yL0Ogc/foody-mobile-cay-dua-ii-dac-san-vung-mien-da-nang.jpg'),
(59, 404, 'YH3sggdUq/foody-mobile-me-jpg-879-636295036223685657.jpg'),
(60, 405, 's6yv2Z0_d/foody-mobile-tom-jpg-123-636295049739227491.jpg'),
(61, 406, 'zXFBMp89e/foody-mobile-ga-jpg-243-636174817556247991.jpg'),
(62, 407, 'hRrlJiXCJ/foody-mobile-12308623_41143225569-758-635974381511373395.jpg'),
(63, 408, 'ym6S00hZF/foody-mobile-me-jpg-448-636377233783266567.jpg'),
(64, 409, 'demvFs5Av/foody-mobile-11146284_72602178418-174-635654041357158275.jpg'),
(65, 410, 'IMgKqMBFe/foody-mobile-21587_16691679866962-940-636081476701030591.jpg'),
(66, 411, '0jvE-xGOG/foody-thumbnail%20web-636247444701994165.jpg'),
(67, 412, 'yJjut15g0/foody-mobile-foody-checkin-mi-qua-342-635992668227837464.jpg'),
(68, 413, 'ofUCDdsFA/foody-mobile-foody-mi-quang-thi-2-301-635781871679011519.jpg'),
(69, 414, 'o2wGF6v64/foody-mobile-mi-q-jpg-913-636234590595743262.jpg'),
(70, 415, 'mrkq-HX-N/foody-mobile-foody-mi-quang-dong--578-635992662413536383.jpg'),
(71, 416, '75FABw5Er/foody-mobile-bb-jpg.jpg'),
(72, 417, 'rL4D576Kc/foody-upload-api-foody-mobile-huong-jpg-180822081018.jpg'),
(73, 418, 'A-ORzW_SS/foody-mobile-men-jpg-547-636129155666205432.jpg'),
(74, 419, 'F4QJdBhAq/foody-mobile-foody-mi-quang-ba-an-968-635981418704419613.jpg'),
(75, 420, 'Sms2A8xZQ/foody-mobile-foody-mi-quang-ba-ng-599-635883630247391792.jpg'),
(76, 421, 'RNFsBTzMT/foody-mobile-ng2-jpg-439-636269005036339958.jpg'),
(77, 422, 'kTUwaikQ0/foody-mobile-sua-jpg-124-636349265405307798.jpg'),
(78, 423, 'RG2dLtTRz/foody-mobile-247-jpg-314-636307797914103961.jpg'),
(79, 424, '8uw3NBv5i/foody-mobile-foody-mi-quang-hai-m-817-635871567861072556.jpg'),
(80, 425, 'ZxHoS3nhn/foody-mobile-ga-que-jpg.jpg'),
(81, 426, '3qhlp_R-h/foody-mobile-mua-2-jpg-208-636132469433093520.jpg'),
(82, 427, '7-6MfAyK5/foody-mobile-foody-mi-quang-que-t-988-636107375144909185.jpg'),
(83, 428, 'xJ9AcxhOm/foody-mobile-mua2-jpg-721-636123847091933702.jpg'),
(84, 429, '7x507gRHa/foody-upload-api-foody-mobile-cloc-jpg-180620104648.jpg'),
(85, 430, 'gSwXM6oa_/foody-mobile-mi-quang-quynh-da-nang-131231031459.jpg'),
(86, 431, 'VVbIN3uoM/foody-mobile-mi-quang-ga-xuan-da-nang-140103100920.jpg'),
(87, 432, 'k8_iM34EK7/foody-mobile-nhung-jpg-909-636438281964443273.jpg'),
(88, 433, 'Z_hD1lOZZ/foody-upload-api-foody-mobile-ba-chau-190129173948.jpg'),
(89, 434, 'RZcJyuHuk/foody-upload-api-foody-mobile-cach-nau-mi-quang-ga-190326090635.jpg'),
(90, 435, 'XRtMpJup-/foody-mobile-bic-jpg-308-636356486474824613.jpg'),
(91, 436, '9NUj7KhxJ/foody-mobile-mi-quang-phu-chiem-phan-thanh-da-nang.jpg'),
(92, 437, 'uh09GOgzK/foody-upload-api-foody-mobile-mi-quang-jpg-180921151907.jpg'),
(93, 438, 'O5-pPEJgq/foody-mobile-960-jpg-700-636143751863786960.jpg'),
(94, 439, '8thH6J8jT/foody-mobile-mm-jpg-966-636110995301749844.jpg'),
(95, 440, 'bVRsxQLxu/foody-mobile-my-quang-phuong.jpg'),
(96, 441, 'qpfPVg5DY/foody-mobile-foody-mi-quang-ba-la-242-635980632678158358.jpg'),
(97, 442, 'cjHrXIAw8x/foody-mobile-mua-2-jpg-362-635974390585796874.jpg'),
(98, 443, 'wU3ZdaCgi/foody-mobile-p_20150708_122612-jp-139-635762631488803443.jpg'),
(99, 444, 'oLlJwo91Q/foody-mobile-ga-2-jpg-545-635834706739722643.jpg'),
(100, 445, 'QXwzHw9dm/foody-upload-api-foody-mobile-foody-mobile-ac-jpg--180822171659.jpg'),
(101, 446, 'cRW7m3L6q/foody-mobile-quang-jpg-134-636317597997518218.jpg'),
(102, 447, 'PTz1zBHsy/foody-mobile-m-e-jpg-772-636334641398849023.jpg'),
(103, 448, 'c_QnObCVt/foody-upload-api-foody-mobile-mi-ga-1-jpg-180821140325.jpg'),
(104, 449, 'rotDcoMO6/foody-upload-api-foody-mobile-mua-jpg-180321115053.jpg'),
(105, 450, '5VTO0vBbC/foody-mobile-m-sam-jpg-658-636268263285154713.jpg'),
(106, 451, '9DtZIfOirR/foody-mobile-btr-jpg-809-636223122064925094.jpg'),
(107, 452, 'y7tjXWFNp/foody-mobile-quan-200.jpg'),
(108, 453, 'QFRQP7wGQ/foody-mobile-ba-thi-2-jpg-506-636167828388927087.jpg'),
(109, 454, 'SwrZ5B01i/foody-mobile-bb-jpg-793-636322490198891707.jpg');

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
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `FOOD`
--
ALTER TABLE `FOOD`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=455;

--
-- AUTO_INCREMENT cho bảng `FOOD_CATEGORY`
--
ALTER TABLE `FOOD_CATEGORY`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT cho bảng `FOOD_IMAGE`
--
ALTER TABLE `FOOD_IMAGE`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
