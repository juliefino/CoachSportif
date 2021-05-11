
describe("Tests pour la page login", () => {

	it("Tests si la page login contient bien le react", () => {
		cy.visit("http://localhost:3000/login");})
	it("Test si la page login possède un bouton", () => {
		cy.get("button")
	})
	it("Tests si la page login contient tout les champs du formulaire", () => {
		cy.get("input[placeholder='Entrez votre e-mail']");
		cy.get("input[placeholder='Entrez mot de passe']");
		cy.get(".form-label")
	});
	it("Test si la page login peut se connecter", () => {
		cy.get("button")
		cy.get("input[placeholder='Entrez votre e-mail']").type("ikram@gmail.com")
		cy.get("input[placeholder='Entrez mot de passe']").type("ikram33")
		cy.get(".form-input-btn").click()
	})
})