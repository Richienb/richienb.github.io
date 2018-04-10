function buildString() {
  var email = "richiebendall@gmail.com",
    to = email,
    subject = encodeURIComponent(document.getElementById("subject").value),
    body = encodeURIComponent(document.getElementById("body").value),
    message = "";
  email.className = "not";
  message = "mailto:" + to;
  subject || body ? (message += "?") : false;
  subject ? (message += "subject=" + subject) : false;
  subject && body ? (message += "&body=" + body) : false;
  !subject && body ? (message += "body=" + body) : false;
  window.open(message);
}
function androiddownload() {
  window.open(
    "http://www.mediafire.com/file/574gbn99mvn2yj0/Richie_Bendall%27s_Website_App.apk"
  );
}
