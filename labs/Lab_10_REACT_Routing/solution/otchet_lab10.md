# React маршрутизация
___________________________________________________
## Лабораторная работа №10
#### Задание №1. 
> - сделать простой роутинг
> - одна страница main 
> - вторая about
> - навигацию между страницами

Файл About.js
```shell
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Здесь можно увидеть разную информацию О НАШЕМ САЙТЕ! Описание чего-либо.</p>
    </div>
  );
}

export default About;
```
Файл Main.js
```shell
import React from 'react';

const Main = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Здесь находится главная страница нашего сайта. Тут только са-а-амое необходимое!</p>
    </div>
  );
}

export default Main;
```
Файл App.js
```shell
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Main from './Main';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
```
![Alt text](img/1.png)
![Alt text](img/2.png)
#### Задание №2. 
> - на первой странице вывести пользователей
> - добавить переход при клике на пользователя на страницу с большей информацией
> - использоваться параметры в роутах 

Файл UsersList.js
```shell
import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'Дарья' },
  { id: 2, name: 'Валерия' },
  { id: 3, name: 'София' },
];

const UsersList = () => {
  return (
    <div>
      <h2>Пользователи</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
```
Файл User.js
```shell
import React from 'react';
import { useParams } from 'react-router-dom';
const users = [
    { id: 1, name: 'Дарья', age: 20, activity: 'Студент',  country: 'Россия', city: 'Ростов-на-Дону'},
    { id: 2, name: 'Валерия', age: 25, activity: 'Дизайнер', country: 'Россия', city: 'Краснодар'},
    { id: 3, name: 'София', age: 27, activity: 'Разработчик', country: 'Россия', city: 'Москва'}
  ];
const User = () => {
  let { id } = useParams();
  let user = users.find(user => user.id === parseInt(id));

  return (
    <div>
      <h2>О пользователях:</h2>
      {user && (
        <div>
        <p>ID Пользователя: {id}</p>
        <p>Имя: {user.name}</p>
        <p>Возраст: {user.age}</p>
        <p>Деятельность: {user.activity}</p>
        <p>Страна проживания: {user.country}</p>
        <p>Город: {user.city}</p>
        </div>
      )}
    </div>
  );
}

export default User;
```
Файл App.js
```shell
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './UsersList';
import User from './User';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```
![Alt text](img/3.png)
![Alt text](img/4.png)
#### Задание №3. 
> - усложнить предыдущую стягиванием данных с сервера

Файл 
```shell

```