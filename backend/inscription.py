from flask import Flask, request, jsonify, redirect, url_for, Blueprint
import model as models
from database import db

inscription = Blueprint('inscription', __name__)

@inscription.route('', methods=['POST'])
def post_utilisateur():
    if request.method == 'POST':

        info = request.get_json(force=True)
        print(info)

        user= models.Utilisateur( info["alias"], info["email"],info["naissance"],info["taille"],info["poids"], info["password"], False)
        db.session.add(user)
        db.session.commit()

        return "Vous êtes inscrit", 200