<?php
$host = "localhost";
$username = "root";  // change if needed
$password = "";      // change if needed
$dbname = "festival_booking";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

$festival = $data['festival'];
$visitors = $data['visitors'];
$bookingDate = $data['bookingDate'];
$timeFrom = $data['timeFrom'];
$timeTo = $data['timeTo'];
$foodType = $data['foodType'];
$foodSuggestion = $data['foodSuggestion'];

$sql = "INSERT INTO bookings (festival_name, visitors, booking_date, time_from, time_to, food_type, food_suggestion)
VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sisssss", $festival, $visitors, $bookingDate, $timeFrom, $timeTo, $foodType, $foodSuggestion);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Booking saved successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

$stmt->close();
$conn->close();
?>
