<?php
include 'connection.php'; // This will use your connection.php file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Always hash the password before storing
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert user into database
    $sql = "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $full_name, $email, $hashed_password);

    if ($stmt->execute()) {
        echo "<h3>Registration successful!</h3>";
        // Optional: Redirect to login page after registration
        // header("Location: login.html");
        // exit();
    } else {
        echo "<h3>Something went wrong: " . $stmt->error . "</h3>";
    }

    $stmt->close();
    $conn->close();
}
?>
