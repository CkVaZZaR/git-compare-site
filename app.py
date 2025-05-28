from flask import Flask, request, render_template
from git import Repo
import os

app = Flask(__name__)


@app.route('/')
def index():
    """Отображает главную страницу веб-приложения."""
    return render_template('index.html')


@app.route('/analyze', methods=['POST'])
def analyze_repo():
    """
    Анализирует Git-репозиторий по указанному пути.

    Returns:
        str: HTML-страница с результатами анализа (список коммитов и веток).
    """
    repo_path = request.form.get('repo_path')
    if not os.path.exists(repo_path):
        return "Репозиторий не найден!", 400

    try:
        repo = Repo(repo_path)
        commits = list(repo.iter_commits('main', max_count=10))
        branches = [b.name for b in repo.branches]
        return render_template('result.html', commits=commits, branches=branches)
    except Exception as e:
        return f"Ошибка при анализе репозитория: {str(e)}", 500


if __name__ == '__main__':
    app.run(debug=True)
