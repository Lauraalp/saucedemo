
//Scenario: Continue no shopping
//  Given que estou na listagem dos produtos
//  When clico no botão Continue Shopping
//  Then deverá retornar para a listagens dos produtos


Given('que estou na listagem dos produtos', () => {
   cy.visit('https://www.saucedemo.com/v1/inventory.html');  //Começa na listagem dos produtos
 });
 
 When('clico no botão CONTINUE SHOPPING', () => {
   cy.contains('button', 'CONTINUE SHOPPING').click();  //Clica no botão Continue Shopping
 });
 
 Then('deverá retornar para a listagem dos produtos', () => {
   cy.url().should('include', '/inventory.html');   //Direciona para a listagens dos produtos
 });
 