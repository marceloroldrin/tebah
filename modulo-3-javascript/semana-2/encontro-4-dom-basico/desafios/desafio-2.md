# Desafio 2 - Gerador de Cards

## 🎯 Objetivo
Criar um gerador de cards de produtos usando `createElement`.

## 📋 Requisitos
- [ ] Input para nome do produto
- [ ] Input para preço
- [ ] Botão "Adicionar Card"
- [ ] Criar elemento `div` dinamicamente
- [ ] Adicionar classes CSS
- [ ] Exibir cards na página
- [ ] Pelo menos 3 cards criados

## 💡 Dica
```javascript
function criarCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h3>${nome}</h3><p>R$ ${preco}</p>`;
    container.appendChild(card);
}
```

**Boa sorte! 🎉**
