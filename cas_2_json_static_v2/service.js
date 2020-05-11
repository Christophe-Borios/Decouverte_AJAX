function ajaxGetJson(url, callback){
    
    const xhr = new XMLHttpRequest();

    xhr.open('get', url);

    xhr.addEventListener('load', () => {
        console.log(`Statut de la réponse à la requête AJAX : ${xhr.status} ${xhr.statusText}`);

        const jsonData = xhr.response;

        const data = JSON.parse(jsonData);

        //Traitement des données reçues par la fonction de callback
        callback(data);
    });

    xhr.addEventListener('error', () => console.error('AJAX request failed'));

    xhr.send();
}