import requests
from flask import Flask, render_template
import json


app = Flask(__name__)


def get_wods():
    """Gets the wods from the API

    Returns
    -------
    json
        a json containing all the wods
    """

    return requests.get('http://localhost:8080/wods').json()


@app.route("/")
def home():
    """Displays a list of Prison Wods

    Returns
    -------
    template
        a template to be rendered
    """

    # Get the wods
    wods = get_wods()

    return render_template('/home.html', wods=wods)


def main(module_name):
    if module_name == '__main__':
        app.run(host='0.0.0.0', debug=True)