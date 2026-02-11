# Encontro 4 - DOM Básico

## 📋 Informações do Encontro

- **Módulo:** 3 - JavaScript: Lógica e Interatividade
- **Semana:** 2
- **Duração:** 2 horas
- **Pré-requisitos:** Encontro 3 - Funções

---

## 🎯 Objetivos de Aprendizado

Ao final deste encontro, você será capaz de:

- ✅ Entender o que é o DOM (Document Object Model)
- ✅ Selecionar elementos HTML com JavaScript
- ✅ Modificar conteúdo de elementos
- ✅ Alterar estilos CSS com JavaScript
- ✅ Adicionar e remover classes CSS
- ✅ Criar elementos dinamicamente
- ✅ Manipular atributos de elementos

---

## 📚 Teoria (30-40 min)

### O que é o DOM?

O **DOM (Document Object Model)** é como o JavaScript "vê" a página HTML. É uma representação em forma de árvore de todos os elementos da página.

**Analogia:** Imagine sua página HTML como uma árvore:
- A raiz é o `<html>`
- Os galhos são as tags (`<head>`, `<body>`)
- As folhas são os elementos dentro (`<h1>`, `<p>`, `<div>`)

```html
<html>
  <body>
    <h1>Título</h1>
    <p>Parágrafo</p>
  </body>
</html>
```

### Selecionando Elementos

**1. getElementById - Seleciona por ID**
```javascript
const titulo = document.getElementById('titulo');
console.log(titulo);
```

**2. querySelector - Seleciona o primeiro elemento**
```javascript
const paragrafo = document.querySelector('p');
const botao = document.querySelector('.btn');
const input = document.querySelector('#nome');
```

**3. querySelectorAll - Seleciona todos os elementos**
```javascript
const todosP = document.querySelectorAll('p');
const todosBotoes = document.querySelectorAll('.btn');
```

### Modificando Conteúdo

**textContent - Apenas texto**
```javascript
const titulo = document.getElementById('titulo');
titulo.textContent = 'Novo Título';
```

**innerHTML - HTML completo**
```javascript
const div = document.getElementById('conteudo');
div.innerHTML = '<p>Novo <strong>parágrafo</strong></p>';
```

**Diferença:**
```javascript
// textContent
elemento.textContent = '<strong>Texto</strong>';
// Resultado: <strong>Texto</strong> (mostra as tags)

// innerHTML
elemento.innerHTML = '<strong>Texto</strong>';
// Resultado: Texto (em negrito)
```

### Modificando Estilos

**Estilo direto:**
```javascript
const caixa = document.getElementById('caixa');
caixa.style.backgroundColor = 'blue';
caixa.style.color = 'white';
caixa.style.padding = '20px';
caixa.style.borderRadius = '10px';
```

**Nota:** Use camelCase para propriedades CSS:
- `background-color` → `backgroundColor`
- `font-size` → `fontSize`
- `border-radius` → `borderRadius`

### Trabalhando com Classes

**Adicionar classe:**
```javascript
elemento.classList.add('ativo');
```

**Remover classe:**
```javascript
elemento.classList.remove('ativo');
```

**Alternar classe (toggle):**
```javascript
elemento.classList.toggle('ativo');
```

**Verificar se tem classe:**
```javascript
if (elemento.classList.contains('ativo')) {
    console.log('Elemento está ativo');
}
```

### Modificando Atributos

**Obter atributo:**
```javascript
const link = document.querySelector('a');
const href = link.getAttribute('href');
console.log(href);
```

**Definir atributo:**
```javascript
link.setAttribute('href', 'https://google.com');
link.setAttribute('target', '_blank');
```

**Atributos comuns:**
```javascript
const img = document.querySelector('img');
img.src = 'nova-imagem.jpg';
img.alt = 'Descrição da imagem';

const input = document.querySelector('input');
input.value = 'Novo valor';
input.placeholder = 'Digite aqui';
```

### Criando Elementos

**Criar novo elemento:**
```javascript
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Novo parágrafo';
novoParagrafo.classList.add('destaque');

// Adicionar ao DOM
const container = document.getElementById('container');
container.appendChild(novoParagrafo);
```

---

## 💻 Prática (60-80 min)

### Exercício 1: Selecionando e Modificando

**Objetivo:** Praticar seleção e modificação de elementos.

