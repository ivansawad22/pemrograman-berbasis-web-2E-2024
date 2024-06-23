document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Contoh validasi sederhana, bisa diganti dengan validasi yang sesuai dengan kebutuhan aplikasi Anda
  if (username === "admin" && password === "password") {
      alert("Login berhasil!");
      // Redirect ke halaman kalkulator
      window.location.href = "kalkulator.html";
  } else {
      alert("Username atau password salah!");
  }
});
