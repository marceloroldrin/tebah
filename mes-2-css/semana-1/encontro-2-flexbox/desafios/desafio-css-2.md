# Desafio CSS 2 - Menu Horizontal com Flexbox

## Objetivo
Criar um menu de navegação horizontal usando Flexbox.

## Requisitos

Criar um menu que:
- Fique horizontal
- Itens centralizados
- Espaçamento entre itens
- Links estilizados

## HTML Base

```html
<nav class="menu">
  <ul class="menu-lista">
    <li><a href="#bebidas">Bebidas</a></li>
    <li><a href="#pratos">Pratos</a></li>
    <li><a href="#sobremesas">Sobremesas</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
</nav>
```

## Requisitos de CSS

- [ ] Use `display: flex` no container
- [ ] Centralize os itens com `justify-content`
- [ ] Adicione espaçamento com `gap`
- [ ] Remova marcadores da lista
- [ ] Estilize os links (cor, sem sublinhado)
- [ ] Adicione efeito hover nos links

## Estrutura CSS

```css
.menu-lista {
  display: flex;
  /* Complete aqui */
}

.menu-lista a {
  /* Estilize os links */
}

.menu-lista a:hover {
  /* Efeito hover */
}
```

## Bônus

- Adicione padding nos links para área clicável maior
- Use `border-radius` nos links
- Crie efeito de sublinhado animado no hover
- Faça o menu ficar em coluna no mobile (sem media query ainda)
