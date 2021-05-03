import unittest
import requests
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import json


class ObjectifsTest(unittest.TestCase):
    OBJECTIF_URL = "http://127.0.0.1:5000/api/objectifs"
    OBJECTIF_URL_UTILISATEUR = "http://127.0.0.1:5000/api/obtenir_objectif_encodage_utilisateur"
    OBJECTIF_URL_UTILISATEUR_EFFACER = "http://127.0.0.1:5000/api/effacer_objectif_utilisateur"
    def test_get_tous_objectifs(self):
        test_request = requests.get(ObjectifsTest.OBJECTIF_URL.format(''))
        self.assertEqual(test_request.status_code, 200)
        self.assertEqual(len(test_request.json()), 2)

    def test_get_tout_objectifs_par_id(self):
        test_request = requests.get(ObjectifsTest.OBJECTIF_URL.format('') + str("/1") )
        self.assertEqual(test_request.status_code, 200)

    def test_get_objectif_par_utilisateur(self):
        test_request = requests.get(ObjectifsTest.OBJECTIF_URL_UTILISATEUR.format('') + str("/1") )
        self.assertEqual(test_request.status_code, 401)
        self.assertNotEqual(test_request.status_code, 200)

    def test_effacer_objectif_utilisateur(self):
        test_request = requests.get(ObjectifsTest.OBJECTIF_URL_UTILISATEUR_EFFACER.format('') + str("/1"))
        self.assertEqual(test_request.status_code, 405)


class UtilisateurTest(unittest.TestCase):
    UTILISATEUR_URL = "http://127.0.0.1:5000/api/utilisateurs"

    def test_get_tous_utilisateurs(self):
        test_request = requests.get(UtilisateurTest.UTILISATEUR_URL.format(''))
        self.assertEqual(test_request.status_code, 200)

    def test_get_utilisateur(self):
        test_request = requests.get(UtilisateurTest.UTILISATEUR_URL.format('') + str("/1"))
        self.assertEqual(test_request.status_code, 200)

        test_request_un = requests.get(UtilisateurTest.UTILISATEUR_URL.format('') + str("/2"))
        self.assertEqual(test_request_un.status_code, 404)



if __name__ == '__main__':
    unittest.main()
