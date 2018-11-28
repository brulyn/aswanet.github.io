function sendEmail() {
  let clientEmail = document.getElementById("email");
  let clientNames = document.getElementById("names");
  let message = document.getElementById("message");
  let telephone = document.getElementById("phonenumber");

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log("sent");
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
