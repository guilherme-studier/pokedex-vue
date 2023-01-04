<p align="center">
  <img alt="Pokedex logo" src=".github/logo.svg" width="400px" />
</p>

<p align="center" fontSize="60px">
  Pokédex com Vue
</p>

<p align="center">
  <img alt="Layout da aplicação" width="100%" src="./.github/print.svg" />
</p>

## 💻 Projeto

Desenvolver uma plataforma web para listagem e visualização de pokémons, para a construção deste projeto foi usado Vue3 utilizando a api: [PokéApi](https://pokeapi.co/).

### Funcionalidades

- [x] **Listar pokémons**: Listar os pokémons em tela.

- [x] **Ampliar a listagem dos pokémons**: Por default a listagem sempre trará os seis primeiros pokemóns em tela, para ampliar a listagem há um button no canto inferior que ao acionado ampliará a listagem.

- [x] **Efeito no card de cada pokémon**: Criar uma animação ao usuário apresentar foco no cartão do pokémon.

- [x] **Selecionar pokémon**: Página com detalhes sobre o pokémon selecionado.


### Conceitos abordados

- Consumo de api com o uso da lib [axios](https://github.com/axios/axios).

- Uso de flexbox para alinhar e ajustar elementos na página.

- Controle de paginação na listagem dos pokémons.

### Features futuras

- Adicionar campo de search para buscar pokémons pelo nome

- Adicionar seção para favoritar seus pokémons

- Criar seção na página de detalhes com a altura, peso e fraquezas do pokémon

- Adicionar Typescript

- Adicionar SCSS

## :rocket: Tecnologias

-  [Vue](https://vuejs.org/guide/introduction.html)
-  [Vue Router](https://router.vuejs.org/)
-  [Axios](https://github.com/axios/axios)

## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone git@github.com:guilherme-studier/pokedex.git && cd pokedex
```

```bash
# Instalando as dependências
$ yarn

# Executanto aplicação
$ yarn start

```

## :muscle: Contribuir ao projeto

Faça o `fork` e clone o projeto a partir do seu usuário.

```bash
# Clonando projeto
$ git clone https://github.com/SEU-NOME-DE-USUARIO/pokedex.git

# Criando um branch
$ git branch minha-alteracao

# Acessando o novo branch
$ git checkout -b minha-alteracao

# Adicionando os arquivos alterados
$ git add .

# Criando commit e a mensagem
$ git commit -m "Corrigindo...."

# Enviando alterações para o brach
$ git push origin minha-alteracao
```
Você deve navegar até o seu repositório onde fez o fork e clicar no botão *New pull request* no lado esquerdo da página.

