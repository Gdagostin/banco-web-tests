# 🏦 Banco Web Tests

Este projeto de testes automatizados foi desenvolvido durante o curso **Mentoria 2.0 do Julio de Lima** com o objetivo de implementar automação de testes end-to-end utilizando o framework Cypress com JavaScript.

## 🎯 Objetivo

O principal objetivo deste projeto é ensinar e demonstrar boas práticas de automação de testes para aplicações web, utilizando o Cypress como ferramenta principal. O projeto foca em testar uma aplicação bancária web, cobrindo funcionalidades de login e transferências entre contas.

## 🏗️ Arquitetura do Projeto

O projeto está organizado seguindo as melhores práticas de estruturação de testes com Cypress:

```
cypress/
├── e2e/                           # Testes end-to-end
│   ├── login.cy.js               # Testes de autenticação
│   └── transferencia.cy.js       # Testes de transferência
├── fixtures/                      # Dados de teste
│   └── credenciais.json          # Credenciais para login
├── support/                       # Arquivos de suporte
│   ├── commands.js               # Registro de comandos customizados
│   ├── e2e.js                    # Configurações globais
│   └── commands/                 # Comandos customizados organizados
│       ├── common.js             # Comandos comuns/genéricos
│       ├── login.js              # Comandos específicos de login
│       └── transferencia.js      # Comandos específicos de transferência
├── reports/                       # Relatórios de execução
└── screenshots/                   # Screenshots de falhas
```

## 🛠️ Tecnologias Utilizadas

- **Cypress**: Framework principal para automação de testes E2E
- **JavaScript**: Linguagem de programação
- **cypress-mochawesome-reporter**: Geração de relatórios HTML detalhados
- **Node.js**: Ambiente de execução

## 📋 Pré-requisitos

Antes de executar os testes, certifique-se de que os seguintes serviços estão rodando:

### 1. API Backend
- **Repositório**: [banco-api](https://github.com/juliodelimas/banco-api)
- **URL**: `http://localhost:3000` (porta padrão)

### 2. Aplicação Web Frontend
- **Repositório**: [banco-web](https://github.com/juliodelimas/banco-web)
- **URL**: `http://localhost:4000` (configurado no `cypress.config.js`)

### 3. Ambiente Local
- Node.js versão 14 ou superior
- npm ou yarn

## 🚀 Instalação e Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Gdagostin/banco-web-tests.git
   cd banco-web-tests
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Verifique se a API e o frontend estão rodando**:
   - API: `http://localhost:3000`
   - Frontend: `http://localhost:4000`

## 🎮 Executando os Testes

### Modo Interativo (Cypress Dashboard)
```bash
npm run cy:open
```

### Modo Headless (Terminal)
```bash
npm test
# ou
npm run test-qa
# ou
npm run test-prod
```

### Modo com Interface Gráfica
```bash
npm run cy:headed
```

## 📊 Relatórios

Os relatórios são gerados automaticamente após a execução dos testes utilizando o `cypress-mochawesome-reporter`. Os relatórios ficam disponíveis em:

- **HTML Report**: `cypress/reports/html/index.html`
- **Screenshots**: `cypress/screenshots/` (apenas em caso de falhas)

Para visualizar o relatório, abra o arquivo `index.html` em um navegador.

## 🧪 Suítes de Teste

### 1. Login (`login.cy.js`)
Testa as funcionalidades de autenticação da aplicação:

- ✅ **Login com credenciais válidas**: Verifica se o usuário consegue fazer login com dados corretos
- ❌ **Login com credenciais inválidas**: Verifica se mensagens de erro são exibidas para dados incorretos

### 2. Transferências (`transferencia.cy.js`)
Testa as funcionalidades de transferência entre contas:

- ✅ **Transferência válida**: Verifica transferências com dados e valores corretos
- ⚠️ **Transferência acima de R$ 5.000**: Verifica validação de autenticação adicional para valores altos

## 🔧 Custom Commands

O projeto utiliza Custom Commands para reutilização de código e melhor organização:

### Commands Comuns (`common.js`)

#### `cy.verificarMensagemNoToast(mensagem)`
Verifica se uma mensagem específica aparece no componente toast da aplicação.

**Parâmetros**:
- `mensagem` (string): Texto da mensagem esperada

**Exemplo**:
```javascript
cy.verificarMensagemNoToast('Transferência realizada!')
```

#### `cy.selecionarOpcaoNaCombobox(labelDoCampo, opcao)`
Seleciona uma opção específica em um combobox baseado na label do campo.

**Parâmetros**:
- `labelDoCampo` (string): ID da label do campo
- `opcao` (string): Texto da opção a ser selecionada

**Exemplo**:
```javascript
cy.selecionarOpcaoNaCombobox('conta-origem', 'Maria Oliveira')
```

### Commands de Login (`login.js`)

#### `cy.fazerLoginComCredenciaisValidas()`
Realiza login utilizando credenciais válidas definidas no arquivo `fixtures/credenciais.json`.

**Exemplo**:
```javascript
cy.fazerLoginComCredenciaisValidas()
```

#### `cy.fazerLoginComCredenciaisInvalidas()`
Realiza tentativa de login com credenciais inválidas para testes de validação.

**Exemplo**:
```javascript
cy.fazerLoginComCredenciaisInvalidas()
```

### Commands de Transferência (`transferencia.js`)

#### `cy.realizarTransferencia(contaOrigem, contaDestino, valor)`
Executa uma transferência completa entre contas.

**Parâmetros**:
- `contaOrigem` (string): Nome da conta de origem
- `contaDestino` (string): Nome da conta de destino  
- `valor` (string): Valor a ser transferido

**Exemplo**:
```javascript
cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '100')
```

## 📁 Dados de Teste (Fixtures)

### `credenciais.json`
Contém as credenciais utilizadas nos testes:

```json
{
  "valida": {
    "usuario": "julio.lima",
    "senha": "123456"
  },
  "invalida": {
    "usuario": "julio.lima", 
    "senha": "654321"
  }
}
```

## ⚙️ Configurações

### `cypress.config.js`
```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:4000",
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
```

**Configurações principais**:
- **baseUrl**: URL base da aplicação web
- **reporter**: Gerador de relatórios configurado
- **setupNodeEvents**: Configuração do plugin de relatórios

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Crie um Pull Request

## 📚 Recursos Adicionais

- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Mentoria 2.0 - Julio de Lima](https://github.com/juliodelimas)
- [Melhores práticas com Cypress](https://docs.cypress.io/guides/references/best-practices)

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

---

**Desenvolvido para a Mentoria 2.0 do Julio de Lima** 🚀
