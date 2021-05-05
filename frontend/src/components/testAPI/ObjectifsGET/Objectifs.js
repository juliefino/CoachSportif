import Axios from 'axios';

class Objectifs{
    api(){
        return Axios.get(`http://localhost:5000/api/objectifs`).then((response) => {
            console.log(response)
            return response ;
        })
    }

}

export default Objectifs;