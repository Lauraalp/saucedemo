//Scenario: Menu Lateral
//  Given que estou na listagem de produtos 
//  When clico no botão menu lateral
//  Then deverá exibir as opções All Items, About, Logout e Reset App State

describe('Menu Lateral', () => {
    it('Verificar opções do menu lateral', () => {    //Começa na listagem de produtos
      cy.visit('/https://www.saucedemo.com/v1/inventory.html');          
  
      cy.get('open-menu').click();   //Clica no menu lateral

      cy.contains('All Items').should('be.visible');  //Deverá exibir a opção All Items
      cy.contains('About').should('be.visible');  //Deverá exibir a opção About
      cy.contains('Logout').should('be.visible');  //Deverá exibir a opção Logout 
      cy.contains('Reset App State').should('be.visible');  //Deverá exibir a opção Reset App State
    });
  });
  