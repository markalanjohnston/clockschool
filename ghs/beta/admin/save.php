<?php

// Get the JSON data from the request body
$data = json_decode(file_get_contents('php://input'), true);

// Save the data to the schedule.json file
$result = file_put_contents('../schedule.json', json_encode($data));

// Check if the file was saved successfully
if ($result === false) {
  // Get the error message
  $error = error_get_last();
  
  // Return the error response
  header('HTTP/1.1 500 Internal Server Error');
  echo json_encode(['error' => $error['message']]);
  exit();
}

// Return the success response
header('HTTP/1.1 200 OK');
echo json_encode(['message' => 'Data saved successfully']);

?>
