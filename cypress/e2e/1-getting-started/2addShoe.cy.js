describe('example to-do app', () => {
    beforeEach(() => {

      cy.visit('http://localhost:5173/')
    })

    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
})