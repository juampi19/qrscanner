describe( 'probando la app', () => {

    it( 'mostrar login page con un error', () => {
        cy.visit('/');
        cy.contains('Bienvenidos1');
    } );

    it( 'probando login con campos vacios', () => {
        cy.visit('/');
        cy.get('ion-input').should('exist');
        cy.get('[data-cy="input-password"]').should('exist');
        cy.get('[data-cy="boton-login"]').should('exist');
        cy.get('[data-cy="formulario"]').submit();
        cy.get('.sc-ion-alert-ios').should('exist');
        cy.get('.alert-button').click();
    } );

    it('probando formulario con campos correctos', () => {
        cy.visit('/');
        cy.get('[data-cy="input-email"]').should('exist');
        cy.get('[data-cy="input-password"]').should('exist');
        cy.get('[data-cy="boton-login"]').should('exist');
        cy.get('[data-cy="input-email"]').type('cookie');
        cy.get('[data-cy="input-password"]').type('123456');
        cy.get('[data-cy="formulario"]').submit();
    });

});
