import unittest
from flask import Flask
import json
from flask_sqlalchemy import SQLAlchemy
import hashlib
import requests

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:dev3Pr0@localhost/Prueba'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
class Utilisateur(db.Model):
    # Toutes les données qui ont un lien avec l'utilisateur
    __tablename__ = "utilisateurs"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    alias = db.Column(db.String(200))
    email = db.Column(db.String(200), unique=True)
    naissance = db.Column(db.DATE)
    taille = db.Column(db.Integer)
    poids = db.Column(db.Integer)
    password = db.Column(db.String(200))
    premium = db.Column(db.Boolean)

    def __init__(self, alias, email, naissance, taille, poids, password, premium):
        self.alias = alias
        self.email = email
        self.naissance = naissance
        self.taille = taille
        self.poids = poids
        self.password = hashlib.md5(
            password.encode()).hexdigest()  # faut pas laisser en 'claire' les password dans la DB !
        self.premium = premium
class Activites(db.Model):
    __tablename__ = "activites"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nom_activite = db.Column(db.String(200))
    path_image = db.Column(db.String(200))
    type_activite = db.Column(db.String(200))
class Activites_Likees(db.Model):
    __tablename__ = "activites_likees"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id_user = db.Column(db.Integer, db.ForeignKey("utilisateurs.id"))
    id_activite = db.Column(db.Integer, db.ForeignKey("activites.id"))

    def __init__(self, user_id, card_id):
        self.id_user = user_id
        self.id_activite = card_id
class Objectifs(db.Model):
    __tablename__ = 'objectifs'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nom_objectif = db.Column(db.String(200))
class Objectifs_Utilisateurs(db.Model):
    __tablename__ = "objectifs_utilisateurs"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id_user = db.Column(db.Integer, db.ForeignKey("utilisateurs.id"), primary_key=True)
    id_objectif = db.Column(db.Integer, db.ForeignKey("objectifs.id"), primary_key=True)
    objectif = db.Column(db.Numeric(5, 2))
    date = db.Column(db.DATE)

    def __init__(self, id_user, id_objectif, objectif, date):
        self.id_user = id_user
        self.id_objectif = id_objectif
        self.objectif = objectif
        self.date = date
class Encodage(db.Model):
    __tablename__ = "encodage"

    # Data distance
    id_user = db.Column(db.Integer, db.ForeignKey("utilisateurs.id"))
    id_activite = db.Column(db.Integer, db.ForeignKey("activites_likees.id"))
    id_encodage = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DATE)
    heure = db.Column(db.TIME)
    distance = db.Column(db.Numeric(5, 2))
    duree = db.Column(db.TIME)
    vitesse_moyenne = db.Column(db.Float)

    # Data score
    nom_team_1 = db.Column(db.String(200))
    score_team_1 = db.Column(db.Integer)
    nom_team_2 = db.Column(db.String(200))
    score_team_2 = db.Column(db.Integer)

    def __init__(self, id_user, id_activite, date, heure, distance, duree, vitesse_moyenne, nom_team_1,
                 score_team_1, nom_team_2, score_team_2):

        self.id_user = id_user
        self.id_activite = id_activite
        self.date = date
        self.heure = heure
        self.distance = distance
        self.duree = duree
        if vitesse_moyenne is not None:
            self.vitesse_moyenne = float(vitesse_moyenne[:2] + "." + vitesse_moyenne[3:])
        else:
            self.vitesse_moyenne = vitesse_moyenne
        self.nom_team_1 = nom_team_1
        self.score_team_1 = score_team_1
        self.nom_team_2 = nom_team_2
        self.score_team_2 = score_team_2
class Commandes(db.Model):
    __tablename__ = "commandes"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id_user = db.Column(db.Integer, db.ForeignKey("utilisateurs.id"))
    id_subscription = db.Column(db.String(50))
    date = db.Column(db.DATE)

    def __init__(self, id_user, id_subscription, date):
        self.id_user = id_user
        self.id_subscription = id_subscription
        self.date = date

class IntegrationTest(unittest.TestCase):
    def setUp(self):
        db.drop_all()
        db.create_all()
        info = {
            "alias": "Ikram",
            "email": "ikram@ephec.be",
            "naissance": "1999-12-3",
            "taille": 170,
            'poids': 60,
            "password": "ikram33"
        }
        utilisateur = Utilisateur(info["alias"], info["email"], info["naissance"], info["taille"], info["poids"],
                                  info["password"], False)
        db.session.add(utilisateur)
        db.session.commit()


    def test_uno(self):
        UTILISATEUR = "http://127.0.0.1:5000/api/utilisateurs"
        test_request = requests.get(UTILISATEUR.format('')).json()
        print(test_request)
        user = Utilisateur.query.first()
        print(user)
        self.assertEqual(test_request['1']['alias'], 'Ikram')
        self.assertTrue(True)
if __name__ == '__main__':
    app.run(debug=True)
    unittest.main()
