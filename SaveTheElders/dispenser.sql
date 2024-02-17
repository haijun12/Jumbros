CREATE TABLE IF NOT EXISTS Users (
    id INT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL
);

--@block 
ALTER TABLE Users
ADD medication_id INT,
ADD FOREIGN KEY (medication_id) REFERENCES Medications(id);


--@block
CREATE TABLE IF NOT EXISTS Medications (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    duration TIME NOT NULL,
    dosage INT NOT NULL,
    description TEXT NOT NULL
);

--@block
CREATE TABLE IF NOT EXISTS Reminders (
    id INT PRIMARY KEY,
    medication_id INT NOT NULL,
    reminder_time TIME NOT NULL,
    status ENUM('TAKEN', 'MISSED', 'PENDING') NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (medication_id) REFERENCES Medications(id)
);

--@block
SELECT * FROM Reminders;

--@block