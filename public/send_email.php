<?php
header('Content-Type: application/json');

// Allow only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit;
}

// Basic sanitisation
$name    = isset($_POST['name']) ? trim($_POST['name']) : '';
$email   = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone   = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validate required fields
if ($name === '' || $email === '' || $message === '') {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$to      = 'chidarisai2004@gmail.com';
$subject = 'New Contact Form Submission';

$body = "You have received a new message from your portfolio contact form:\n\n" .
        "Name: {$name}\n" .
        "Email: {$email}\n" .
        "Phone: {$phone}\n" .
        "Message:\n{$message}\n";

$headers   = "From: noreply@yourdomain.com\r\n" .
             "Reply-To: {$email}\r\n" .
             "X-Mailer: PHP/" . phpversion();

// Attempt to send email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thanks! Your message has been sent.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Sorry, there was an error sending your message. Please try again later.']);
}
