import unittest
from flask import Flask
from flask import Blueprint
import mock
import json
from flask_sqlalchemy import SQLAlchemy
from database import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:dev3Pr0@localhost/Prueba'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
from model import *
from utilisateurs import get_utilisateurs, get_utilisateur
from inscription import post_utilisateur
from objectifs import getObjectifs, objectif_favorit, get_objectifs_utilisateurs, effacement_utilisateur_objectif
from encodage import post_encodage
from activites import getActivites, getActivitesLiked


class IntegrationTest(unittest.TestCase):

    def setUp(self):
        with app.app_context():
            db.drop_all()
            db.create_all()

    def test_get_utilisateurs(self):
        with app.app_context():
            user = get_utilisateurs()
            # pri
            self.assertEqual(len(user), 0)

            # Ajout des utilisateurs
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

            user = get_utilisateurs()
            # print(user)
            self.assertEqual(user[1]['alias'], info["alias"])
            self.assertEqual(user[1]['email'], info["email"])
            self.assertEqual(user[1]['taille'], info["taille"])
            self.assertNotEqual(user[1]['alias'], "Toto")

    def test_inscription(self):
        with app.app_context():
            info = {
                "alias": "Ikram",
                "email": "ikram@ephec.be",
                "naissance": "1999-12-3",
                "taille": 170,
                'poids': 60,
                "password": "ikram33"
            }
            m = mock.MagicMock()
            m.method = "POST"

            def get_json(force):
                return info

            m.get_json = get_json
            with mock.patch("inscription.request", m):
                p = post_utilisateur()
                self.assertEqual(p[1], 200)

    def test_get_objectifs(self):
        with app.app_context():
            objectifs = getObjectifs()
            self.assertEqual(len(objectifs), 0)
            info = {
                "nom_objectif": "Distance"
            }
            obj = Objectifs(info["nom_objectif"])
            db.session.add(obj)
            db.session.commit()

            objectifs = getObjectifs()
            # print(objectifs)
            self.assertEqual(objectifs[1]["label"], info["nom_objectif"])
            self.assertNotEqual(objectifs[1]["label"], "Vitesse")

    def test_ajout_objectifs(self):
        with app.app_context():
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

            info_obj = {
                "nom_objectif": "Distance"
            }
            obj = Objectifs(info_obj["nom_objectif"])
            db.session.add(obj)

            info_objeuser = {
                "id_user": 1,
                "id_objectif": 1,
                "objectif": 50,
                "date": "2021-05-04"
            }
            m = mock.MagicMock()
            m.method = "POST"

            def get_json(force):
                return info_objeuser

            m.get_json = get_json
            with mock.patch("objectifs.request", m):
                p = objectif_favorit()
                self.assertEqual(p[0]["id"], 1)
                self.assertEqual(p[1], 200)

            user = get_objectifs_utilisateurs(info_objeuser["id_objectif"])
            # print(user)
            self.assertEqual(user["nom_objectif"], "Distance")
            self.assertNotEqual(user["nom_objectif"], "Vitesse")

    def test_utilisateur_unique(self):
        with app.app_context():
            # Ajout des utilisateurs
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

            m = mock.MagicMock()
            m.method = "GET"
            with mock.patch("utilisateurs.request", m):
                user = get_utilisateur(1)
                self.assertEqual(user[1]["alias"], info['alias'])

            info_uti = {
                "id": 1,
                "alias": "Ikram",
                "email": "ikram@ephec.be",
                "naissance": "1999-12-3",
                "taille": 170,
                'poids': 60,
                "password": "ikram33"
            }

            m = mock.MagicMock()
            m.method = "PUT"

            def get_json(force):
                return info_uti

            m.get_json = get_json
            with mock.patch("utilisateurs.request", m):
                p = get_utilisateur(info_uti["id"])
                # print(p)
                self.assertEqual(p[0]["status"], "400")

            info_uti = {
                "id": 1,
                "alias": "ikram33",
                "email": "ikram@ephec.be",
                "naissance": "1999-12-3",
                "taille": 170,
                'poids': 60,
                "password": "ikram33"
            }
            m = mock.MagicMock()
            m.method = "PUT"

            def get_json(force):
                return info_uti

            m.get_json = get_json
            with mock.patch("utilisateurs.request", m):
                p = get_utilisateur(info_uti["id"])
                # print(p)
                self.assertEqual(p[0]["status"], "200")

    def test_get_activites(self):
        with app.app_context():
            act = getActivites()
            # print(user)
            self.assertEqual(len(act), 0)

            # Ajout des utilisateurs
            info = {
                "nom_activite": "Natation",
                "path_image": "/image.jpg",
                "type_activite": "Distance"
            }
            activite = Activites(info["nom_activite"], info["path_image"], info["type_activite"])
            db.session.add(activite)
            db.session.commit()

            act = getActivites()
            # print(user)
            self.assertEqual(act[1]['label'], info["nom_activite"])
            self.assertEqual(act[1]['img'], info["path_image"])

            likes = getActivitesLiked()
            self.assertEqual(len(likes), 0)
            # Ajout des utilisateurs
            info = {
                "alias": "Ikram",
                "email": "ikram@ephec.be",
                "naissance": "1999-12-3",
                "taille": 170,
                'poids': 60,
                "password": "ikram33"
            }
            utilisateur = Utilisateur(info["alias"], info["email"], info["naissance"], info["taille"],
                                      info["poids"],
                                      info["password"], False)
            db.session.add(utilisateur)
            db.session.commit()

    # def test_encodage(self):
    #     with app.app_context():
    #         info = {
    #             "alias": "Ikram",
    #             "email": "ikram@ephec.be",
    #             "naissance": "1999-12-3",
    #             "taille": 170,
    #             'poids': 60,
    #             "password": "ikram33"
    #         }
    #         utilisateur = Utilisateur(info["alias"], info["email"], info["naissance"], info["taille"], info["poids"],
    #                                   info["password"], False)
    #         db.session.add(utilisateur)
    #         db.session.commit()
    #
    #         info_en = {
    #             "id_user": 1,
    #             "id_activite": 1,
    #             "date": "1999-12-3",
    #             "heure": "20:00",
    #             'distance': 60,
    #             "duree" : "12:05",
    #             "vitesse_moyenne" : None,
    #             "nom_team_1" : "hola",
    #             "score_team_1": 0,
    #             "nom_team_2": "hola",
    #             "score_team_2": 0
    #         }
    #
    #         m = mock.MagicMock()
    #         m.method = "POST"
    #
    #         def get_json(force):
    #             return info_en
    #
    #         m.get_json = get_json
    #         with mock.patch("encodage.request", m):
    #             p = post_encodage()
    #             self.assertTrue(True)

    def test_switch_favorite(self):
        with app.app_context():
            info = {
                "alias": "Ikram",
                "email": "ikram@ephec.be",
                "naissance": "1999-12-3",
                "taille": 170,
                'poids': 60,
                "password": "ikram33"
            }
            utilisateur = Utilisateur(info["alias"], info["email"], info["naissance"], info["taille"],
                                      info["poids"],
                                      info["password"], False)
            db.session.add(utilisateur)
            db.session.commit()
            info_act = {
                "nom_activite": "Natation",
                "path_image": "/image.jpg",
                "type_activite": "Distance"
            }
            activite = Activites(info_act["nom_activite"], info_act["path_image"], info_act["type_activite"])
            db.session.add(activite)
            db.session.commit()

            act = getActivitesLiked()
            self.assertEqual(len(act), 0)

            info_liked = {
                "id_user": 1,
                "id_activite": 1
            }

            activite_like = Activites_Likees(info_liked["id_user"], info_liked["id_activite"])
            db.session.add(activite_like)
            db.session.commit()

            act = getActivitesLiked()
            self.assertNotEqual(len(act), 0)

    def test_encodage_distance(self):
        with app.app_context():
            info = {
                "id_user": "1",
                "id_activite": "1",
                "date": "2021-05-26",
                "heure": "23:03",
                'distance': '6.2',
                "duree": '00:32:03',
                'vitesse_moyenne': '05:21',
                'nom_team_1': None,
                'score_team_1': None,
                'nom_team_2': None,
                'score_team_2': None,
            }
            m = mock.MagicMock()
            m.method = "POST"

            def get_json(force):
                return info

            m.get_json = get_json
            with mock.patch("encodage.request", m):
                p = post_encodage()
                self.assertEqual(p[1], 200)

    def test_encodage_score(self):
        with app.app_context():
            info = {
                "id_user": "1",
                "id_activite": "2",
                "date": "2021-05-06",
                "heure": None,
                'distance': 0,
                "duree": '20:03',
                'vitesse_moyenne': 0,
                'nom_team_1': 'Eliott',
                'score_team_1': '9',
                'nom_team_2': 'Louise',
                'score_team_2': '2',
            }
            m = mock.MagicMock()
            m.method = "POST"

            def get_json(force):
                return info

            m.get_json = get_json
            with mock.patch("encodage.request", m):
                p = post_encodage()
                self.assertEqual(p[1], 200)

    def test_encodage_aquatique(self):
        with app.app_context():
            info = {
                "id_user": "1",
                "id_activite": "4",
                "date": "2021-05-05",
                "heure": None,
                'distance': '36',
                "duree": '00:21:02',
                'vitesse_moyenne': 0,
                'nom_team_1': None,
                'score_team_1': None,
                'nom_team_2': None,
                'score_team_2': None,
            }
            m = mock.MagicMock()
            m.method = "POST"

            def get_json(force):
                return info

            m.get_json = get_json
            with mock.patch("encodage.request", m):
                p = post_encodage()
                self.assertEqual(p[1], 200)


if __name__ == '__main__':
    app.run(debug=True)
    unittest.main()
