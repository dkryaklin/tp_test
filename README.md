# travelpayouts_test

Demo: #### <https://dkryaklin.github.io/tp_test>
Widget: #### <https://dkryaklin.github.io/tp_test/widget.html>

Тестовое задание на позицию Frontend Developer в компанию Aviasales.

Для запуска проекта необходимо выполнить в командной строке:

```sh
$ npm install
$ npm start
```

Задание было протестировано в следующих браузерах:

* IE10, IE11, Edge
* Chrome
* Firefox
* Safari

# Код для вставки

Необходимо вставить следующий код в html страницу в нужном вам месте. Максимальная ширина виджета 1024px и минимальная 290px:

```html
    <iframe frameborder="0" allowtransparency="true" scrolling="no" height="auto" width="100%" src="https://dkryaklin.github.io/tp_test/widget.html" style="max-width: 1024px; display: block;" data-initaviasales="false"></iframe>
```

Независимо от количеста виджетов на странице нужно подключить вспомогательный скрипт. Его нужно добавить в конец <body>:

```html
    <script async type="text/javascript" src="https://dkryaklin.github.io/tp_test/static/js/client.js"></script>
```

Также c помошью параметров можно изменить цвет фона, кнопки и текста с помощью параметров. 

На данный момент поддерживаются следующие параметры:

* backColor - цвет фона
* textColor - цвет текста
* buttonColor - цвет кнопки

Значение цвета должно быть в формате hex. Здесь можно найти несколько примеров: #### <http://www.color-hex.com/>. В виджете реализована проверка цвета. Так что важно чтобы цвет был 6 символов в длину без символа # в начале. Если цвет не поменялся тогда следует проверить значения параметров.

Ниже представлены несколько примеров кода с различными параметрами:

```html
    <iframe frameborder="0" allowtransparency="true" scrolling="no" height="auto" width="100%" src="%PUBLIC_URL%/widget.html?backColor=000000&buttonColor=650000" style="max-width: 1024px; display: block;" data-initaviasales="false"></iframe>
```

```html
    <iframe frameborder="0" allowtransparency="true" scrolling="no" height="auto" width="100%" src="%PUBLIC_URL%/widget.html?backColor=CEB3C6&textColor=1F0052&buttonColor=49BE45" style="max-width: 1024px; display: block;" data-initaviasales="false"></iframe>
```