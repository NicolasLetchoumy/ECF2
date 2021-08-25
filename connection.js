var valider = document.querySelector("#valider")
var mdp = document.querySelector("#newMdp")
var confirmation = document.querySelector("#newMdp2")


//vérification login 
valider.addEventListener("click",function (event) {
    event.preventDefault()
    var validated =  true;
    if(mdp.value.length <= 9){
        validated = false;
        console.log("yes")
    }
    if(!/\d/.test(mdp.value)){
        validated = false;
        console.log("yes")
    }
    if(!/[a-z]/.test(mdp.value)){
        validated = false;
        console.log("yes")
    }
    if(!/[A-Z]/.test(mdp.value)){
        validated = false;
        console.log("yes")
    }
    if(/[^0-9a-zA-Z]/.test(mdp.value)){
        validated = false;
        console.log("yes")
    }
    if(mdp.value == confirmation.value && validated == true){
        alert("mot de passe correct");
    }
    else{
        alert("erreur sur le mot de passe");
    }
})
