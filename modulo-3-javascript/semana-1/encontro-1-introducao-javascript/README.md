# Encontro 1 - Introdução ao JavaScript

## 📋 Informações do Encontro

- **Módulo:** 3 - JavaScript: Lógica e Interatividade
- **Semana:** 1
- **Duração:** 2 horas
- **Pré-requisitos:** HTML e CSS básicos (Módulos 1 e 2)

---

## 🎯 Objetivos de Aprendizado

Ao final deste encontro, você será capaz de:

- ✅ Entender o que é JavaScript e para que serve
- ✅ Conhecer onde e como o JavaScript é executado
- ✅ Escrever seu primeiro código JavaScript
- ✅ Usar o console do navegador para testar código
- ✅ Conectar JavaScript a uma página HTML
- ✅ Entender a diferença entre HTML, CSS e JavaScript

---

## 📚 Teoria (30-40 min)

### O que é JavaScript?

JavaScript é a linguagem de programação da web. Se pensarmos em uma casa:

- **HTML** é a estrutura (paredes, portas, janelas)
- **CSS** é a decoração (cores, móveis, estilo)
- **JavaScript** é a funcionalidade (luz que acende, porta que abre, TV que liga)

JavaScript torna as páginas web **interativas** e **dinâmicas**.

### Para que serve JavaScript?

Com JavaScript você pode:

- Responder a cliques e ações do usuário
- Validar formulários antes de enviar
- Criar animações e efeitos
- Buscar e exibir dados sem recarregar a página
- Criar jogos e aplicações web
- E muito mais!

**Exemplo conceitual:**
```javascript
// JavaScript pode mudar o conteúdo da página
document.getElementById('titulo').textContent = 'Novo Título!';

// JavaScript pode reagir a cliques
botao.addEventListener('click', function() {
    alert('Você clicou no botão!');
});
```

### Onde o JavaScript é executado?

JavaScript roda no **navegador** (Chrome, Firefox, Edge, etc.). Cada navegador tem um **motor JavaScript** que lê e executa o código.

Você também pode rodar JavaScript no servidor com **Node.js**, mas neste curso vamos focar no navegador.

### Como adicionar JavaScript ao HTML?

Existem 3 formas:

**1. Inline (dentro de tags HTML) - NÃO RECOMENDADO**
```html
<button onclick="alert('Olá!')">Clique</button>
```

**2. Interno (dentro de `<script>` no HTML)**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Minha Página</title>
</head>
<body>
    <h1>Olá Mundo</h1>
    
    <script>
        console.log('JavaScript funcionando!');
    </script>
</body>
</html>
```

**3. Externo (arquivo .js separado) - RECOMENDADO**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Minha Página</title>
</head>
<body>
    <h1>Olá Mundo</h1>
    
    <script src="script.js"></script>
</body>
</html>
```

**Importante:** Coloque o `<script>` no final do `<body>` para garantir que o HTML seja carregado primeiro.

### O Console do Navegador

O console é sua ferramenta mais importante para aprender JavaScript!

**Como abrir:**
- **Windows/Linux:** F12 ou Ctrl + Shift + I
- **Mac:** Cmd + Option + I

No console você pode:
- Testar código JavaScript
- Ver mensagens de erro
- Ver valores de variáveis
- Debugar seu código

---

## 💻 Prática (60-80 min)

### Exercício 1: Primeiro Código JavaScript

**Objetivo:** Escrever e executar seu primeiro código JavaScript.

**Passos:**
1. Abra o navegador e pressione F12 para abrir o DevTools
2. Vá na aba "Console"
3. Digite o seguinte código e pressione Enter:

```javascript
console.log('Olá, JavaScript!');
```

4. Agora teste outros comandos:

```javascript
// Operações matemáticas
console.log(10 + 5);
console.log(20 * 3);

// Textos
console.log('Meu nome é [seu nome]');

// Alertas
alert('Bem-vindo ao JavaScript!');
```

**Resultado esperado:**
Você verá as mensagens aparecendo no console e um alerta na tela.

### Exercício 2: JavaScript em uma Página HTML

**Objetivo:** Conectar JavaScript a uma página HTML.

**Passos:**
1. Crie um arquivo `index.html`
2. Crie um arquivo `script.js` na mesma pasta
3. No `index.html`, adicione:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro JavaScript</title>
</head>
<body>
    <h1>Bem-vindo ao JavaScript!</h1>
    <p>Abra o console (F12) para ver a mágica acontecer.</p>
    
    <button id="meuBotao">Clique em mim!</button>
    
    <script src="script.js"></script>
</body>
</html>
```

4. No `script.js`, adicione:

```javascript
// Mensagem no console
console.log('JavaScript carregado com sucesso!');

// Pegar o botão
const botao = document.getElementById('meuBotao');

