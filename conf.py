# Основные настройки Sphinx
project = 'Git Repository Analyzer'
author = 'Your Name'
release = '0.1.0'
language = 'ru'

extensions = [
    'sphinx.ext.autodoc',  # Для генерации документации из Docstrings
    'sphinx.ext.napoleon',  # Поддержка Google Docstrings
]

templates_path = ['_templates']
exclude_patterns = []

html_theme = 'alabaster'
html_static_path = ['_static']
