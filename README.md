# Desafio de Entrevista: Aplicativo React Native CLI para Visualizar Pilotos de F1

Este é um projeto React Native CLI criado para um desafio de entrevista. O objetivo do desafio é criar um aplicativo que redirecione o usuário para uma segunda tela ao clicar em um botão na tela inicial. Nessa segunda tela, o aplicativo realiza uma chamada GET para a URL `http://ergast.com/api/f1/drivers.json`, disponibilizando uma lista dos nomes dos pilotos nascidos a partir de 1º de janeiro de 1960, juntamente com suas nacionalidades e os ícones correspondentes dos países.

## Configuração

O projeto foi desenvolvido usando React Native CLI para a plataforma **iOS**.

### Requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) configurado para iOS.

### Instalação

1. Clone este repositório para o seu computador:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências:

   ```bash
   yarn install
   ```

4. Execute o projeto:

   ```bash
   npx react-native run-ios
   ```

## Estrutura do Projeto

O projeto possui a seguinte estrutura:

- **/src**: Contém todos os arquivos de código-fonte, incluindo componentes, estilos e utilitários.
  - **/components**: Componentes do aplicativo.
  - **/screens**: Telas do aplicativo.
  - **/styles**: Arquivos de estilo para o aplicativo.
  - **/utils**: Funções utilitárias, incluindo a chamada de API.
- **/assets**: Contém ícones de nacionalidades, fontes e outras imagens necessárias para o aplicativo.

## Funcionalidades

- Tela inicial com um botão na parte inferior que redireciona o usuário para a segunda tela.
- Na segunda tela, uma chamada GET é feita para `http://ergast.com/api/f1/drivers.json` para obter dados dos pilotos.
- Os dados obtidos são filtrados para mostrar apenas os pilotos nascidos a partir de 1º de janeiro de 1960.
- Uma lista de pilotos é exibida usando uma `FlatList`, mostrando o nome (`givenName`) e o ícone de nacionalidade correspondente.
- As fontes e tamanhos dos componentes foram configurados de forma dinâmica de acordo com o Design System do Figma.

## Design System

- O projeto segue as diretrizes de design apresentadas no Figma, incluindo tamanhos de componentes, fontes, cores e ícones de nacionalidades.
- Para acessar o Design System, clique em "Design System" no Figma.

## Contribuição

Se você quiser contribuir para este projeto, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

---

Obrigado por revisar este projeto. Espero que atenda aos requisitos do desafio. Se precisar de mais informações ou esclarecimentos, por favor, sinta-se à vontade para entrar em contato.
