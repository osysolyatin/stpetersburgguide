﻿Бизнес-задача 

Путешествия — любимое занятие многих людей. Путешествия помогают расширить кругозор, познакомиться с новыми культурами и традициями и насладиться красотой мира. Большинство предпочитает выбирать для поездок крупные города, обладающие особым колоритом и богатой историей. Санкт-Петербург — один из них. Он привлекает туристов со всего мира своей красотой и богатой культурной программой. 

В этом кейсе мы будем создавать путеводитель по Санкт-Петербургу для информационного стенда в турагентстве. Основная цель путеводителя — познакомить гостей с городом, рассказать о его истории, достопримечательностях и бюджете поездки. Кроме того, путеводитель должен привлекать внимание потенциальных туристов плавной анимацией и удобным интерфейсом. 

Путеводитель будет использоваться только на информационном стенде, поэтому мы будем реализовывать только десктопную версию сайта, адаптировать её для других устройств не потребуется. 

Задача путеводителя — помочь туристам определиться с направлением путешествия и рассказать о Санкт-Петербурге. Мы уверены, что наш проект будет полезен для всех, кто собирается посетить этот город. 

Технические требования 

Необходимо сверстать сайт для путеводителя по Санкт-Петербургу и добавить анимацию. 

Макет.
При вёрстке нужно учесть: 

- ●  Сайт должен одинаково отображаться в двух последних версиях браузеров Chrome, Firefox, Safari, Opera, Edge. 
- ●  Необходимо использовать Pixel Perfect (для всех разрешений). Допустимы отличия на 1–3 пикселя. 
- ●  Код должен быть валидным. Проверка кода не должна выдавать ошибок. Предупреждения допускаются. 
- ●  Классы должны быть названы по БЭМ. 
- ●  Интерфейс сайта должен быть доступен с клавиатуры. 
- ●  У всех интерактивных элементов есть состояния :hover, :active, :focus, 

  которые показаны в UI Kit.
  Необходимо выполнить красивую плавную анимацию. Для анимации используйте 

  библиотеку WOW.js.
  Как пользоваться плагином? 

1. Подключите файлы, приложенные к кейсу: файл JS <script src=”js/wow.min.js” defer></script>ифайлCSSanimate.css 
1. В созданном файле, в котором вы будете писать весь JavaScript, например index.js,вызовитеплагин: new WOW().init(); 
1. HTML-элементам добавьте классы и атрибуты, чтобы анимация начала работать: 
   1. ●  класс wow, он обязательный; 
   1. ●  второй класс для вида анимации, fadeInUp например: class=”wow 

      fadeInUp” 

1. Рекомендуем использовать атрибуты data-wow-duration (отвечает за 

   скорость анимации) и data-wow-delay (отвечает за задержку анимации). 

1. Дополнительную информацию можно найти в документации. (Пример, как должна выглядеть анимация.) 

Описание страницы 

Шапка 

- ●  Меню. 

  Hero 

- ●  Фоновая картинка. 
- ●  Заголовок. 
- ●  Описание. 
- ●  Анимация блока.
  Основной контент с пятью разделами 

  О городе 

  Раздел реализуется в виде слайда. Изображения меняются вместе с текстом: 

- ●  заголовок; 
- ●  изображение; 
- ●  описание; 
- ●  анимация блока; 

  Вторая часть блока реализуется в виде текста: 

● анимация блока. 

История 

Раздел реализуется в виде таймлайна событий. Событие включает: ● изображение;
● даты;
● описание; 

● анимацию. 

Достопримечательности 

- ●  Заголовок. 
- ●  Описание раздела. 
- ●  Карточки достопримечательностей: заголовок, изображение, описание. 
- ●  Анимация блока. 

  Бюджет 

  ● Иконка.
  ● Заголовок. ● Описание. ● Анимация. 

  Карта города 

● Карта с кастомизированным маркером. 

● Анимация блока. 

Футер 

● Меню.
● Политика конфиденциальности. 
