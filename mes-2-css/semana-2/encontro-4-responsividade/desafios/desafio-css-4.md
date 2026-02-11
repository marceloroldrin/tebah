# Desafio CSS 4 - Cardápio Responsivo

## Objetivo
Tornar o cardápio totalmente responsivo usando mobile-first.

## Requisitos

Criar CSS que funcione em:
- **Mobile:** 1 coluna, menu vertical
- **Tablet:** 2 colunas, menu horizontal
- **Desktop:** 3 colunas, layout expandido

## Abordagem Mobile-First

Comece com estilos para mobile, depois adicione media queries para telas maiores.

## Estrutura CSS

```css
/* Mobile (padrão) */
.pratos-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: 10px;
}

.menu ul {
  flex-direction: column;
}

/* Tablet - a partir de 768px */
@media (min-width: 768px) {
  .pratos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  }
  
  .menu ul {
    flex-direction: row;
  }
}

/* Desktop - a partir de 1024px */
@media (min-width: 1024px) {
  .pratos-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 40px;
  }
}
```

## Checklist

- [ ] Estilos base são para mobile
- [ ] Media query para tablet (768px)
- [ ] Media query para desktop (1024px)
- [ ] Testei no DevTools em diferentes tamanhos
- [ ] Fontes ajustam de tamanho
- [ ] Espaçamentos aumentam em telas maiores

## Teste

Abra o DevTools (F12) e:
1. Clique no ícone de dispositivo móvel
2. Teste em diferentes tamanhos
3. Verifique se o layout se adapta bem

## Bônus

- Adicione breakpoint para desktop grande (1440px)
- Ajuste tamanhos de fonte responsivamente
- Esconda/mostre elementos em diferentes tamanhos
- Use `clamp()` para tamanhos fluidos
