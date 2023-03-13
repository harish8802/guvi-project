<?php
require 'vendor/autoload.php';
$host = "mongodb://localhost:27017";
$dbname = "testdb";
$collection = $client->test->users;
$mongodb = new MongoDB\Driver\Manager($host);

if (!$mongodb) {
    die("Connection failed");
}

$mongodb = new MongoDB\Driver\Manager("mongodb://localhost:27017");

$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];

$bulk = new MongoDB\Driver\BulkWrite();
$bulk->update(
    ['_id' => new MongoDB\BSON\ObjectID($_COOKIE['userId'])],
    ['$set' => [
        'age' => $age,
        'dob' => $dob,
        'contact' => $contact
    ]]
);
$mongodb->executeBulkWrite('mydatabase.users', $bulk);

echo "success";
?>
