<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
          crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    /* Reset and base styles */
    .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #ff6600;
    color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Left Section */
.left {
    display: flex;
    align-items: center;
}

.logo {
    width: 40px;
    margin-right: 10px;
    cursor: pointer;
    transition: transform 0.3s;
}

.logo:hover {
    transform: scale(1.1);
}

.dropdown {
    padding: 8px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    cursor: pointer;
}

/* Right Section */
.right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.right a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s, transform 0.2s;
}

.right a:hover {
    color: white;
    transform: scale(1.05);
}

/* Cart */
.cart {
    display: flex;
    align-items: center;
    gap: 5px;
}

/* Search */
.search-container {
    position: relative;
    display: flex;
    align-items: center;
}

.search-container i {
    position: absolute;
    left: 10px;
    color: gray;
}

.search-container input {
    padding: 8px 10px 8px 30px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: center;
    }
    
    .right {
        margin-top: 10px;
        gap: 15px;
    }
    
    .search-container input {
        width: 150px;
    }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url("imgback.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Poppins', sans-serif;
  transition: background 1s ease-in-out;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

.container h1 {
  color: #222;
  font-size: 42px;
  margin-bottom: 20px;
  transition: color 0.4s;
}

.container h1:hover {
  color: #ff6600;
}

.form-container {
  background: rgba(255, 255, 255, 0.85);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
  transition: transform 0.4s, box-shadow 0.4s;
}

.form-container:hover {
  transform: scale(1.03);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
}

.form-container input,
.form-container select {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-container input:focus,
.form-container select:focus {
  border-color: #ff6600;
  box-shadow: 0 0 8px #ff6600;
  outline: none;
}

.form-container .submit {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  color: white;
  background: linear-gradient(135deg, #ff6600, #ff6600);
  border-radius: 6px;
  cursor: pointer;
  border: none;
  transition: background 0.4s, transform 0.3s;
}

.form-container .submit:hover {
  background: linear-gradient(135deg, #ff6600, #ff6600);
  transform: scale(1.05);
}

.toggle-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  gap: 10px;
}

.toggle-buttons button {
  flex: 1;
  padding: 12px 0;
  border: none;
  cursor: pointer;
  background-color: #333;
  color: white;
  border-radius: 6px;
  transition: background-color 0.3s, transform 0.3s;
}

.toggle-buttons button.active,
.toggle-buttons button:hover {
  background-color: #ff6600;
  transform: translateY(-3px);
}

.form-section {
  display: none;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
}

.form-section.active {
  display: block;
  opacity: 1;
  animation: fadeInUp 0.8s ease-in-out;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

select option {
  padding: 10px;
}
.footer {
    background-color: #050505;
    color: rgb(255, 255, 255);
    padding: 20px 0;
    text-align: center;
    font-family: Arial, sans-serif;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
}

.footer-section {
    flex: 1;
    max-width: 250px;
    padding: 10px;
}

.footer-section h3 {
    font-size: 18px;
    margin-bottom: 10px;
    border-bottom: 2px solid #ff6600;
    display: inline-block;
    padding-bottom: 5px;
}

.footer-section p, 
.footer-section ul {
    font-size: 14px;
    line-height: 1.6;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 8px;
}

.footer-section ul li a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
}

.footer-section ul li a:hover {
    color: #ff6600;
}

/* Social Media Icons */
.social-icons a {
    color: white;
    margin: 0 10px;
    font-size: 18px;
    transition: 0.3s;
}

.social-icons a:hover {
    color: #ff6600;
}

/* Footer Bottom */
.footer-bottom {
    background-color: #040608;
    padding: 10px;
    font-size: 14px;
}

  </style>
</head>
<body>
    <header class="header">
        <div class="left">
            <a href="home.html">
                <img src="event.jpg.png" alt="EventManagement" class="logo">
            </a>
            <form action="#">
                <label for="location">Location:</label>
                <select id="location" class="dropdown">
                    <option>Select Location</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                    <option>Andhra Pradesh</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                </select>
            </form>
        </div>
        

        <nav class="right">
            <a href="signin.html"><i class="fa-solid fa-user"></i> Sign In</a>
            <a href="services.html"><i class="fa-solid fa-life-ring"></i>Services</a>
            <a href="contact.html"><i class="fa-solid fa-phone"></i></i> Contact Us</a>
            <a href="Aboutus.html" class="cart"><i class="fa-regular fa-address-card"></i> About Us</a>
            
            <div class="search-container">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search">
            </div>
        </nav>
    </header>

<div class="container">
  <h1>Welcome To Planwithus</h1>
  
  <div class="form-container">
    <div class="toggle-buttons">
      <button id="loginBtn" class="active" onclick="toggleForm('login')">Login</button>
      <button id="signupBtn" onclick="toggleForm('signup')">Sign Up</button>
    </div>
    
    <form id="loginForm" class="form-section active" action="signin.php" method="POST">
  <input type="email" name="email" placeholder="Email" required>
  <input type="password" name="password" placeholder="Password" required>
  <button type="submit" class="submit">Login</button>
</form>
    
    <form id="signupForm" class="form-section" onsubmit="return formValidation()" action="home.html">
      <input type="text" name="name" id="name" placeholder="Your Name" required>
      <input type="text" name="email" id="email" placeholder="Your Email" required>
      <input type="password" name="password" id="password" placeholder="Password" required>
      <input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" required>
      <select name="language" id="language" required>
        <option value="">Select language</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="Hindi">Hindi</option>
        <option value="Arabic">Arabic</option>
        <option value="Russian">Russian</option>
        <option value="Telugu">Telugu</option>
      </select>
      <input type="submit" class="submit" value="Sign Up">
    </form>
  </div>
</div>
<footer class="footer">
        <link rel="stylesheet" href="foter.css">
        <div class="footer-container">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Evento is India's leading event Management serivce system that provide all requirments to your doorstep.</p>
            </div>

            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Sign In</a></li>
                    
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="Aboutus.html">About Us</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Contact Us</h3>
                <p><i class="fa-solid fa-envelope"></i> Email: support@gmail.com</p>
                <p><i class="fa-solid fa-phone"></i> Phone: +91 9391134494</p>
                <p><i class="fa-solid fa-map-marker-alt"></i> Address: Andhra Pradesh, India</p>
            </div>

            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <hr>
        <div class="footer-bottom">
            <p>© 2025 Event Management. All rights reserved.</p>
        </div>
    </footer>

<script>
  function toggleForm(formType) {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById("loginBtn").classList.remove("active");
    document.getElementById("signupBtn").classList.remove("active");
    
    if (formType === 'login') {
      document.getElementById("loginForm").classList.add("active");
      document.getElementById("loginBtn").classList.add("active");
    } else {
      document.getElementById("signupForm").classList.add("active");
      document.getElementById("signupBtn").classList.add("active");
    }
  }

  function formValidation() {
    const userName = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phoneNumber = document.getElementById("phoneNumber");
    const language = document.getElementById("language");

    if (userName.value.length < 2 || userName.value.length > 20) {
      alert("Name length should be between 2 and 20 characters.");
      return false;
    }

    if (!email.value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("Please enter a valid email!");
      return false;
    }

    if (!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
      alert("Password must have 1 uppercase, 1 lowercase, 1 number, 1 special character, and be 8-15 characters long.");
      return false;
    }

    if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
      alert("Phone number must be 10 digits, not starting with 0.");
      return false;
    }

    if (language.value === "") {
      alert("Please select a language!");
      return false;
    }

    return true;
  }
</script>

</body>
</html>
