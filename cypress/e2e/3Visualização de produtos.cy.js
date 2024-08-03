//Scenario: Visualização de produtos
//  Given que estou na listagem dos produtos
//  Then vejo os campos título do produto, descrição do produto, imagem do produto, valor e o botão adicionar no carrinho

Given('que estou na listagem dos produtos', () => {
  cy.visit('https://www.saucedemo.com/v1/inventory.html');   //Começa na tela de listagem de produto
});

Then('vejo os campos título do produto, descrição do produto, imagem do produto, valor e o botão adicionar no carrinho', () => {
  cy.get('.inventory_item').each(($el) => {
    cy.wrap($el).within(() => {
      cy.get('.inventory_item_name').should('be.visible');   //Exibe o campo título do produto
      cy.get('.inventory_item_desc').should('be.visible');   //Exibe o campo descrição do produto
      cy.get('.inventory_item_img').should('be.visible');   //Exibe a imagem do produto
      cy.get('.inventory_item_price').should('be.visible');    //Exibe o valor
      cy.get('button').contains('ADD TO CART').should('be.visible');   //Exibe o botão adicionar no carrinho
    }); 
  });
});
