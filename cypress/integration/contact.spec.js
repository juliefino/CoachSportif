describe("Tests pour la page contact", () => {

	it("Tests si la page contact contient bien le react", () => {
		cy.visit("http://localhost:3000/contact");})
	it("Test si la page contact possède un bouton", () => {
		cy.get("button")
	})
	it("Tests si la page contact contient tout les champs du formulaire", () => {
		cy.get("input[placeholder='Entrez votre adresse e-mail']");
		cy.get("input[placeholder='Sujet de la demande']");
		cy.get("textarea[placeholder='Ecrivez votre demande ici']")
		cy.get(".form-label")
	});
	it("Test si la page contact peut envoyer", () => {
		cy.get("button")
		cy.get("input[placeholder='Entrez votre adresse e-mail']").type("ikram@gmail.com")
		cy.get("input[placeholder='Sujet de la demande']").type("Dévenir Premium")
        cy.get("textarea[placeholder='Ecrivez votre demande ici']").type("Je voudrais devenir premium")
		cy.get(".form-input-btn").click()
	})
})