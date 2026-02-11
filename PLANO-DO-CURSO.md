# Curso de Introdução ao Desenvolvimento Web com IA

Centro Socioeducativo Tebah  
Foco: adolescentes do sertão baiano

---

## Visão Geral

**Duração:** 6 meses  
**Encontros:** 1–2 vezes por semana, 2h cada encontro  
**Formato:** Presencial, prático, baseado em projetos reais  
**Projeto Âncora:** Cardápio digital para comércios locais (HTML + CSS + JS + introdução a backend)  
**IA:** Usada como parceira de estudo – nunca como atalho. Primeiro fazemos manualmente, depois usamos IA para revisar, explicar e melhorar.

---

## Objetivos do Curso

Ao final do curso, o aluno deverá:

- Dominar os **fundamentos de desenvolvimento web**:
  - HTML5 semântico e acessível
  - CSS3 moderno (Flexbox, Grid, responsividade, padrões de organização)
  - Introdução a JavaScript (para interatividade)
  - Introdução a Node.js (backend básico / API simples)
- Usar **Git e GitHub** para versionar código e publicar projetos.
- Compreender **como a IA pode ajudar no desenvolvimento**, avaliando criticamente suas respostas.
- Ter **projetos reais no portfólio**, incluindo cardápios digitais para comércios locais.
- Desenvolver **noções de empreendedorismo e visão de futuro**:
  - Como transformar conhecimento técnico em serviço/produto
  - Como se conectar com o mercado (network, atendimento a comércios locais)

---

## Estrutura Macro (6 Módulos)

1. **Módulo 1 – Fundamentos da Web + HTML Profissional**
2. **Módulo 2 – CSS de Verdade + Padrões + Bibliotecas**
3. **Módulo 3 – JavaScript: Lógica e Interatividade no Navegador**
4. **Módulo 4 – JavaScript Avançado + Consumo de APIs**
5. **Módulo 5 – Introdução a Backend com Node.js + APIs para o Cardápio**
6. **Módulo 6 – Projeto Final, Empreendedorismo, Portfólio e Futuro com IA**

> Abaixo está detalhado o **plano de aulas dos 2 primeiros módulos**, já em formato de encontros para uso no GitHub.

---

## MÓDULO 1 – Fundamentos Web + HTML Profissional

### Objetivos do Módulo 1

- Entender como a web funciona (cliente/servidor, arquivos, navegador).
- Escrever HTML semântico e organizado.
- Introduzir acessibilidade desde o início.
- Iniciar o projeto do **cardápio digital** (versão somente HTML).
- Começar a usar **Git e GitHub**.
- Introduzir a IA como apoio para explicações e revisão, SEM substituir o trabalho manual.

---

### Semana 1 – A Web e Primeiros Passos em HTML

#### Encontro 1 (2h) – Introdução à Web e ao HTML

**Teoria (aprox. 30 min)**

- O que é a Web?
- Cliente x Servidor (visão bem simples).
- HTTP/HTTPS (conceito).
- Navegadores e o que eles fazem.
- O que é HTML e qual o papel de cada arquivo (`index.html`, CSS, JS) na página.

**Prática (aprox. 1h30)**

- Instalação/uso do editor de código (VS Code ou similar).
- Criação da pasta do primeiro projeto.
- Criação do `index.html`.
- Estrutura mínima de um documento HTML:
  - `<!DOCTYPE html>`
  - `<html>`, `<head>`, `<body>`
- Primeiras tags:
  - `<h1>`, `<p>`, `<strong>`, `<em>`, `<br>`

**Tarefa de Casa**

- Criar uma página simples com:
  - Nome
  - Idade
  - Uma frase sobre si mesmo
  - Pelo menos:
    - 1 `<h1>`
    - 2 `<p>`
    - 1 `<strong>`
    - 1 `<em>`

**Uso de IA neste encontro**

