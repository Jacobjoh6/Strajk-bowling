describe('example to-do app', () => {
    beforeEach(() => {

      cy.visit('http://localhost:5173/')
    })

     it('should add date', () => {
       cy.get('[name="when"]').type('2023-05-30').should('have.value', '2023-05-30');

     })

    it('should add time', () => {
      cy.get('[name="time"]').type('18:00').should('have.value', '18:00');

    })

    it('should add players', () => {
      cy.get('[name="people"]').type('3').should('have.value', 3)

    })

    it('should add lanes', () => {
      cy.get('[name="lanes"]').type('1').should('have.value', 1 )

    })

    

})

// 