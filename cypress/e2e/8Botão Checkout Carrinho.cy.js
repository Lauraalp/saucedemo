//Scenario: Clicando no checkout do carrinho
//  Given que estou no carrinho 
//  And tenho produtos adicionados
//  When clico no botão Checkout
//  Then pede para preencher os campos First Name, Last Name, Zip/Postal Code
//  And contem os botões Cancel e Continue

Given('que estou no carrinho', () => {
    cy.visit('https://www.saucedemo.com/v1/cart.html');   //Começa na página do carrinho
  });
  
  And('tenho produtos adicionados', () => {
    cy.get('.cart_item').should('have.length.greaterThan', 0);   //Verifica se existe produtos no carrinho
  });
  
  When('clico no botão Checkout', () => {
    cy.contains('button', 'CHECKOUT').click();   //Clica no botão Checkout
  });
  
  Then('ele para preencher os campos First Name, Last Name, Zip/Postal Code', () => {   //Verifica se os campos estão visíveis
    cy.get('input[name="firstName"]').should('be.visible');    // Preenche Nome
    cy.get('input[name="lastName"]').should('be.visible');     // Preenche Sobrenome
    cy.get('input[name="postalCode"]').should('be.visible');   // Preenche CEP
  });
  
  And('contem os botões Cancel e Continue', () => {   //Verifica se os botões Cancel e Continue estão visíveis
    cy.contains('button', 'CANCEL').should('be.visible');      // Botão Cancel
    cy.contains('button', 'CONTINUE').should('be.visible');    //Botão Continue
  });
  