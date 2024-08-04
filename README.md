## Локальный запуск

Установить зависимости
```bash
  npm install
```
Запустить сервер

```bash
  npm run dev
```


## [Приложение на Github Pages](https://lovecloudzzz.github.io/front-end-entrance-exam/)

# Основные требования:

1. **Создайте макет веб-страницы с резюме на основе предоставленного шаблона.(Сделайте fork этого репозитория)** ✅

2. **Добавьте возможность редактирования текстовых элементов резюме, сохраняя изменения внутри элементов.** ✅
3. 
Все текстовые элементы редактируемые(сделал с помощью contentEditable), некоторые с ограничениями:
  * в блоке с привествием -2 линии текста максимум
  * хэштэши и тэги(интересы) ограничены на ширину
  * еще можно добавлять элементы через 'Enter' в хэштэгах, тэгах, и списке в описание опыта

3. **Реализуйте кнопку "Скачать", которая преобразует текущую версию резюме в формат PDF и начинает загрузку файла на компьютер пользователя.** ✅
Сделал прогресс бар изменяемый, а не просто картинкой, но в PDF он не подгружается как надо (отображается в виде его значения).

4. **Все изменения элементов резюме должны быть анимированы с помощью CSS-анимаций.** ✅  
   Минимальные анимации при фокусе и сохранении (появляется фон и исчезает).

5. **Разработка должна быть с использованием базовых технологий (html, js, css) без использования сторонних библиотек и фреймворков.** ✅

---

# Дополнительные задачи:

1. **Адаптивность:** страница должна корректно отображаться на различных устройствах и разрешениях экрана. ❓️
Макета под мобильные устройства и средней ширины не было, сделал просто flex-wrap.


2. **Material Wave (ripple):** добавьте "Material Wave" эффект при взаимодействии с элементами страницы (кликах на элементах). ✅
Сделал компонент контейнера с флагом(анимировать/не анимировать) чтобы не было повторных срабатываний при наложении контейнеров

3. **Оптимизация:** обеспечьте быструю загрузку страницы и сохранение введенных данных в случае обновления страницы. ✅❓️
У меня страница загружается за 50мс, вроде бы хороший результат(не знаю про стандарты дял статические сайты)
