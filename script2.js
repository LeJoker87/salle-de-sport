document.getElementById("contact").addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var sujet = document.getElementById("sujet");
    var reclam = document.getElementById("reclamation");

    if (!nom.value) {
        erreur = "Veuillez renseigner un nom"
    }
    if (!email.value) {
        erreur = "Veuillez renseigner un email"
    } 
    if (!sujet.value) {
        erreur = "Veuillez renseigner un titre"
    }
    if (!reclam.value) {
        erreur = "Vous n'avez pas entré votre message..."
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé !')
    } 
    alert('Formulaire envoyé !')
  });