import requests
import unittest

class BaseCase(unittest.TestCase):

    def setUp(self):
        self.base_url = "http://127.0.0.1:5000"


class sampleTest(BaseCase):

    def test_sample(self):
        r = requests.get(self.base_url)
        result = r.json()
        print(result)


class GetUserDataTest(BaseCase):

    def test_uid_null(self):
        uid = "1"
        r = requests.get(self.base_url + "/api/utilisateurs/" + uid)
        result = r.json()
        print(result)

    def test_tous_utilisateurs(self):
        r = requests.get(self.base_url + "/api/utilisateurs" )
        result = r.json()
        print(result)



if __name__ == '__main__':
    unittest.main()