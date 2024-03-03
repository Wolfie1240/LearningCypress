
describe('Register a user can logout after login', () => {
    it('passes', () => {
        // Arrange
      cy.visit("/register")
      cy.findByLabelText("Email").type("hessro@oregonstate.edu")
      cy.findByLabelText("Password").type("abc123ABC!!!")
      cy.findByRole("button", { name: "Register" })
      .click()
      cy.findByText("Login").click()

      cy.findByLabelText("Email").type("hessro@oregonstate.edu")
      cy.findByLabelText("Password").type("abc123ABC!!!")

      cy.findByRole("button", { name: "Login" })
      .click()

        
      // Act
      cy.findByText("Logout").click()

      // Assert
      cy.findByText("Login").should("exist")
    })
  })