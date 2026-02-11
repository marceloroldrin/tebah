# Encontro 3: CSS Grid - Layout Bidimensional

## 🎯 Objetivos
- Compreender o modelo CSS Grid
- Dominar propriedades do grid container
- Dominar propriedades dos grid items
- Criar layouts complexos com Grid
- Combinar Grid e Flexbox

## 📚 Teoria (45 min)

### O que é CSS Grid?

CSS Grid é um sistema de layout bidimensional (linhas E colunas) que permite criar layouts complexos de forma simples.

**Flexbox** = 1 dimensão (linha OU coluna)  
**Grid** = 2 dimensões (linhas E colunas)

### Conceitos Básicos

```
┌─────────────────────────────────────┐
│  GRID CONTAINER                     │
│  ┌──────┬──────┬──────┐             │
│  │ 1,1  │ 1,2  │ 1,3  │  ← Row 1    │
│  ├──────┼──────┼──────┤             │
│  │ 2,1  │ 2,2  │ 2,3  │  ← Row 2    │
│  └──────┴──────┴──────┘             │
│    ↑      ↑      ↑                  │
│   Col1   Col2   Col3                │
└─────────────────────────────────────┘
```

### Propriedades do Container

#### display: grid
```css
.container {
    display: grid;
}
```

#### grid-template-columns
Define colunas:
```css
.container {
    grid-template-columns: 200px 200px 200px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: 200px 1fr 2fr;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

**fr** = fração do espaço disponível

#### grid-template-rows
Define linhas:
```css
.container {
    grid-template-rows: 100px 200px;
    grid-template-rows: auto 1fr auto;
}
```

#### gap
Espaçamento:
```css
.container {
    gap: 20px;              /* linhas e colunas */
    gap: 20px 10px;         /* linhas colunas */
    row-gap: 20px;
    column-gap: 10px;
}
```

#### grid-template-areas
Layout nomeado:
```css
.container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

#### justify-items
Alinha itens horizontalmente:
```css
.container {
    justify-items: start;
    justify-items: end;
    justify-items: center;
    justify-items: stretch; /* padrão */
}
```

#### align-items
Alinha itens verticalmente:
```css
.container {
    align-items: start;
    align-items: end;
    align-items: center;
    align-items: stretch; /* padrão */
}
```

#### justify-content
Alinha o grid horizontalmente:
```css
.container {
    justify-content: start;
    justify-content: end;
    justify-content: center;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
}
```

#### align-content
Alinha o grid verticalmente:
```css
.container {
    align-content: start;
    align-content: end;
    align-content: center;
    align-content: space-between;
}
```

### Propriedades dos Itens

#### grid-column
Posiciona em colunas:
```css
.item {
    grid-column: 1 / 3;      /* da linha 1 até 3 */
    grid-column: 1 / span 2; /* começa em 1, ocupa 2 */
    grid-column: 1 / -1;     /* da primeira até última */
}
```

#### grid-row
Posiciona em linhas:
```css
.item {
    grid-row: 1 / 3;
    grid-row: 1 / span 2;
}
```

#### grid-area
Posiciona em área:
```css
.item {
    grid-area: 1 / 1 / 3 / 3; /* row-start / col-start / row-end / col-end */
    grid-area: header;         /* nome da área */
}
```

#### justify-self
Alinha item horizontalmente:
```css
.item {
    justify-self: start;
    justify-self: end;
    justify-self: center;
    justify-self: stretch;
}
```

#### align-self
Alinha item verticalmente:
```css
.item {
    align-self: start;
    align-self: end;
    align-self: center;
    align-self: stretch;
}
```

## 💻 Prática (60 min)

### Exercício 1: Grid Básico de Pratos (15 min)

```css
.menu-pratos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

@media (max-width: 768px) {
    .menu-pratos {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .menu-pratos {
        grid-template-columns: 1fr;
    }
}
```

### Exercício 2: Grid Responsivo Automático (20 min)

