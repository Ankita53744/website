<?php
header('Content-Type: application/json');

// Database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(array("error" => "Connection failed: " . $conn->connect_error)));
}

// Get search term
$search = isset($_GET['search']) ? $_GET['search'] : '';

if ($search) {
    // Search query to find nurses by name
    $sql = "SELECT name, photo, specialization, contact_info, availability_status, rating FROM nurses WHERE name LIKE '%$search%'";
} else {
    // Return all nurses if no search query is provided
    $sql = "SELECT name, photo, specialization, contact_info, availability_status, rating FROM nurses";
}

$result = $conn->query($sql);

$nurses = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $nurses[] = $row;
    }
}

// Return results as JSON
echo json_encode($nurses);

$conn->close();
?>
