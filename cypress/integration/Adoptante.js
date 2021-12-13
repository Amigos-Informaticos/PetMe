describe("Adoptante", () => {
	const email = "edson@correo.com";
	const password = "password1";

	beforeEach(() => {
		cy.visit("localhost:3000");
	});

	it('registrarse', () => {
		cy.contains("Iniciar sesión").click();
		cy.contains("Registrate").click();
		cy.get(".email > .input").type(email);
		cy.get(".password > .input").type(password);
		cy.get(".nombre > .input").type("Edson Manuel");
		cy.get(".apellido-paterno > .input").type("Carballo");
		cy.get(".apellido-materno > .input").type("Vera");
		cy.get(".fecha-nacimiento > .input").type("1999-07-19");
		cy.get(':nth-child(1) > .radio').click();
		cy.get('.button-signup').click();
	});

	it('iniciar sesion', () => {
		cy.contains("Iniciar sesión").click();
		cy.get(':nth-child(1) > .input').type(email);
		cy.get(':nth-child(2) > .input').type(password);
		cy.get('.button-signup').click();
		cy.get('.swal2-confirm').click();
		cy.contains("Cerrar sesión").click();
		cy.end();
	});
});
