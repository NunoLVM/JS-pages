
function revelerAnimal(magie) {

    if (magie < 1 || magie > 5 || isNaN(magie)) {
        return "Tu es trop puissant pour être classé dans notre bestiaire !";

    }

    if (magie === 1) {
        return "Licorne";

    } else if (magie === 2) {
        return "Grenouille"

    } else if (magie === 3) {
        return "Dragon"

    } else if(magie === 4) {
        return "Hibou"

    } else if (magie == 5) {
        return "Escargot"

    }

}
    
let nombre = Number(prompt("Choisi un chiffre entre 1 et 5 :"));
    alert ("Ton animal magique est : " + revelerAnimal(nombre));

