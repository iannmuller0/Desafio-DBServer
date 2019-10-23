Desafio DBServer

## Requisitos de ambiente necessários para compilar e rodar o software  
  - Node instalado
  - Rodar npm install
  - Rodar npm start

### Instruções de como utilizar o sistema.
  - Logue no sistema utilizando qualquer usuário da lista que se encontra em src/mockData/UsersList.js
  alguns usuários já votaram e não poderão votar novamente

### O que vale destacar no código implementado
  - Foi utilizado Context API por não haver necessidade de Redux e por uma maior facilidade de mexer com Context e Hooks juntos
  

### O que poderia ser feito para melhorar o sistema?
  - Fazer o usuário não deslogar ao atualizar a tela, usando cookies para armazenar o usuario.
  - Ao se deslogar de alguma forma não convencional (atualizando, limpando cache), o usuario poderia ser redirecionado para tela de login automaticamente.
  - Permitir o usuário trocar o seu voto.
  - A utilização do StoryBook ou similar para dar uma maior garantia de que os componentes não serão alterados sem a intenção.
  - Criar Flash Messages para o usuário receber um melhor feedback das suas ações

### Algo a mais que você tenha a dizer?
  - Por se usar context para armazenar o usuario logado, ao se atualizar a tela deve-se fazer login novamente ou não será possível votar.