```css
.menu-pratos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
}
```

**auto-fit** = ajusta automaticamente o número de colunas  
**minmax(280px, 1fr)** = mínimo 280px, máximo 1fr

### Exercício 3: Layout Completo com Grid Areas (25 min)

```css
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "nav main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 20px;
}

.header {
    grid-area: header;
    background-color: #c41e3a;
    padding: 20px;
}

.nav {
    grid-area: nav;
    background-color: #f4f4f4;
    padding: 20px;
}

.main {
    grid-area: main;
    padding: 20px;
}

.aside {
    grid-area: aside;
    background-color: #f4f4f4;
    padding: 20px;
}

.footer {
    grid-area: footer;
    background-color: #333;
    color: white;
    padding: 20px;
}

@media (max-width: 768px) {
    .layout {
        grid-template-areas:
            "header"
            "nav"
            "main"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
}
```

## 🏠 Para Casa

### Tarefa Principal
Criar layout completo do cardápio usando CSS Grid:

1. **Layout Principal**
   - Header fixo no topo
   - Sidebar com categorias (desktop)
   - Área principal com pratos
   - Footer no rodapé

2. **Grid de Pratos**
   - Responsivo automático com auto-fit
   - Mínimo 250px por card
   - Gap de 20px

3. **Card Especial em Destaque**
   - Ocupar 2 colunas
   - Posicionado no início

4. **Responsividade**
   - Desktop: 3 colunas + sidebar
   - Tablet: 2 colunas sem sidebar
   - Mobile: 1 coluna

### Checklist
- [ ] Layout com grid-template-areas
- [ ] Grid de pratos com auto-fit
- [ ] Card destaque ocupando 2 colunas
- [ ] Sidebar visível apenas em desktop
- [ ] Gap consistente
- [ ] Responsivo em 3 breakpoints
- [ ] Código comentado
- [ ] Testado em diferentes telas

## 🤖 Uso da IA

### ❌ NÃO use IA para:
- Gerar todo o layout Grid
- Copiar código sem entender

### ✅ USE IA para:
- Entender diferenças entre Grid e Flexbox
- Debugar problemas de posicionamento
- Revisar uso de Grid
- Aprender sobre auto-fit vs auto-fill

### 💡 Prompts Sugeridos
```
"Qual a diferença entre auto-fit e auto-fill no CSS Grid?"

"Meu Grid não está responsivo [cole código]. Como corrigir?"

"Quando devo usar Grid vs Flexbox?"

"Como fazer um item ocupar 2 colunas no Grid?"
```

## 🎯 Padrões Comuns

### Grid Responsivo Automático
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

### Layout Holy Grail
```css
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "nav main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    min-height: 100vh;
}
```

### Item em Destaque
```css
.destaque {
    grid-column: 1 / -1; /* ocupa todas as colunas */
}
```

### Galeria Assimétrica
```css
.galeria {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.item-grande {
    grid-column: span 2;
    grid-row: span 2;
}
```

## 🔄 Grid vs Flexbox

| Aspecto | Grid | Flexbox |
|---------|------|---------|
| Dimensões | 2D (linhas E colunas) | 1D (linha OU coluna) |
| Uso | Layouts de página | Componentes |
| Controle | Container define tudo | Itens têm mais controle |
| Melhor para | Estrutura geral | Alinhamento de itens |

**Dica**: Use Grid para layout geral e Flexbox dentro dos itens!

## 📖 Recursos
- [CSS Tricks - Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid Garden](https://cssgridgarden.com/) - Jogo para aprender
- [MDN - CSS Grid](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout)

## ✅ Checklist
- [ ] Entendi o modelo CSS Grid
- [ ] Sei usar grid-template-columns/rows
- [ ] Domino grid-template-areas
- [ ] Criei layouts responsivos com auto-fit
- [ ] Combinei Grid e Flexbox
- [ ] Apliquei ao cardápio digital
- [ ] Revisei com IA após implementar
