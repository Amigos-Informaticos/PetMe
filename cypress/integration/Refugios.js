describe("Refugios", () => {
	beforeEach(() => {
		cy.visit("localhost:3000");
	});
	it('cargar refugios', () => {
		cy.viewport(360, 740);
		cy.get(".hamburger-button").click();
		cy.contains("Refugios").click();
		cy.wait(1500);
		cy.get(".hamburger-button").click();
		cy.wait(1000);
		cy.viewport(1440, 900);
		cy.contains("Siguiente").click();
		cy.wait(1500);
		cy.contains("Prev").click();
		cy.contains("Guarida de peludos").click();
		cy.end();
	});
});
