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

        if encodage.date.month not in date:
            date[encodage.date.month] = {
                "distance":"{:.2f}".format(float(encodage.distance)),
                "vitesse": "{:.2f}".format(float(encodage.vitesse_moyenne))
            }
        elif encodage.date.month  in date:
            distance = float(date[encodage.date.month]['distance'])
            distance += float(encodage.distance)
            date[encodage.date.month]['distance'] = "{:.2f}".format(float(distance))
            vitesse = float(encodage.vitesse_moyenne)
            if  vitesse < float(date[encodage.date.month]['vitesse']):
                date[encodage.date.month]['vitesse'] = "{:.2f}".format(float(vitesse))

    return date