<?php
// Include the MongoDB library
require 'vendor/autoload.php';

// Create a new MongoDB client
$client = new MongoDB\Client("mongodb://localhost:27017");

// Select the database and collection
$collection = $client->test->users;

// Get the form data
$username = $_POST['username'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];

// Create a new user document
$user = [
'username' => $username,
'age' => $age,
'dob' => $dob,
'contact' => $contact
];

// Insert the user document into the collection
$result = $collection->insertOne($user);

// Return the result as JSON
echo json_encode(['success' => true]);
?>