from app import *


class Utilisateur(db.Model):
    # Tout les données qui ont un lien avec l'utilisatuer
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
        self.password = password

db.create_all()