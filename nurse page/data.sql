CREATE TABLE nurses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    photo VARCHAR(255),
    specialization VARCHAR(255),
    contact_info VARCHAR(255),
    availability_status VARCHAR(50),
    rating FLOAT
);
INSERT INTO nurses (name, image, description) VALUES
('Mr. Robert Gray', 'team1.jpg', 'Brief description of Mr. Robert Gray'),
('Ms. Jane Doe', 'team2.jpg', 'Brief description of Ms. Jane Doe'),
('Dr. John Smith', 'team3.jpg', 'Brief description of Dr. John Smith');