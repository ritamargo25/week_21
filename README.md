вопросы
неделя 21
1. Приведите примеры GET-вызовов с параметрами (2-3 возможных адреса URL, можно реальных, можно из головы)? https://www.kinopoisk.ru/index.php?level=7&from=forma&result=adv&m_act%5Bfrom%5D=forma&m_act%5Bwhat%5D=content&m_act%5Bfrom_year%5D=2015&m_act%5Bto_year%5D=2020&m_act%5Bcountry%5D=25&m_act%5Bgenre%5D%5B%5D=6 выбирает фильмы жанра Комедия, снятых с 2015 по 2020 год в Австралии

https://www.litres.ru/search/arts/?q=моем выберите книги по автору Моэм

https://eda.ru/recipesearch?q=картошка&onlyEdaChecked=false выбирает рецепты с ингредиентом картошка

2. Расскажите своими словами, чем отличаются GET и POST-запросы?
Get запрашивает данные из указанного ресурса и может использоваться с данными, которые не требуют безопасности, а Post отправляет данные на сервер и используется при работе с конфиденциальными данными

3. Какой вид запроса лучше использовать для получения отфильтрованного списка товаров?
Запрос GET

4. А какой - для формы регистрации? Запрос POST, тк нужно сохранить конфиденциальные данные, а метод GET этого не делает

5. Посмотрите на запрос и разберитесь, что он делает и что означают и на что влияют параметры api_key, q, limit, lang? Как сделать так, чтобы запрос возвращал не 25, а 5 картинок? Документация к API находится здесь: https://developers.giphy.com/explorer <https://api.giphy.com/v1/gifs/search?api_key=SET_KEY_HERE&q=cats&limit=25&offset=0&rating=g&lang=en>

Запрос ищет картинки кошек
api-key - 
q - это термин запроса или фраза, по которой будет производиться поиск
limit - максимальное количество возвращаемых записей, в нашем случае картинок
lang - указывает страну по умолчанию

чтобы запрос возвращал не 25, а 5 картинок, в limit мы указываем число 5

6. Как посмотреть заголовки запроса к странице или API? в инструментах разработчика в браузере (нажать F12 Dev tools) вкладка Network -> Headers

7. Самостоятельно разберитесь, что такое CORS. Приведите пример их включения в запросе fetch.
CORS - это Cross-origin resource sharing (совместное использование ресурсов разных источников) - это стандарт, позволяющий предоставлять веб-страницам доступ к объектам сторонних интернет-ресурсов.

8. Что можно писать в параметре заголовков Content-Type ? application/x-www-form-urlencoded, multipart/form-data,  text/plain, application/json

9. Давайте отправим информацию о собачке в API по адресу localhost/pets/add JSON с информацией о собаке:
 {
		"breed": "Beagle",
		"size": "large",
		"color": "orange",
		"age": 6
	}
Как будет выглядеть fetch в таком случае?
_________________
let dog= {
breed: "Beagle",
size: "large",
color: "orange",
age: 6
};

let response = await fetch ("https:api.localhost/pets/add", {
method: 'POST',
headers: {
'Content-Type': 'application/json;charset=utf-8
},
body: JSON.stringify(dog)
});
let result = await response.json();
alert(result.message);

10. Изучите статью https://learn.javascript.ru/promise-basics и самостоятельно разберитесь, что такое промисы. Напишите в 1-2 предложения, что это такое и приведите пример, где вы уже сталкивались с промисами?
