//Scenario: Clicando no Cancel dentro do Information
//  Given que estou no Checkout 
//  When clico no botão Cancel 
//  Then deverá voltar para a listagem dos produtos

describe('Checkout', () => {
    it('Clicando no Cancel dentro do information', () => {     //Começa no Checkout
      cy.visit('https://www.saucedemo.com/v1/checkout-step-two.html');      
  
      cy.get('cart_cancel_link btn_secondary').click();  //Clica no botão Cancel
  
      cy.url().should('include', 'https://www.saucedemo.com/v1/inventory.html');    //Deverá voltar para a listagem dos produtos
      cy.contains('Listagem de Produtos').should('be.visible');           // Verifica se a lista de produtos está visível
    });
  });
  