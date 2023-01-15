/*Найдите форму регистрации с валидацией (задание 2 недели 18) или сверстай новую. 
При нажатии на кнопку “Отправить” отправляй данные формы в формате JSON на сайт 
https://httpbin.org/post через POST запрос. 
*/

postButton.onclick = function (event) {
    event.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        fio: document.getElementById("fio").value,
        login: document.getElementById("login").value,
        password1: document.getElementById("current-password").value,
        password2: document.getElementById("current-password2").value,
        phone: document.getElementById("phone").value
    }
    console.log(user);

    fetch("https://httpbin.org/post",
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}