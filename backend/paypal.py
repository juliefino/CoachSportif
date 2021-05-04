from flask import Flask, request, jsonify, redirect, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity, jwt_required

import model as models
from database import db

payment = Blueprint('payment', __name__)


@payment.route('', methods=['POST'])
def paypal_payement():
    if request.method == 'POST':
        req = request.get_json(force=True)
        id_user = req.get('user_id')
        user = models.Utilisateur.query.filter_by(id=id_user).first()
        user.premium = True
        db.session.commit()

    return 'SUCCESS'


get_premium = Blueprint('get_premium', __name__)


@get_premium.route('', methods=['GET'])
def get_premium_users():
    users = models.Utilisateur.query.all()
    result = {}
    for user in users:
        result[user.id] = {
            'id_user': user.id,
            'premium': user.premium
        }
    return result
