import flask
from flask import Flask, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import psycopg2
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from model import *
from json import loads

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:19992003i@localhost/WEB'
# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "toisjifefgvgrocb930491eibvf"  # Change this!
jwt = JWTManager(app)
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

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@app.route("/token", methods=["POST"])
def creation_token():
    if request.method == 'POST':
        """Sur postman, il faut d'abord écrire la méthode et intoduire les valeurs email et password"""
        info = request.get_json(force=True)
        #print(info)
        email = info["email"]
        #print(email)
        password = info["password"]
        if email != "test@test" or password != "test":

            return jsonify({"msg": "Bad username or password"}), 401

        #Si vrai, alors il cree un access token
        access_token = create_access_token(identity=email)

        #La méthode me retourne mon TOKEN
        print(access_token)
        return jsonify(access_token=access_token)

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
