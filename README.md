# Shukur Website

## Introduction
Briefly introduce your project. Explain what "Shukur" is about and its purpose. This should be a concise and engaging summary that motivates people to read more.

## Features
List the key features of your website. What makes it unique or valuable? Be specific about what users can do on your site.

## Technologies
Mention the technologies, languages, frameworks, and tools you used in building the website. For example:
- HTML/CSS/JavaScript
- React.js / Vue.js / Angular
- Python / Django 
- SQLite
- Docker / Kubernetes
- Git / GitHub

## Installation
- Запуск бэкенда 
1. python -m venv venv
- On Linux/Mac OS - **source venv/bin/activate**  # On Windows use **venv\Scripts\activate**
- Если не сработает данная команда проверьте путь где находится виртуальная среда
если вы находитесь не в той же папке что и виртуалька то переместитесь в нее
- Если предыдущий способ не сработал тогда выдайте права
Запустите **PowerShell** от имени администратора и введите данную команду
- **Set-ExecutionPolicy Unrestricted -Force**
- потом перезапустите проект
2. После успешного активирование виртуалки вам надо скачать все библиотеки которые
были использованы для проекта
- **pip install -r requirements.txt**
данная команда скачает все библиотеки которые были использованы в проект
3. После прописываем команду **python manage.py runserver** - Не забудь до этого войти в нужную директорию под названием "**shukurWeb**" - команда **cd shukurWeb** 
4. Теперь мы переходим к нашему **React** фронту - надо открыть новую консоль и перейти в нужную нам директорию - **cd shukurfront** - И прописать **npm install** - Для того чтобы скачать все необходимые зависимости
5. Теперь запускаем наш фронт при помощи команды - **npm start** 

```bash
git clone https://github.com/batyrnurkhan/ShukurWws.git
cd shukur-website
# Add more installation steps as necessary
