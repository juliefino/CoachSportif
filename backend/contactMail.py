import app as app
from flask import Blueprint, request
from flask_mail import Mail, Message

contact = Blueprint('contact', __name__)


@contact.route('', methods=['POST'])
def send_mail():
    if request.method == 'POST':
        donnees = request.get_json(force=True)
        print(donnees)

        msg = Message(subject=donnees['subject'], sender=donnees['email'], recipients=['procoach.contact@gmail.com'], body=donnees['demande'])

        app.mail.send(msg)
        return "message envoyé"


