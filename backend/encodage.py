from flask import Flask, request, jsonify, redirect, url_for, Blueprint
import model as models
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager, create_refresh_token
from database import db

encodage = Blueprint('encodage', __name__)


@encodage.route('', methods=['POST'])
def post_encodage():
    if request.method == 'POST':
        info = request.get_json(force=True)
        print(info)

        user_encodage = models.Encodage(info["id_user"], info["id_activite"], info["date"], info["heure"],
                                        info["distance"], info["duree"], info["vitesse_moyenne"], info["nom_team_1"],
                                        info["score_team_1"], info["nom_team_2"], info["score_team_2"])
        db.session.add(user_encodage)
        db.session.commit()

        return 'SUCCESS'


view_encodage = Blueprint('view_encodage', __name__)


@view_encodage.route('', methods=['GET'])
def get_encodage():
    encoded = models.Encodage.query.all()
    result = {}
    for encode in encoded:
        result[encode.id_encodage] = {
            'id_user': encode.id_user,
            'id_activite': encode.id_activite,
            'id_encodage': encode.id_encodage,
            'date': str(encode.date),
            'hour': str(encode.heure),
            'distance': str(encode.distance),
            'time': str(encode.duree),
            'average_speed': str(encode.vitesse_moyenne),
            'team1': encode.nom_team_1,
            'team2': encode.nom_team_2,
            'score1': encode.score_team_1,
            'score2': encode.score_team_2,
        }

    return result
