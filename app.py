import flask
from flask import Flask, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import psycopg2
from model import *
from json import dumps, loads
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:19992003i@localhost/WEB'

db = SQLAlchemy(app)
@app.route('/')
def home():
    return "<h1>HOLA</h1>"

@app.route('/utilisateurs')
def utilisateurs():
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
def get_utilisateur(id):
    user = Utilisateur.query.get_or_404(id)
    reponse = {id : {
        "alias":user.alias,
        "email": user.email,
        "naissance": str(user.naissance),
        "taille": user.taille,
        "poids": user.poids
    }}
    return reponse


@app.route('/ajout_utilisateur', methods=['POST'])
def post_utilisateur():
    if request.method == 'POST':
        info = request.get_json(force=True)
        print(info)

        user= Utilisateur( info["alias"], info["email"],info["naissance"],info["taille"],info["poids"], info["password"])
        db.session.add(user)
        db.session.commit()

        return redirect('http://localhost:5000/')


# Run the example
if __name__ == '__main__':
    app.run(debug=True)
