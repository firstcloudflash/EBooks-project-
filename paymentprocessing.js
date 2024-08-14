const stripe = Stripe('your-publishable-key'); // Replace with your Stripe public key
const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

const form = document.getElementById('payment-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { token, error } = await stripe.createToken(card);
    if (error) {
        document.getElementById('card-errors').textContent = error.message;
    } else {
        // Send token to your server for processing
        fetch('/charge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token.id }),
        }).then(response => response.json())
          .then(data => {
              if (data.success) {
                  alert('Payment successful!');
              } else {
                  alert('Payment failed. Please try again.');
              }
          });
    }
});
