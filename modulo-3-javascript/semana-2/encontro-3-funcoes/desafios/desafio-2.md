# Desafio 2 - Sistema de Pedidos com Funções

## 🎯 Objetivo

Criar um sistema completo de pedidos de restaurante usando funções para organizar o código e facilitar a manutenção.

---

## 📋 Requisitos

### Obrigatórios:
- [ ] Criar um arquivo HTML com JavaScript
- [ ] Criar pelo menos **8 funções diferentes**
- [ ] Sistema deve calcular pedidos completos
- [ ] Incluir cálculo de subtotal, taxa e desconto
- [ ] Mostrar pedido formatado no console
- [ ] Mostrar pedido formatado na página
- [ ] Usar funções arrow em pelo menos 2 casos
- [ ] Código bem organizado e comentado

### Funções Obrigatórias:

1. **`calcularSubtotal(preco, quantidade)`** - Calcula preço × quantidade
2. **`calcularTaxaServico(valor)`** - Calcula 10% de taxa
3. **`calcularDesconto(valor, porcentagem)`** - Calcula desconto
4. **`formatarPreco(valor)`** - Formata como R$ XX.XX
5. **`verificarDescontoElegivel(total)`** - Verifica se total > R$ 50
6. **`calcularTotal(subtotal, taxa, desconto)`** - Calcula total final
7. **`gerarItemPedido(nome, preco, qtd)`** - Cria objeto do item
8. **`exibirPedido(itens, total)`** - Mostra pedido formatado

---

## 📝 Instruções

### Passo 1: Estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Sistema de Pedidos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            background-color: #f5f5f5;
        }
        .pedido {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        /* Adicione mais estilos */
    </style>
</head>
<body>
    <div class="pedido">
        <h1>🍽️ Sistema de Pedidos</h1>
        <div id="pedido"></div>
    </div>
    
    <script>
        // Suas funções aqui
    </script>
</body>
</html>
```

### Passo 2: Criar as Funções Básicas

```javascript
// Função para calcular subtotal
function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}

// Função para calcular taxa de serviço (10%)
function calcularTaxaServico(valor) {
    return valor * 0.10;
}

// Função para calcular desconto
function calcularDesconto(valor, porcentagem) {
    return valor * (porcentagem / 100);
}

// Função para formatar preço (arrow function)
const formatarPreco = (valor) => {
    return `R$ ${valor.toFixed(2)}`;
};

// Função para verificar elegibilidade de desconto
const verificarDescontoElegivel = (total) => {
    return total > 50;
};

// Continue com as outras funções...
```

### Passo 3: Criar Função para Gerar Item

```javascript
function gerarItemPedido(nome, preco, quantidade) {
    let subtotal = calcularSubtotal(preco, quantidade);
    
    return {
        nome: nome,
        preco: preco,
        quantidade: quantidade,
        subtotal: subtotal
    };
}
```

### Passo 4: Processar Pedido Completo

```javascript
// Dados do pedido
const itens = [
    gerarItemPedido('Baião de Dois', 15.90, 2),
    gerarItemPedido('Carne de Sol', 22.50, 1),
    gerarItemPedido('Tapioca', 8.00, 3)
];

// Calcular subtotal geral
let subtotalGeral = 0;
itens.forEach(item => {
    subtotalGeral += item.subtotal;
});

// Calcular taxa
let taxa = calcularTaxaServico(subtotalGeral);

// Verificar e calcular desconto
let desconto = 0;
if (verificarDescontoElegivel(subtotalGeral)) {
    desconto = calcularDesconto(subtotalGeral, 5); // 5% de desconto
}

