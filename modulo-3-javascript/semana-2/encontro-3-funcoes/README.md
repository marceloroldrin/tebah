# Encontro 3 - Funções em JavaScript

## 📋 Informações do Encontro

- **Módulo:** 3 - JavaScript: Lógica e Interatividade
- **Semana:** 2
- **Duração:** 2 horas
- **Pré-requisitos:** Encontro 2 - Variáveis e Tipos de Dados

---

## 🎯 Objetivos de Aprendizado

Ao final deste encontro, você será capaz de:

- ✅ Entender o que são funções e por que são importantes
- ✅ Criar funções com e sem parâmetros
- ✅ Usar return para retornar valores
- ✅ Chamar funções e usar seus resultados
- ✅ Criar funções arrow (=>)
- ✅ Entender escopo de variáveis
- ✅ Aplicar funções em situações práticas

---

## 📚 Teoria (30-40 min)

### O que são Funções?

Funções são como **receitas** ou **máquinas** que fazem tarefas específicas. Você define a função uma vez e pode usá-la quantas vezes quiser!

**Analogia:** Imagine uma máquina de suco:
- Você coloca frutas (entrada)
- A máquina processa
- Sai o suco (saída)

```javascript
function fazerSuco(fruta) {
    return `Suco de ${fruta}`;
}

let meuSuco = fazerSuco('laranja');
console.log(meuSuco); // Suco de laranja
```

### Criando Funções

**Sintaxe básica:**
```javascript
function nomeDaFuncao() {
    // código que a função executa
}
```

**Exemplo simples:**
```javascript
function saudar() {
    console.log('Olá, mundo!');
}

saudar(); // Chama a função
```

### Funções com Parâmetros

Parâmetros são **informações** que você passa para a função:

```javascript
function saudar(nome) {
    console.log(`Olá, ${nome}!`);
}

saudar('Maria'); // Olá, Maria!
saudar('João');  // Olá, João!
```

**Múltiplos parâmetros:**
```javascript
function somar(a, b) {
    let resultado = a + b;
    console.log(resultado);
}

somar(5, 3);  // 8
somar(10, 7); // 17
```

### Return - Retornando Valores

Use `return` para a função **devolver** um valor:

```javascript
function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 3);
console.log(resultado); // 8

// Pode usar direto em outras operações
let total = somar(10, 5) + somar(3, 2);
console.log(total); // 20
```

**Diferença entre console.log e return:**
```javascript
// Com console.log (apenas mostra)
function somar1(a, b) {
    console.log(a + b);
}
let x = somar1(5, 3); // Mostra 8
console.log(x); // undefined (não retornou nada)

// Com return (devolve o valor)
function somar2(a, b) {
    return a + b;
}
let y = somar2(5, 3); // Não mostra nada
console.log(y); // 8 (retornou o valor)
```

### Funções Arrow (=>)

Uma forma mais curta de escrever funções:

```javascript
// Função tradicional
function somar(a, b) {
    return a + b;
}

// Função arrow
const somar = (a, b) => {
    return a + b;
};

// Função arrow super curta (quando tem só return)
const somar = (a, b) => a + b;
```

**Exemplos:**
```javascript
// Com um parâmetro
const dobro = numero => numero * 2;
console.log(dobro(5)); // 10

// Com múltiplos parâmetros
const saudar = (nome, idade) => `Olá ${nome}, você tem ${idade} anos`;
console.log(saudar('Maria', 16));

// Sem parâmetros
const dizerOi = () => 'Oi!';
console.log(dizerOi());
```

### Escopo de Variáveis

Variáveis dentro de funções são **locais** (só existem dentro da função):

```javascript
function teste() {
    let dentroFuncao = 'Só existe aqui';
    console.log(dentroFuncao); // Funciona
}

teste();
console.log(dentroFuncao); // ERRO! Não existe fora da função
```

**Variáveis globais vs locais:**
```javascript
let global = 'Visível em todo lugar';

function exemplo() {
    let local = 'Só dentro da função';
    console.log(global); // Funciona
    console.log(local);  // Funciona
}

exemplo();
console.log(global); // Funciona
console.log(local);  // ERRO!
```

### Funções Práticas

**Calcular desconto:**
```javascript
function calcularDesconto(preco, desconto) {
    let valorDesconto = preco * (desconto / 100);
    let precoFinal = preco - valorDesconto;
    return precoFinal;
}

let precoComDesconto = calcularDesconto(100, 10);
console.log(precoComDesconto); // 90
```

**Validar idade:**
```javascript
function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

console.log(ehMaiorDeIdade(20)); // true
console.log(ehMaiorDeIdade(15)); // false
```

---

## 💻 Prática (60-80 min)

### Exercício 1: Primeiras Funções

**Objetivo:** Criar e usar funções básicas.

