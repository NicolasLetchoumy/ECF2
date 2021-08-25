
var emotion = document.querySelector("#emotion")
var style = document.querySelector("#style")
var ilustration = document.querySelector("#ilustration")
var miseEnPage = document.querySelector("#miseEnPage")
var moyenne = document.querySelector("#moyenne")

    //moyenne des notes
    // les variable sont enregistrer et envoyé dans la base de données
    moyenne.addEventListener("click", function(event){
        var note = style.value + emotion.value + ilustration.value + miseEnPage.value;
        var resultat = note / 4;
        console.log(style.value)
        alert(resultat);
    })