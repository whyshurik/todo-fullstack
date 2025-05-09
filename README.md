# todo-fullstack

перед использованием приложения создайте базу данных mongo. полученную ссылку вставьте в переменную MONGO_URL в фалйе по пути server/.env

описание backend эндпоинтов:
Все /tasks/ эндпоинты требуют только для авторизированных пользователей, поэтому для начала зарегистрируйте пользователя, а потом войдите через login
1. Регистрация пользователя (Register)
   Метод: POST
   Путь: localhost:3000/users/register
   Описание: Создаёт нового пользователя в системе с ролью default user.
   Тело запроса: Данные для регистрации JSON { username: "string", password: "string" }

2. Вход пользователя (Login)
   Метод: POST
   Путь: localhost:3000/users/login
   Описание: Аутентифицирует пользователя и возвращает токен и данные для доступа. Если тестируется только бекенд, то токен стоит вставлять в хедер запроса Authorization
   Тело запроса: Учетные данные пользователя JSON в формате { username: "string", password: "string" }

1. Создание задачи
   Метод: POST
   Путь: localhost:3000/tasks/:userId
   Описание: Создаёт новую задачу для указанного пользователя.
   Параметры:
   :userId (в пути) - ID пользователя, для которого создаётся задача.
   Тело запроса: Данные задачи в формате JSON в формате { title: "string", description: "string", status: "string" })
2. Получение задачи по ID
   Метод: GET
   Путь: localhost:3000/tasks/:userId/:id
   Описание: Возвращает задачу по её ID для указанного пользователя. Только для аутентифицированных пользователей
   Параметры:
   :userId (в пути) - ID пользователя, владеющего задачей.
   :id (в пути) - ID задачи.
3. Получение всех задач пользователя
   Метод: GET
   Путь: localhost:3000/tasks/:userId
   Описание: Возвращает все задачи, связанные с указанным пользователем.
   Параметры:
   :userId (в пути) - ID пользователя.
4. Обновление задачи
   Метод: PUT
   Путь: localhost:3000/tasks/:userId/:id
   Описание: Обновляет существующую задачу для указанного пользователя.
   Параметры:
   :userId (в пути) - ID пользователя, владеющего задачей.
   :id (в пути) - ID задачи.
   Тело запроса: Обновлённые данные задачи в формате JSON.
5. Удаление задачи
   Метод: DELETE
   Путь: localhost:3000/tasks/:userId/:id
   Описание: Удаляет задачу для указанного пользователя.
   Параметры:
   :userId (в пути) - ID пользователя, владеющего задачей.
   :id (в пути) - ID задачи.

описание эндпоинтов на клиенте:
1. Вход (Login)
   Путь: localhost:4000/login
   Компонент: <Login>
   Описание: Страница для входа в систему. После успешного логина перенаправляет на /admin (для админов) или / (для обычных пользователей) в зависимости от результата функции isAdmin().
   Доступ: Открыт для всех.
2. Регистрация (Register)
   Путь: localhost:4000/register
   Компонент: <Register>
   Описание: Страница для регистрации нового пользователя.
   Доступ: Открыт для всех.
3. Страница задач пользователя (Todo Page)
   Путь: localhost:4000/
   Описание: Страница со списком задач пользователя. Доступна только после входа в систему.
4. Страница задач администратора (Admin Todo Page)
   Путь: localhost:4000/admin
   Описание: Страница для управления задачами, доступная только администраторам после входа в систему.

При запуске проекта в базу данных единожды создается пользователь с ролью admin. Создать других пользователей с ролью admin в рамках приложения не предусмотрено. 
Данные от аккаунта admin:
username: admin
password: admin
