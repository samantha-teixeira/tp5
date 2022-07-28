function saluer(event) {
    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    // récupération de la valeur des champs de saisie.
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    // construction du message
    let message = "";
    if (prenom.length == 0 && nom.length == 0)
        message = "Bonjour, illustre inconnu(e)";
    else
        message = `Bonjour ${prenom} ${nom}`;
    //alert("AH UN CLICK SUR LE BOUTON !");
    alert(message);
    let race = document.querySelector('#race').value;
    let emote = "";
    switch (race) {
        case 'elf':
            emote = emoteElfe();
            break;
        case 'ork':
            emote = emoteOrque();
            break;
        default:
            emote = emoteHumain();
            break;
    }
    alert(emote);

    let rang = document.querySelector('input[name=rank]:checked').value;
    let emote2 = "";
    switch (rang) {
        case 'roture':
            emote2 = emoteRoture();
            break;
        case 'noble':
            emote2 = emoteNoble();
            break;
        default:
            emote2 = emoteRoyaute();
            break;
    }
    alert(emote2);

    let paragrapheClasses = document.querySelector('#classes');
    paragrapheClasses.innerHTML = listerLesClasses();

}

function emoteHumain() {
    return "l'ordinateur observe la personne qui approche.";
}
function emoteElfe() {
    return "l'ordinateur observe la personne, totalement subjugé par la grâce elfique.";
}
function emoteOrque() {
    return "l'ordinateur observe la personne difforme et repoussante, plissant le nez.";
}

function emoteRoture() {
    return "Le garde fait un signe de tête."
}
function emoteNoble() {
    return "Le garde s’incline respectueusement."
}
function emoteRoyaute() {
    return "Le garde, ainsi que toutes les personnes présentes s’inclinent profondément."
}

function getNombreClasse() {
    let classes = document.querySelectorAll('.classe:checked');
    return classes.length;
}

function listerLesClasses() {
    let classes = document.querySelectorAll('.classe:checked');
    console.log(classes);
    let message = "<ul>";
    classes.forEach(classe => {
        message += `<li>${classe.name}</li>`;
    });
    console.log(message);
    return message + "</ul>"; à
}

function saluersansalert(event) {
    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    // on affiche tout par défaut, et il n'y a pas d'erreur !
    document.querySelector('#error').innerHTML = "";
    document.querySelector('#message').style.display = 'block';
    // vérifier les trois classes
    // test de garde !
    if ((getNombreClasse() == 0) || getNombreClasse() > 3) {
        document.querySelector('#message').style.display = 'none';
        document.querySelector('#classes').innerHTML = "";
        document.querySelector('#error').innerHTML = `Vous ne pouvez pas avoir ${getNombreClasse()} classe(s): entre 1 et 3 maximum.`;
        return;
    }

    let parasalutation = document.querySelector('#salutations');
    parasalutation.innerHTML = afficherSalutation();

    let paraemote = document.querySelector('#emotes');
    paraemote.innerHTML = afficherEmoteRace() + afficherEmoteRang();

    let paragrapheClasses = document.querySelector('#classes');
    paragrapheClasses.innerHTML = listerLesClasses();

}


function afficherEmoteRang() {
    let rang = document.querySelector('input[name=rank]:checked').value;
    let emote2 = "";
    switch (rang) {
        case 'roturier':
            emote2 = emoteRoture();
            break;
        case 'noble':
            emote2 = emoteNoble();
            break;
        default:
            emote2 = emoteRoyaute();
            break;
    }
    return emote2;
}

function afficherEmoteRace() {
    let race = document.querySelector('#race').value;
    let emote = "";
    switch (race) {
        case 'elf':
            emote = emoteElfe();
            break;
        case 'ork':
            emote = emoteOrque();
            break;
        default:
            emote = emoteHumain();
            break;
    }
    return emote;
}

function afficherSalutation() {
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    // construction du message
    let message = "";
    if (prenom.length == 0 && nom.length == 0)
        message = "Bonjour, illustre inconnu(e)";

    else
        message = `Bonjour ${prenom} ${nom}`;
    return message;
}

