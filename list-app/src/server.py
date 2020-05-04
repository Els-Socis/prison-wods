import requests
from flask import Flask, render_template


app = Flask(__name__)


def get_wods():
    """Gets the wods from the API

    Returns
    -------
    json
        a json containing all the wods
    """

    return requests.get('http://api:3000/wods').json()


@app.route("/")
def home():
    """Displays a list of Prison Wods

    Returns
    -------
    template
        a template to be rendered
    """

    return render_template('/home.html', wods=get_wods())


def main(module_name):
    if module_name == '__main__':
        app.run(host='0.0.0.0', debug=True)
