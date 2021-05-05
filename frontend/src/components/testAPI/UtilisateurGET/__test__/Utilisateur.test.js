
import Utilisateur from "../Utilisateur";

it("testing UtilisateurGet", async function () {
    const response = new Utilisateur();
    var reponse = await response.api();
    var data = reponse.data ;

    //Vérification Status
    expect(reponse.status).toEqual(200);
    expect(data).toEqual({"1": {"alias": "Ikram", "email": "ikram@gmail.com", "naissance": "1999-12-03", "poids": 60, "premium": true, "taille": 175}})
})