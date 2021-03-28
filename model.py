from app import *

class Utilisateur(db.Model):
    #Tout les données qui ont un lien avec la tache en question
    __tablename__ = "utilisateurs"
    #necesita un id porque puede haber repeticion por nombre
    id = db.Column(db.Integer, primary_key=True)
    alias = db.Column(db.String(200))
    email = db.Column(db.String(200), unique=True)
    naissance = db.Column(db.DATE)
    taille = db.Column(db.Integer)
    poids = db.Column(db.Integer)
    password = db.Column(db.String(200))

    def __init__(self, id, alias, email, naissance, taille, poids, password):
        self.id = id
        self.alias = alias
        self.email = email
        self.naissance = naissance
        self.taille = taille
        self.poids = poids
        self.password = password