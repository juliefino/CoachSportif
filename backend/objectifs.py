from flask import Blueprint
from flask import Flask, request
from flask_jwt_extended import get_jwt_identity, jwt_required
from sqlalchemy.sql import func
import json
import model as models
import app as app
objectifs = Blueprint('objectifs', __name__)


@objectifs.route('', methods=['GET'])
def getObjectifs():
    objectifs = models.Objectifs.query.all()
    result = {}
    for objet in objectifs:
        result[objet.id] = {
            'value': objet.id,
            'label': objet.nom_objectif
        }
    app.db.session.commit()
    return result



@objectifs.route('<id>', methods=['GET'])
def get_objectifs_utilisateurs(id):
    objectifs = models.Objectifs.query.get_or_404(id)
    result = {
        'nom_objectif': objectifs.nom_objectif
    }
    app.db.session.commit()
    return result

objectifs_user = Blueprint('objectifs_user', __name__)


@objectifs_user.route('', methods=['GET','POST'])
@jwt_required()
def objectif_favorit():
    if request.method == 'POST':
        info = request.get_json(force=True)
        print(info)

        objectif = models.Objectifs_Utilisateurs( info["id_user"], info["id_objectif"], info["objectif"])
        app.db.session.add(objectif)
        app.db.session.commit()

        return {'id': objectif.id}, 200


obtenir_objectif_encodage_utilisateur = Blueprint('obtenir_objectif_encodage_utilisateur', __name__)

@obtenir_objectif_encodage_utilisateur.route('<id_user>', methods=['GET'])
def objectif_encodage_par_user(id_user):
    objectif = models.Objectifs_Utilisateurs.query.filter_by(id_user=id_user).first()
    encodages = models.Encodage.query.filter_by(id_user=id_user).first()
    if objectif is not None:

        mon_objectif = float(objectif.objectif)

        nom_objectif = models.Objectifs.query.filter_by(id=objectif.id_objectif).first()

        result = {objectif.id_user:{
                'id_objectif': objectif.id_objectif,
                'objectif': "{:.2f}".format(mon_objectif),
                'nom_objectif' : nom_objectif.nom_objectif,
                'id_activite': encodages.id_activite,
                'id_encodage': encodages.id_encodage,
                'distance': "{:.2f}".format(float(encodages.distance)),
                'vitesse_moyenne': "{:.2f}".format(float(encodages.vitesse_moyenne))
            }}
        print(result)
        app.db.session.commit()

        return result
    else :
        app.db.session.commit()
        return {'message' : "pas d'objectif"}, 404

encodage_par_user = Blueprint('encodage_par_user', __name__)
@encodage_par_user.route('<id_user>', methods=['GET'])
def user_encode(id_user):
    encodages = models.Encodage.query.filter_by(id_user=id_user).all()

    distance = 0
    for encodage in encodages:
        print(encodage.distance)
        distance += encodage.distance
    #print(encodages)
    print(distance)
    app.db.session.commit()
    return "hola"


effacer_objectif_utilisateur = Blueprint('effacer_objectif_utilisateur', __name__)

@effacer_objectif_utilisateur.route('<id_user>', methods=['DELETE'])
def effacement_utilisateur_objectif(id_user):
    objectif = models.Objectifs_Utilisateurs.query.filter_by(id_user=id_user).first()
    app.db.session.delete(objectif)
    app.db.session.commit()
    return 'SUCCESS'



