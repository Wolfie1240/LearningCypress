

describe('Register a user and verify Login button appears', () => {
  it('passes', () => {
    // Arrange
    cy.visit("/")

    // Act
    cy.findByText("Register").click()

    cy.findByLabelText("Email").type("hessro@oregonstate.edu")
    cy.findByLabelText("Password").type("abc123ABC!!!")

    cy.findByRole("button", { name: "Register" })
    .click()


    // Assert
    cy.findByText("Login").should("exist")
  
  })
})