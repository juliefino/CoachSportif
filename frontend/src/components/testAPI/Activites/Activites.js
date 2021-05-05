import Axios from 'axios';

class Activites{
    api(){
        return Axios.get(`http://localhost:5000/api/activites`).then((response) => {
            console.log(response)
            return response ;
        })
    }

}

export default Activites;