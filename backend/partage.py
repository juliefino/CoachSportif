from flask import Flask, request, jsonify, redirect, url_for, Blueprint
import model as models
from database import db

send_message = Blueprint('send_message', __name__)


@send_message.route('', methods=['POST'])
def post_message():
    if request.method == 'POST':
        message = request.get_json(force=True)

        user_message = models.Messages(message["id_user"], message["id_encodage"], message['message'], message["date"])
        db.session.add(user_message)
        db.session.commit()

        return 'SUCCESS', 200