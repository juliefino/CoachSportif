import flask
from flask import Flask, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import psycopg2
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from model import *
from json import loads

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:19992003i@localhost/WEB'
# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "toisjifefgvgrocb930491eibvf"  # Change this!
cors = CORS(app, resources={r"/*": {"origins": "*"}})
jwt = JWTManager(app)
db = SQLAlchemy(app)

db.create_all()
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


@app.route("/api/login", methods=["POST"])
def creation_token():
    if request.method == 'POST':
        """Sur postman, il faut d'abord écrire la méthode et intoduire les valeurs email et password"""
        req = request.get_json(force=True)
        email = req["email"]
        password = hashlib.md5(req['password'].encode()).hexdigest()

        current_user = Utilisateur.query.filter(Utilisateur.email == req['email']).first()

        if not current_user:
            return {"error": "Utilisateur non dans la DB"}

        if current_user.password == password:
            token = create_access_token(identity=email)

            return jsonify(result = {'access_token': token}), 200
        else:
            return {'error': "Mot de passe ou email n'est pas correct"}

@app.route('/api/inscription', methods=['POST'])
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