// Adicionar ação ao clicar
botao.addEventListener('click', function() {
    alert('Você clicou no botão!');
    console.log('Botão foi clicado!');
});
```

5. Abra o `index.html` no navegador
6. Abra o console (F12)
7. Clique no botão

**Resultado esperado:**
- Mensagem no console ao carregar a página
- Alerta ao clicar no botão
- Mensagem no console ao clicar no botão

### Exercício 3: Mudando Conteúdo da Página

**Objetivo:** Usar JavaScript para modificar o HTML.

**Passos:**
1. Crie um novo arquivo `mudanca.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Mudando Conteúdo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1 id="titulo">Título Original</h1>
    <p id="paragrafo">Este é o texto original.</p>
    
    <button id="btnTitulo">Mudar Título</button>
    <button id="btnTexto">Mudar Texto</button>
    <button id="btnCor">Mudar Cor</button>
    
    <script src="mudanca.js"></script>
</body>
</html>
```

2. Crie `mudanca.js`:

```javascript
// Pegar elementos
const titulo = document.getElementById('titulo');
const paragrafo = document.getElementById('paragrafo');
const btnTitulo = document.getElementById('btnTitulo');
const btnTexto = document.getElementById('btnTexto');
const btnCor = document.getElementById('btnCor');

// Mudar título
btnTitulo.addEventListener('click', function() {
    titulo.textContent = 'Título Mudado com JavaScript!';
    console.log('Título foi alterado');
});

// Mudar texto
btnTexto.addEventListener('click', function() {
    paragrafo.textContent = 'Este texto foi mudado pelo JavaScript!';
    console.log('Texto foi alterado');
});

// Mudar cor
btnCor.addEventListener('click', function() {
    titulo.style.color = 'blue';
    paragrafo.style.color = 'green';
    console.log('Cores foram alteradas');
});
```

**Resultado esperado:**
Três botões que modificam o conteúdo e estilo da página.

---

## 🏠 Para Casa

### Tarefa 1: Página Interativa Pessoal

**Descrição:** Crie uma página HTML com JavaScript que fale sobre você.

**Requisitos:**
- [ ] Arquivo HTML com estrutura básica
- [ ] Arquivo JavaScript externo
- [ ] Pelo menos 3 elementos que podem ser modificados (h1, p, etc.)
- [ ] Pelo menos 3 botões com ações diferentes
- [ ] Mensagens no console para cada ação
- [ ] Comentários explicando o código JavaScript

**Dica:** Use `getElementById()` para pegar elementos e `addEventListener()` para adicionar ações aos botões.

### Tarefa 2: Explorar o Console

**Descrição:** Pratique usando o console do navegador.

**Requisitos:**
- [ ] Abra qualquer site (ex: google.com)
- [ ] Abra o console (F12)
- [ ] Teste pelo menos 5 comandos JavaScript diferentes
- [ ] Anote o que cada comando faz
- [ ] Tire um print do console com seus testes

**Exemplos de comandos para testar:**
```javascript
console.log('Testando JavaScript');
alert('Olá!');
2 + 2
'Olá' + ' ' + 'Mundo'
document.title
```

---

## 🤖 Uso da IA neste Encontro

### ❌ NÃO use IA para:
- Escrever todo o código por você
- Copiar soluções sem entender
- Pular a prática no console

### ✅ USE IA para:
- Explicar o que é JavaScript em palavras simples
- Entender mensagens de erro
- Ver exemplos de código básico
- Aprender mais sobre o console do navegador

### 💡 Prompts Sugeridos

**Para entender conceitos:**
```
Explique o que é JavaScript de forma simples para um iniciante
```

**Para entender o console:**
```
O que é o console do navegador e como usar para aprender JavaScript?
```

**Para revisar código:**
```
Revise este código JavaScript básico e explique o que cada linha faz:
[seu código]
```

---

## ✅ Checklist de Aprendizado

Antes de avançar, certifique-se de que você:

- [ ] Sabe o que é JavaScript e para que serve
- [ ] Consegue abrir o console do navegador (F12)
- [ ] Consegue escrever código no console
- [ ] Sabe conectar JavaScript a uma página HTML
- [ ] Entende a diferença entre HTML, CSS e JavaScript
- [ ] Consegue usar `console.log()` para ver mensagens
- [ ] Consegue usar `getElementById()` para pegar elementos
- [ ] Consegue usar `addEventListener()` para adicionar ações

---

## 📚 Recursos Adicionais

### Documentação
- [MDN - Introdução ao JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [JavaScript.info - Introdução](https://javascript.info/intro)

### Vídeos Recomendados
- [Curso em Vídeo - JavaScript #01](https://www.youtube.com/watch?v=1-w1RfGIov4)
- [Rocketseat - O que é JavaScript?](https://www.youtube.com/watch?v=HBVCsBtsmzA)

### Artigos
- [W3Schools - JavaScript Introduction](https://www.w3schools.com/js/js_intro.asp)

---

## 🔗 Navegação

- [⬅️ Módulo 2 - CSS](../../../modulo-2-css/)
- [➡️ Próximo Encontro - Variáveis e Tipos](../encontro-2-variaveis-tipos/)
- [📚 Voltar ao Módulo 3](../../)
- [🏠 Início do Curso](../../../)

---

**Dúvidas?** Revise a teoria, pratique no console e use a IA para esclarecer conceitos! 🚀
