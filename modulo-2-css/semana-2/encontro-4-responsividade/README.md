# Encontro 4: Responsividade e Mobile-First

## 🎯 Objetivos
- Compreender design responsivo
- Dominar Media Queries
- Aplicar abordagem Mobile-First
- Criar layouts fluidos
- Otimizar para diferentes dispositivos

## 📚 Teoria (45 min)

### O que é Design Responsivo?

Design que se adapta a diferentes tamanhos de tela:
- Smartphones (320px - 480px)
- Tablets (481px - 768px)
- Laptops (769px - 1024px)
- Desktops (1025px+)

### Mobile-First

**Abordagem tradicional (Desktop-First):**
```css
/* Desktop */
.container { width: 1200px; }

/* Mobile */
@media (max-width: 768px) {
    .container { width: 100%; }
}
```

**Abordagem Mobile-First (✅ Recomendado):**
```css
/* Mobile (base) */
.container { width: 100%; }

/* Desktop */
@media (min-width: 769px) {
    .container { width: 1200px; }
}
```

**Por que Mobile-First?**
1. Maioria dos acessos é mobile
2. Força priorização de conteúdo
3. Performance melhor
4. Progressive enhancement

### Media Queries

#### Sintaxe Básica
```css
@media (condição) {
    /* estilos */
}
```

#### Breakpoints Comuns
```css
/* Mobile (base - sem media query) */
.elemento { ... }

/* Tablet */
@media (min-width: 481px) {
    .elemento { ... }
}

/* Laptop */
@media (min-width: 769px) {
    .elemento { ... }
}

/* Desktop */
@media (min-width: 1025px) {
    .elemento { ... }
}
```

#### Tipos de Media Queries

**Largura:**
```css
@media (min-width: 768px) { }
@media (max-width: 768px) { }
@media (min-width: 481px) and (max-width: 768px) { }
```

**Orientação:**
```css
@media (orientation: portrait) { }
@media (orientation: landscape) { }
```

**Resolução:**
```css
@media (min-resolution: 2dppx) { }
```

**Preferências do usuário:**
```css
@media (prefers-color-scheme: dark) { }
@media (prefers-reduced-motion: reduce) { }
```

### Unidades Responsivas

#### Relativas
- `%` - Porcentagem do elemento pai
- `em` - Relativo ao font-size do elemento
- `rem` - Relativo ao font-size do root (html)
- `vw` - 1% da largura da viewport
- `vh` - 1% da altura da viewport
- `vmin` - 1% da menor dimensão
- `vmax` - 1% da maior dimensão

#### Quando usar cada uma?
```css
/* Espaçamentos e tamanhos */
padding: 1rem;        /* ✅ rem */
margin: 2rem;         /* ✅ rem */

/* Tipografia */
font-size: 1rem;      /* ✅ rem */
line-height: 1.5;     /* ✅ sem unidade */

/* Larguras */
width: 100%;          /* ✅ % */
max-width: 1200px;    /* ✅ px */

/* Layouts fluidos */
width: clamp(300px, 50%, 600px); /* ✅ clamp */
```

### Viewport Meta Tag

**Essencial para responsividade:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Imagens Responsivas

#### Largura fluida
```css
img {
    max-width: 100%;
    height: auto;
}
```

#### srcset
```html
<img 
    src="prato-small.jpg"
    srcset="prato-small.jpg 480w,
            prato-medium.jpg 768w,
            prato-large.jpg 1200w"
    sizes="(max-width: 480px) 100vw,
           (max-width: 768px) 50vw,
           33vw"
    alt="Moqueca baiana"
>
```

#### picture
```html
<picture>
    <source media="(min-width: 769px)" srcset="prato-desktop.jpg">
    <source media="(min-width: 481px)" srcset="prato-tablet.jpg">
    <img src="prato-mobile.jpg" alt="Moqueca baiana">
</picture>
```

## 💻 Prática (60 min)

### Exercício 1: Navbar Responsiva (20 min)

```css
/* Mobile First */
nav {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

nav ul {
    flex-direction: column;
    gap: 1rem;
}

/* Tablet e acima */
@media (min-width: 769px) {
    nav {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    nav ul {
        flex-direction: row;
        gap: 2rem;
    }
}
```

### Exercício 2: Grid Responsivo (20 min)

```css
/* Mobile: 1 coluna */
.menu-pratos {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
}

/* Tablet: 2 colunas */
@media (min-width: 481px) {
    .menu-pratos {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

/* Desktop: 3 colunas */
@media (min-width: 1025px) {
    .menu-pratos {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding: 2rem;
    }
}
```

