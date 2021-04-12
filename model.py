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


class Activites_Likees(db.Model):
    __tablename__ = "activites_likees"

    id_user = db.Column(db.Integer, db.ForeignKey("utilisateurs.id"), primary_key=True)
    id_activite = db.Column(db.Integer, db.ForeignKey("activites.id"), primary_key=True)


class Objectifs(db.Model):
    __tablename__ = 'objectifs'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nom_objectif = db.Column(db.String(200))


class Objectifs_Utilisateurs(db.Model):
    __tablename__ = "objectifs_utilisateurs"

    id_user = db.Column(db.Integer, db.ForeignKey("utilisateurs.id"), primary_key=True)
    id_objectif = db.Column(db.Integer, db.ForeignKey("objectifs.id"), primary_key=True)


db.create_all()
