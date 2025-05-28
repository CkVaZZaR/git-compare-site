from setuptools import setup, find_packages

setup(
    name="git-repo-analyzer",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        'Flask==2.3.3',
        'GitPython==3.1.40',
        'Sphinx==7.2.6',
    ],
    author="Your Name",
    author_email="your.email@example.com",
    description="A simple web application to analyze Git repositories",
    long_description=open('README.md').read(),
    long_description_content_type="text/markdown",
    url="https://github.com/your-username/git-repo-analyzer",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.8',
)
