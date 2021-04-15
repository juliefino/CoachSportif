from flask import Blueprint
from flask import Flask, request
from flask_jwt_extended import get_jwt_identity, jwt_required
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

    return result



@objectifs.route('<id>', methods=['GET'])
def get_objectifs_utilisateurs(id):
    objectifs = models.Objectifs.query.get_or_404(id)
    result = {
        'nom_objectif': objectifs.nom_objectif
    }

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

        return "Vous avec un objectif", 200


obtenir_objectif = Blueprint('obtenir_objectif', __name__)

@obtenir_objectif.route('<id_user>', methods=['GET'])
def objectif_par_user(id_user):
    objectif = models.Objectifs_Utilisateurs.query.filter_by(id_user=id_user).first()
    mon_objectif = float(objectif.objectif)

    result = {objectif.id_user:{
            'id_objectif': objectif.id_objectif,
            'objectif': "{:.2f}".format(mon_objectif)
        }}

    return result



