//Scenario: Ordenação dos produtos de baixo para alto (low to high)
//  Given que estou na listagem dos produtos
//  And clico no botão de ordenação do mais barato para o mais caro
//  Then a ordenação deve ser feita

  describe('Ordenação de Produtos', () => {
    it('Ordenação dos produtos de baixo para alto (low to high)', () => {   //Começa na listatem de produtos
      cy.visit('/https://www.saucedemo.com/v1/inventory.html');   
  
      cy.get('ordenacao-baixo-product_sort_container-alto').click();  //Clico no botão de ordenação low to high
  
    
      cy.get('.ordenacao-baixo-product_sort_container-alto')   //Ordenação deve ser feita
        .then(($produtos) => {
          const precos = $produtos.map((index, produto) => {
            return parseFloat(Cypress.$(produto).find('inventory_item_price').text().replace('R$', '').trim()); 
          }).get();
  
          const precosOrdenados = [...precos].sort((a, b) => a - b);  //Verifica se os preços estão em ordem crescente
          expect(precos).to.deep.equal(precosOrdenados);
        });
    });
  });
  