- Mostrar rapidamente como usar uma IA (ex.: ChatGPT) para:
  - Explicar o que é HTTP em linguagem simples.
  - Gerar exemplos de uso de `<h1>` e `<p>`.
- Reforço: **primeiro o aluno tenta**, depois usa IA para esclarecer dúvidas.

---

#### Encontro 2 (2h) – HTML Semântico

> Se houver apenas 1 encontro por semana, este conteúdo pode ir para a semana seguinte.

**Teoria (aprox. 30 min)**

- O que é semântica em HTML?
- Tags semânticas principais:
  - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Por que semântica é importante?
  - Acessibilidade
  - SEO
  - Organização do código

**Prática (aprox. 1h30)**

- Refatorar a página simples anterior usando `main`, `header`, `footer`.
- Criar uma página de “Blog Simples”:
  - Um `<header>` com título do blog.
  - Um `<main>` com 2–3 `<article>` (cada um com `<h2>` e `<p>`).
  - Um `<footer>` com informações básicas.

**Tarefa de Casa**

- Criar uma página “Sobre Mim” com estrutura semântica completa:
  - `header`, `main` com seções, `footer`.

**Uso de IA neste encontro**

- Pedir para a IA revisar a estrutura HTML e:
  - Apontar se alguma tag semântica foi usada de forma errada.
  - Sugerir melhorias sem reescrever tudo.

---

### Semana 2 – Acessibilidade e Formulários

#### Encontro 3 (2h) – Acessibilidade Básica

**Teoria (aprox. 40 min)**

- O que é acessibilidade web?
- Pessoas com deficiência visual, motora, cognitiva.
- Boas práticas básicas:
  - Texto alternativo em imagens (`alt`).
  - Links com textos significativos (evitar “clique aqui”).
  - Navegação por teclado (Tab/Shift+Tab).
- Noção de ARIA (explicando de forma simples).
- Introdução a Lighthouse (ferramenta de auditoria do navegador).

**Prática (aprox. 1h20)**

- Adicionar imagens em uma página: `<img src="" alt="">`.
- Criar links com textos claros.
- Testar navegação por teclado no navegador.
- Rodar uma análise rápida de acessibilidade com Lighthouse.

**Tarefa de Casa**

- Escolher um site conhecido e listar **3 problemas de acessibilidade** percebidos.
- Criar uma página com pelo menos 5 imagens com `alt` bem descritivo.

**Uso de IA neste encontro**

- Pedir para a IA:
  - Gerar textos alternativos (`alt`) para imagens de comida, pratos típicos do sertão, etc.
  - Explicar em linguagem simples o que são atributos ARIA, sem aprofundar em código ainda.

---

#### Encontro 4 (2h) – Formulários HTML

**Teoria (aprox. 30 min)**

- Conceitos:
  - `<form>`, `<input>`, `<label>`, `<textarea>`, `<select>`, `<option>`.
- Atributos:
  - `type`, `name`, `id`, `required`, `placeholder`.
- Validação básica com HTML5 (`required`, `type="email"`, etc.).

**Prática (aprox. 1h30)**

- Criar um **formulário de contato** simples:
  - Nome, e-mail, mensagem.
- Criar um **formulário de cadastro de prato** (para o futuro cardápio):
  - Nome do prato
  - Descrição
  - Preço
  - Categoria (select: “Bebidas”, “Pratos”, “Sobremesas”, etc.)

**Tarefa de Casa**

- Melhorar o formulário de cadastro de prato, deixando todos os campos necessários.

**Uso de IA neste encontro**

- Pedir para a IA:
  - Gerar um exemplo de formulário.
  - Comparar com o feito manualmente: o que está diferente? O que faz mais sentido?

---

### Semana 3 – Estrutura do Cardápio Digital

#### Encontro 5 (2h) – Planejamento do Cardápio

**Teoria (aprox. 20 min)**

