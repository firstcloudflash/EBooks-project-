<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Send email (example)
        mail("admin@ebookscentralhub.com", "New Contact Message", "Name: $name\nEmail: $email\nMessage:\n$message");
        echo "Thank you for contacting us!";
    } else {
        echo "Invalid email address.";
    }
}
?>
