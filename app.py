import flask
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import psycopg2
from model import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:19992003i@localhost/WEB'

db = SQLAlchemy(app)
@app.route('/')
def home():
    return "<h1>HOLA</h1>"

@app.route('/utilisateurs')
def users():
    users = Utilisateur.query.all()
    result = {}
    for user in users:
        result[user.id] = {
            'alias': user.alias,
            'email': user.email,
            "naissance": str(user.naissance),
            "taille": user.taille,
            "poids": user.poids
        }

    return result

@app.route('/utilisateurs/<id>', methods=["GET"])
def get_user(id):
    user = Utilisateur.query.get_or_404(id)
    reponse = {id : {
        "alias":user.alias,
        "email": user.email,
        "naissance": str(user.naissance),
        "taille": user.taille,
        "poids": user.poids
    }}
    return reponse
@app.route("inscription", methods=["POST"])
def login():
    req = flask.request.get_json(force=True)
    alias = req.get("alias", None)
    email = req.get("email", None)
    naissance = req.get("naissance", None)
    taille = req.get("taille", None)
    poids = req.get("poids", None)
    password = req.get("password", None)
# Run the example
if __name__ == '__main__':
    app.run(debug=True)