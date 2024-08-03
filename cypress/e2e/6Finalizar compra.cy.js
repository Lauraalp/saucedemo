
//Scenario: Finalizar compra
// Given que estou na tela do carrinho
// When clico no botão Checkout
// Then devo ser redirecionado para a tela de Checkout

Given('que estou na tela do carrinho', () => {
  cy.visit('https://www.saucedemo.com/v1/cart.html');  //Começar na página do carrinho
});

When('clico no botão CHECKOUT', () => {
  cy.contains('button', 'CHECKOUT').click();  //Clica no botão Checkout
});

Then('devo ser redirecionado para a tela de checkout', () => {
  cy.url().should('include', '/checkout-step-one.html');   //Dreciona para a página do Checkout
});
