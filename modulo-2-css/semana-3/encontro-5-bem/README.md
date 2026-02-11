# Encontro 5 - Padrão BEM

## Objetivos
- Entender o padrão BEM
- Aprender a nomear classes de forma organizada
- Refatorar o CSS do cardápio

## Teoria (40 min)

### O que é BEM?
BEM (Block Element Modifier) é uma metodologia para nomear classes CSS de forma consistente.

### Estrutura BEM

**Block (Bloco)** - Componente independente
```css
.card { }
```

**Element (Elemento)** - Parte do bloco
```css
.card__title { }
.card__description { }
.card__price { }
```

**Modifier (Modificador)** - Variação do bloco ou elemento
```css
.card--featured { }
.card__title--large { }
```

### Exemplo Completo

```html
<div class="prato-card prato-card--destaque">
  <h3 class="prato-card__titulo">Baião de Dois</h3>
  <p class="prato-card__descricao">Delicioso prato típico</p>
  <span class="prato-card__preco">R$ 25,00</span>
</div>
```

### Por que usar BEM?
- Organização clara
- Fácil manutenção
- Trabalho em equipe
- Evita conflitos de CSS

## Prática (1h20)

1. Analisar CSS existente
2. Renomear classes para BEM
3. Ajustar HTML
4. Criar "mapa" de componentes

Veja os exemplos na pasta `exemplos/` e complete os desafios na pasta `desafios/`.

## Tarefa de Casa

Concluir refatoração do CSS com BEM e criar lista de componentes.

## Uso de IA

- Peça para avaliar se os nomes seguem BEM
- Peça sugestões de nomes melhores
