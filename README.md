//Задание 1 - разделение фронтенда на микрофронтенды

/host-microfrontend          // главный микрофронт
  /src
    /components
      /screen
        Main.js				       // Главная страница проекта
      /layout
        Footer.js 			     // Компонент футера
        Header.js            // Компонент заголовка
        Layout.js            // Компонент основной компоновки элементов
	  /blocks                  // Файлы стилей
    /images                  // Изображения для отображения элементов
    /vendor                  // Сторонние файлы для отображения элементов
    App.tsx                  // Точка запуска реакта
    index.css                // Основные стили
    index.ts                 // Точка входа хоста-микрофронта
    serviceWorker.js         // Service Worker
	/public                    // Публичные файлы
  package.json               // Зависимости и скрипты хоста-микрофронтенда
  module-federation.config.ts // Настройки модулей
  ...files                   // дефолтные компоненты сборки микрофронтенда

/auth-microfrontend          // микрофронт авторизации и данных о пользователе
  /src
    /components
      Login.js               // Компонент входа пользователя
      Register.js            // Компонент регистрации пользователя
      EditAvatarPopup.js     // Компонент изменения аватара
      EditProfilePopup.js    // Компонент изменения профиля
	    InfoTooltip.js		     // Информационный тултип
	    PopupWithForm.js		   // Шаблонный компонент попапа
	    Profile.js		         // Часть контента отвечающая за пользователя
    /utils
      auth.js                // Запросы аутентификации
      api.js                 // Запросы изменения профиля пользователя
    /providers
      AuthProvider.js        // Проборс состояния аутентификации и логика по безопасности
    /context
      AuthContext.js         // Контекст состояния аутентификации
    /hooks
      useAuth.js        	   // Кастомный хук на основе useState для хранения статуса аутентификации
    /images                  // Изображения для отображения элементов
    App.tsx                  // Точка запуска реакта
    index.css                // Основные стили
    index.js                 // Базовая точка входа авторизации-микрофронтенда
  package.json               // Зависимости и скрипты авторизации-микрофронтенда
  module-federation.config.ts // Настройки модулей
  ...files                   // дефолтные компоненты сборки микрофронтенда

/gallery-microfrontend       // микрофронт галереи
  /src
    /components
      AddPlacePopup.js       // Компонент добавления карточки
      Card.js                // Компонент входа пользователя
      ImagePopup.js          // Компонент попапа изображжения
      Gallery.js             // Компонент контента связанный с карточками и CRUD логикой
	    PopupWithForm.js       // Шаблонный компонент попапа
    /images                  // Изображения для отображения элементов
    /utils
      api.js                 // Запросы CRUD операций над галереей
    App.tsx                  // Точка запуска реакта
    index.css                // Основные стили
    index.js                 // Точка входа карточек-микрофронтенда
  package.json               // Зависимости и скрипты карточек-микрофронтенда
  module-federation.config.ts // Настройки модулей
  ...files                   // дефолтные компоненты сборки микрофронтенда
  

//Задание 2 - Оптимизация сервиса на микросервисы
https://drive.google.com/file/d/19BwdxsuyKYJ8nHyQvaXyBTClEsF4c-gs/view?usp=sharing