// Calcular total final
let totalFinal = calcularTotal(subtotalGeral, taxa, desconto);
```

### Passo 5: Exibir Pedido

```javascript
function exibirPedido(itens, subtotal, taxa, desconto, total) {
    console.log('=== PEDIDO ===');
    
    itens.forEach(item => {
        console.log(`${item.quantidade}x ${item.nome} - ${formatarPreco(item.subtotal)}`);
    });
    
    console.log('---');
    console.log('Subtotal:', formatarPreco(subtotal));
    console.log('Taxa de Serviço (10%):', formatarPreco(taxa));
    
    if (desconto > 0) {
        console.log('Desconto (5%):', formatarPreco(desconto));
    }
    
    console.log('TOTAL:', formatarPreco(total));
}
```

---

## 💡 Dicas

1. **Organize as funções por categoria:**
   ```javascript
   // === FUNÇÕES DE CÁLCULO ===
   function calcularSubtotal() { ... }
   function calcularTaxaServico() { ... }
   
   // === FUNÇÕES DE FORMATAÇÃO ===
   function formatarPreco() { ... }
   
   // === FUNÇÕES DE EXIBIÇÃO ===
   function exibirPedido() { ... }
   ```

2. **Use funções dentro de funções:**
   ```javascript
   function calcularTotal(subtotal, taxa, desconto) {
       return subtotal + taxa - desconto;
   }
   ```

3. **Teste cada função separadamente:**
   ```javascript
   console.log('Teste calcularSubtotal:');
   console.log(calcularSubtotal(10, 2)); // 20
   console.log(calcularSubtotal(15.90, 3)); // 47.70
   ```

4. **Use objetos para organizar dados:**
   ```javascript
   const item = {
       nome: 'Tapioca',
       preco: 8.00,
       quantidade: 2,
       subtotal: 16.00
   };
   ```

---

## 🤖 Uso da IA

### ✅ Pode usar IA para:
- Entender como criar objetos em JavaScript
- Ver exemplos de forEach
- Aprender sobre arrow functions
- Tirar dúvidas sobre organização de código

### ❌ NÃO use IA para:
- Escrever todo o sistema
- Copiar código sem entender a lógica

### 💬 Prompts úteis:

```
Como criar e usar objetos em JavaScript?
```

```
Explique o método forEach em JavaScript
```

```
Diferença entre function e arrow function
```

---

## ✅ Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| Criou as 8 funções obrigatórias | 3 |
| Funções calculam corretamente | 2 |
| Usa arrow functions | 1 |
| Exibe no console formatado | 1 |
| Exibe na página formatado | 2 |
| Código organizado e comentado | 1 |

**Total: 10 pontos**

---

## 📤 Como Entregar

1. Salve como `sistema-pedidos.html`
2. Teste com diferentes valores
3. Verifique todos os cálculos
4. Tire print da página e do console
5. Envie o arquivo HTML

---

## 🎨 Exemplo de Resultado

**No console:**
```
=== PEDIDO ===
2x Baião de Dois - R$ 31.80
1x Carne de Sol - R$ 22.50
3x Tapioca - R$ 24.00
---
Subtotal: R$ 78.30
Taxa de Serviço (10%): R$ 7.83
Desconto (5%): R$ 3.92
TOTAL: R$ 82.21
```

**Na página:**
```
🍽️ Sistema de Pedidos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PEDIDO #001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2x Baião de Dois ......... R$ 31.80
1x Carne de Sol .......... R$ 22.50
3x Tapioca ............... R$ 24.00

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subtotal ................. R$ 78.30
Taxa de Serviço (10%) .... R$ 7.83
Desconto (5%) ............ R$ 3.92
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL .................... R$ 82.21
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🚀 Desafio Extra

Quer ir além? Adicione:

1. **Função para adicionar item:**
   ```javascript
   function adicionarItem(pedido, nome, preco, qtd) {
       let item = gerarItemPedido(nome, preco, qtd);
       pedido.push(item);
       return pedido;
   }
   ```

2. **Função para remover item:**
   ```javascript
   function removerItem(pedido, indice) {
       pedido.splice(indice, 1);
       return pedido;
   }
   ```

3. **Função para calcular tempo de preparo:**
   ```javascript
   function calcularTempoPreparo(itens) {
       return itens.length * 10; // 10 min por item
   }
   ```

4. **Função para gerar número do pedido:**
   ```javascript
   const gerarNumeroPedido = () => {
       return Math.floor(Math.random() * 1000);
   };
   ```

5. **Botões interativos:**
   - Adicionar item
   - Remover item
   - Recalcular total
   - Limpar pedido

---

## 📊 Estrutura Sugerida

```javascript
// === DADOS ===
const cardapio = [
    { nome: 'Baião de Dois', preco: 15.90 },
    { nome: 'Carne de Sol', preco: 22.50 },
    { nome: 'Tapioca', preco: 8.00 }
];

// === FUNÇÕES DE CÁLCULO ===
function calcularSubtotal(preco, quantidade) { ... }
function calcularTaxaServico(valor) { ... }
function calcularDesconto(valor, porcentagem) { ... }
function calcularTotal(subtotal, taxa, desconto) { ... }

// === FUNÇÕES DE VALIDAÇÃO ===
const verificarDescontoElegivel = (total) => { ... };

// === FUNÇÕES DE FORMATAÇÃO ===
const formatarPreco = (valor) => { ... };

// === FUNÇÕES DE PEDIDO ===
function gerarItemPedido(nome, preco, qtd) { ... }
function exibirPedido(itens, subtotal, taxa, desconto, total) { ... }

// === PROCESSAMENTO ===
// Criar pedido
// Calcular valores
// Exibir resultado
```

---

**Boa sorte! 🎉**
