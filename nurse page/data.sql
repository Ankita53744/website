CREATE TABLE nurses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    photo VARCHAR(255),
    specialization VARCHAR(255),
    contact_info VARCHAR(255),
    availability_status VARCHAR(50),
    rating FLOAT
);

INSERT INTO nurses (name, photo, specialization, contact_info, availability_status, rating) VALUES
('Mr. Robert Gray', 'team1.jpg', 'Cardiologist', '555-1234', 'Available', 4.5),
('Ms. Jane Doe', 'team2.jpg', 'Pediatrician', '555-5678', 'Not Available', 4.7),
('Dr. John Smith', 'team3.jpg', 'Surgeon', '555-8765', 'Available', 4.6);
