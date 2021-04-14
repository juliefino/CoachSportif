from app import *
from werkzeug.security import generate_password_hash
import hashlib


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

    def __init__(self, alias, email, naissance, taille, poids, password):
        self.alias = alias
        self.email = email
        self.naissance = naissance
        self.taille = taille
        self.poids = poids
        self.password = hashlib.md5(
            password.encode()).hexdigest()  # faut pas laisser en 'claire' les password dans la DB !


class Activites(db.Model):
    __tablename__ = "activites"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nom_activite = db.Column(db.String(200))
    path_image = db.Column(db.String(200))

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

    id_user = db.Column(db.Integer, db.ForeignKey("utilisateurs.id"), primary_key=True)
    id_objectif = db.Column(db.Integer, db.ForeignKey("objectifs.id"), primary_key=True)


class Encodage(db.Model):
    __tablename__ = "encodage"

    id_user = db.Column(db.Integer, db.ForeignKey("utilisateurs.id"))
    id_activite = db.Column(db.Integer, db.ForeignKey("activites_likees.id"))
    id_encodage = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)
    heure = db.Column(db.TIME)
    distance = db.Column(db.Integer)
    duree = db.Column(db.TIME)
    vitesse_moyenne = db.Column(db.TIME)

    def __init__(self, id_user, id_activite, id_encodage, date, heure, distance, duree, vitesse_moyenne):
        self.id_user = id_user
        self.id_activite = id_activite
        self.id_encodage = id_encodage
        self.date = date
        self.heure = heure
        self.distance = distance
        self.duree = duree
        self.vitesse_moyenne = vitesse_moyenne


db.create_all()