- O que é um cardápio digital?
- O que é um **wireframe** (desenho do layout).
- Organização das informações:
  - Categorias, pratos, preços, descrições.

**Prática (aprox. 1h40)**

- Desenhar o **wireframe** do cardápio (no papel ou Figma gratuito).
- Criar o arquivo `cardapio.html`.
- Criar a estrutura inicial:
  - `header` (nome do estabelecimento, logo ou nome fictício).
  - `nav` (atalhos para categorias).
  - `main` com seções para cada categoria.
  - `footer` com contatos e informações adicionais.

**Tarefa de Casa**

- Completar a estrutura HTML do cardápio com dados fictícios:
  - Pelo menos 3 categorias e 10 pratos.

**Uso de IA neste encontro**

- Pedir para a IA sugerir:
  - Nomes de pratos regionais.
  - Descrições curtas para os pratos.
- Reforço: o **código HTML é feito pelos alunos**, IA só ajuda no conteúdo textual.

---

#### Encontro 6 (2h) – Validação e Organização do HTML do Cardápio

**Teoria (aprox. 20 min)**

- Validação HTML (W3C Validator).
- Organização do código (indentação, comentários).
- Importância de um HTML limpo e legível.

**Prática (aprox. 1h40)**

- Rodar o validador HTML no `cardapio.html`.
- Corrigir erros apontados.
- Adicionar comentários úteis no código (`<!-- -->`).
- Garantir que toda a estrutura está semântica e organizada.

**Tarefa de Casa**

- Deixar o HTML do cardápio finalizado (sem CSS ainda).
- Preparar-se para começar o CSS.

**Uso de IA neste encontro**

- Pedir para a IA revisar o HTML e:
  - Sugerir melhorias na semântica.
  - Verificar se a estrutura está clara.

---

### Semana 4 – Introdução a Git e GitHub + Revisão do Mês 1

#### Encontro 7 (2h) – Git e GitHub Básico

**Teoria (aprox. 40 min)**

- O que é Git? O que é controle de versão?
- Diferença entre Git (local) e GitHub (nuvem).
- Conceitos:
  - Repositório
  - Commit
  - Push
  - Clone

**Prática (aprox. 1h20)**

- Instalação e configuração do Git.
- Inicializar um repositório dentro do projeto do cardápio.
- Fazer commits com mensagens claras.
- Criar repositório no GitHub.
- Fazer push do projeto para o GitHub.

**Tarefa de Casa**

- Fazer pelo menos mais 2–3 commits com melhorias.
- Deixar o repositório organizado, com README básico.

**Uso de IA neste encontro**

- Pedir para a IA:
  - Explicar o que cada comando Git faz.
  - Ajudar a escrever mensagens de commit mais claras.

---

#### Encontro 8 (2h) – Revisão Geral do Mês 1

**Teoria (aprox. 20 min)**

- Recapitulação:
  - Web, HTML, acessibilidade, formulários, semântica, Git/GitHub.

**Prática (aprox. 1h40)**

- Cada aluno (ou dupla) apresenta rapidamente seu `cardapio.html`.
- Feedback entre colegas e do instrutor.
- Lista conjunta dos pontos fortes e pontos a melhorar.

**Tarefa de Casa**

- Melhorar o cardápio com base no feedback.
- Deixar tudo pronto para começar CSS no Mês 2.

---

## MÓDULO 2 – CSS de Verdade + Padrões + Bibliotecas

### Objetivos do Módulo 2

- Aprender CSS de forma estruturada:
  - Box Model
  - Cores, fontes, espaçamento
  - Flexbox
  - Grid
  - Mobile-first e media queries
- Aplicar tudo ao **cardápio digital**, tornando-o bonito e responsivo.
- Introduzir padrões de CSS (ex.: BEM).
- Ter o primeiro projeto **visualmente pronto** para ser mostrado à comunidade.

---

### Semana 1 – Fundamentos de CSS e Box Model

