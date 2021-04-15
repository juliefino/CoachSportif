import flask
from flask import Flask, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import psycopg2
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager, create_refresh_token
from flask_cors import CORS
from model import *
from utilisateurs import utilisateurs
from login import login
from inscription import inscription
from objectifs import objectifs, objectifs_user
from encodage import encodage
from activites import activites, activiteFavorite, activitiesLiked

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:19992003i@localhost/WEB'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "toisjifefgvgrocb930491eibvf"  # Change this!

cors = CORS(app, resources={r"/*": {"origins": "*"}})
jwt = JWTManager(app)
db = SQLAlchemy(app)
app.register_blueprint(utilisateurs, url_prefix='/api/utilisateurs')
app.register_blueprint(login, url_prefix='/api/login')
app.register_blueprint(inscription, url_prefix='/api/inscription')
app.register_blueprint(activites, url_prefix='/api/activites')
app.register_blueprint(encodage, url_prefix='/api/encodage-distance')
app.register_blueprint(encodage, url_prefix='/api/encodage-aquatique')
app.register_blueprint(encodage, url_prefix='/api/encodage-score')
app.register_blueprint(activiteFavorite, url_prefix='/api/activiteFavorite')
app.register_blueprint(activitiesLiked, url_prefix='/api/activitesLikees')
app.register_blueprint(objectifs, url_prefix="/api/objectifs")
app.register_blueprint(objectifs_user, url_prefix="/api/objectifs_user")
db.create_all()


@app.route('/')
def home():
    return "<h1>HOLA</h1>"


# Run the example
if __name__ == '__main__':
    app.run(debug=True)