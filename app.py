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

from encodage import encodage
from activites import activites, activiteFavorite


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:mf3d56ze45@localhost/WEB'
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
app.register_blueprint(encodage, url_prefix='/api/encodage')
app.register_blueprint(activiteFavorite, url_prefix='/api/activiteFavorite')


db.create_all()


@app.route('/')
def home():
    return "<h1>HOLA</h1>"


# Run the example
if __name__ == '__main__':
    app.run(debug=True)