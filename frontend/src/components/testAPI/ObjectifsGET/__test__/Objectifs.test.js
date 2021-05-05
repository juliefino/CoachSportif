
import Objectifs from "../Objectifs"
it("testing API ObjectifsGET", async function ()  {
    const response = new Objectifs();
    var reponse = await response.api();
    var data = reponse.data ;

    expect(reponse.status).toEqual(200);
    expect(response.status).not.toEqual(404)
    expect(data).toEqual({"1": {"label": "Vitesse", "value": 1}, "2": {"label": "Distance", "value": 2}})
})
