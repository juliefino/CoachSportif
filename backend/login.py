import datetime
from flask import Flask, request, jsonify, redirect, url_for, Blueprint
import model as models
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager, create_refresh_token
import hashlib

login = Blueprint('login', __name__)


@login.route("", methods=["POST"])
def creation_token():
    if request.method == 'POST':
        """Sur postman, il faut d'abord écrire la méthode et intoduire les valeurs email et password"""
        req = request.get_json(force=True)
        email = req["email"]
        password = hashlib.md5(req['password'].encode()).hexdigest()

        current_user = models.Utilisateur.query.filter(models.Utilisateur.email == req['email']).first()

        if not current_user:
            return {"error": "Utilisateur non dans la DB"}

        if current_user.password == password:
            token = create_access_token(identity=email, expires_delta=datetime.timedelta(hours=72))

            return jsonify({'username': current_user.alias,
                            'id': current_user.id,
                            'access_token': token}), 200
        else:
            return {'error': "Mot de passe ou email n'est pas correct"}
