from flask import Blueprint
from flask import Flask, request
import model as models
import datetime
from database import db

statistiques = Blueprint('statistiques', __name__)


@statistiques.route('<id>', methods=['GET'])
def getStatistiques(id):
    encodages = models.Encodage.query.filter_by(id_user=id).all()


    date = {}
    for encodage in encodages:
        mois = encodage.date
        date[mois.month] = {
            "distance":"{:.2f}".format(float(encodage.distance)),
            "vitesse": "{:.2f}".format(float(encodage.vitesse_moyenne))
        }


    return date
