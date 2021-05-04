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

