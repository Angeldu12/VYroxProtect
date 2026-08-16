// Remplace cette URL par l'URL d'invitation OAuth2 de ton bot.
const INVITE_URL = "#";

for (const id of ["inviteBtn", "inviteBtn2"]) {
  const button = document.getElementById(id);
  if (button) {
    button.addEventListener("click", (event) => {
      if (INVITE_URL === "#") {
        event.preventDefault();
        alert("Configure d'abord INVITE_URL dans script.js avec le lien d'invitation de VyroxProtect.");
      } else {
        button.href = INVITE_URL;
      }
    });
  }
}
