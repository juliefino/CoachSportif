import Axios from 'axios';

class ObjectifsEncodage{
    api2(){
        return Axios.get(`http://localhost:5000/api/obtenir_objectif_encodage_utilisateur/1`).then((response) => {
            print(response.status)
            return response.status ;
        })
    }

}

export default ObjectifsEncodage;