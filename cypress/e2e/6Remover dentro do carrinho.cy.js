//Scenario: Remover dentro do carrinho 
//  Given que estou no carrinho 
//  And tenho produtos adicionados
//  When clico no botão Remove
//  Then o produto deve ser excluido do carrinho

Given('que estou no carrinho', () => {
  cy.visit('https://www.saucedemo.com/v1/cart.html');   //Começa na tela do carrinho 
});

And('tenho produtos adicionados', () => {
  cy.get('.cart_item').should('have.length.greaterThan', 0);  //Garante que tenha pelo menos um produto no carrinho
});

When('clico no botão REMOVE', () => {
  cy.contains('button', 'REMOVE').click();   //Clica no botão Remove
});

Then('o produto deve ser excluído do carrinho', () => {
  cy.get('.cart_item').should('have.length', 0);  //Confirma que o número é igual a zero, não contendo nenhum produto no carrinho
});
