<?php
$host = "localhost";
$db_user = "root"; // Change if your DB has a different username
$db_pass = "";     // Change if your DB has a password
$db_name = "event_management"; // Your database name

$conn = new mysqli($host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Check if user exists
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Verify email and password
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            echo "<h2>Login successful! Welcome, " . $row['full_name'] . ".</h2>";
            // Redirect to dashboard or home page
            // header("Location: dashboard.php");
            // exit();
        } else {
            echo "<h3>Invalid password.</h3>";
        }
    } else {
        echo "<h3>No user found with that email.</h3>";
    }
    $stmt->close();
}
$conn->close();
?>
