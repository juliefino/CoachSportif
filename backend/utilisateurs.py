from flask import Blueprint
import model as models
from flask import Flask, request
import app as app

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
    app.db.session.commit()

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
        app.db.session.commit()
        return reponse
    elif request.method == "PUT" :
        user = models.Utilisateur.query.get_or_404(id)
        info = request.get_json(force=True)

        user.alias = info["alias"]
        user.email = info["email"]
        user.taille = info["taille"]
        user.poids = info["poids"]

        app.db.session.commit()
        return 'ok'


