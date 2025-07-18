describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('/')
  });
  it('Login com dados válidos deve permitir entrada no sistema', () => {

    // Act
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.screenshot('apos-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
  it('Login com dados inválidos deve exibir mensagem de erro', () => {

    // Act
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.get('.toast').should('be.visible').and('have.text', 'Erro no login. Tente novamente.')
  })
})