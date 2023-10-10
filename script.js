if (confirm("Etes-vous prêt à commencer ?")){

    var NombreAléatoire = Math.floor(Math.random() * 101);
    console.log(NombreAléatoire);
    var Essais = 0;
}
function bouton(){
    var Guess = document.getElementById("guess").value
    console.log(Guess);
    while(true){
        Essais++;
        // var Guess = prompt("Entrez un chiffre entre 1 et 100")
        if(Guess){
            if(Guess==NombreAléatoire){document.getElementById("result").value = ("Bravo tu a trouvé le chiffre en " + Essais + " essai(s) !!");
            break;
        }
        else if(Guess < NombreAléatoire){
            document.getElementById("result").value = ("C'est plus grand !");
            break;
        }
        else
            document.getElementById("result").value = ("C'est plus petit !");
        break;
    }else{
        break;
    }
}
}