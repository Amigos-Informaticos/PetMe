describe("Mascotas", () => {
	beforeEach(() => {
		cy.visit("localhost:3000");
	});

	it('cargar mascotas', () => {
		cy.get(".hamburger-button").click();
		cy.contains("Mascotas").click();
		cy.wait(1500);
		cy.get(".hamburger-button").click();
		cy.contains("Doradito").click();
	});
});
