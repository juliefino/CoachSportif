from flask import Blueprint
import model as models
from flask import Flask, request
from database import db

utilisateurs = Blueprint('utilisateurs', __name__)


@utilisateurs.route('')
def get_utilisateurs():
    users = models.Utilisateur.query.all()
    result = {}
    for user in users:
        result[user.id] = {
            'alias': user.alias,
            'email': user.email,
            "naissance": str(user.naissance),
            "taille": user.taille,
            "poids": user.poids
        }
    db.session.commit()

    return result


@utilisateurs.route('<id>', methods=["GET", 'PUT'])
def get_utilisateur(id):
    if request.method == 'GET':
        user = models.Utilisateur.query.get_or_404(id)
        reponse = {id: {
            "alias": user.alias,
            "email": user.email,
            "naissance": str(user.naissance),
            "taille": user.taille,
            "poids": user.poids,
            "premium" : user.premium
        }}
        db.session.commit()
        return reponse
    elif request.method == "PUT" :
        user = models.Utilisateur.query.get_or_404(id)
        info = request.get_json(force=True)
        if user.alias == info["alias"] and user.email == info["email"] and user.taille == info["taille"] and user.poids == info["poids"]:
            db.session.commit()
            return {"status": "400"}, 400
        else:
            user.alias = info["alias"]
            user.email = info["email"]
            user.taille = info["taille"]
            user.poids = info["poids"]

            db.session.commit()
            return {"status" : "200"}, 200
