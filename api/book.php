<?php
include 'db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT * FROM bookings ORDER BY created_at");
    $bookings = [];
    while ($row = $result->fetch_assoc()) {
        $bookings[] = $row;
    }
    echo json_encode(["success" => true, "bookings" => $bookings]);
    $conn->close();
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'] ?? '';
$destination = $data['destination'] ?? '';
$pickup_date = $data['pickup_date'] ?? '';
$dropoff_date = $data['dropoff_date'] ?? '';
$driver_age_confirm = isset($data['driver_age_confirm']) ? (int)$data['driver_age_confirm'] : 0;
$return_same_loc = isset($data['return_same_loc']) ? (int)$data['return_same_loc'] : 0;

if (!$name || !$destination || !$pickup_date || !$dropoff_date) {
    echo json_encode(["success" => false, "error" => "Missing required fields"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO bookings (destination, pickup_date, dropoff_date, driver_age_confirm, return_same_loc) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssii",$name, $destination, $pickup_date, $dropoff_date, $driver_age_confirm, $return_same_loc);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "booking_id" => $stmt->insert_id]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?> 