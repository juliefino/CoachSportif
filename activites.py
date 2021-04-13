import sqlalchemy
from sqlalchemy import exc
from flask import Flask, request, jsonify, redirect, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity, jwt_required

import model as models
import app as app

activites = Blueprint('activites', __name__)


@activites.route('', methods=['GET'])
def getActivites():
    activites = models.Activites.query.all()
    result = {}
    for activity in activites:
        result[activity.id] = {
            'id': activity.id,
            'label': activity.nom_activite,
            'img': activity.path_image
        }

    return result

activiteFavorite = Blueprint('activiteFavorite', __name__)

@activiteFavorite.route('', methods=['POST'])
@jwt_required()
def switchFavorite():
    if request.method == 'POST':
        user_mail = get_jwt_identity()
        req = request.get_json(force=True)
        card_id = req.get('card_id')

        # Transform user mail into user ID
        user_id = models.Utilisateur.query.filter_by(email=user_mail).first().id

        id_activity = models.Activites_Likees(user_id, card_id)

        # GET to see if exist
        favorite_of_user = models.Activites_Likees.query.all()
        data_exist = False
        for user in favorite_of_user:
            if user.id_user == user_id and user.id_activite == int(card_id):
                data_exist = True

        if data_exist:
            models.Activites_Likees.query.filter_by(id_user=user_id, id_activite=card_id).delete()
            app.db.session.commit()
            result = "Deleted!"

        else:
            app.db.session.add(id_activity)
            app.db.session.commit()
            result = "Added!"

        return result
