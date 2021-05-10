describe("Tests pour la page d'accueil", () => {

	it("Tests si la page d'accueil contient bien le react", () => {
		cy.visit("http://localhost:3000/");

	});
	it("Tests si la page d'accueil contient bien les élements textuels", () => {
		cy.get(".hero-container")
        cy.contains('p','What are you waiting for?')
        cy.contains('h1', 'WORK HARDER, GET STRONGER')
		cy.get(".navbar")
		cy.get(".nav-links")
		cy.get('.hero-btns').click()
	});

})