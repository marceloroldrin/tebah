# Encontro 2: Flexbox - Layout Flexível

## 🎯 Objetivos
- Compreender o modelo Flexbox
- Dominar propriedades do flex container
- Dominar propriedades dos flex items
- Criar layouts responsivos com Flexbox
- Aplicar Flexbox ao cardápio digital

## 📚 Teoria (45 min)

### O que é Flexbox?

Flexbox (Flexible Box Layout) é um modelo de layout CSS que facilita:
- Alinhar elementos
- Distribuir espaço
- Criar layouts responsivos
- Organizar itens em uma dimensão (linha ou coluna)

### Conceitos Básicos

```
┌─────────────────────────────────────┐
│  FLEX CONTAINER                     │
│  ┌──────┐  ┌──────┐  ┌──────┐      │
│  │ITEM 1│  │ITEM 2│  │ITEM 3│      │
│  └──────┘  └──────┘  └──────┘      │
└─────────────────────────────────────┘
    ←──── Main Axis (eixo principal)
```

**Eixos:**
- **Main Axis**: Eixo principal (horizontal por padrão)
- **Cross Axis**: Eixo transversal (vertical por padrão)

### Propriedades do Container

#### display: flex
```css
.container {
    display: flex;
}
```

#### flex-direction
Define a direção dos itens:
```css
.container {
    flex-direction: row;          /* → padrão */
    flex-direction: row-reverse;  /* ← */
    flex-direction: column;       /* ↓ */
    flex-direction: column-reverse; /* ↑ */
}
```

#### justify-content
Alinha no eixo principal:
```css
.container {
    justify-content: flex-start;    /* início */
    justify-content: flex-end;      /* fim */
    justify-content: center;        /* centro */
    justify-content: space-between; /* espaço entre */
    justify-content: space-around;  /* espaço ao redor */
    justify-content: space-evenly;  /* espaço uniforme */
}
```

#### align-items
Alinha no eixo transversal:
```css
.container {
    align-items: stretch;     /* estica (padrão) */
    align-items: flex-start;  /* início */
    align-items: flex-end;    /* fim */
    align-items: center;      /* centro */
    align-items: baseline;    /* linha de base */
}
```

#### flex-wrap
Quebra de linha:
```css
.container {
    flex-wrap: nowrap;      /* não quebra (padrão) */
    flex-wrap: wrap;        /* quebra */
    flex-wrap: wrap-reverse; /* quebra invertido */
}
```

#### gap
Espaçamento entre itens:
```css
.container {
    gap: 20px;           /* espaço uniforme */
    gap: 20px 10px;      /* linha coluna */
    row-gap: 20px;       /* apenas linhas */
    column-gap: 10px;    /* apenas colunas */
}
```

### Propriedades dos Itens

#### flex-grow
Capacidade de crescer:
```css
.item {
    flex-grow: 0; /* não cresce (padrão) */
    flex-grow: 1; /* cresce proporcionalmente */
}
```

#### flex-shrink
Capacidade de encolher:
```css
.item {
    flex-shrink: 1; /* encolhe (padrão) */
    flex-shrink: 0; /* não encolhe */
}
```

#### flex-basis
Tamanho base:
```css
.item {
    flex-basis: auto;  /* tamanho do conteúdo */
    flex-basis: 200px; /* tamanho fixo */
    flex-basis: 50%;   /* porcentagem */
}
```

#### flex (shorthand)
```css
.item {
    flex: 1;              /* flex-grow: 1 */
    flex: 0 1 auto;       /* grow shrink basis */
    flex: 1 1 200px;
}
```

#### align-self
Alinhamento individual:
```css
.item {
    align-self: auto;
    align-self: flex-start;
    align-self: center;
    align-self: flex-end;
}
```

#### order
Ordem de exibição:
```css
.item {
    order: 0;  /* padrão */
    order: 1;  /* depois */
    order: -1; /* antes */
}
```

## 💻 Prática (60 min)

### Exercício 1: Menu de Navegação (15 min)

```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #c41e3a;
}

nav ul {
    display: flex;
    gap: 20px;
    list-style: none;
}
```

### Exercício 2: Grid de Pratos (20 min)

```css
.menu-pratos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.prato {
    flex: 1 1 300px; /* cresce, encolhe, base 300px */
    min-width: 250px;
    max-width: 400px;
}
```

### Exercício 3: Card de Prato (25 min)

```css
.prato {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}

.prato img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.prato-info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1;
}

.prato-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}
```

## 🏠 Para Casa

### Tarefa Principal
Refatorar o cardápio digital usando Flexbox:

1. **Header com Flexbox**
   - Logo à esquerda
   - Menu à direita
   - Centralizado verticalmente

2. **Grid de Pratos Responsivo**
   - 3 colunas em desktop
   - 2 colunas em tablet
   - 1 coluna em mobile
   - Espaçamento uniforme

3. **Cards de Pratos**
   - Imagem no topo
   - Informações no meio
   - Preço e botão no rodapé
   - Altura uniforme

4. **Footer**
   - Informações distribuídas
   - Links centralizados
   - Responsivo

### Checklist
- [ ] Header com Flexbox
- [ ] Navegação horizontal com gap
- [ ] Grid de pratos com flex-wrap
- [ ] Cards com flex-direction: column
- [ ] Preço e botão alinhados com space-between
- [ ] Footer organizado com Flexbox
- [ ] Testado em diferentes tamanhos de tela
- [ ] Código comentado

## 🤖 Uso da IA

### ❌ NÃO use IA para:
- Gerar todo o layout Flexbox
- Copiar código sem entender as propriedades

### ✅ USE IA para:
- Entender diferenças entre propriedades
- Debugar problemas de alinhamento
- Revisar uso de Flexbox
- Aprender casos de uso específicos

### 💡 Prompts Sugeridos
```
"Qual a diferença entre justify-content e align-items?"

"Meu Flexbox não está funcionando [cole código]. O que está errado?"

"Como fazer um grid responsivo com Flexbox que tenha 3 colunas em desktop e 1 em mobile?"

"Quando usar flex-grow vs flex-basis?"
```

## 🎯 Padrões Comuns

### Centralizar Elemento
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### Navbar
```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### Grid Responsivo
```css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.grid-item {
    flex: 1 1 300px;
}
```

### Card com Footer Fixo
```css
.card {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card-content {
    flex-grow: 1;
}

.card-footer {
    margin-top: auto;
}
```

## 🐛 Problemas Comuns

### Itens não quebram linha
```css
/* ❌ Problema */
.container {
    display: flex;
}

/* ✅ Solução */
.container {
    display: flex;
    flex-wrap: wrap;
}
```

### Itens não crescem
```css
/* ❌ Problema */
.item {
    width: 300px;
}

/* ✅ Solução */
.item {
    flex: 1 1 300px;
}
```

### Altura desigual
```css
/* ❌ Problema */
.item {
    height: auto;
}

/* ✅ Solução */
.container {
    align-items: stretch; /* padrão */
}
```

## 📖 Recursos
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Jogo para aprender
- [MDN - Flexbox](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox)

## ✅ Checklist
- [ ] Entendi o modelo Flexbox
- [ ] Sei usar propriedades do container
- [ ] Sei usar propriedades dos itens
- [ ] Criei layouts responsivos
- [ ] Apliquei ao cardápio digital
- [ ] Revisei com IA após implementar
