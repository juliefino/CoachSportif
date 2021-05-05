import Axios from 'axios';

class ObjectifsUtilisateur{
    api1(){
        return Axios.get(`http://localhost:5000/api/objectifs/1`).then((response) => {
            console.log(response)
            return response ;
        })
    }

}

export default ObjectifsUtilisateur;