#### Encontro 1 (2h) – Primeiros Passos no CSS

**Teoria (aprox. 40 min)**

- O que é CSS?
- Como o CSS é aplicado:
  - Inline
  - Tag `<style>`
  - Arquivo externo (`style.css`) – padrão recomendado.
- Seletores básicos:
  - por tag, por classe, por id.
- Box Model:
  - `margin`, `border`, `padding`, `width`, `height`.

**Prática (aprox. 1h20)**

- Criar `style.css` e linkar ao `cardapio.html`.
- Ajustar fontes, cores básicas, tamanhos de texto.
- Trabalhar margens e paddings para organizar o layout.
- Usar DevTools (F12) para inspecionar elementos.

**Tarefa de Casa**

- Ajustar o visual geral do cardápio com:
  - Cores consistentes.
  - Espaçamento confortável.

**Uso de IA neste encontro**

- Pedir para a IA:
  - Sugerir uma paleta de cores inspirada no sertão baiano.
  - Explicar Box Model em linguagem simples.

---

#### Encontro 2 (2h) – Flexbox

**Teoria (aprox. 30 min)**

- O que é Flexbox e por que ele facilita a vida.
- Propriedades principais:
  - `display: flex`
  - `flex-direction`
  - `justify-content`
  - `align-items`
- Cenários onde Flexbox é ideal.

**Prática (aprox. 1h30)**

- Criar um menu horizontal com Flexbox (ex.: categorias do cardápio).
- Alinhar itens centralizados.
- Experimentar diferentes alinhamentos e direções.

**Tarefa de Casa**

- Refatorar partes do cardápio (cabeçalho, lista de pratos) usando Flexbox.

**Uso de IA neste encontro**

- Pedir para a IA exemplos de centralização com Flexbox.
- Comparar formas diferentes de centralizar um elemento (`margin: auto`, Flexbox, etc.).

---

### Semana 2 – Grid e Responsividade

#### Encontro 3 (2h) – CSS Grid

**Teoria (aprox. 30 min)**

- Diferença entre Flexbox e Grid.
- Propriedades principais:
  - `display: grid`
  - `grid-template-columns`
  - `gap`
- Quando usar Grid (layouts em grade, cards, etc.).

**Prática (aprox. 1h30)**

- Organizar os pratos em um grid de cards.
- Criar um layout com 2–3 colunas em telas grandes.
- Combinar Grid (área principal) com Flexbox (itens internos).

**Tarefa de Casa**

- Refatorar a seção de pratos para usar Grid.
- Testar como o layout se adapta em diferentes larguras.

**Uso de IA neste encontro**

- Pedir para a IA sugestões de layouts em Grid.
- Perguntar: “Quando é melhor usar Grid em vez de Flexbox neste projeto?”

---

#### Encontro 4 (2h) – Mobile-First e Media Queries

**Teoria (aprox. 30 min)**

- Conceito de **mobile-first**.
- Media queries: `@media (min-width: ...)`.
- Breakpoints comuns.

**Prática (aprox. 1h30)**

- Começar o CSS pensando na tela pequena primeiro.
- Adicionar media queries para tablet e desktop.
- Testar responsividade no DevTools (simulação de celulares).

**Tarefa de Casa**

- Garantir que o cardápio:
  - Funciona bem em tela pequena (1 coluna).
  - Fica mais espaçado em telas maiores (2–3 colunas).

**Uso de IA neste encontro**

- Pedir para a IA:
  - Sugerir breakpoints.
  - Gerar exemplos de media queries.
- Discutir se faz sentido usar todos os breakpoints sugeridos.

---

### Semana 3 – Padrões de CSS (BEM) e Bibliotecas

#### Encontro 5 (2h) – Padrão BEM

**Teoria (aprox. 40 min)**

- O que é BEM (Block, Element, Modifier).
- Padrão de nomes:
  - `.block`
  - `.block__element`
  - `.block--modifier`
