function confirmDonation() {
  const confirmed = confirm('Are you sure you want to donate?');
  if (confirmed) {
    const amount = parseFloat(prompt('Please enter the donation amount:'));

    if (isNaN(amount) || amount <= 0) {
      alert('Invalid donation amount. Please enter a valid number.');
      return;
    }

    const id = prompt('Please enter your eSewa ID:');

    if (id === null || id === '') {
      alert('Invalid eSewa ID. Please enter a valid ID.');
      return;
    }

    // Open new page with thank you message and logo
    const thankYouPage = window.open('', '_blank');
    thankYouPage.document.write(`
      <html>
        <head>
          <title>Thank you for your donation</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: white;
              background-image: url("images/logo.png");
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
            }
            h1 {
              font-size: 10vh;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <h1>Thank you for your donation!</h1>
        </body>
      </html>
    `);

    // Redirect to eSewa page after 3 seconds
    setTimeout(() => {
      const encodedAmount = encodeURIComponent(amount);
      const encodedId = encodeURIComponent(id);
      const url = `https://esewa.com.np/#/sc=9803514141&su=Donation%20to%20Legend's%20Rescue&amt=${encodedAmount}&pid=${encodedId}`;
      thankYouPage.location.href = url;
    }, 3000);
  }
}


function sendEmail() {
  // Prompt the user to confirm sending the email
  if (confirm("Are you sure you want to send this email?")) {
    // If the user confirms, open the mailbox
    window.location.href = "mailto:user@example.com";
  }
}

