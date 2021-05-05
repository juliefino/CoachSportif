
import Activites from "../Activites";

it("testing ActivitesGet", async function () {
    const response = new Activites();
    var reponse = await response.api();
    var data = reponse.data ;

    //Vérification Status
    expect(reponse.status).toEqual(200);
    expect(response.status).not.toEqual(404)
    expect(data).toEqual({"1": {"id": 1, "img": "images/athletisme.jpg", "label": "Athlétisme", "type": "distance"}, "2": {"id": 2, "img": "images/basketball.jpg", "label": "Basketball", "type": "score"}, "3": {"id": 3, "img": "images/football.jpg", "label": "Football", "type": "score"}, "4": {"id": 4, "img": "images/natation.jpg", "label": "Natation", "type": "aquatique"}, "5": {"id": 5, "img": "images/tennis.png", "label": "Tennis", "type": "score"}})
})