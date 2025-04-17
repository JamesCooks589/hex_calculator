describe('Calculator GUI Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Displays numbers correctly when clicked', () => {
    cy.get('[data-cy=button-1]').click();
    cy.get('[data-cy=button-A]').click(); // Input "1A"
    cy.get('.display').should('have.text', '001A');
  });

  it('Performs addition of two hex numbers', () => {
    cy.get('[data-cy=button-1]').click();
    cy.get('[data-cy=button-A]').click(); // Input "1A"
    cy.get('[data-cy=button-+]').click();
    cy.get('[data-cy=button-B]').click(); // Input "B"
    cy.get('[data-cy=button-=]').click();
    cy.get('.display').should('have.text', '0025'); // 1A + B = 25
  });

  it('Performs subtraction of two hex numbers', () => {
    cy.get('[data-cy=button-2]').click();
    cy.get('[data-cy=button-0]').click(); // Input "20"
    cy.get('[data-cy=button-−]').click();
    cy.get('[data-cy=button-5]').click(); // Input "5"
    cy.get('[data-cy=button-=]').click();
    cy.get('.display').should('have.text', '001B'); // 20 − 5 = 1B
  });

  it('Performs multiplication of two hex numbers', () => {
    cy.get('[data-cy=button-3]').click();
    cy.get('[data-cy=button-×]').click();
    cy.get('[data-cy=button-4]').click();
    cy.get('[data-cy=button-=]').click();
    cy.get('.display').should('have.text', '000C'); // 3 × 4 = C
  });

  it('Performs division of two hex numbers', () => {
    cy.get('[data-cy=button-1]').click();
    cy.get('[data-cy=button-0]').click(); // Input "10"
    cy.get('[data-cy=button-÷]').click();
    cy.get('[data-cy=button-2]').click(); // Input "2"
    cy.get('[data-cy=button-=]').click();
    cy.get('.display').should('have.text', '0008'); // 10 ÷ 2 = 8
  });

  it('Clears the display when CLR is clicked', () => {
    cy.get('[data-cy=button-F]').click();
    cy.get('[data-cy=button-C]').click(); // Input "FC"
    cy.get('[data-cy=button-CLR]').click();
    cy.get('.display').should('have.text', '0000'); // Display reset to "0000"
  });

  it('Handles invalid input gracefully', () => {
    cy.get('[data-cy=button-1]').click().click().click(); // Input "111"
    cy.get('[data-cy=button-1]').click(); // Input "1111" (max length)
    cy.get('[data-cy=button-1]').click(); // Attempt to input more
    cy.get('.display').should('have.text', '1111'); // Input remains "1111"
  });

  it('Shows the selected operator in the display', () => {
    cy.get('[data-cy=button-1]').click();
    cy.get('[data-cy=button-+]').click();
    cy.get('.display').should('have.text', '0001 +'); // Operator displayed
  });

  it('Resets for a new calculation after equals', () => {
    cy.get('[data-cy=button-1]').click();
    cy.get('[data-cy=button-+]').click();
    cy.get('[data-cy=button-1]').click();
    cy.get('[data-cy=button-=]').click(); // Perform calculation
    cy.get('.display').should('have.text', '0002'); // Result displayed
    cy.get('[data-cy=button-3]').click(); // Start new calculation
    cy.get('.display').should('have.text', '0003'); // Display reset for new input
  });
});