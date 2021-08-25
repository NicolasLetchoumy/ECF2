var mdp = document.querySelector("#newMdp")
var confirmation = document.querySelector("#newMdp2")
var valider = document.querySelector("#valider")


valider.addEventListener("click",function () {
        var validated =  true;
        if(mdp.value.length > 10){
            validated = false;
        }
        if(!/\d/.test(mdp.value)){
            validated = false;
        }
        if(!/[a-z]/.test(mdp.value)){
            validated = false;
        }
        if(!/[A-Z]/.test(mdp.value)){
            validated = false;
        }
        if(/[^0-9a-zA-Z]/.test(mdp.value)){
            validated = false;
        }
        if(mdp.value == confirmation.value){
            alert("mot de passe correct");
        }
        else{
            alert("erreur sur le mot de passe");
        }
    });