**Código:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 1 - Funções Básicas</title>
</head>
<body>
    <h1>Praticando Funções</h1>
    <p>Abra o console (F12)</p>
    
    <script>
        // Função sem parâmetros
        function dizerOla() {
            console.log('Olá!');
        }
        
        dizerOla();
        dizerOla();
        dizerOla();
        
        // Função com parâmetro
        function saudar(nome) {
            console.log(`Olá, ${nome}!`);
        }
        
        saudar('Maria');
        saudar('João');
        saudar('Ana');
        
        // Função com múltiplos parâmetros
        function apresentar(nome, idade, cidade) {
            console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
        }
        
        apresentar('Carlos', 16, 'Juazeiro');
        apresentar('Beatriz', 17, 'Petrolina');
        
        // Função com return
        function somar(a, b) {
            return a + b;
        }
        
        let resultado1 = somar(5, 3);
        let resultado2 = somar(10, 7);
        let resultado3 = somar(resultado1, resultado2);
        
        console.log('5 + 3 =', resultado1);
        console.log('10 + 7 =', resultado2);
        console.log('Total:', resultado3);
    </script>
</body>
</html>
```

**Resultado esperado:**
Mensagens no console mostrando saudações e cálculos.

### Exercício 2: Calculadora com Funções

**Objetivo:** Criar uma calculadora usando funções.

**Código:**
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
            background-color: #f0f0f0;
        }
        .calculadora {
            background-color: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 400px;
            margin: 0 auto;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 15px 30px;
            margin: 10px;
            font-size: 18px;
            border-radius: 8px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        #resultado {
            font-size: 32px;
            margin: 20px 0;
            padding: 20px;
            background-color: #e8f5e9;
            border-radius: 10px;
            min-height: 50px;
        }
    </style>
</head>
<body>
    <div class="calculadora">
        <h1>🧮 Calculadora</h1>
        
        <div id="resultado">0</div>
        
        <button onclick="calcular('somar')">➕ Somar</button>
        <button onclick="calcular('subtrair')">➖ Subtrair</button>
        <button onclick="calcular('multiplicar')">✖️ Multiplicar</button>
        <button onclick="calcular('dividir')">➗ Dividir</button>
    </div>
    
    <script>
        // Funções de operações
        function somar(a, b) {
            return a + b;
        }
        
        function subtrair(a, b) {
            return a - b;
        }
        
        function multiplicar(a, b) {
            return a * b;
        }
        
        function dividir(a, b) {
            if (b === 0) {
                return 'Erro: divisão por zero!';
            }
            return a / b;
        }
        
        // Função principal
        function calcular(operacao) {
            const num1 = 10;
            const num2 = 5;
            let resultado;
            
            if (operacao === 'somar') {
                resultado = somar(num1, num2);
            } else if (operacao === 'subtrair') {
                resultado = subtrair(num1, num2);
            } else if (operacao === 'multiplicar') {
                resultado = multiplicar(num1, num2);
            } else if (operacao === 'dividir') {
                resultado = dividir(num1, num2);
            }
            
            document.getElementById('resultado').textContent = resultado;
            console.log(`${num1} ${operacao} ${num2} = ${resultado}`);
        }
    </script>
</body>
</html>
```

**Resultado esperado:**
Calculadora interativa que mostra resultados na página.

### Exercício 3: Funções para Cardápio

**Objetivo:** Criar funções para calcular preços de um cardápio.

