# Desafio 1 - Biblioteca de Funções Úteis

## 🎯 Objetivo

Criar uma "biblioteca" de funções úteis que podem ser reutilizadas em diferentes situações, praticando a criação de funções com parâmetros e return.

---

## 📋 Requisitos

### Obrigatórios:
- [ ] Criar um arquivo HTML com JavaScript
- [ ] Criar pelo menos **6 funções diferentes**
- [ ] Cada função deve ter um propósito claro
- [ ] Usar parâmetros em todas as funções
- [ ] Usar `return` para retornar valores
- [ ] Testar cada função com pelo menos 2 exemplos
- [ ] Mostrar todos os testes no console
- [ ] Mostrar resultados na página

### Funções Obrigatórias:

1. **`calcularMedia(nota1, nota2, nota3)`**
   - Calcula a média de 3 notas
   - Retorna a média

2. **`ehPar(numero)`**
   - Verifica se um número é par
   - Retorna `true` ou `false`

3. **`converterParaMaiusculas(texto)`**
   - Converte texto para maiúsculas
   - Retorna o texto convertido

4. **`calcularIdade(anoNascimento)`**
   - Calcula idade baseado no ano de nascimento
   - Retorna a idade

5. **`calcularDesconto(preco, porcentagem)`**
   - Calcula o preço com desconto
   - Retorna o preço final

6. **`gerarSaudacao(nome, periodo)`**
   - Gera saudação personalizada (Bom dia, Boa tarde, Boa noite)
   - Retorna a saudação completa

---

## 📝 Instruções

### Passo 1: Estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Biblioteca de Funções</title>
    <style>
        /* Adicione seu CSS aqui */
    </style>
</head>
<body>
    <h1>📚 Biblioteca de Funções Úteis</h1>
    <div id="resultados"></div>
    
    <script>
        // Suas funções aqui
    </script>
</body>
</html>
```

### Passo 2: Criar as Funções

```javascript
// Função 1: Calcular média
function calcularMedia(nota1, nota2, nota3) {
    let soma = nota1 + nota2 + nota3;
    let media = soma / 3;
    return media;
}

// Função 2: Verificar se é par
function ehPar(numero) {
    return numero % 2 === 0;
}

// Continue com as outras funções...
```

### Passo 3: Testar as Funções

```javascript
// Testar calcularMedia
console.log('=== CALCULAR MÉDIA ===');
let media1 = calcularMedia(8, 7, 9);
console.log('Média de 8, 7, 9:', media1);

let media2 = calcularMedia(6, 5, 7);
console.log('Média de 6, 5, 7:', media2);

// Testar ehPar
console.log('\n=== VERIFICAR PAR ===');
console.log('10 é par?', ehPar(10));
console.log('7 é par?', ehPar(7));

// Continue testando as outras...
```

### Passo 4: Mostrar na Página

```javascript
const div = document.getElementById('resultados');
div.innerHTML = `
    <h2>Resultados dos Testes</h2>
    <p>Média de 8, 7, 9: ${media1.toFixed(2)}</p>
    <p>10 é par? ${ehPar(10)}</p>
    <!-- Continue com os outros -->
`;
```

---

## 💡 Dicas

1. **Use nomes descritivos:**
   ```javascript
   // ❌ Ruim
   function calc(a, b) { ... }
   
   // ✅ Bom
   function calcularMedia(nota1, nota2) { ... }
   ```

2. **Sempre use return:**
   ```javascript
   function somar(a, b) {
       return a + b; // Retorna o resultado
   }
   ```

3. **Teste com valores diferentes:**
   ```javascript
   console.log(calcularMedia(10, 10, 10)); // 10
   console.log(calcularMedia(5, 7, 9));    // 7
   console.log(calcularMedia(0, 0, 0));    // 0
   ```

4. **Adicione comentários:**
   ```javascript
   // Calcula a média de três notas
   function calcularMedia(nota1, nota2, nota3) {
       let soma = nota1 + nota2 + nota3;
       return soma / 3;
   }
   ```

---

## 🤖 Uso da IA

### ✅ Pode usar IA para:
- Entender como funcionam operações específicas
- Ver exemplos de funções similares
- Aprender sobre métodos de string (toUpperCase, etc.)
- Tirar dúvidas sobre sintaxe

### ❌ NÃO use IA para:
- Escrever todas as funções
- Copiar código sem entender

### 💬 Prompts úteis:

```
Como verificar se um número é par em JavaScript?
```

```
Explique o operador % (módulo) em JavaScript
```

```
Como converter texto para maiúsculas em JavaScript?
```

---

## ✅ Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| Criou as 6 funções obrigatórias | 3 |
| Todas as funções usam return | 2 |
| Testou cada função com 2+ exemplos | 2 |
| Mostrou resultados no console | 1 |
| Mostrou resultados na página | 1 |
| Código organizado e comentado | 1 |

**Total: 10 pontos**

---

## 📤 Como Entregar

1. Salve como `biblioteca-funcoes.html`
2. Teste todas as funções
3. Verifique o console
4. Tire print da página e do console
5. Envie o arquivo HTML

---

## 🎨 Exemplo de Resultado

**No console:**
```
=== CALCULAR MÉDIA ===
Média de 8, 7, 9: 8
Média de 6, 5, 7: 6

=== VERIFICAR PAR ===
10 é par? true
7 é par? false

=== CONVERTER MAIÚSCULAS ===
"olá" → "OLÁ"
"javascript" → "JAVASCRIPT"

=== CALCULAR IDADE ===
Nasceu em 2008: 16 anos
Nasceu em 2000: 24 anos

=== CALCULAR DESCONTO ===
R$ 100 com 10% desconto: R$ 90.00
R$ 50 com 20% desconto: R$ 40.00

=== GERAR SAUDAÇÃO ===
Bom dia, Maria!
Boa noite, João!
```

---

## 🚀 Desafio Extra

Quer ir além? Crie mais funções:

1. **`calcularIMC(peso, altura)`**
   - Calcula o IMC (peso / altura²)
   - Retorna o valor do IMC

2. **`contarVogais(texto)`**
   - Conta quantas vogais tem no texto
   - Retorna o número de vogais

3. **`inverterTexto(texto)`**
   - Inverte o texto ("abc" → "cba")
   - Retorna o texto invertido

4. **`gerarEmail(nome, sobrenome)`**
   - Gera email: nome.sobrenome@email.com
   - Retorna o email

5. **`calcularGorjeta(valor, porcentagem)`**
   - Calcula gorjeta e total
   - Retorna objeto com gorjeta e total

---

## 📊 Exemplo de Implementação

```javascript
// Exemplo completo de uma função

function calcularDesconto(preco, porcentagem) {
    // Calcular o valor do desconto
    let valorDesconto = preco * (porcentagem / 100);
    
    // Calcular o preço final
    let precoFinal = preco - valorDesconto;
    
    // Retornar o preço final
    return precoFinal;
}

// Testar a função
let preco1 = calcularDesconto(100, 10);
console.log('R$ 100 com 10% desconto:', preco1); // 90

let preco2 = calcularDesconto(50, 20);
console.log('R$ 50 com 20% desconto:', preco2); // 40
```

---

**Boa sorte! 🎉**
