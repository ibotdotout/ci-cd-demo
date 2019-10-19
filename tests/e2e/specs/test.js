// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })

  it('Visits the app root url then show Vue logo', () => {
    cy.visit('/')
    cy.get('img').should('be.visible')
    cy.get('img').should('have.attr', 'alt', 'Vue logo')
  })
})
