# Encontro 2 - Variáveis e Tipos de Dados

## 📋 Informações do Encontro

- **Módulo:** 3 - JavaScript: Lógica e Interatividade
- **Semana:** 1
- **Duração:** 2 horas
- **Pré-requisitos:** Encontro 1 - Introdução ao JavaScript

---

## 🎯 Objetivos de Aprendizado

Ao final deste encontro, você será capaz de:

- ✅ Entender o que são variáveis e para que servem
- ✅ Criar variáveis usando let, const e var
- ✅ Conhecer os tipos de dados em JavaScript
- ✅ Trabalhar com strings, numbers e booleans
- ✅ Fazer operações com variáveis
- ✅ Concatenar strings e interpolar valores
- ✅ Converter tipos de dados

---

## 📚 Teoria (30-40 min)

### O que são Variáveis?

Variáveis são como **caixas** onde guardamos informações. Imagine que você tem várias caixas em casa, cada uma com um nome e guardando algo diferente:

- Caixa "nome" → guarda "João"
- Caixa "idade" → guarda 16
- Caixa "estudante" → guarda true (verdadeiro)

Em JavaScript, criamos variáveis assim:

```javascript
let nome = 'João';
let idade = 16;
let estudante = true;
```

### let, const e var

Existem 3 formas de criar variáveis:

**1. let - Variável que pode mudar**
```javascript
let nome = 'Maria';
nome = 'João'; // Pode mudar
console.log(nome); // João
```

**2. const - Variável que NÃO pode mudar (constante)**
```javascript
const PI = 3.14;
// PI = 3.15; // ERRO! Não pode mudar
```

**3. var - Forma antiga (evite usar)**
```javascript
var cidade = 'Salvador';
// Use let ou const ao invés de var
```

**Regra de ouro:** Use `const` sempre que possível. Use `let` quando precisar mudar o valor.

### Tipos de Dados

JavaScript tem vários tipos de dados:

**1. String (Texto)**
```javascript
let nome = 'Maria';
let sobrenome = "Silva";
let frase = `Olá, meu nome é ${nome}`; // Template string
```

**2. Number (Números)**
```javascript
let idade = 16;
let preco = 19.90;
let negativo = -5;
```

**3. Boolean (Verdadeiro ou Falso)**
```javascript
let estudante = true;
let aprovado = false;
```

**4. Undefined (Não definido)**
```javascript
let semValor;
console.log(semValor); // undefined
```

**5. Null (Vazio intencional)**
```javascript
let vazio = null;
```

### Operações com Variáveis

**Operações Matemáticas:**
```javascript
let a = 10;
let b = 5;

console.log(a + b);  // 15 (soma)
console.log(a - b);  // 5 (subtração)
console.log(a * b);  // 50 (multiplicação)
console.log(a / b);  // 2 (divisão)
console.log(a % b);  // 0 (resto da divisão)
```

**Concatenação de Strings:**
```javascript
let nome = 'João';
let sobrenome = 'Silva';

// Forma 1: Com +
let nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto); // João Silva

// Forma 2: Template string (melhor)
let saudacao = `Olá, ${nome} ${sobrenome}!`;
console.log(saudacao); // Olá, João Silva!
```

### Conversão de Tipos

**String para Number:**
```javascript
let texto = '10';
let numero = Number(texto);
console.log(numero + 5); // 15
```

**Number para String:**
```javascript
let numero = 42;
let texto = String(numero);
console.log(texto + '5'); // '425'
```

### Verificar Tipo

```javascript
let nome = 'Maria';
let idade = 16;

console.log(typeof nome);  // string
console.log(typeof idade); // number
```

---

## 💻 Prática (60-80 min)

### Exercício 1: Criando e Usando Variáveis

**Objetivo:** Praticar a criação de variáveis e ver seus valores.

**Passos:**
1. Crie um arquivo `variaveis.html`
2. Adicione o código abaixo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 1 - Variáveis</title>
</head>
<body>
    <h1>Praticando Variáveis</h1>
    <p>Abra o console (F12) para ver os resultados!</p>
    
    <script>
        // Informações pessoais
        let nome = 'Seu Nome';
        let idade = 16;
        let cidade = 'Sua Cidade';
        const pais = 'Brasil';
        
        // Mostrar no console
        console.log('Nome:', nome);
        console.log('Idade:', idade);
        console.log('Cidade:', cidade);
        console.log('País:', pais);
        
        // Criar uma apresentação
        let apresentacao = `Olá! Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}, ${pais}.`;
        console.log(apresentacao);
        
        // Mudar valores
        idade = idade + 1;
        console.log('Idade no próximo ano:', idade);
    </script>
