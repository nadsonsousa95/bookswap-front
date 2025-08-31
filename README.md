# 📚 BookSwap – Plataforma de Troca de Livros

**BookSwap** é uma aplicação web desenvolvida como projeto final da disciplina **Sistemas Web**, no curso de Computação da **Universidade Federal da Bahia (UFBA)**.  
Seu objetivo é fomentar o hábito da leitura, conectando leitores e permitindo a troca de livros de forma simples, gratuita e colaborativa.

## 🚀 Funcionalidades

- Cadastro e login de usuários
- Adição de livros com título, autor, imagem, descrição e formas de troca
- Lista de livros disponíveis com filtro de busca
- Visualização dos detalhes do livro
- Contato com o usuário via WhatsApp
- Edição e exclusão de livros
- UI responsiva e pensada para o público leitor

## 🧠 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [JSON Server](https://github.com/typicode/json-server) – API simulada

## 🎨 Design e UX

A interface utiliza tons verdes frios, inspirados na tranquilidade e concentração que a leitura transmite.  
A tipografia prioriza a legibilidade com fontes limpas nos textos e botões.  
Todo o layout é **responsivo**, garantindo uma boa experiência tanto em desktops quanto em dispositivos móveis.

<img width="1912" height="925" alt="Captura de tela 2025-08-31 170254" src="https://github.com/user-attachments/assets/d211ad2a-527a-4eb6-b219-441d381bc840" />



## 📦 Instalação e Execução

### Clone o repositório

```bash
git clone https://github.com/nadsonsousa95/bookswap-front.git
cd bookswap-front
npm install
npm install json-server
npm run server
npm run dev

Acesse no navegador: http://localhost:5173

Estrutura de pastas:

src/
├── components/       # Componentes reutilizáveis (Header, Footer, BookList, etc.)
├── pages/            # Páginas principais (Home, Login, BookDetail, etc.)
├── services/         # Comunicação com a API JSON Server
├── types/            # Tipagens TypeScript
├── contexts/         # Contexto de autenticação
├── styles/           # Estilos modulares por componente

Feito com 💚 por Nadson Sousa

