import Axios from 'axios';

class Utilisateur{
    api(){
        return Axios.get(`http://localhost:5000/api/utilisateurs/1`).then((response) => {
            console.log(response)
            return response ;
        })
    }

}

export default Utilisateur;