DROP DATABASE auroratube;

CREATE DATABASE auroratube;

USE auroratube;

  /*
  CREATE TABLE messages (
Describe your table here.
);
*/
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/




-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

-- DROP TABLE IF EXISTS `users`;

-- CREATE TABLE `users` (
--   `user_id` INTEGER AUTO_INCREMENT,
--   `username` VARCHAR(40) NOT NULL,
--   PRIMARY KEY (`user_id`)
-- );

-- ---
-- Table 'rooms'
--
-- ---

-- DROP TABLE IF EXISTS `rooms`;

-- CREATE TABLE `rooms` (
--   `room_id` INTEGER AUTO_INCREMENT,
--   `room_name` VARCHAR(40) NOT NULL,
--   PRIMARY KEY (`room_id`)
-- );

-- ---
-- Table 'messages'
--
-- ---

-- DROP TABLE IF EXISTS `messages`;

-- CREATE TABLE `messages` (
--   `message_id` INTEGER AUTO_INCREMENT,
--   `message` VARCHAR(255) NULL,
--   `datetime` DATETIME NOT NULL,
--   `user_id` INTEGER NOT NULL,
--   `room_id` INTEGER NOT NULL,
--   PRIMARY KEY (`message_id`)
-- );

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`user_id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`room_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`username`) VALUES ('Vasyl');
-- INSERT INTO `users` (`username`) VALUES ('Daren');
-- INSERT INTO `rooms` (`room_name`) VALUES ('Lobby');
-- INSERT INTO `messages` (`message`,`datetime`,`user_id`,`room_id`) VALUES ('Bonjour', CURTIME(),1,1);
-- INSERT INTO `messages` (`message`,`datetime`,`user_id`,`room_id`) VALUES ('Hello from this room', CURTIME(),2,1);
-- INSERT INTO `messages` (`message`,`datetime`,`user_id`,`room_id`) VALUES ('Hello from this another room named lobby', CURTIME(),2,1);
