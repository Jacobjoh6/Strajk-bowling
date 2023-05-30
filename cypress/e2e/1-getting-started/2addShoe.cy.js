describe('example to-do app', () => {
    beforeEach(() => {

      cy.visit('http://localhost:5173/')
    })

    it('inputs initial booking data', () => {
      cy.get('[name="when"]').type('2023-05-30').should('have.value', '2023-05-30');
      cy.get('[name="time"]').type('18:00').should('have.value', '18:00');
      cy.get('[name="people"]').type('3').should('have.value', 3)
      cy.get('[name="lanes"]').type('1').should('have.value', 1 )
    })

    it('Adds the same ammount of shoes as players', () => {
      cy.get('[name="when"]').type('2023-05-30').should('have.value', '2023-05-30');
      cy.get('[name="time"]').type('18:00').should('have.value', '18:00');
      cy.get('[name="people"]').type('2').should('have.value', 2)
      cy.get('[name="lanes"]').type('1').should('have.value', 1 )

      cy.get('.shoes__button').click().click()

      cy.get('.shoes__form').first().type('43')
      cy.get('.shoes__form').last().type('45')
    })


})
    it('', () => {
      
    })