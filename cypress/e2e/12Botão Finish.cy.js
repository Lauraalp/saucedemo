//Scenario: Clicando no botão Finish
//  Given que estou no checkout com as informações finais preenchidas
//  When clico no botão finish 
//  Then deverá exibir a mensagem Thank you for order

describe('Finalização de pedido', () => {
    it('Clicando no finish', () => {    
      cy.visit('/chttps://www.saucedemo.com/v1/checkout-step-two.html');    
      cy.get('#nome').type('Teste');          //Preenche Nome
      cy.get('#endereco').type('Da Silva');   //Preenche Sobrenome
      cy.get('#cartao').type('1234 5678 9012 3456');   //Preenche CEP
    
      cy.get('btn_action cart_button').click();     //Clica no botão Finish
        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible');   //Exibe a mensagem
    });
  });
  