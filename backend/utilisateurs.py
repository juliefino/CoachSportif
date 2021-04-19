from flask import Blueprint
import model as models
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


@utilisateurs.route('<id>', methods=["GET"])
def get_utilisateur(id):
    user = models.Utilisateur.query.get_or_404(id)
    reponse = {id: {
        "alias": user.alias,
        "email": user.email,
        "naissance": str(user.naissance),
        "taille": user.taille,
        "poids": user.poids
    }}
    app.db.session.commit()
    return reponse
