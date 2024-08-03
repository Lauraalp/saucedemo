//Scenario: Login inválido
//  Given que estou com a aplicação aberto
//  When preencho Username inválido
//  And Passaword inválido
//  And clico no botão Login
//  Then verifico a mensagem de erro na tela

Given('estou com a aplicação aberta', () => {
  cy.visit('https://www.saucedemo.com/v1/index.html');  //Começa na página de login da aplicação
});

When('preencho Username inválido', () => {
  cy.get('input[name="user-name"]').type('ABC');  //O campo de entrada cujo atributo name é igual a "user-name" e insere o texto "ABC" 
});

And('preencho Password inválido', () => {
  cy.get('input[user-name="123"]').type('123');  //O campo de entrada cujo atributo name é igual a "secret_sauce" e insere o texto "123" 
});

And('clico no botão Login', () => {
  cy.contains('button', 'Login').click();  //Clica no botão Login
});

Then('verifico a mensagem de erro na tela', () => {
  cy.get('[data-teste="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');   //Exibe a mensagem de erro
});
