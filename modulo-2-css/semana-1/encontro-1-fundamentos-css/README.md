# Encontro 1: Fundamentos de CSS

## 🎯 Objetivos
- Compreender o que é CSS e como funciona
- Aprender sintaxe básica do CSS
- Dominar seletores e propriedades fundamentais
- Entender o Box Model
- Aplicar estilos ao cardápio digital

## 📚 Teoria (45 min)

### O que é CSS?

CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas HTML.

**HTML** = Estrutura  
**CSS** = Aparência  
**JavaScript** = Comportamento

### Formas de Adicionar CSS

#### 1. Inline (❌ Evitar)
```html
<p style="color: blue;">Texto azul</p>
```

#### 2. Internal (⚠️ Usar com moderação)
```html
<head>
    <style>
        p { color: blue; }
    </style>
</head>
```

#### 3. External (✅ Recomendado)
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

### Sintaxe Básica

```css
seletor {
    propriedade: valor;
    outra-propriedade: valor;
}
```

Exemplo:
```css
h1 {
    color: #333;
    font-size: 32px;
    text-align: center;
}
```

### Seletores Fundamentais

#### Seletor de Elemento
```css
p { color: black; }
h1 { font-size: 32px; }
```

#### Seletor de Classe
```css
.destaque { background-color: yellow; }
.prato { border: 1px solid #ccc; }
```

#### Seletor de ID
```css
#header { background-color: #333; }
```

#### Seletor Universal
```css
* { margin: 0; padding: 0; }
```

#### Seletores Combinados
```css
h1, h2, h3 { font-family: Arial; }
.prato h3 { color: #c41e3a; }
```

### Box Model

Todo elemento HTML é uma caixa com:

```
┌─────────────────────────────┐
│         MARGIN              │
│  ┌──────────────────────┐   │
│  │      BORDER          │   │
│  │  ┌───────────────┐   │   │
│  │  │   PADDING     │   │   │
│  │  │  ┌────────┐   │   │   │
│  │  │  │CONTENT │   │   │   │
│  │  │  └────────┘   │   │   │
│  │  └───────────────┘   │   │
│  └──────────────────────┘   │
└─────────────────────────────┘
```

```css
.caixa {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
```

### Propriedades Essenciais

#### Cores
```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
```

#### Tipografia
```css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
line-height: 1.5;
text-align: center;
text-decoration: underline;
```

#### Espaçamento
```css
margin: 10px;
margin: 10px 20px;
margin: 10px 20px 10px 20px;
padding: 15px;
```

#### Bordas
```css
border: 1px solid black;
border-radius: 5px;
border-top: 2px dashed red;
```

#### Fundo
```css
background-color: #f0f0f0;
background-image: url('imagem.jpg');
background-size: cover;
```

### Cascata e Especificidade

**Ordem de prioridade:**
1. `!important` (evitar)
2. Inline styles
3. IDs
4. Classes, atributos, pseudo-classes
5. Elementos

```css
p { color: blue; }
.destaque { color: red; }
#principal { color: green; }
```

## 💻 Prática (60 min)

### Exercício 1: Estilizar Card de Prato (20 min)

Criar CSS para um card de prato:
```css
.prato {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    background-color: white;
}

.prato h3 {
    color: #c41e3a;
    font-size: 24px;
    margin-bottom: 10px;
}

.prato .preco {
    color: #2ecc71;
    font-size: 20px;
    font-weight: bold;
}
```

### Exercício 2: Estilizar Header (20 min)

```css
header {
    background-color: #c41e3a;
    color: white;
    padding: 20px;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav li {
    display: inline;
    margin: 0 15px;
}

nav a {
    color: white;
    text-decoration: none;
}
```

### Exercício 3: Aplicar ao Cardápio (20 min)

Estilizar seu cardápio digital com:
- Cores da marca
- Tipografia legível
- Espaçamento adequado
- Bordas e sombras

## 🏠 Para Casa

### Tarefa Principal
Criar arquivo `style.css` completo para seu cardápio com:

1. **Reset CSS**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

2. **Variáveis de Cores** (comentários)
```css
/* Cores principais:
   Primária: #c41e3a
   Secundária: #f4a261
   Texto: #333
   Fundo: #f8f9fa
*/
```

3. **Estilização Completa**
   - Header e navegação
   - Cards de pratos
   - Footer
   - Tipografia consistente
   - Espaçamentos harmônicos

### Checklist
- [ ] Arquivo CSS externo criado e linkado
- [ ] Reset CSS aplicado
- [ ] Paleta de cores definida
- [ ] Tipografia escolhida (Google Fonts?)
- [ ] Header estilizado
- [ ] Cards de pratos estilizados
- [ ] Footer estilizado
- [ ] Código organizado com comentários
- [ ] Testado em diferentes navegadores

## 🤖 Uso da IA

### ❌ NÃO use IA para:
- Gerar todo o CSS
- Copiar estilos prontos sem entender

### ✅ USE IA para:
- Revisar seu CSS
- Entender propriedades específicas
- Sugerir melhorias de design
- Debugar problemas de estilo

### 💡 Prompts Sugeridos
```
"Revisei meu CSS [cole código]. Está bem estruturado? O que posso melhorar?"

"Como posso melhorar o contraste de cores? Primária: #c41e3a, Fundo: #fff"

"Meu box model não está funcionando como esperado [cole código]. O que está errado?"

"Qual a diferença entre margin e padding?"
```

## 🎨 Dicas de Design

1. **Paleta de Cores**
   - Use ferramentas como Coolors.co
   - Máximo 3-4 cores principais
   - Garanta contraste adequado

2. **Tipografia**
   - Máximo 2 fontes (uma para títulos, outra para texto)
   - Tamanho mínimo: 16px para texto
   - Line-height: 1.5 para legibilidade

3. **Espaçamento**
   - Use múltiplos de 4 ou 8 (4px, 8px, 16px, 24px)
   - Espaço em branco é seu amigo

4. **Consistência**
   - Padronize bordas, sombras, raios
   - Use as mesmas cores em todo o site

## 📖 Recursos
- [MDN - CSS Basics](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [CSS Tricks](https://css-tricks.com/)
- [Google Fonts](https://fonts.google.com/)
- [Coolors](https://coolors.co/) - Gerador de paletas

## ✅ Checklist
- [ ] Entendi a sintaxe CSS
- [ ] Sei usar seletores básicos
- [ ] Compreendi o Box Model
- [ ] Apliquei estilos ao meu cardápio
- [ ] Código CSS organizado e comentado
- [ ] Revisei com IA após implementar
