from app import *
from werkzeug.security import generate_password_hash

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
        self.password = generate_password_hash(password) #faut pas laisser en 'claire' les password dans la DB !

db.create_all()