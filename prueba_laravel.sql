-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         8.0.26 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando datos para la tabla prueba_laravel.admin: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`id`, `usuario`, `contrasena`, `nombre`, `created_at`, `updated_at`) VALUES
	(2, 'fernandoi', 'admin123', 'Fernando Inzunza', NULL, NULL);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- Volcando datos para la tabla prueba_laravel.failed_jobs: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Volcando datos para la tabla prueba_laravel.migrations: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(3, '2019_08_19_000000_create_failed_jobs_table', 1),
	(4, '2021_08_31_200323_create_usuarios_table', 1),
	(5, '2021_08_31_200752_create_admin_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Volcando datos para la tabla prueba_laravel.password_resets: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Volcando datos para la tabla prueba_laravel.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Volcando datos para la tabla prueba_laravel.usuarios: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `created_at`, `updated_at`) VALUES
	(32, 'Fernando', 'Lennard', NULL, '2021-09-02 21:32:35'),
	(34, 'Name', 'test', NULL, '2021-09-02 22:01:02'),
	(39, 'Mark', 'Zuckerber', '2021-09-01 22:19:14', '2021-09-02 22:02:00'),
	(40, 'Steve', 'Job', '2021-09-01 22:20:03', '2021-09-02 22:00:22'),
	(41, 'Jennie', 'Lenna', '2021-09-01 23:53:43', '2021-09-02 21:28:01'),
	(44, 'Fernando', 'Inzunzza', '2021-09-02 20:14:12', '2021-09-02 22:02:25'),
	(46, 'James', 'Lenn', '2021-09-02 20:15:17', '2021-09-02 22:02:43'),
	(48, 'Eric', 'Clapto', '2021-09-02 20:17:21', '2021-09-02 21:39:04'),
	(49, 'James', 'Rodriguez', '2021-09-02 22:04:10', '2021-09-02 22:04:10');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
