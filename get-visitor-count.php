<?php
$counterFile = 'counter.txt';

// Check if the counter file exists, and read its content
if (file_exists($counterFile)) {
    $count = intval(file_get_contents($counterFile));
} else {
    $count = 0;
}

// Increment the count
$count++;

// Save the updated count back to the file
file_put_contents($counterFile, $count);

// Return the count as plain text
header('Content-Type: text/plain');
echo $count;
