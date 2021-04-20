import app as app
from flask import Blueprint, request
from flask_mail import Mail, Message

contact = Blueprint('contact', __name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'procoach.contact@gmail.com'
app.config['MAIL_PASSWORD'] = 'devIIIPr0'

mail = Mail(app)


@contact.route('', methods=['POST'])
def send_mail():
    if request.method == 'POST':
        donnees = request.get_json(force=True)
        print(donnees)

        msg = Message(subject=donnees['subject'], sender=donnees['email'], recipients='coachSportif@gmail.com')
        msg.body = donnees['demande']
        mail.send(msg)


