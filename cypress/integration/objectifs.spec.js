describe("Tests pour la page objectifs", () => {

	it("Tests si la page objectifs contient bien le react", () => {
		cy.visit("http://localhost:3000/login");})

	it("Test si la page obje peut se connecter", () => {
		cy.get("button")
		cy.get("input[placeholder='Entrez votre e-mail']").type("ikram@gmail.com")
		cy.get("input[placeholder='Entrez mot de passe']").type("ikram33")
		cy.get(".form-input-btn").click()
		 cy.visit("http://localhost:3000/objectifs");
	})




})