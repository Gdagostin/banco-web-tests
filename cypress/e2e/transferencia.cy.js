describe('Transferências', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.screenshot('apos-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
  });
  it('Deve transferir quando informo dados e valor válidos', () => {

    cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem') // Seleciona o campo de conta origem pela label e cria um alias(apelido)
    cy.get('@campo-conta-origem').click() // Clica no campo de conta origem
    cy.get('@campo-conta-origem').contains('Maria Oliveira').click() // Seleciona a conta origem

    cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino') // Seleciona o campo de conta destino pela label e cria um alias(apelido)
    cy.get('@campo-conta-destino').click() // Clica no campo de conta destino
    cy.get('@campo-conta-destino').contains('João da Silva').click() // Seleciona a conta destino
    // Assert
    cy.get('#valor').click().type('11') // Clica no campo de valor e digita o valor da transferência

    cy.contains('button', 'Transferir').click()

    cy.get('.toast').should('have.text', 'Transferência realizada!') // Verifica se a mensagem de sucesso é exibida
  })
})