/// <reference types="cypress" />

context('Logins', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Login válido com usuário padrão', () => {
    cy.get('[data-test="username"]').click();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').click();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="item-4-img-link"]').should('have.attr', 'data-test', 'item-4-img-link');
  })
it('Login inválido', () => {
  cy.get('[data-test="username"]').click();
  cy.get('[data-test="username"]').type('standard_user1');
  cy.get('[data-test="password"]').click();
  cy.get('[data-test="password"]').type('standard_user1');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="login-container"] div.login_wrapper-inner').click();
})

})