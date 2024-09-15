<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$search_query = $_GET['search'];
$sql = "SELECT * FROM nurses WHERE name LIKE '%$search_query%' OR specialization LIKE '%$search_query%'";

//fetching
?>
<?php
$sql = "SELECT name, photo, specialization, contact_info, availability_status, rating FROM nurses";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<div class='nurse'>";
        echo "<img src='" . $row['photo'] . "' alt='" . $row['name'] . "'>";
        echo "<h2>" . $row['name'] . "</h2>";
        echo "<p>Specialization: " . $row['specialization'] . "</p>";
        echo "<p>Contact: " . $row['contact_info'] . "</p>";
        echo "<p>Status: " . $row['availability_status'] . "</p>";
        echo "<p>Rating: " . $row['rating'] . "</p>";
        echo "</div>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