**Código:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exercício 3 - Funções Cardápio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 15px;
        }
        h1 {
            color: #667eea;
            text-align: center;
        }
        .prato {
            background-color: #f8f9fa;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        .preco {
            color: #764ba2;
            font-weight: bold;
            font-size: 18px;
        }
        .total {
            background-color: #667eea;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 24px;
            border-radius: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🍽️ Cardápio com Funções</h1>
        <div id="pedido"></div>
    </div>
    
    <script>
        // Função para calcular subtotal
        function calcularSubtotal(preco, quantidade) {
            return preco * quantidade;
        }
        
        // Função para calcular taxa de serviço
        function calcularTaxaServico(valor) {
            return valor * 0.10; // 10%
        }
        
        // Função para calcular desconto
        function calcularDesconto(valor, porcentagem) {
            return valor * (porcentagem / 100);
        }
        
        // Função para formatar preço
        function formatarPreco(valor) {
            return `R$ ${valor.toFixed(2)}`;
        }
        
        // Dados do pedido
        const pratos = [
            { nome: 'Baião de Dois', preco: 15.90, quantidade: 2 },
            { nome: 'Carne de Sol', preco: 22.50, quantidade: 1 },
            { nome: 'Tapioca', preco: 8.00, quantidade: 3 }
        ];
        
        // Calcular totais
        let subtotalGeral = 0;
        let htmlPratos = '';
        
        pratos.forEach(prato => {
            let subtotal = calcularSubtotal(prato.preco, prato.quantidade);
            subtotalGeral += subtotal;
            
            htmlPratos += `
                <div class="prato">
                    <strong>${prato.quantidade}x ${prato.nome}</strong>
                    <div class="preco">${formatarPreco(subtotal)}</div>
                </div>
            `;
            
            console.log(`${prato.quantidade}x ${prato.nome} = ${formatarPreco(subtotal)}`);
        });
        
        // Calcular taxa e desconto
        let taxa = calcularTaxaServico(subtotalGeral);
        let desconto = subtotalGeral > 50 ? calcularDesconto(subtotalGeral, 5) : 0;
        let totalFinal = subtotalGeral + taxa - desconto;
        
        // Mostrar no console
        console.log('---');
        console.log('Subtotal:', formatarPreco(subtotalGeral));
        console.log('Taxa de Serviço (10%):', formatarPreco(taxa));
        if (desconto > 0) {
            console.log('Desconto (5%):', formatarPreco(desconto));
        }
        console.log('TOTAL:', formatarPreco(totalFinal));
        
        // Mostrar na página
        document.getElementById('pedido').innerHTML = `
            ${htmlPratos}
            <div class="prato">
                <strong>Subtotal</strong>
                <div class="preco">${formatarPreco(subtotalGeral)}</div>
            </div>
            <div class="prato">
                <strong>Taxa de Serviço (10%)</strong>
                <div class="preco">${formatarPreco(taxa)}</div>
            </div>
            ${desconto > 0 ? `
                <div class="prato">
                    <strong>Desconto (5%)</strong>
                    <div class="preco">-${formatarPreco(desconto)}</div>
                </div>
            ` : ''}
            <div class="total">
                TOTAL: ${formatarPreco(totalFinal)}
            </div>
        `;
    </script>
</body>
</html>
```

**Resultado esperado:**
Página mostrando pedido com cálculos usando funções.

---

## 🏠 Para Casa

### Tarefa 1: Conversor de Temperatura

**Descrição:** Criar funções para converter temperaturas.

**Requisitos:**
- [ ] Criar função `celsiusParaFahrenheit(celsius)`
- [ ] Criar função `fahrenheitParaCelsius(fahrenheit)`
- [ ] Testar com pelo menos 3 valores diferentes
- [ ] Mostrar resultados no console e na página
- [ ] Usar template strings nas mensagens

**Fórmulas:**
- Celsius para Fahrenheit: `(C × 9/5) + 32`
- Fahrenheit para Celsius: `(F - 32) × 5/9`

**Dica:** Use `.toFixed(1)` para mostrar 1 casa decimal.

### Tarefa 2: Validador de Dados

**Descrição:** Criar funções que validam informações.

**Requisitos:**
- [ ] Criar função `validarIdade(idade)` - retorna true se >= 13
- [ ] Criar função `validarNome(nome)` - retorna true se tem mais de 2 caracteres
- [ ] Criar função `validarEmail(email)` - retorna true se contém @
- [ ] Testar cada função com valores válidos e inválidos
- [ ] Mostrar resultados no console

**Exemplo:**
```javascript
console.log(validarIdade(16));  // true
console.log(validarIdade(10));  // false
console.log(validarNome('Ana')); // true
console.log(validarNome('A'));   // false
```

---

## 🤖 Uso da IA neste Encontro

### ❌ NÃO use IA para:
- Escrever todo o código das tarefas
- Copiar funções prontas sem entender

### ✅ USE IA para:
- Entender a diferença entre parâmetros e argumentos
- Ver exemplos de funções arrow
- Entender escopo de variáveis
- Aprender sobre return

### 💡 Prompts Sugeridos

**Para entender conceitos:**
```
Explique a diferença entre console.log e return em funções JavaScript
```

**Para ver exemplos:**
```
Me dê 5 exemplos práticos de funções em JavaScript
```

**Para aprender arrow functions:**
```
Explique funções arrow em JavaScript de forma simples
```

---

## ✅ Checklist de Aprendizado

Antes de avançar, certifique-se de que você:

- [ ] Sabe criar funções básicas
- [ ] Entende como usar parâmetros
- [ ] Sabe usar return para retornar valores
- [ ] Consegue chamar funções e usar seus resultados
- [ ] Conhece funções arrow
- [ ] Entende escopo de variáveis (local vs global)
- [ ] Consegue criar funções para resolver problemas práticos

---

## 📚 Recursos Adicionais

### Documentação
- [MDN - Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info - Funções](https://javascript.info/function-basics)
- [MDN - Arrow Functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Vídeos Recomendados
- [Curso em Vídeo - Funções](https://www.youtube.com/watch?v=mc3TKp2XzhI)
- [Rocketseat - Arrow Functions](https://www.youtube.com/watch?v=7S_AP_kPGgs)

### Artigos
- [W3Schools - JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
- [W3Schools - Arrow Functions](https://www.w3schools.com/js/js_arrow_function.asp)

---

## 🔗 Navegação

- [⬅️ Encontro Anterior - Variáveis e Tipos](../../semana-1/encontro-2-variaveis-tipos/)
- [➡️ Próximo Encontro - DOM Básico](../encontro-4-dom-basico/)
- [📚 Voltar ao Módulo 3](../../)
- [🏠 Início do Curso](../../../)

---

**Dúvidas?** Pratique criando suas próprias funções e use a IA para esclarecer conceitos! 🚀
