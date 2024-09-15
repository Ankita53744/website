<?php
// Connect to the database
$conn = mysqli_connect("localhost", "username", "password", "nurse_database");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the search query from the form
$search_query = $_GET['search'];

// Query the database to find matching nurses
$query = "SELECT * FROM nurses WHERE name LIKE '%$search_query%' OR description LIKE '%$search_query%'";
$result = mysqli_query($conn, $query);

// Display the search results
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        // Display the nurse's profile information
        echo "<div class='doctor-innerbox'>";
        echo "<div class='doctor-icons'>";
        echo "<i class='fa-solid fa-heart' aria-hidden='true'></i>";
        echo "<i class='fa-solid fa-share' aria-hidden='true'></i>";
        echo "<i class='fa-solid fa-eye' aria-hidden='true'></i>";
        echo "</div>";
        echo "<div class='teamimg'>";
        echo "<img src='" . $row['image'] . "' alt=''>";
        echo "</div>";
        echo "<div class='doc-innernames'>";
        echo "<h2>" . $row['name'] . "</h2>";
        echo "</div>";
        echo "</div>";
    }
} else {
    echo "No matching nurses found.";
}

// Close the database connection
mysqli_close($conn);
?>