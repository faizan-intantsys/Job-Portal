This project(Job Portal) is a web application to manage candidates information.

Frontend: Forontend of this application is made using React.js 
Steps to run frontend:
1. npm install
2. npm start

Backend: Backend of this application is made using nodejs express and mysql
Steps to run backend:
1. npm install
2. Setup and connect mysql database by putting up details in .env file
3. There are two tables user and candidates.
4. Query for user table 'CREATE TABLE `user` (\n  `id` int NOT NULL AUTO_INCREMENT,\n  `name` varchar(255) NOT NULL,\n  `email` varchar(255) NOT NULL,\n  `password` varchar(255) NOT NULL,\n  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `email` (`email`)\n) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci'
5. Query for candidates table 'CREATE TABLE `candidates` (\n  `id` int NOT NULL AUTO_INCREMENT,\n  `name` varchar(255) NOT NULL,\n  `email` varchar(255) NOT NULL,\n  `phone` varchar(15) NOT NULL,\n  `cv_path` varchar(255) NOT NULL,\n  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `email` (`email`)\n) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci'
6. Query to fill sum dummy data in candidates table for better visualization
INSERT INTO candidates (name, email, phone, cv_path, created_at) VALUES
('John Doe', 'john.doe@example.com', '1234567890', '/cvs/john_doe_cv.pdf', '2024-12-31 10:00:00'),
('Jane Smith', 'jane.smith@example.com', '9876543210', '/cvs/jane_smith_cv.pdf', '2024-12-31 10:05:00'),
('Alice Johnson', 'alice.johnson@example.com', '4561237890', '/cvs/alice_johnson_cv.pdf', '2024-12-31 10:10:00'),
('Bob Brown', 'bob.brown@example.com', '3214569870', '/cvs/bob_brown_cv.pdf', '2024-12-31 10:15:00'),
('Charlie Wilson', 'charlie.wilson@example.com', '6547891230', '/cvs/charlie_wilson_cv.pdf', '2024-12-31 10:20:00'),
('Emily Davis', 'emily.davis@example.com', '7891234560', '/cvs/emily_davis_cv.pdf', '2024-12-31 10:25:00'),
('Frank Miller', 'frank.miller@example.com', '8901234567', '/cvs/frank_miller_cv.pdf', '2024-12-31 10:30:00'),
('Grace Lee', 'grace.lee@example.com', '2345678901', '/cvs/grace_lee_cv.pdf', '2024-12-31 10:35:00'),
('Henry Clark', 'henry.clark@example.com', '7654321098', '/cvs/henry_clark_cv.pdf', '2024-12-31 10:40:00'),
('Ivy Martin', 'ivy.martin@example.com', '0987654321', '/cvs/ivy_martin_cv.pdf', '2024-12-31 10:45:00');

8. node app.js

Note: email and password for admin is email: admin@jobs, password: admin
