import ObjectifsUtilisateur from "../ObjectifsUtilisateurs";

it("testing API ObjectifsUtilisateurGET", async function ()  {
    const response = new ObjectifsUtilisateur();
    var reponse = await response.api1();
    var data = reponse.data ;

    expect(reponse.status).toEqual(200);
    expect(response.status).not.toEqual(404)
    expect(data).toEqual({"nom_objectif": "Vitesse"})
})