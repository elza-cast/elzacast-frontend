<p align="center">
<a href="https://liftlearning.com.br/">
  <img height="150" src="/assets/icon.png">
</a>

<h2 align="center">
    Elza Cast
</h2>
</p>
<p align="center">
    :studio_microphone: Uma aplicação mobile para facilitar o envio de alertas feitos por vítimas de violência doméstica.
</p>

<p align="center">
    <a href="#computer-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#desktop_computer-sobre-o-Bootcamp">Sobre o Bootcamp</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias-utilizadas">Tecnologias utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#clipboard-pré-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#fire-executando-a-aplicação">Executando a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#open_file_folder-estrutura-de-arquivos">Estrutura de arquivos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#bookmark-layout-da-aplicação">Layout da aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#sparkles-colaboradores">Colaboradores</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
</p>

<h4 align="center"> 
:construction: Projeto em desenvolvimento... :construction:
</h4>

<p align="center">
    <img src="/assets/mockups.png">
</p>

## :computer: Sobre o projeto
O projeto tem a finalidade de dar voz para vítimas de violência doméstica. Nesse sentido, por meio do aplicativo a vítima tem a opção de realizar chamadas de emergência (190) de forma rápida. Além disso, ela também pode alertar via SMS os contatos adicionados em sua lista em momentos de necessidade.

## :desktop_computer: Sobre o Bootcamp
A 3ª edição do Bootcamp da EloGroup é o maior ecossistema entre universitários e feras do mercado. O principal propósito do Bootcamp é destravar o potencial da nova geração de jovens que será o futuro do desenvolvimento digital dentro das empresas do país.

Leia mais sobre o Bootcamp [aqui](https://bootcamp.elogroup.com.br/).

## :rocket: Tecnologias utilizadas

O projeto utiliza as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/): é um superconjunto de JavaScript que adiciona tipagem e alguns outros recursos a linguagem;
- [Expo](https://expo.io/): é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API nativas do dispositivo;
- [React Native](https://reactnative.dev/): é uma biblioteca que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [React Navigation](https://reactnavigation.org/): é uma biblioteca que surgiu da necessidade da comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em JavaScript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios): é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Babel](https://babeljs.io/): é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
- [ESLint](https://eslint.org/): é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb): fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import): é um plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y): é um verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): é um plugin que fornece regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks): é um plugin que fornece regras de hooks do ESLint específicas do React.
  
## :clipboard: Pré-requisitos

- [NodeJS LTS (ou superior)](https://nodejs.org/en/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

## :fire: Executando a aplicação
### :hammer_and_wrench: Configuração

#### Instalando as dependências
```
$ cd elzacast-frontend
$ npm install
```
### :zap: Execução

#### Inicializando o projeto
```
$ expo start
```

### :iphone: Acessando a aplicação no celular de forma local
Para visualizar a aplicação no seu dispositivo móvel é necessário realizar a instalação do aplicativo Expo.
- [Android Play Store ](https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop (5) e superior.
- [iOS App Store](https://itunes.com/apps/exponent) - iOS 10 e superior.

#### Acesso de forma local

Após a instalação do aplicativo, basta realizar a leitura do QRCode gerado a partir do Metro Bundler e renderizado no seu navegador padrão.

#### Acesso de forma online

Após a instalação do aplicativo, escaneie o QRCode abaixo:

<p align="center">
    <img src="/assets/qrcode.png">
</p>

## :open_file_folder: Estrutura de arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
elzacast-frontend
├── assets/
├── src/
│   ├── assets/
│   ├── components/
│   ├── screens/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   └── custom.d.ts
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .svgrrc
├── app.json
├── App.tsx
├── babel.config.js
├── metro.config.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── typings.d.ts
```
- **assets** - Diretório contendo arquivos de mídia da aplicação, que são utilizados pelas configurações do Expo;

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **assets** - Diretório contendo todos os arquivos de mídia da aplicação, como ícones .svg e imagens .png;

  - **components** - Diretório onde ficam os componentes da aplicação, como forma de padronização e boas práticas. Todo componente fica dentro de um diretório com seu nome;
  
  - **screens** - Diretório que contém as telas da aplicação, como forma de padronização e boas práticas. Toda página fica dentro de um diretório com seu nome;
  
  - **routes** - Diretório onde serão criados os arquivos relacionados ao roteamento da aplicação;
  
    - **index.tsx** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigators disponibilizados na biblioteca React Navigation;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.ts** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP;
  
  - **styles** - Diretório onde serão criados os arquivos relacionados ao estilos globais da aplicação.
  
  - **utils** - Diretório onde serão criados os arquivos utilitários da aplicação.
  
  - **custom.d.ts** - Arquivo de configuração SVG para ESLint.

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **App.tsx** - Arquivo raiz da aplicação, também chamado de Entry Point, é o primeiro arquivo chamado no momento do build e execução da aplicação;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **metro.config.js** - Arquivo de configuração do Metro Bundler;

- **package.json** - Arquivo de configurações das dependências utilizadas no projeto;

- **tsconfig.json** - Arquivo de configuração do TypeScript no Editor, ele é o responsável por ativar o Auto Complete de códigos TypeScript na aplicação;

## :bookmark: Layout da aplicação

Essa aplicação possui um layout que você pode seguir para conseguir visualizar o seu funcionamento.

O layout pode ser acessado através da página do Figma, no **[seguinte link](https://www.figma.com/file/uDp2dBfCb5AIwB9qsjFRxF/Bootcamp-EloGroup?node-id=0%3A1)**.

Você precisará uma conta (gratuita) no Figma para inspecionar o layout e obter detalhes de cores, tamanhos, etc.

## :sparkles: Colaboradores

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/carlos-henrique-costa-silva/"><img src="https://avatars3.githubusercontent.com/u/25915025?v=4" width="100px;" alt=""/><br /><sub><b>Carlos Henrique</b></sub></a><br /><a href="#code-carlos" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/luisgaboardi/"><img src="https://avatars.githubusercontent.com/u/45673358?v=4" width="100px;" alt=""/><br /><sub><b>Luís Guilherme</b></sub></a><br /><a href="#code-luis" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/rayane-vaz-255616200/"><img src="https://avatars.githubusercontent.com/u/91799941?v=4" width="100px;" alt=""/><br /><sub><b>Rayane Vaz</b></sub></a><br /><a href="#coordinator-rayane" title="Coordinator">📢</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/josecarlosdeoliveira37/"><img src="https://avatars.githubusercontent.com/u/73854242?v=4" width="100px;" alt=""/><br /><sub><b>José Carlos</b></sub></a><br /><a href="#code-jose" title="Code">💻</a></td>
  </tr>
</table>

---

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :purple_heart: por <strong> Equipe Elza Cast </strong> </p>
