//Scenario: Clicando no Continue dentro do Information
//  Given que estou no carrinho 
//  When clico no botão Checkout 
//  And preencho as informações
//  And clico no botão Continue
//  Then deverá ir para a tela de Checkout contendo as informações finais do produto

Given('que estou no carrinho', () => {
    cy.visit('https://www.saucedemo.com/v1/cart.html');   //Começa na página do carrinho
  });
  
  When('clico no botão Checkout', () => {
    cy.contains('button', 'CHECKOUT').click();   //Clica no botão Checkout
  });
  
  And('preencho as informações', () => {
    cy.get('input[name="firstName"]').type('John');   //Preenche Nome
    cy.get('input[name="lastName"]').type('Doe');     //Preenche Sobrenome
    cy.get('input[name="postalCode"]').type('12345');  //Preenche campo CEP
  });
  
  And('clico no botão Continue', () => {
    cy.contains('button', 'CONTINUE').click();   //Clica no botão Continue
  });
  
  Then('deverá ir para a tela de checkout contendo as informações finais do produto', () => {
    cy.url().should('include', '/checkout-step-two.html');   //Verifica se a URL inclui '/checkout-step-two.html'
    cy.get('.summary_info').should('exist');      //Verifica se as informações do resumo do pedido existe
  });
  