### Exercício 3: Tipografia Responsiva (20 min)

```css
/* Mobile */
html {
    font-size: 14px;
}

h1 {
    font-size: 2rem;      /* 28px */
    line-height: 1.2;
}

h2 {
    font-size: 1.5rem;    /* 21px */
}

p {
    font-size: 1rem;      /* 14px */
    line-height: 1.6;
}

/* Tablet */
@media (min-width: 481px) {
    html {
        font-size: 15px;
    }
}

/* Desktop */
@media (min-width: 1025px) {
    html {
        font-size: 16px;
    }
    
    h1 {
        font-size: 2.5rem; /* 40px */
    }
}
```

## 🏠 Para Casa

### Tarefa Principal
Tornar o cardápio digital 100% responsivo:

1. **Mobile (320px - 480px)**
   - Layout em coluna única
   - Menu hambúrguer (preparar estrutura)
   - Imagens full-width
   - Tipografia legível (mínimo 14px)
   - Botões grandes (mínimo 44px altura)

2. **Tablet (481px - 768px)**
   - 2 colunas de pratos
   - Navegação horizontal
   - Sidebar oculta
   - Espaçamentos maiores

3. **Desktop (769px+)**
   - 3 colunas de pratos
   - Sidebar visível
   - Largura máxima 1200px
   - Centralizado

4. **Otimizações**
   - Imagens responsivas
   - Fontes escaláveis
   - Touch targets adequados
   - Sem scroll horizontal

### Checklist
- [ ] Viewport meta tag adicionada
- [ ] Abordagem Mobile-First
- [ ] 3 breakpoints implementados
- [ ] Grid responsivo
- [ ] Navegação adaptável
- [ ] Imagens fluidas (max-width: 100%)
- [ ] Tipografia escalável (rem)
- [ ] Testado em DevTools (diferentes dispositivos)
- [ ] Testado em dispositivo real
- [ ] Sem scroll horizontal em nenhum tamanho

## 🤖 Uso da IA

### ❌ NÃO use IA para:
- Gerar todos os media queries
- Copiar breakpoints sem entender

### ✅ USE IA para:
- Revisar estratégia de breakpoints
- Debugar problemas de responsividade
- Entender unidades CSS
- Otimizar performance

### 💡 Prompts Sugeridos
```
"Meu site não está responsivo [cole código]. O que está faltando?"

"Qual a diferença entre em e rem? Quando usar cada um?"

"Como fazer imagens responsivas mantendo proporção?"

"Meus breakpoints estão bem definidos? [cole código]"
```

## 🎯 Boas Práticas

### 1. Sempre use viewport meta tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 2. Mobile-First
```css
/* Base: Mobile */
.elemento { }

/* Progressivo: Tablet+ */
@media (min-width: 481px) { }
```

### 3. Unidades relativas
```css
/* ✅ BOM */
padding: 1rem;
font-size: 1.5rem;

/* ❌ EVITAR */
padding: 16px;
font-size: 24px;
```

### 4. Imagens fluidas
```css
img {
    max-width: 100%;
    height: auto;
}
```

### 5. Touch targets
```css
button, a {
    min-height: 44px;
    min-width: 44px;
}
```

### 6. Teste em dispositivos reais
- Chrome DevTools
- Firefox Responsive Design Mode
- Dispositivos físicos

## 🐛 Problemas Comuns

### Scroll horizontal
```css
/* ❌ Problema */
.container {
    width: 1200px;
}

/* ✅ Solução */
.container {
    max-width: 1200px;
    width: 100%;
}
```

### Texto muito pequeno
```css
/* ❌ Problema */
p {
    font-size: 12px;
}

/* ✅ Solução */
p {
    font-size: 1rem; /* mínimo 16px */
}
```

### Imagens estourando
```css
/* ✅ Solução */
img {
    max-width: 100%;
    height: auto;
}
```

## 📖 Recursos
- [MDN - Responsive Design](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Google - Responsive Web Design Basics](https://web.dev/responsive-web-design-basics/)
- [Am I Responsive?](https://ui.dev/amiresponsive) - Testar responsividade

## ✅ Checklist
- [ ] Entendi design responsivo
- [ ] Domino Media Queries
- [ ] Apliquei Mobile-First
- [ ] Usei unidades relativas
- [ ] Imagens responsivas
- [ ] Testei em múltiplos dispositivos
- [ ] Cardápio 100% responsivo
- [ ] Revisei com IA após implementar
