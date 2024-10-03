
<?php
include 'db_connect.php';
if ($conn) {
    echo "Database connection successful.";
} else {
    echo "Database connection failed.";
}
?>
<?php
// Assuming you have a database connection in db_connect.php

$servername = "localhost";
$username = "root"; // Default for XAMPP
$password = ""; // Default for XAMPP
$dbname = "elder_care_harmony";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if (isset($_GET['city'])) {
    $city = $_GET['city'];

    // Prepare SQL query to fetch nurses by city
    $stmt = $conn->prepare("SELECT name, specialty, city, contact_info, photo_url FROM nurses WHERE city = ?");
    $stmt->bind_param('s', $city);
    $stmt->execute();
    $result = $stmt->get_result();

    // Fetch the results
    $nurses = [];
    while ($row = $result->fetch_assoc()) {
        $nurses[] = $row;
    }

    // Return results as JSON
    header('Content-Type: application/json');
    echo json_encode($nurses);

    $stmt->close();
} else {
    echo json_encode(['error' => 'City not provided']);
}
?>
