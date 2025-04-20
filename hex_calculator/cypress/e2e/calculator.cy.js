describe('Calculator GUI Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Renders calculator buttons', () => {
    cy.get('[data-cy=button-1]').should('exist')
    cy.get('[data-cy=button-plus]').should('exist')
    });

    it('Displays numbers correctly when clicked', () => {
        cy.get('.display').should('have.text', '00'); // Initial display value
        cy.get('[data-cy=button-1]').click();
        cy.get('[data-cy=button-A]').click(); // Input "1A"
        cy.get('.display').should('have.text', '1A');
      });

      it('Performs addition of two hex numbers', () => {
        cy.get('[data-cy=button-1]').click();
        cy.get('[data-cy=button-plus]').click();
        cy.get('.display').should('have.text', '01 + 00'); // Operator displayed
        cy.get('[data-cy=button-1]').click();
        cy.get('.display').should('have.text', '01 + 01');
        cy.get('[data-cy=button-equals]').click();
        cy.get('.display').should('have.text', '0002'); // 1 + 1 = 2
      });
})

 