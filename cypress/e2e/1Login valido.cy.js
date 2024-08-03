//import (Given, When, Then)

//Scenario: Login válido
//  Given que estou com a aplicação aberto
//  When preencho Username e Password com dados válidos
//  Then clico no botão Login
//  Then sou direcionado para tela de listagem de produtos

  import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

  Given('estou com a aplicação aberta', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html');  // Começa na página de login da aplicação
  });
  
  When('preencho Username válido', () => {
    cy.get('input[name="user-name"]').type('standard_user');  // Preenche o campo de entrada do usuário
  });
  
  When('preencho Password válido', () => {
    cy.get('input[name="password"]').type('secret_sauce');  // Preenche o campo de entrada da senha
  });
  
  Then('clico no botão Login', () => {
    cy.contains('button', 'Login').click();  // Clica no botão Login
  });
  
  Then('sou direcionado para tela de listagem de produtos', () => { // Use "Then" em vez de "And"
    cy.url().should('include', '/inventory.html');     // Verifica se a URL inclui '/inventory.html'
    cy.contains('Products').should('be.visible');  // Verifica se a tela de listagem de produtos está visível
  });
  