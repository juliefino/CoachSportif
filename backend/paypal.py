from flask import Flask, request, jsonify, redirect, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity, jwt_required

import model as models
import app as app

payment = Blueprint('payment', __name__)


@payment.route('', methods=['POST'])
def paypal_payement():
    if request.method == 'POST':
        req = request.get_json(force=True)
        id_user = req.get('user_id')
        user = models.Utilisateur.query.filter_by(id=id_user).first()
        user.premium = True
        app.db.session.commit()

    return 'SUCCESS'
