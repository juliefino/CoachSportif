describe("Tests pour la page inscription", () => {

	it("Tests si la page inscription contient bien le react", () => {
		cy.visit("http://localhost:3000/sign-up");

	});
	it("Test si la page inscription contient un bouton", () => {
		cy.visit("http://localhost:3000/sign-up");
		cy.get("button[type='submit']");
	});
	it("Tests si la page inscription contient tout les champs du formulaire", () => {
	    cy.get("input[placeholder='Entrez votre alias']");
		cy.get("input[placeholder='Entrez votre e-mail']");
		cy.get("input[placeholder='Entrez votre taille']");
		cy.get("input[placeholder='Entrez votre poids']");
		cy.get("input[placeholder='Entrez mot de passe de plus de 6 caractères']")
		cy.get(".form-label")
        cy.get("input[placeholder='Entrez votre alias']").type("Coach")
		cy.get("input[placeholder='Entrez votre e-mail']").type("coach@gmail.com")
        cy.get("input[placeholder='Entrez votre taille']").type(170)
		cy.get("input[placeholder='Entrez votre poids']").type(60)
    });
})