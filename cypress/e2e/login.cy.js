
describe('Register a user can login and history, logout and unregister appear', () => {
    it('passes', () => {
        // Arrange
      cy.visit("/register")
      cy.findByLabelText("Email").type("hessro@oregonstate.edu")
      cy.findByLabelText("Password").type("abc123ABC!!!")
      cy.findByRole("button", { name: "Register" })
      .click()

        // Act
      cy.findByText("Login").click()

      cy.findByLabelText("Email").type("hessro@oregonstate.edu")
      cy.findByLabelText("Password").type("abc123ABC!!!")

      cy.findByRole("button", { name: "Login" })
      .click()

        // Assert
      cy.findByText("History").should("exist")
      cy.findByText("Logout").should("exist")
      cy.findByText("Unregister").should("exist")
    
    })
  })