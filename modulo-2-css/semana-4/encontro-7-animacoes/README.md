# Encontro 7 - Transições e Animações

## Objetivos
- Aprender a criar transições suaves
- Criar animações com @keyframes
- Aplicar efeitos de forma acessível

## Teoria (30 min)

### Transições CSS

```css
.botao {
  background-color: #d2691e;
  transition: background-color 0.3s ease;
}

.botao:hover {
  background-color: #8b4513;
}
```

**Propriedades:**
- `transition-property`: O que animar
- `transition-duration`: Duração
- `transition-timing-function`: Curva de animação
- `transition-delay`: Atraso

### Animações com @keyframes

```css
@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.elemento {
  animation: aparecer 0.5s ease;
}
```

### Boas Práticas
- Use animações sutis
- Não exagere (pode distrair)
- Considere acessibilidade (prefers-reduced-motion)
- Teste a performance

## Prática (1h30)

1. Adicionar efeitos de hover nos itens
2. Criar animação de entrada
3. Animar destaque de promoção
4. Testar em diferentes dispositivos

Veja os exemplos na pasta `exemplos/` e complete os desafios na pasta `desafios/`.

## Tarefa de Casa

Aplicar transições/efeitos sutis ao cardápio e testar em diferentes dispositivos.

## Uso de IA

- Peça exemplos de animações básicas
- Pergunte se a animação faz sentido no contexto
- Peça sugestões de efeitos sutis
