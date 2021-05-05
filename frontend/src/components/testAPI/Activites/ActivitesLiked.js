import Axios from "axios";


class ActivitesLikee{
    api(){
        return Axios.get(`http://localhost:5000/api/activitesLikees`).then((response) => {
            console.log(response)
            return response ;
        })
    }

}

export default ActivitesLikee;