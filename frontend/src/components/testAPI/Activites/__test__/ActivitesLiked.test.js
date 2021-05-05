import ActivitesLikee from "../ActivitesLiked";

it("testing ActivitesLikesGet", async function () {
    const response = new ActivitesLikee();
    var reponse = await response.api();
    var data = reponse.data ;

    //Vérification Status
    expect(reponse.status).toEqual(200);
    expect(data).toEqual({'1': { id: 1, id_activity: 1, id_user: 1 },
        '2': { id: 2, id_activity: 2, id_user: 1 },
        '4': { id: 4, id_activity: 3, id_user: 1 }
      })
})