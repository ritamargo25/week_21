/*Сделайте форму поиска по GIF-кам к открытому API 
(https://developers.giphy.com/) 
    
Используйте GET-запрос с параметрами в строке адреса. 
Страница должна выводить не более 5 картинок одновременно.*/

function onSearch() {
    let gifs = document.getElementById("gifSearch")
        .value;

    fetch("https://api.developers.giphy.com/" + gifs
    )
        .then(response => response.json())
        .then(gif => {
            document.getElementById("picture").src =
                gif.picture_url;
        })
        .catch(error => console.log(error));
}

