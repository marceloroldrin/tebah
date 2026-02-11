# Encontro 7 - Projeto: Cardápio Digital Interativo

## 📋 Informações do Encontro

- **Módulo:** 3 - JavaScript: Lógica e Interatividade
- **Semana:** 4
- **Duração:** 2 horas
- **Pré-requisitos:** Encontros 1-6

---

## 🎯 Objetivos de Aprendizado

- ✅ Integrar HTML, CSS e JavaScript
- ✅ Criar projeto completo e funcional
- ✅ Aplicar todos os conceitos aprendidos
- ✅ Desenvolver cardápio digital interativo

---

## 📚 Projeto: Cardápio Digital

### Funcionalidades:

1. **Exibir produtos do cardápio**
2. **Adicionar itens ao pedido**
3. **Calcular total automaticamente**
4. **Remover itens do pedido**
5. **Finalizar pedido**

### Estrutura de Dados:

```javascript
const cardapio = [
    { id: 1, nome: 'Baião de Dois', preco: 15.90, categoria: 'Pratos' },
    { id: 2, nome: 'Carne de Sol', preco: 22.50, categoria: 'Pratos' },
    { id: 3, nome: 'Tapioca', preco: 8.00, categoria: 'Lanches' },
    { id: 4, nome: 'Suco Natural', preco: 6.00, categoria: 'Bebidas' }
];

let pedido = [];
```

### Funções Principais:

```javascript
function exibirCardapio() {
    // Renderizar produtos na tela
}

function adicionarAoPedido(id) {
    // Adicionar produto ao pedido
}

function removerDoPedido(indice) {
    // Remover item do pedido
}

function calcularTotal() {
    // Calcular valor total
}

function finalizarPedido() {
    // Processar pedido final
}
```

---

## 💻 Desenvolvimento

### Passo 1: HTML Estrutura

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cardápio Digital</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🍽️ Cardápio Digital</h1>
        
        <div class="cardapio" id="cardapio"></div>
        
        <div class="pedido">
            <h2>Seu Pedido</h2>
            <div id="itensPedido"></div>
            <div class="total">
                <strong>Total: R$ <span id="total">0.00</span></strong>
            </div>
            <button onclick="finalizarPedido()">Finalizar Pedido</button>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### Passo 2: CSS Estilização

```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial; padding: 20px; background: #f5f5f5; }
.container { max-width: 1200px; margin: 0 auto; }
h1 { text-align: center; color: #333; margin-bottom: 30px; }
.cardapio { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
.produto { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.produto h3 { color: #2196F3; margin-bottom: 10px; }
.produto .preco { font-size: 24px; color: #4CAF50; margin: 10px 0; }
.produto button { width: 100%; padding: 10px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; }
.pedido { background: white; padding: 20px; border-radius: 10px; }
.item-pedido { display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #eee; }
.total { font-size: 24px; text-align: right; margin: 20px 0; }
```

### Passo 3: JavaScript Lógica

```javascript
const cardapio = [
    { id: 1, nome: 'Baião de Dois', preco: 15.90, categoria: 'Pratos' },
    { id: 2, nome: 'Carne de Sol', preco: 22.50, categoria: 'Pratos' },
    { id: 3, nome: 'Tapioca', preco: 8.00, categoria: 'Lanches' },
    { id: 4, nome: 'Suco Natural', preco: 6.00, categoria: 'Bebidas' }
];

let pedido = [];

function exibirCardapio() {
    const divCardapio = document.getElementById('cardapio');
    divCardapio.innerHTML = '';
    
    cardapio.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.categoria}</p>
            <div class="preco">R$ ${produto.preco.toFixed(2)}</div>
            <button onclick="adicionarAoPedido(${produto.id})">Adicionar</button>
        `;
        divCardapio.appendChild(div);
    });
}

function adicionarAoPedido(id) {
    const produto = cardapio.find(p => p.id === id);
    pedido.push(produto);
    atualizarPedido();
}

function removerDoPedido(indice) {
    pedido.splice(indice, 1);
    atualizarPedido();
}

function atualizarPedido() {
    const divPedido = document.getElementById('itensPedido');
    divPedido.innerHTML = '';
    
    pedido.forEach((item, indice) => {
        const div = document.createElement('div');
        div.className = 'item-pedido';
        div.innerHTML = `
            <span>${item.nome}</span>
            <span>R$ ${item.preco.toFixed(2)}</span>
            <button onclick="removerDoPedido(${indice})">X</button>
        `;
        divPedido.appendChild(div);
    });
    
    calcularTotal();
}

function calcularTotal() {
    const total = pedido.reduce((sum, item) => sum + item.preco, 0);
    document.getElementById('total').textContent = total.toFixed(2);
}

function finalizarPedido() {
    if (pedido.length === 0) {
        alert('Adicione itens ao pedido!');
        return;
    }
    
    alert(`Pedido finalizado! Total: R$ ${calcularTotal()}`);
    pedido = [];
    atualizarPedido();
}

exibirCardapio();
```

---

## 🏠 Para Casa

### Melhorias Sugeridas:
- [ ] Adicionar quantidade de cada item
- [ ] Filtrar por categoria
- [ ] Adicionar imagens dos produtos
- [ ] Salvar pedido no localStorage
- [ ] Adicionar animações

---

## 🔗 Navegação

- [⬅️ Encontro Anterior - Manipulação DOM](../../semana-3/encontro-6-manipulacao-dom/)
- [➡️ Próximo Encontro - Revisão](../encontro-8-revisao/)
- [📚 Voltar ao Módulo 3](../../)

---

**Parabéns pelo projeto! 🎉**
