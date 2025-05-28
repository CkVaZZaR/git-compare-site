*Git Repository Analyzer*

**Описание**

Простое веб-приложение на Python, которое позволяет анализировать Git-репозитории. 
Пользователь может ввести путь к локальному репозиторию, а приложение отобразит 
основную информацию, такую как список коммитов, ветки и изменения.
**Требования**

Python 3.8 или выше

pip (для установки зависимостей)

**Установка**

1. Склонируйте репозиторий:

`git clone https://github.com/your-username/git-repo-analyzer.git`
`cd git-repo-analyzer`

2. Создайте виртуальное окружение и активируйте его:

`python -m venv venv`
`source venv/bin/activate  # На Windows: venv\Scripts\activate`

3. Установите зависимости:

`pip install -r requirements.txt`

**Запуск**

Убедитесь, что виртуальное окружение активировано.


Запустите приложение:

`python app.py`

Откройте браузер и перейдите по адресу: `http://localhost:5000`

**Зависимости**

Список зависимостей указан в файле requirements.txt:

```Flask==2.3.3

GitPython==3.1.40```

**Лицензия**

MIT License
