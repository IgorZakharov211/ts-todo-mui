* Созданию create-react-app на typescript
  > **npx create-react-app my-app --template typescript**

* Установка плагинов для vsCode 
  > * **ctrl + shift + x** и находим плагин
  > * правой кнопки мыши на md файл и **open preview**, так можно просматривать md файлы.

* Проверка орфографии (*yaspeller*)
  > * **npm install yaspeller -g**
  > * **yaspeller "*.md"**

* Созданию удаленный репозиторий и связываю с локальным
  > * **git branch -M main**
  > * **git remote add origin https://github.com/IgorZakharov211/ts-todo-mui.git**
  > * **git push -u origin main**

* Подключаю **Material UI**
  > * **npm install @mui/material**
  > * **npm install @material-ui/core**

* Создаю директорию *components* и раскидываю компоненты по папкам

* Добавил элемент *container* внутрь блока *content*
  > * **import Container from '@mui/material/Container';**
  > * **maxWidth="lg"**

* Подключаем *react-hook-form*
  > * **npm install react-hook-form**
  > * **import { useForm } from "react-hook-form";**

* Создаем controller (нужен для более удобного использования форм в связке с MaterialUI)
  > * **name** - название поля 
  > * **control** - объект ссылается на useForm()
  > * **defaultValue** - значение по умолчанию
  > * **rules** - валидация
  > * **render** - само поле, которое отдает контроллер и где поместим поле ввода из material ui

* Создаю *TextField* (MaterialUI) внутри render
  > * **import TextField from "@material-ui/core/TextField";**
  > * **className** - задаем класс, созданный с помощью хука **makeStyles**

* Добавил **onSubmit** для **form**
  > * в нем находится метод **handleSubmit** из **useForm**
  > * внутри **handleSubmit** метод для сброса поля ввода **reset**

* Добавил кнопку 
  > * **import Button from "@material-ui/core/Button";**


* Устанавливаем и добавляем **yup**:
  > * **npm install -S yup**
  > * **import * as yup from 'yup'**;

* Устанавливаем и добавляем **resolver**
  > * **npm install @hookform/resolvers**
  > * **import { yupResolver } from '@hookform/resolvers/yup';**

* Добавляем **schema**
  > * **resolver: yupResolver(schema)** в **useForm**

* Добавляем ошибки
  > * **error** в **TextField** : **{errors.note ? true : false}**
  > * Добавляем саму ошибку: **{errors.note?.message}** внутри **Typography**
