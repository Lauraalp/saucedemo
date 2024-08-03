
//Scenario: Adicionar no carrinho
//  Given que estou na listagem dos produtos
//  When clico no botão ADD TO CART
//  Then o produto vai para a tela do carrinho


Given('que estou na listagem dos produtos', () => {
   cy.visit('https://www.saucedemo.com/v1/inventory.html');  //Começa na página de listagem de produtos
 });
 
 When('clico no botão ADD TO CART', () => {
   cy.contains('button', 'ADD TO CART').click();   //Clica no botão Adicionar no Carrinho 
 });
 
 Then('o produto vai para a tela do carrinho', () => {
   cy.visit('https://www.saucedemo.com/v1/cart.html');   //Direciona para a página do carrinho 
   cy.url().should('include', '/cart.html');   //Direciona para a página do carrinho de compras, contendo o produto adicionado
 });
 