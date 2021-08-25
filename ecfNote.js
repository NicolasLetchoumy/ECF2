
var emotion = document.querySelector("#emotion")
var style = document.querySelector("#style")
var ilustration = document.querySelector("#ilustration")
var miseEnPage = document.querySelector("#miseEnPage")
var moyenne = document.querySelector("#moyenne")

    //moyenne des notes
    // les variable sont enregistrer et envoyé dans la base de données
    moyenne.addEventListener("click", function(){
        var note = parseInt(style.value) + parseInt(emotion.value)
        var note2 = parseInt(ilustration.value) + parseInt(miseEnPage.value);
        var noteFinal = note + note2
        var resultat = noteFinal / 4;
        console.log(style.value)
        alert(resultat);
    })