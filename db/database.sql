CREATE DATABASE IF NOT EXISTS node_test;

USE node_test;

CREATE TABLE employees(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employees;

INSERT INTO employees VALUES
  (1, 'Jane', 2700),
  (2, 'John', 2000),
  (3, 'Alice', 2500),
  (4, 'Bob', 1800),
  (5, 'Charlie', 2200),
  (6, 'Diana', 1700),
  (7, 'Ethan', 3000),
  (8, 'Fiona', 1600),
  (9, 'George', 2100),
  (10, 'Hannah', 1900),
  (11, 'Ian', 2300),
  (12, 'Judy', 1400),
  (13, 'Kevin', 2000),
  (14, 'Laura', 1800),
  (15, 'Mike', 2500),
  (16, 'Nina', 1700),
  (17, 'Oscar', 1900),
  (18, 'Paula', 2100),
  (19, 'Quinn', 2300),
  (20, 'Ray', 2000);

CREATE TABLE clients(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE clients;

INSERT INTO clients VALUES
  (1, 'Jane'),
  (2, 'John'),
  (3, 'Alice'),
  (4, 'Bob'),
  (5, 'Charlie'),
  (6, 'Diana'),
  (7, 'Ethan'),
  (8, 'Fiona'),
  (9, 'George'),
  (10, 'Hannah'),
  (11, 'Ian'),
  (12, 'Judy'),
  (13, 'Kevin'),
  (14, 'Laura'),
  (15, 'Mike'),
  (16, 'Nina'),
  (17, 'Oscar'),
  (18, 'Paula'),
  (19, 'Quinn'),
  (20, 'Ray');