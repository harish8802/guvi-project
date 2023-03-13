<?php
require 'vendor/autoload.php';

$client = new MongoDB\Client("mongodb://localhost:27017");

$collection = $client->test->users;

$username = $_POST['username'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];


$user = [
'username' => $username,
'age' => $age,
'dob' => $dob,
'contact' => $contact
];

$result = $collection->insertOne($user);

echo json_encode(['success' => true]);
?>
