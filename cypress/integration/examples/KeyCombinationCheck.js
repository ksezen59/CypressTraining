/// <reference types="Cypress" />

describe("My Second Test Suit", function () {
  it("My First Test Case", function () {
    //Checboxes
    cy.visit("https://www.prepostseo.com/tool/online-text-editor");
    cy.get("#createNewTextFileButton").click();
    cy.get(".ace_content").type("Cypress is great").type("{shift}{home}");
    cy.get(".material-icons.editorToolbarButtonImg.md-tooltip").click();
  });
});
