# Введение

Вы делаете инновационный стартап в сфере веб-счетчиков. Ваш партнер уже написал
сервер, предоставляющий REST API к счетчику. Ваша задача -- сделать клиент,
использующий это API.

Идея вашего стартапа такая: любой человек, установивший ваше Chrome-расширение,
получает кнопку, на которую может нажать в любой момент. Количество нажатий
отображается рядом, в реальном времени. Своим счетчиком можно поделиться со
своими друзьями и они тоже могут нажимать на вашу кнопку.

Так как стартап очень инновационный и на очень ранней стадии, то счетчик
поддерживается только один, глобальный и доступный всем. API очень простой и
состоит из двух вызовов: 1) инкрементировать счетчик на единицу, 2) получить
текущее значение счетчика.

# Задача

Сделать Chrome-расширение со следующим функционалом:

1. После установки расширения на тулбар хрома добавляется кнопка с логотипом
   Countr.

2. При клике на кнопку выпадает окошко с кнопкой "Нажать" и счетчиком нажатий.
   Счетчик нажатий инициализируется значением, взятым с сервера.

3. Если пользователь нажимает на кнопку, то на сервер отправляется запрос на
   увеличение счетчика. Так как стартап у нас инновационный, то видимый
   пользователю счетчик увеличивается, не дожидаясь ответа сервера. Пока ответа
   от сервера нет, пользователь может нажать кнопку еще раз. И еще раз. И еще.

4. Когда от сервера приходит ответ, мы обновляем видимый пользователю счетчик
   авторитетным значением, полученным от сервера.

5. Если с момента получения последнего ответа от сервера прошло больше 5
   секунд, расширение запрашивает у сервера обновленное значение счетчика. Ведь
   кто-то из наших друзей мог его в это время обновить!

Результаты принимаются в виде архива с исходниками или ссылки на
git-репозиторий с исходниками же.

# Ресурсы

В вашем распоряжении есть сервер, документация на его API и все, что сможете
найти в интернете. Сервер можно запускать самому или использовать тестовую
версию, доступную по адресу

  http://countr-server.herokuapp.com/

Код сервера и документация на его API доступны по адресу

  http://github.com/grig/countr-server/

Создание расширений для Chrome и API, доступное расширениям, описано здесь:

  https://developer.chrome.com/extensions

Удачи!