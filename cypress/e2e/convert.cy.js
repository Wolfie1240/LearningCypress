describe('Simple calculation then convert to modern roman numeral', () => {
    it('passes', () => {
        // Arrange
      cy.visit("/")

      // Act
      cy.findByRole("button", { name: "3" })
      .click()
      cy.findByRole("button", { name: "×" })
      .click()
      cy.findByRole("button", { name: "3" })
      .click()
      cy.findByRole("button", { name: "3" })
      .click()
      cy.findByRole("button", { name: "=" })
      .click()
      cy.findByRole("button", { name: "=" })
      .click()

      // Assert
      cy.findByText("LXXXXVIIII").should("exist")

      cy.findByRole("button", { name: "mdrn" })
      .click()
    
      cy.findByText("XCIX").should("exist")
    
    })
  })