**Código:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 1 - DOM Básico</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 10px;
        }
        .destaque {
            background-color: yellow;
            padding: 10px;
            border-radius: 5px;
        }
        .azul {
            color: blue;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="titulo">Título Original</h1>
        <p id="paragrafo1">Este é o primeiro parágrafo.</p>
        <p id="paragrafo2">Este é o segundo parágrafo.</p>
        <div id="resultado"></div>
        
        <button onclick="modificarTitulo()">Modificar Título</button>
        <button onclick="destacarParagrafo()">Destacar Parágrafo</button>
        <button onclick="mudarCor()">Mudar Cor</button>
    </div>
    
    <script>
        console.log('=== DOM BÁSICO ===\n');
        
        function modificarTitulo() {
            const titulo = document.getElementById('titulo');
            titulo.textContent = 'Título Modificado!';
            console.log('Título modificado');
        }
        
        function destacarParagrafo() {
            const p1 = document.getElementById('paragrafo1');
            p1.classList.add('destaque');
            console.log('Parágrafo destacado');
        }
        
        function mudarCor() {
            const p2 = document.getElementById('paragrafo2');
            p2.classList.toggle('azul');
            console.log('Cor alternada');
        }
    </script>
</body>
</html>
```

### Exercício 2: Modificando Estilos

**Objetivo:** Alterar estilos CSS dinamicamente.

**Código:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 2 - Estilos Dinâmicos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            text-align: center;
        }
        .caixa {
            width: 200px;
            height: 200px;
            background-color: #3498db;
            margin: 20px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            border-radius: 10px;
            transition: all 0.3s;
        }
        button {
            margin: 5px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Modificando Estilos</h1>
    
    <div class="caixa" id="caixa">Caixa</div>
    
    <button onclick="mudarCor()">Mudar Cor</button>
    <button onclick="aumentar()">Aumentar</button>
    <button onclick="diminuir()">Diminuir</button>
    <button onclick="arredondar()">Arredondar</button>
    <button onclick="resetar()">Resetar</button>
    
    <script>
        const caixa = document.getElementById('caixa');
        
        function mudarCor() {
            const cores = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
            const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
            caixa.style.backgroundColor = corAleatoria;
        }
        
        function aumentar() {
            const larguraAtual = parseInt(caixa.style.width || 200);
            caixa.style.width = (larguraAtual + 20) + 'px';
            caixa.style.height = (larguraAtual + 20) + 'px';
        }
        
        function diminuir() {
            const larguraAtual = parseInt(caixa.style.width || 200);
            if (larguraAtual > 100) {
                caixa.style.width = (larguraAtual - 20) + 'px';
                caixa.style.height = (larguraAtual - 20) + 'px';
            }
        }
        
        function arredondar() {
            const raioAtual = parseInt(caixa.style.borderRadius || 10);
            caixa.style.borderRadius = (raioAtual === 10 ? 50 : 10) + '%';
        }
        
        function resetar() {
            caixa.style.width = '200px';
            caixa.style.height = '200px';
            caixa.style.backgroundColor = '#3498db';
            caixa.style.borderRadius = '10px';
        }
    </script>
</body>
</html>
```

### Exercício 3: Criando Elementos

**Objetivo:** Criar elementos dinamicamente.

**Código:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 3 - Criar Elementos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        .item {
            background-color: #f0f0f0;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            border-left: 4px solid #3498db;
        }
        input {
            padding: 10px;
            width: 70%;
            font-size: 16px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Lista de Tarefas</h1>
        
        <input type="text" id="inputTarefa" placeholder="Digite uma tarefa">
        <button onclick="adicionarTarefa()">Adicionar</button>
        
        <div id="listaTarefas"></div>
    </div>
    
    <script>
        function adicionarTarefa() {
            const input = document.getElementById('inputTarefa');
            const texto = input.value.trim();
            
            if (texto === '') {
                alert('Digite uma tarefa!');
                return;
            }
            
            // Criar novo elemento
            const novoItem = document.createElement('div');
            novoItem.classList.add('item');
            novoItem.textContent = texto;
            
            // Adicionar à lista
            const lista = document.getElementById('listaTarefas');
            lista.appendChild(novoItem);
            
            // Limpar input
            input.value = '';
            input.focus();
            
            console.log('Tarefa adicionada:', texto);
        }
        
        // Permitir Enter para adicionar
        document.getElementById('inputTarefa').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                adicionarTarefa();
            }
        });
    </script>
</body>
</html>
```

---

## 🏠 Para Casa

### Tarefa 1: Perfil Interativo

**Descrição:** Criar uma página de perfil que pode ser editada.

**Requisitos:**
- [ ] Campos: nome, idade, cidade, profissão
- [ ] Botão para editar cada campo
- [ ] Usar `textContent` para modificar
- [ ] Usar `classList` para destacar campo editado
- [ ] Mostrar mensagem de confirmação

### Tarefa 2: Galeria de Cores

**Descrição:** Criar uma galeria onde o usuário pode mudar cores.

**Requisitos:**
- [ ] 5 caixas coloridas
- [ ] Botões para mudar cor de cada caixa
- [ ] Usar `style.backgroundColor`
- [ ] Adicionar efeito de transição
- [ ] Botão para resetar todas as cores

---

## 🤖 Uso da IA neste Encontro

### ❌ NÃO use IA para:
- Escrever todo o código das tarefas
- Copiar soluções sem entender o DOM

### ✅ USE IA para:
- Entender a diferença entre textContent e innerHTML
- Ver exemplos de seletores CSS
- Aprender sobre classList
- Entender camelCase em propriedades CSS

### 💡 Prompts Sugeridos

```
Explique a diferença entre textContent e innerHTML em JavaScript
```

```
Como selecionar elementos no DOM usando JavaScript?
```

```
Exemplos de uso de classList em JavaScript
```

---

## ✅ Checklist de Aprendizado

Antes de avançar, certifique-se de que você:

- [ ] Entende o que é o DOM
- [ ] Sabe selecionar elementos com getElementById e querySelector
- [ ] Consegue modificar conteúdo com textContent e innerHTML
- [ ] Sabe alterar estilos CSS com JavaScript
- [ ] Consegue adicionar/remover classes
- [ ] Sabe criar elementos dinamicamente
- [ ] Entende como modificar atributos

---

## 📚 Recursos Adicionais

### Documentação
- [MDN - DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)
- [MDN - querySelector](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector)
- [MDN - classList](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList)

### Vídeos Recomendados
- [Curso em Vídeo - DOM](https://www.youtube.com/watch?v=WWZX8RWLxIk)
- [Rocketseat - Manipulando DOM](https://www.youtube.com/watch?v=UftSB4DaRU4)

---

## 🔗 Navegação

- [⬅️ Encontro Anterior - Funções](../encontro-3-funcoes/)
- [➡️ Próximo Encontro - Eventos](../../semana-3/encontro-5-eventos/)
- [📚 Voltar ao Módulo 3](../../)
- [🏠 Início do Curso](../../../)

---

**Dúvidas?** Pratique muito a manipulação do DOM e use a IA para esclarecer conceitos! 🚀
