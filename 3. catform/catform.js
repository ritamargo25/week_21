/*Найдите форму владельцев котиков (задание 1 недели 18) 
или сверстай новую. При нажатии на кнопку “Отправить” 
отправляй данные формы через объект FormData на сайт https://httpbin.org/post через POST запрос. */

postButton.onclick = function (event) {
    event.preventDefault()

    let cat = {
        namecat: document.getElementById("namecat").value,
        nameowner: document.getElementById("nameowner").value,
        phone: document.getElementById("phone").value,
        breed: document.getElementById("breed").value,
    }
    console.log(cat);

    fetch("https://httpbin.org/post",
        {
            method: 'POST',
            body: new FormData(formElem)
        })
        .then(response => response.json())
        .catch(error => console.log(error));
}
