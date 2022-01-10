### [Макеты из Яндекса](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat)

### [Домен Netlify](https://praktikum-yandex-messager.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b312c718-fcdf-4343-8af9-f6acc12b1a78/deploy-status)](https://app.netlify.com/sites/praktikum-yandex-messager/deploys)

---

## Описание

Проект мессенджера в разработке

## Структура

- `index.html` - стартовая страница логина - лежит в папке static, к которой обращается сервер при запросе на "/"

- `src/components` - папка с модулями (js и css), которые генерируют поля (input, a, form и тд) и шаблонизатором через строковые литералы
- `src/pages` - папка со страницами html и модулями js и css, которые формируют страницы
	- 404 - страница 404 ошибки
	- 500 - страница 500 ошибки
	- signup - страница регистрации
	- chats - страница с чатами
	- profile - страница с чатами
    --в папке со страницой с профилем лежат формы, которые соджержат контент, в зависимости от действия, которое хочет проделать пользователь
- `src/utils` - папка с утилитными модулями

Пока нет нормального роута переходы сделаны через ссылки

## Команды

отдельная постраничная сборка через Parcel:

	npm run 404        страница 404
	npm run 500       страница 500
	npm run login      страница логина
	npm run signup     страница регистрации
	npm run chats      страница с чатами
	npm run profile    страница с профилем

- `npm run build`        сборка проекта через Parcel

- `npm run start`       запуск сервера после сборки