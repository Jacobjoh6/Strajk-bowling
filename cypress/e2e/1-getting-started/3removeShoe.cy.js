describe('example to-do app', () => {
    beforeEach(() => {

      cy.visit('http://localhost:5173/')
    })

    it('Adds a number of players', () => {
      cy.get('[name="when"]').type('2023-05-30').should('have.value', '2023-05-30');
      cy.get('[name="time"]').type('18:00').should('have.value', '18:00');
      cy.get('[name="people"]').type('2').should('have.value', 2)
      cy.get('[name="lanes"]').type('1').should('have.value', 1 )
    })

    it('Adds one more pair of shoes than players', () => {
      cy.get('[name="when"]').type('2023-05-30').should('have.value', '2023-05-30');
      cy.get('[name="time"]').type('18:00').should('have.value', '18:00');
      cy.get('[name="people"]').type('2').should('have.value', 2)
      cy.get('[name="lanes"]').type('1').should('have.value', 1 )

      cy.get('.shoes__button').click().click().click()

      cy.get('.shoes').find('article').should('have.length', 3) //ny rad
    })

    it('Removes the extra pair', () => {
      cy.get('[name="when"]').type('2023-05-30').should('have.value', '2023-05-30');
      cy.get('[name="time"]').type('18:00').should('have.value', '18:00');
      cy.get('[name="people"]').type('2').should('have.value', 2)
      cy.get('[name="lanes"]').type('1').should('have.value', 1 )

      cy.get('.shoes__button').click().click().click()

      cy.get('.shoes').find('article').should('have.length', 3) //ny

      cy.get('.shoes__form').first().type('43')
      cy.get('.shoes__form').eq(-2).find('button').click()
      cy.get('.shoes__form').last().type('45')

      cy.get('.shoes').find('article').should('have.length', 2) //ny

    })
})