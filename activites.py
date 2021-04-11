from flask import Flask, request, jsonify, redirect, url_for, Blueprint
import model as models
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager, create_refresh_token
import hashlib

activites = Blueprint('activites', __name__)


@activites.route('', methods=['GET'])
def getActivites():
    activites = models.Activites.query.all()
    result = {}
    for activity in activites:
        result[activity.id] = {
            'id': activity.id,
            'label': activity.nom_activite
        }

    return result
