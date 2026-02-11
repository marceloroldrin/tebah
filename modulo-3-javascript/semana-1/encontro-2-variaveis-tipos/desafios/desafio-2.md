# Desafio 2 - Calculadora de Pedido

## 🎯 Objetivo

Criar uma calculadora que simula um pedido de restaurante, calculando subtotais, desconto, taxa de serviço e total final.

---

## 📋 Requisitos

### Obrigatórios:
- [ ] Criar um arquivo HTML com JavaScript
- [ ] Definir pelo menos **3 pratos** com nomes e preços
- [ ] Definir a **quantidade** de cada prato
- [ ] Calcular o **subtotal** de cada prato (preço × quantidade)
- [ ] Calcular o **total** do pedido
- [ ] Calcular **10% de taxa de serviço**
- [ ] Calcular o **valor final** (total + taxa)
- [ ] Mostrar todos os cálculos no console
- [ ] Mostrar o pedido formatado na página
- [ ] Usar `const` para preços fixos
- [ ] Usar `let` para quantidades e totais

### Extras (opcional):
- [ ] Adicionar desconto de 5% se total > R$ 50
- [ ] Calcular troco (se cliente pagar com dinheiro)
- [ ] Adicionar estilo CSS bonito
- [ ] Criar um "recibo" formatado

---

## 📝 Instruções

### Passo 1: Estrutura HTML

Crie `calculadora-pedido.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Calculadora de Pedido</title>
    <style>
        /* Adicione seu CSS aqui */
    </style>
</head>
<body>
    <h1>🍽️ Calculadora de Pedido</h1>
    <div id="pedido"></div>
    
    <script>
        // Seu código aqui
    </script>
</body>
</html>
```

### Passo 2: Definir pratos e preços

```javascript
// Pratos (use const porque os preços não mudam)
const prato1 = 'Baião de Dois';
const preco1 = 15.90;

const prato2 = 'Carne de Sol';
const preco2 = 22.50;

const prato3 = 'Tapioca';
const preco3 = 8.00;

// Quantidades (use let porque podem mudar)
let qtd1 = 2;
let qtd2 = 1;
let qtd3 = 3;
```

### Passo 3: Calcular subtotais

```javascript
// Calcular quanto custa cada item
let subtotal1 = preco1 * qtd1;
let subtotal2 = preco2 * qtd2;
let subtotal3 = preco3 * qtd3;

// Calcular total do pedido
let total = subtotal1 + subtotal2 + subtotal3;
```

### Passo 4: Calcular taxa de serviço

```javascript
// Taxa de serviço de 10%
const taxaServico = 0.10; // 10% = 0.10
let valorTaxa = total * taxaServico;

// Total final
let totalFinal = total + valorTaxa;
```

### Passo 5: Mostrar resultados

```javascript
// No console
console.log('=== PEDIDO ===');
console.log(`${qtd1}x ${prato1} = R$ ${subtotal1.toFixed(2)}`);
// ... continue com os outros

// Na página
const divPedido = document.getElementById('pedido');
divPedido.innerHTML = `
    <p>${qtd1}x ${prato1} - R$ ${subtotal1.toFixed(2)}</p>
    <!-- Continue com os outros -->
    <hr>
    <p><strong>TOTAL: R$ ${totalFinal.toFixed(2)}</strong></p>
`;
```

---

## 💡 Dicas

1. **Use .toFixed(2) para formatar dinheiro:**
   ```javascript
   let preco = 15.9;
   console.log(preco.toFixed(2)); // 15.90
   ```

2. **Organize os cálculos:**
   ```javascript
   // 1. Definir dados
   const preco = 10.00;
   let quantidade = 2;
   
   // 2. Calcular
   let subtotal = preco * quantidade;
   
   // 3. Mostrar
   console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
   ```

3. **Porcentagem em JavaScript:**
   ```javascript
   // 10% de 100
   let valor = 100;
   let porcentagem = 0.10; // 10%
   let resultado = valor * porcentagem; // 10
   ```

4. **Adicione comentários:**
   ```javascript
   // Dados do pedido
   const prato = 'Tapioca';
   const preco = 8.00;
   
   // Quantidade pedida
   let quantidade = 3;
   
   // Cálculo do subtotal
   let subtotal = preco * quantidade;
   ```

---

## 🤖 Uso da IA

### ✅ Pode usar IA para:
- Entender como calcular porcentagens
- Aprender sobre `.toFixed()`
- Ver exemplos de formatação de números
- Tirar dúvidas sobre operações matemáticas

### ❌ NÃO use IA para:
- Escrever todo o código
- Copiar a solução completa

### 💬 Prompts úteis:

```
Como calcular porcentagem em JavaScript?
```

```
Como formatar números com 2 casas decimais em JavaScript?
```

```
Explique a diferença entre let e const com exemplo de calculadora
```

---

## ✅ Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| Define pratos e preços corretamente | 2 |
| Calcula subtotais | 2 |
| Calcula total do pedido | 2 |
| Calcula taxa de serviço | 2 |
| Mostra no console | 1 |
| Mostra na página formatado | 1 |

**Total: 10 pontos**

---

## 📤 Como Entregar

1. Salve como `calculadora-pedido.html`
2. Teste todos os cálculos
3. Verifique se os valores estão corretos
4. Tire print da página e do console
5. Envie o arquivo HTML

---

## 🎨 Exemplo de Resultado

**No console:**
```
=== PEDIDO ===
2x Baião de Dois = R$ 31.80
1x Carne de Sol = R$ 22.50
3x Tapioca = R$ 24.00
---
Subtotal: R$ 78.30
Taxa de Serviço (10%): R$ 7.83
TOTAL FINAL: R$ 86.13
```

**Na página:**
```
🍽️ Calculadora de Pedido

2x Baião de Dois - R$ 31.80
1x Carne de Sol - R$ 22.50
3x Tapioca - R$ 24.00
─────────────────────────
Subtotal: R$ 78.30
Taxa de Serviço (10%): R$ 7.83
─────────────────────────
TOTAL: R$ 86.13
```

---

## 🚀 Desafio Extra

Quer ir além? Tente adicionar:

1. **Desconto para pedidos grandes:**
   ```javascript
   let desconto = 0;
   if (total > 50) {
       desconto = total * 0.05; // 5% de desconto
       total = total - desconto;
   }
   ```

2. **Calcular troco:**
   ```javascript
   const valorPago = 100.00;
   let troco = valorPago - totalFinal;
   console.log(`Troco: R$ ${troco.toFixed(2)}`);
   ```

3. **Adicionar mais pratos:**
   - Suco
   - Sobremesa
   - Café

4. **Criar um recibo bonito:**
   - Cabeçalho com nome do restaurante
   - Data e hora
   - Número do pedido
   - Linha separadora
   - Mensagem de agradecimento

---

## 📊 Exemplo de Cálculo

```
Prato: Baião de Dois
Preço: R$ 15.90
Quantidade: 2
Subtotal: 15.90 × 2 = R$ 31.80

Total do pedido: R$ 78.30
Taxa de serviço (10%): 78.30 × 0.10 = R$ 7.83
Total final: 78.30 + 7.83 = R$ 86.13
```

---

**Boa sorte! 🎉**
