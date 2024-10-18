function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const terms = document.getElementById("terms").checked;
    const percentageInput = document.getElementById('percentage').value;
    const errorMessage = document.getElementById('error-message');
    // const value = parseFloat(percentageInput.value);
   
   
    // Name validation
    if (fullName === "") {
      alert("Full Name is required");
      return false;
    }
  
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    // Phone number validation
    if (phone === "" || phone.length < 10) {
      alert("Please enter a valid phone number with at least 10 digits");
      return false;
    }

    // Percentage validation
    if (value <= 0 || value >= 100) {
      errorMessage.style.display = 'inline';
      percentageInput.setCustomValidity("Value must be between 0 and 100.");
  } else {
      errorMessage.style.display = 'none';
      percentageInput.setCustomValidity("");
  }

  
    // Terms and conditions validation
    if (!terms) {
      alert("You must agree to the terms and conditions");
      return false;
    }
  
    
    alert("Form submitted successfully!");
    document.getElementById("candidateForm").reset();
    return false; 
  }
  
