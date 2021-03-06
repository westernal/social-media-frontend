describe("comment on a post.", () => {
  it("user can comment on posts and delete it", () => {
    let message = 1000 * Math.random();
    //login
    cy.visit("/");
    cy.findByPlaceholderText(/username/i).type("westernal");
    cy.findByPlaceholderText(/password/i).type("13791379al");
    cy.findByRole("button", { name: /login/i }).click();
    cy.wait(2000);

    //click on comment button
    cy.get("#comment-icon").click();
    cy.wait(500);

    //post a comment
    cy.findByRole("textbox").type(message);
    cy.findByRole("button", { name: /post/i }).click();
    cy.wait(1000);

    //check if comment added
    cy.findByText(message).should("be.visible");

    //delete comment
    cy.get("#delete-btn").click();
    cy.wait(1000);

    //check if comment deleted
    cy.findByText(message).should("not.exist");
  });
});
