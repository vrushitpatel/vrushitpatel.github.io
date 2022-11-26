document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.querySelector("#name1").value;
  let email = document.querySelector("#email1").value;
  let message = document.querySelector("#msg1").value;

  document.querySelector(".contact-form").reset();

  sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "freelance.vrushit@gmail.com",
    Password: "tjsciuwxcjvpsfrn",
    To: "vrushit7506@gmail.com",
    From: "freelance.vrushit@gmail.com",
    Subject: `${name} Sent You A Message`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
  }).then((message) => alert("Mail has been sent sucessfully"));
}
