describe("Tests pour la page des activités", () => {

    it("Tests si la page activités contient bien le react", () => {
        cy.visit("http://localhost:3000/login");
    })

    it("Test si la page activités peut se connecter", () => {
        cy.get("button")
        cy.get("input[placeholder='Entrez votre e-mail']").type("test@mathis.be")
        cy.get("input[placeholder='Entrez mot de passe']").type("test123")
        cy.get(".form-input-btn").click()
        cy.visit("http://localhost:3000/activites");
		cy.get('button[id="1"]').click()
        cy.get('button[id="2"]').click()
        cy.get('button[id="1"]').click()
        cy.get('button[id="1"]').click()
        cy.get('#2stat').click()
    })

})