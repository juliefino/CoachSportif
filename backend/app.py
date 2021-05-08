import flask
from flask import Flask, request, jsonify, redirect, url_for
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
import psycopg2
from database import db
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager, create_refresh_token
from flask_cors import CORS
from model import *
from utilisateurs import utilisateurs
from login import login
from inscription import inscription
from objectifs import objectifs, objectifs_user, obtenir_objectif_encodage_utilisateur, effacer_objectif_utilisateur
from encodage import encodage
from activites import activites, activiteFavorite, activitiesLiked
#from contactMail import contact
from statistiques import statistiques
from paypal import payment, get_premium


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:dev3Pr0@localhost/WEB'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'procoach.contact@gmail.com'
app.config['MAIL_PASSWORD'] = 'devIIIPr0'
mail = Mail(app)
# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "toisjifefgvgrocb930491eibvf"  # Change this!

cors = CORS(app, resources={r"/*": {"origins": "*"}})
jwt = JWTManager(app)
db.init_app(app)
with app.app_context():
    db.create_all()

app.register_blueprint(utilisateurs, url_prefix='/api/utilisateurs')
app.register_blueprint(login, url_prefix='/api/login')
app.register_blueprint(inscription, url_prefix='/api/inscription')
app.register_blueprint(activites, url_prefix='/api/activites')
app.register_blueprint(encodage, url_prefix='/api/encodage')
app.register_blueprint(activiteFavorite, url_prefix='/api/activiteFavorite')
app.register_blueprint(activitiesLiked, url_prefix='/api/activitesLikees')
app.register_blueprint(objectifs, url_prefix="/api/objectifs")
app.register_blueprint(objectifs_user, url_prefix="/api/objectifs_user")
app.register_blueprint(obtenir_objectif_encodage_utilisateur, url_prefix="/api/obtenir_objectif_encodage_utilisateur")
app.register_blueprint(effacer_objectif_utilisateur, url_prefix='/api/effacer_objectif_utilisateur')
#app.register_blueprint(contact, url_prefix='/api/contact')
app.register_blueprint(payment, url_prefix='/api/payment')
app.register_blueprint(get_premium, url_prefix='/api/isPremium')
app.register_blueprint(statistiques, url_prefix='/api/statistiques')


@app.route('/')
def home():
    return {'hello': 'world'}


# Run the example
if __name__ == '__main__':
    app.run(debug=True, port=5000)