function sendEmail() {
  let clientEmail = document.getElementById("email").value;
  let clientNames = document.getElementById("names").value;
  let message = document.getElementById("message").value;
  let telephone = document.getElementById("phonenumber").value;

  document.getElementById("form-btn").disabled = true;
  document.getElementById("form-btn").innerHTML = "sending...";
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log("sent");
      document.getElementById("email").value = "";
      document.getElementById("names").value = "";
      document.getElementById("message").value = "";
      document.getElementById("phonenumber").value = "";
      document.getElementById("form-btn").disabled = false;
      document.getElementById("form-btn").innerHTML = "SEND";
    }
  };

  xmlhttp.open(
    "GET",
    "https://mymailer201811.herokuapp.com/?clientEmail=" +
      clientEmail +
      "&clientNames=" +
      clientNames +
      "&message=" +
      message +
      "&telephone=" +
      telephone,
    true
  );
  xmlhttp.send();
}
