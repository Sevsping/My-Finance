# MyFinance - Controle de Gastos Pessoais

MyFinance é uma aplicação web desenvolvida em React para ajudar usuários a controlar seus gastos pessoais de forma simples, prática e eficiente. A interface é moderna e responsiva, utilizando Tailwind CSS para estilização, com um layout que inclui cabeçalho fixo, rodapé fixo e uma área principal para adicionar e visualizar gastos.

Este projeto é ideal para quem quer aprender a construir aplicações React com boas práticas de layout e estilização, além de ser um exemplo prático de controle financeiro básico.

---

## Funcionalidades

- **Adicionar gastos:** Insira uma descrição e o valor do gasto.
- **Visualizar lista de gastos:** Todos os gastos aparecem em uma tabela estilizada com linhas alternadas para facilitar a leitura.
- **Remover gastos:** Opção para remover itens da lista individualmente.
- **Cálculo automático do total:** Soma dos valores dos gastos exibida na tabela.
- **Layout fixo e responsivo:** Cabeçalho e rodapé fixos para melhor usabilidade, com conteúdo principal que se adapta a diferentes tamanhos de tela.
- **Estilização com Tailwind CSS:** Uso de classes utilitárias para design rápido, consistente e moderno.

---

## Estrutura do Projeto

### `public/index.html`

- Define a estrutura base da página, incluindo:
  - Cabeçalho fixo com o título "My Finance".
  - Área principal (`<main id="root">`) onde o React renderiza o aplicativo.
  - Rodapé fixo com mensagem e contato.
- Aplica estilos globais e específicos para o layout fixo e responsivo.
- Fundo com gradiente verde escuro para um visual elegante e agradável.

### `src/App.js`

- Componente React principal que gerencia o estado dos gastos usando hooks.
- Contém o formulário para adicionar novos gastos, com validação dos dados.
- Renderiza a tabela de controle de gastos, com opções para remover itens.
- Calcula e exibe o total dos gastos em tempo real.
- Utiliza Tailwind CSS para estilização do formulário, tabela, botões e layout geral.

### `src/components/Footer.js`

- Componente React que exibe o rodapé fixo com uma mensagem carinhosa e informações de contato.

---

## Como Configurar e Rodar o Projeto (Passo a Passo)

### 1. Preparar o ambiente

- Instale o [Node.js](https://nodejs.org/) (versão 14 ou superior recomendada).
- Verifique a instalação abrindo o terminal e digitando:

    node -v
    npm -v



- Se não estiver instalado, faça o download e instalação pelo site oficial.

### 2. Clonar o repositório

- No terminal do VS Code (ou outro terminal), execute:

    git clone <URL-do-myfinance>

- Entre na pasta do projeto:

    cd nome-do-projeto


### 3. Instalar as dependências

- Ainda no terminal, dentro da pasta do projeto, execute:

    npm install


- Esse comando instala todas as bibliotecas necessárias listadas no arquivo `package.json`.

### 4. Rodar a aplicação

- Para iniciar o servidor de desenvolvimento e abrir o app no navegador, execute:

    npm start


- O navegador abrirá automaticamente em `http://localhost:3000`. Se não abrir, acesse manualmente esse endereço.

---

## Como Usar a Aplicação

- No campo “Descrição”, escreva o nome do gasto (exemplo: Supermercado).
- No campo “Valor (R$)”, informe o valor gasto (exemplo: 150.50).
- Clique em “Adicionar” para incluir o gasto na lista.
- A lista de gastos aparecerá ao lado, com opção para remover cada item.
- O total dos gastos é atualizado automaticamente.
- O rodapé permanece fixo na tela com uma mensagem e contato.

---

## Dificuldades e Aprendizados

- Gerenciar o estado dos gastos com React Hooks.
- Validar entradas para evitar dados inválidos.
- Implementar layout fixo com cabeçalho e rodapé usando CSS e Tailwind.
- Garantir responsividade e boa usabilidade em diferentes dispositivos.
- Criar componentes reutilizáveis e manter o código organizado e limpo.

---

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.
- **JavaScript (ES6+):** Linguagem principal do projeto.
- **HTML5 & CSS3:** Estrutura e estilos básicos da página.

---


## Contato

Desenvolvido com 💚 para seu bolso.

Para dúvidas ou sugestões, entre em contato: (42) 99838-4191

---

Se precisar de ajuda para configurar ou entender qualquer parte do projeto, estou à disposição para ajudar!