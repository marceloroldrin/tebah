# Desafio CSS 3 - Grid de Pratos

## Objetivo
Organizar os pratos em um grid responsivo usando CSS Grid.

## Requisitos

Criar um grid que:
- Tenha 3 colunas em telas grandes
- Ajuste automaticamente o número de colunas
- Tenha espaçamento entre os cards
- Seja responsivo

## HTML Base

```html
<section class="pratos-grid">
  <article class="prato-card">
    <h3>Prato 1</h3>
    <p>Descrição</p>
    <span>R$ 20,00</span>
  </article>
  <!-- Repita para 9 pratos -->
</section>
```

## Requisitos de CSS

- [ ] Use `display: grid`
- [ ] Use `grid-template-columns` com `repeat()`
- [ ] Adicione `gap` entre os cards
- [ ] Use `minmax()` para responsividade
- [ ] Todos os cards devem ter mesma altura

## Estrutura CSS

```css
.pratos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.prato-card {
  /* Estilize o card */
}
```

## Conceitos Importantes

- `repeat(3, 1fr)` - 3 colunas iguais
- `auto-fit` - Ajusta automaticamente
- `minmax(250px, 1fr)` - Mínimo 250px, máximo 1fr

## Bônus

- Faça alguns cards ocuparem 2 colunas
- Adicione uma imagem em cada card
- Use `aspect-ratio` para manter proporção
- Crie um grid diferente para a galeria de imagens
