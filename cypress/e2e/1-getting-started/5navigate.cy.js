describe('navigate', () => {
    beforeEach(() => {

      cy.visit('http://localhost:5173/')
    })

    it('Should navigate to booking', () => {
      cy.visit('http://localhost:5173/confirmation#')
      cy.get('.navigation').find('img').should('have.class', 'navigation__icon').click()
      cy.get('.navigation__link').first().click()
    })

    it('Should navigate to confirmation', () => {
      cy.visit('http://localhost:5173/#')
      cy.get('.navigation').find('img').should('have.class', 'navigation__icon').click()
      cy.get('.navigation__link').last().click()  
    })
})