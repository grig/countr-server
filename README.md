# О проекте

Countr -- революция в счетчиках!

Наш уникальный сервис предоставляет REST API для совместной работы над счетчиками.

# Установка и запуск

Для запуска сервера вам понадобится [node.js](http://nodejs.org/download).

Затем выкачайте последнюю версию сервера, установите зависимости и запускайте!

    git clone git://github.com/grig/countr-server.git
    cd countr-server
    npm install
    node server.js
    # Countr server listening at http://0.0.0.0:3000

Запускает сервер на порту 3000. Если вам нужен другой порт, его можно указать в
переменной окружения `PORT`:

    PORT=8080 node server.js
    # Countr server listening at http://0.0.0.0:8080

Запускает сервер на порту 8080.


# Использование

POST-запрос на URI `/counter` увеличивает значение счетчика на 1; GET-запрос на
URI `/counter` возвращает текущее значение счетчика. Пример использования с
помощью `curl`:

    $ curl http://localhost:3000/counter
    {"count":0}
    $ curl -X POST http://localhost:3000/counter
    {"count":1}
    $ curl http://localhost:3000/counter
    {"count":1}

# API

## Обновление счетчика

### Запрос

```
POST /counter HTTP/1.1
Content-Length: 0
```

Инкрементирует счетчик и возвращает его новое значение.

### Ответ

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```
```js
{count: 123}
```

## Запрос счетчика

### Запрос

```
GET /counter HTTP/1.1
```

### Ответ

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```
```js
{count: 123}
```

