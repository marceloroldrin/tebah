# Desafio 2: Página Semântica

## 🎯 Objetivo
Refatorar uma página existente usando HTML semântico e criar uma nova página estruturada corretamente.

## 📋 Requisitos

### Parte 1: Refatoração
Pegue sua página da cidade (Desafio 1) e refatore usando tags semânticas:

**Antes:**
```html
<div class="cabecalho">
    <div class="menu">...</div>
</div>
<div class="conteudo">...</div>
<div class="rodape">...</div>
```

**Depois:**
```html
<header>
    <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>
```

### Parte 2: Nova Página
Criar uma página de blog pessoal com:

1. **Header**
   - Logo/nome do blog
   - Menu de navegação (nav)

2. **Main**
   - Section com artigo em destaque
   - Section com lista de artigos recentes
   - Cada artigo deve ser um `<article>`

3. **Aside**
   - Informações sobre o autor
   - Lista de categorias
   - Links úteis

4. **Footer**
   - Copyright
   - Links de redes sociais
   - Informações de contato

### Tags Obrigatórias
- [ ] `<header>`
- [ ] `<nav>`
- [ ] `<main>`
- [ ] `<section>` (pelo menos 2)
- [ ] `<article>` (pelo menos 3)
- [ ] `<aside>`
- [ ] `<footer>`
- [ ] `<figure>` e `<figcaption>`
- [ ] `<time>`

## ✅ Checklist

### Estrutura
- [ ] Hierarquia de headings correta (h1 > h2 > h3)
- [ ] Um único h1 por página
- [ ] Tags semânticas usadas apropriadamente
- [ ] Código validado no W3C

### Conteúdo
- [ ] Mínimo 3 artigos completos
- [ ] Datas formatadas com `<time>`
- [ ] Imagens com legendas usando `<figure>`
- [ ] Navegação funcional

### Qualidade
- [ ] Código indentado
- [ ] Comentários organizacionais
- [ ] Nomes de classes descritivos
- [ ] Testado no navegador

## 🤖 Uso da IA

### Depois de implementar:
```
"Revisei minha estrutura semântica [cole código]. 
As tags estão sendo usadas corretamente? 
Quando devo usar <section> vs <article>?"
```

## 📤 Entrega

1. `cidade-refatorada.html` - Página da cidade com HTML semântico
2. `blog.html` - Nova página de blog
3. Ambos validados no W3C
4. README.md explicando as mudanças

## 💡 Dicas

- `<article>` = conteúdo independente (pode ser reutilizado)
- `<section>` = agrupamento temático
- `<aside>` = conteúdo relacionado mas não essencial
- Use `datetime` no `<time>` para máquinas lerem

## 🎓 Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| Refatoração correta | 3 |
| Nova página estruturada | 4 |
| Uso apropriado de tags | 2 |
| Validação W3C | 1 |
| **Total** | **10** |

## 📖 Recursos

- [HTML5 Doctor - Flowchart](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf)
- [MDN - Usando seções HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element#content_sectioning)

Boa sorte! 🚀
