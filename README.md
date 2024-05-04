# Desafio Técnico - Lista de Afazeres em React para Falqon

Este desafio foi proposto pela falqon durante o processo seletivo, consta de uma aplicação lightwieght de Todo List utilizando apenas react como requisitos, apesar de não ser o ideial, ja que é apenas o front que lida com as regras de negocio, é uma aplicação funcinal.

## Visão Geral do Projeto

O objetivo deste desafio é criar um aplicativo web para gerenciar uma lista de afazeres utilizando React, Redux e React Router. A aplicação deve oferecer as seguintes funcionalidades:

1. **Autenticação com Senha**: O aplicativo deve ser protegido por uma senha para garantir acesso somente a usuários autorizados, utilizei a ``userSlice`` para armazenar a senha e realizar a autenticação.

2. **CRUD de Tarefas**: Os usuários devem ser capazes de listar, criar, atualizar e remover tarefas. Cada tarefa é composta por um identificador único, um nome e uma descrição.

## Condições de Desenvolvimento

Para o desenvolvimento deste projeto, foram utilizadas as seguintes tecnologias:

- **Vite**: Como bundler e ferramenta de desenvolvimento rápido.
- **React**: Para a construção da interface do usuário.
- **Redux e Redux Toolkit**: Para o gerenciamento do estado da aplicação e sistemas de autenticção.
- **React Router**: Para a navegação entre diferentes páginas ou componentes da aplicação.
- **shadcn/ui e Tailwind CSS**: Para a criação de componentes e estilização da interface do usuário.

## Estrutura do Projeto

A estrutura do projeto tentei seguir as melhores práticas de organização de código em um projeto React.

```
todo-falqon/
  ├── public/
  ├── src/
  |   ├── assets/
  │   ├── components/
  |   |   ├── shared/
  │   │   ├── TaskList.tsx
  │   │   ├── TaskForm.tsx
  │   │   └── ...
  │   ├── routes/
  │   │   ├── AuthPage.tsx
  │   │   ├── TodoPage.tsx
  │   │   └── ...
  │   ├── store/
  │   │   ├── taskSlice.ts
  │   │   ├── userSlice.ts
  │   │   └── store.js
  │   ├── Types/
  │   │   └── task.ts
  │   ├── App.tsx
  │   ├── main.tsx
  │   └── ...
  ├── package.json
  ├── tailwind.config.js
  └── ...
```

## Como Utilizar

Para testar o projeto, siga estas etapas:

1. Clone este repositório para sua máquina local.
2. Instale as dependências usando npm ou yarn.
3. Rode o comando ``yarn dev`` ou ``npm run dev``

## Credenciais de Acesso
Para acessar o aplicativo, utilize as seguintes credenciais:

```
Usuário: User
Senha: falqon
Certifique-se de utilizar essas credenciais ao acessar o aplicativo para garantir uma experiência de uso adequada.
```

## Considerações Finais
Entendo que a proposta seja para full-stack, no entanto, foi solicitado um desafio de front-end. Não estou certo se era necessário desenvolver um backend para este projeto, mas tentei entregar todas as funcionalidades dentro do tempo estipulado. Poderia ter desenvolvido o backend, mas optei por não comprometer meu tempo durante a avaliação.