</body>
</html>
```

3. Abra no navegador e veja o console
4. Modifique os valores com suas informações

**Resultado esperado:**
Mensagens no console mostrando suas informações.

### Exercício 2: Calculadora Simples

**Objetivo:** Fazer operações matemáticas com variáveis.

**Passos:**
1. Crie um arquivo `calculadora.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 2 - Calculadora</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            text-align: center;
        }
        .resultado {
            font-size: 24px;
            margin: 20px;
            padding: 20px;
            background-color: #f0f0f0;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>Calculadora Simples</h1>
    
    <div id="resultados"></div>
    
    <script>
        // Números para calcular
        const numero1 = 10;
        const numero2 = 5;
        
        // Operações
        let soma = numero1 + numero2;
        let subtracao = numero1 - numero2;
        let multiplicacao = numero1 * numero2;
        let divisao = numero1 / numero2;
        
        // Mostrar no console
        console.log(`${numero1} + ${numero2} = ${soma}`);
        console.log(`${numero1} - ${numero2} = ${subtracao}`);
        console.log(`${numero1} × ${numero2} = ${multiplicacao}`);
        console.log(`${numero1} ÷ ${numero2} = ${divisao}`);
        
        // Mostrar na página
        const div = document.getElementById('resultados');
        div.innerHTML = `
            <div class="resultado">${numero1} + ${numero2} = ${soma}</div>
            <div class="resultado">${numero1} - ${numero2} = ${subtracao}</div>
            <div class="resultado">${numero1} × ${numero2} = ${multiplicacao}</div>
            <div class="resultado">${numero1} ÷ ${numero2} = ${divisao}</div>
        `;
    </script>
</body>
</html>
```

**Resultado esperado:**
Página mostrando os resultados das operações.

### Exercício 3: Cardápio com Preços

**Objetivo:** Usar variáveis para criar um cardápio com cálculos.

**Passos:**
1. Crie um arquivo `cardapio-precos.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 3 - Cardápio com Preços</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            max-width: 600px;
            margin: 0 auto;
        }
        .prato {
            padding: 15px;
            margin: 10px 0;
            background-color: #f9f9f9;
            border-left: 4px solid #4CAF50;
        }
        .preco {
            color: #4CAF50;
            font-weight: bold;
            font-size: 18px;
        }
        .total {
            margin-top: 20px;
            padding: 20px;
            background-color: #4CAF50;
            color: white;
            font-size: 24px;
            text-align: center;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>Cardápio do Restaurante</h1>
    
    <div id="cardapio"></div>
    <div id="total"></div>
    
    <script>
        // Pratos e preços
        const prato1 = 'Baião de Dois';
        const preco1 = 15.90;
        
        const prato2 = 'Carne de Sol';
        const preco2 = 22.50;
        
        const prato3 = 'Tapioca';
        const preco3 = 8.00;
        
        // Quantidade de cada prato
        let qtd1 = 2;
        let qtd2 = 1;
        let qtd3 = 3;
        
        // Calcular subtotais
        let subtotal1 = preco1 * qtd1;
        let subtotal2 = preco2 * qtd2;
        let subtotal3 = preco3 * qtd3;
        
        // Calcular total
        let total = subtotal1 + subtotal2 + subtotal3;
        
        // Mostrar no console
        console.log('=== PEDIDO ===');
        console.log(`${qtd1}x ${prato1} = R$ ${subtotal1.toFixed(2)}`);
        console.log(`${qtd2}x ${prato2} = R$ ${subtotal2.toFixed(2)}`);
        console.log(`${qtd3}x ${prato3} = R$ ${subtotal3.toFixed(2)}`);
        console.log(`TOTAL: R$ ${total.toFixed(2)}`);
        
        // Mostrar na página
        document.getElementById('cardapio').innerHTML = `
            <div class="prato">
                <strong>${qtd1}x ${prato1}</strong>
                <div class="preco">R$ ${subtotal1.toFixed(2)}</div>
            </div>
            <div class="prato">
                <strong>${qtd2}x ${prato2}</strong>
                <div class="preco">R$ ${subtotal2.toFixed(2)}</div>
            </div>
            <div class="prato">
                <strong>${qtd3}x ${prato3}</strong>
                <div class="preco">R$ ${subtotal3.toFixed(2)}</div>
            </div>
        `;
        
        document.getElementById('total').innerHTML = `
            <div class="total">TOTAL: R$ ${total.toFixed(2)}</div>
        `;
    </script>
</body>
</html>
```

**Resultado esperado:**
Página mostrando um pedido com cálculo de preços.

---

## 🏠 Para Casa

### Tarefa 1: Ficha Pessoal

**Descrição:** Crie uma página que mostra suas informações usando variáveis.

**Requisitos:**
- [ ] Criar arquivo HTML com JavaScript
- [ ] Usar pelo menos 6 variáveis diferentes
- [ ] Incluir: nome, idade, cidade, hobby, comida favorita, cor favorita
- [ ] Usar `const` para valores que não mudam
- [ ] Usar `let` para valores que podem mudar
- [ ] Mostrar tudo no console E na página
- [ ] Usar template strings para criar frases

**Dica:** Use `document.getElementById()` e `innerHTML` para mostrar na página.

### Tarefa 2: Calculadora de Gorjeta

**Descrição:** Crie uma calculadora que calcula gorjeta de restaurante.

**Requisitos:**
- [ ] Variável para o valor da conta
- [ ] Variável para a porcentagem de gorjeta (10%)
- [ ] Calcular o valor da gorjeta
- [ ] Calcular o total (conta + gorjeta)
- [ ] Mostrar todos os valores no console
- [ ] Mostrar na página de forma bonita
- [ ] Adicionar comentários explicando cada cálculo

**Exemplo:**
```
Conta: R$ 50.00
Gorjeta (10%): R$ 5.00
Total: R$ 55.00
```

---

## 🤖 Uso da IA neste Encontro

### ❌ NÃO use IA para:
- Escrever todo o código das tarefas
- Copiar soluções sem entender
- Pular a prática com variáveis

### ✅ USE IA para:
- Explicar a diferença entre let, const e var
- Entender tipos de dados
- Ver exemplos de template strings
- Aprender sobre conversão de tipos

### 💡 Prompts Sugeridos

**Para entender conceitos:**
```
Explique a diferença entre let e const em JavaScript de forma simples
```

**Para ver exemplos:**
```
Me dê 5 exemplos de uso de template strings em JavaScript
```

**Para revisar código:**
```
Revise este código e me diga se estou usando let e const corretamente:
[seu código]
```

---

## ✅ Checklist de Aprendizado

Antes de avançar, certifique-se de que você:

- [ ] Sabe criar variáveis com let e const
- [ ] Entende quando usar let vs const
- [ ] Conhece os tipos de dados básicos (string, number, boolean)
- [ ] Consegue fazer operações matemáticas
- [ ] Sabe concatenar strings
- [ ] Consegue usar template strings
- [ ] Sabe usar typeof para verificar tipos
- [ ] Entende como converter tipos de dados

---

## 📚 Recursos Adicionais

### Documentação
- [MDN - Variáveis](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables)
- [MDN - Tipos de Dados](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures)
- [JavaScript.info - Variáveis](https://javascript.info/variables)

### Vídeos Recomendados
- [Curso em Vídeo - Variáveis](https://www.youtube.com/watch?v=Vbabsye7mWo)
- [Rocketseat - Let, Const e Var](https://www.youtube.com/watch?v=GhUvMbD64H8)

### Artigos
- [W3Schools - JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
- [W3Schools - JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)

---

## 🔗 Navegação

- [⬅️ Encontro Anterior - Introdução ao JavaScript](../encontro-1-introducao-javascript/)
- [➡️ Próximo Encontro - Funções](../../semana-2/encontro-3-funcoes/)
- [📚 Voltar ao Módulo 3](../../)
- [🏠 Início do Curso](../../../)

---

**Dúvidas?** Revise a teoria, pratique muito e use a IA para esclarecer conceitos! 🚀