- Por que usar BEM:
  - Organização.
  - Manutenção.
  - Trabalho em equipe.

**Prática (aprox. 1h20)**

- Analisar o CSS existente do cardápio.
- Renomear classes para o padrão BEM.
- Ajustar o HTML para refletir os novos nomes.

**Tarefa de Casa**

- Concluir a refatoração do CSS com BEM.
- Criar um pequeno “mapa” de componentes (quais blocks existem, quais elements e modifiers).

**Uso de IA neste encontro**

- Pedir para a IA avaliar se os nomes das classes seguem bem o padrão BEM.
- Pedir sugestões de nomes melhores quando necessário.

---

#### Encontro 6 (2h) – Bibliotecas CSS (Normalize, Bootstrap/Tailwind)

**Teoria (aprox. 40 min)**

- Diferença entre:
  - Normalize.css
  - Reset CSS
  - Bibliotecas como Bootstrap e Tailwind.
- Vantagens e desvantagens:
  - Rapidez x controle total do estilo.

**Prática (aprox. 1h20)**

- Adicionar Normalize.css ao projeto.
- Testar um componente simples de Bootstrap (botão ou card) ou algumas classes de Tailwind (se fizer sentido).
- Discutir quando faz sentido usar biblioteca e quando não.

**Tarefa de Casa**

- Ajustar o cardápio com Normalize.css aplicado.
- Decidir se algum componente do cardápio usará biblioteca ou CSS puro.

**Uso de IA neste encontro**

- Pedir para a IA:
  - Gerar exemplo de um botão usando Bootstrap e outro usando Tailwind.
- Comparar com a solução manual dos alunos.

---

### Semana 4 – Animações, Transições e Fechamento do Mês 2

#### Encontro 7 (2h) – Transições e Animações

**Teoria (aprox. 30 min)**

- Transições: `transition-property`, `transition-duration`, etc.
- Animações com `@keyframes`.
- Quando animação ajuda e quando atrapalha (acessibilidade, distração).

**Prática (aprox. 1h30)**

- Adicionar efeitos de hover nos itens do cardápio.
- Criar animação simples para entrada da página ou destaque de promoção.
- Testar se a animação não deixa a navegação confusa.

**Tarefa de Casa**

- Aplicar transições/efeitos de forma sutil ao cardápio.
- Checar em diferentes dispositivos.

**Uso de IA neste encontro**

- Pedir para a IA:
  - Gerar um exemplo de animação básica.
- Decidir se essa animação faz sentido no contexto do cardápio.

---

#### Encontro 8 (2h) – Apresentação dos Cardápios (HTML + CSS)

**Teoria (aprox. 20 min)**

- Recapitulação:
  - Fundamentos CSS, Flexbox, Grid, responsividade, BEM, bibliotecas.

**Prática (aprox. 1h40)**

- Cada aluno (ou grupo) apresenta seu cardápio completo.
- Feedback técnico (HTML/CSS) e visual (design/experiência do usuário).
- Discutir:
  - Quais desafios tiveram.
  - O que a IA ajudou a resolver.
  - O que foi resolvido “na mão”.

**Tarefa de Casa**

- Ajustar o projeto com base no feedback.
- Deixar o cardápio pronto para começar a parte de **JavaScript** no Mês 3.

---

## Próximos Passos (para futuras versões deste repositório)

- Detalhar o plano de aulas do:
  - **Mês 3:** JavaScript – lógica, DOM, interatividade do cardápio.
  - **Mês 4:** JS avançado + consumo de APIs.
  - **Mês 5:** Introdução ao backend com Node/Express.
  - **Mês 6:** Projeto final, empreendedorismo e visão de futuro (portfólio, atendimento a comércios, uso avançado de IA como aliada de produtividade).

---

> Este arquivo `.md` pode servir como **plano de curso**, **documento de referência para instrutores** e **visão geral para parceiros e apoiadores** do projeto.