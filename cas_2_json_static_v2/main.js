'use strict';
//Activation du mode strict pour la sécurité

/**
 * Gestionnaire d'évènement au clic
 * sur le bouton on envoie une requête en Ajax dans index.html
 * @param void
 */
function onClickXhrButton(){
    //On instancue l'objet
    const xhr = new XMLHttpRequest();

    //Ouverture et paramétrages de la requête
    xhr.open('get', 'contenu-json.json', true);

    //On place des listeners
    xhr.addEventListener('load', () =>{

        //Affichage du status de la réponse
        console.log(`Statut de la réponse à la requête AJAX : ${xhr.status} ${xhr.statusText}`);

        //On récupère le coprs de la réponse sous forme de texte au format JSON
        const jsonData = xhr.responseText;

        //On place le code HTML récupéré dans l'encart prévu à cet effet
        const container = document.getElementById('xhr-response');
        container.innerHTML = jsonData;

        //Pour exploiter les données il faudrait les désérialiser
        const data = JSON.parse(jsonData);
        console.log(data);
    });
    xhr.addEventListener('error', () => console.error('AJAX request failed'));
    //On envoie la requête
    xhr.send();
}

/**
 * Code principal qui appel les duex fonctions
 */
document.addEventListener('DOMcontentLoaded', function(){

    document.getElementById('xhr-button').addEventListener('click', onClickXhrButton);
});