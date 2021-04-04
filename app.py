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

@app.route('/ajout_utilisateur', methods=['POST', 'GET'])
def post_utilisateur():
    alias = request.json['alias']
    email = request.json['email']
    naissance = request.json['naissance']
    taille = request.json['taille']
    poids = request.json['poids']
    password = request.json['password']

    user = Utilisateur( 5, alias, email, naissance, taille, poids, password)
    db.session.add(user)
    db.session.commit()

    return redirect(url_for('utilisateurs'))

@app.route('/admin')
def success_login():
    return "Login success!"
# Run the example
if __name__ == '__main__':
    app.run(debug=True)
