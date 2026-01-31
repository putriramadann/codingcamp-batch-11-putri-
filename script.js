// NAMA USER
const userName = "Nama Kamu";
document.getElementById("welcome-text").innerText = "Hi, " + userName;

// VALIDASI EMAIL
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("All fields must be filled!");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Email format is not valid!");
    return;
  }

  document.getElementById("result").innerHTML = `
    <h3>Submitted Data</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>
  `;
});
