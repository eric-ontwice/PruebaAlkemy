-- USE prueba

-- CREATE TABLE USERS(
-- id INT PRIMARY KEY AUTO_INCREMENT,
-- _name VARCHAR(45) NOT NULL,
-- last_name VARCHAR(45) NOT NULL,
-- age INT NOT NULL,
-- gender TINYINT NOT NULL,
-- birthday DATETIME NOT NULL
-- )

 -- INSERT INTO users(_name,last_name,age,gender,birthday) VALUES ('fernando','inzunza', 25, 0,'1996-01-06 00:00:00') 

-- CREATE TABLE TICKETS(
-- id INT PRIMARY KEY AUTO_INCREMENT,
-- ticket VARCHAR(45)
-- )
-- 
 -- ticketusers INSERT INTO tickets(ticket) VALUES ('2000') 

-- CREATE TABLE TICKETUSERS(
-- id INT PRIMARY KEY AUTO_INCREMENT,
-- tickets_id INT,
-- users_id INT,
-- FOREIGN KEY(tickets_id)  REFERENCES TICKETS(id),
-- FOREIGN KEY(users_id)  REFERENCES Users(id)
-- )

--  insert into ticketusers(tickets_id,users_id) VALUES (2,1)
 
  	-- 1)
   -- DELETE FROM TICKETUSERS WHERE users_id IN(SELECT ID FROM USERS WHERE AGE = '25')
-- DELETE FROM users WHERE age = 25;
-- 2)
-- SELECT * FROM users WHERE birthday >= '1998-01-01 00:00:00' AND birthday <= '2000-12-12 23:59:59'
-- SELECT * FROM users U WHERE u.birthday BETWEEN 	'1998-01-01 00:00:00' AND '2000-12-12 23:59:59'
-- 3)
-- SELECT U._name,COUNT(T.users_id) AS Num_Tickets FROM Users U LEFT JOIN ticketusers T ON U.id = T.users_id GROUP BY T.users_id
-- 4)
-- SELECT U._name,COUNT(T.users_id) AS Num_Tickets FROM Users U LEFT JOIN ticketusers T ON U.id = T.users_id GROUP BY T.users_id  ORDER BY Num_Tickets DESC
-- 
-- 5)
-- SELECT COUNT(*) AS Total_Tickets FROM tickets 