Cypress.Commands.add('verificarMensagemNoToast', (mensagem) => {
  cy.get('.toast').should('have.text', mensagem);
})

Cypress.Commands.add('selecionarOpcaoNaCombobox', (labelDoCampo, opcao) => {
    cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`) // Seleciona o campo de conta origem pela label e cria um alias(apelido)
    cy.get(`@campo-${labelDoCampo}`).click() // Clica no campo de conta origem
    cy.get(`@campo-${labelDoCampo}`).contains(opcao).click() // Seleciona a conta origem
})