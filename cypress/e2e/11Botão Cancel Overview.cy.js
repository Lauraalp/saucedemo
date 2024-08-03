//Scenario: Clicando no Cancel da página do Overview
//  Given que estou no carrinho 
//  When clico no botão Checkout 
//  And clico no botão Cancel
//  Then deverá voltar para o carrinho

Given('que estou no carrinho', () => {
    cy.visit('https://www.saucedemo.com/v1/cart.html');   //Começa na página do carrinho
  });
  
  When('clico no botão Checkout', () => {
    cy.contains('button', 'CHECKOUT').click();   //Clica no botão Checkout
  });
  
  And('clico no botão Cancel', () => {
    cy.contains('button', 'CANCEL').click();   //Clica no botão Cancel
  });
  
  Then('deverá voltar para o carrinho', () => {
    cy.url().should('include', '/cart.html');   //Verifica se a URL inclui '/cart.html', se retornou para o carrinho
  });
  
  