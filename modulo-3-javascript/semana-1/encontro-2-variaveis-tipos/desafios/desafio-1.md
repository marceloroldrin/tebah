# Desafio 1 - Perfil Pessoal Interativo

## 🎯 Objetivo

Criar uma página web que exibe suas informações pessoais usando variáveis JavaScript, demonstrando o uso correto de `let` e `const`.

---

## 📋 Requisitos

### Obrigatórios:
- [ ] Criar um arquivo HTML com JavaScript incorporado ou externo
- [ ] Usar pelo menos **8 variáveis diferentes**
- [ ] Incluir as seguintes informações:
  - Nome completo
  - Idade
  - Cidade
  - Estado
  - Hobby favorito
  - Comida favorita
  - Cor favorita
  - Sonho/objetivo
- [ ] Usar `const` para valores que não mudam
- [ ] Usar `let` para valores que podem mudar
- [ ] Mostrar todas as informações no **console**
- [ ] Mostrar todas as informações na **página HTML**
- [ ] Usar **template strings** para criar frases completas

### Extras (opcional):
- [ ] Adicionar estilo CSS para deixar bonito
- [ ] Usar emojis nas informações
- [ ] Criar uma apresentação formatada
- [ ] Adicionar uma foto ou avatar

---

## 📝 Instruções

### Passo 1: Criar o arquivo HTML

Crie um arquivo chamado `perfil.html` com a estrutura básica:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Meu Perfil</title>
</head>
<body>
    <h1>Meu Perfil</h1>
    <div id="perfil"></div>
    
    <script>
        // Seu código aqui
    </script>
</body>
</html>
```

### Passo 2: Criar as variáveis

Dentro da tag `<script>`, crie suas variáveis:

```javascript
// Use const para valores que não mudam
const nome = 'Seu Nome';
const anoNascimento = 2008;

// Use let para valores que podem mudar
let idade = 16;
let cidade = 'Sua Cidade';

// Continue com as outras variáveis...
```

### Passo 3: Mostrar no console

Use `console.log()` para mostrar as informações:

```javascript
console.log('Nome:', nome);
console.log('Idade:', idade);
// Continue com as outras...

// Ou crie uma apresentação completa:
let apresentacao = `Olá! Meu nome é ${nome}...`;
console.log(apresentacao);
```

### Passo 4: Mostrar na página

Use `innerHTML` para mostrar na página:

```javascript
const divPerfil = document.getElementById('perfil');
divPerfil.innerHTML = `
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Idade:</strong> ${idade} anos</p>
    <!-- Continue com as outras informações -->
`;
```

---

## 💡 Dicas

1. **Escolha entre let e const:**
   - Use `const` para: nome, ano de nascimento, cidade natal
   - Use `let` para: idade, cidade atual, hobby (pode mudar)

2. **Template strings são melhores:**
   ```javascript
   // ❌ Difícil de ler
   let texto = 'Meu nome é ' + nome + ' e tenho ' + idade + ' anos';
   
   // ✅ Fácil de ler
   let texto = `Meu nome é ${nome} e tenho ${idade} anos`;
   ```

3. **Organize seu código:**
   ```javascript
   // Informações pessoais
   const nome = 'Maria';
   const idade = 16;
   
   // Preferências
   const corFavorita = 'azul';
   const comidaFavorita = 'tapioca';
   ```

4. **Use comentários:**
   ```javascript
   // Dados que não mudam
   const nome = 'João';
   
   // Dados que podem mudar
   let cidade = 'Juazeiro';
   ```

---

## 🤖 Uso da IA

### ✅ Pode usar IA para:
- Entender a diferença entre let e const
- Ver exemplos de template strings
- Aprender sobre `innerHTML`
- Tirar dúvidas sobre sintaxe

### ❌ NÃO use IA para:
- Escrever todo o código do desafio
- Copiar a solução pronta

### 💬 Prompts úteis:

```
Explique quando devo usar let e quando devo usar const em JavaScript
```

```
Como usar template strings para criar frases em JavaScript?
```

```
Como mostrar conteúdo HTML usando JavaScript?
```

---

## ✅ Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| Usa pelo menos 8 variáveis | 2 |
| Usa const corretamente | 2 |
| Usa let corretamente | 2 |
| Usa template strings | 2 |
| Mostra no console | 1 |
| Mostra na página | 1 |

**Total: 10 pontos**

---

## 📤 Como Entregar

1. Salve seu arquivo como `perfil.html`
2. Teste no navegador
3. Verifique o console (F12)
4. Tire um print da página e do console
5. Envie o arquivo HTML

---

## 🎨 Exemplo de Resultado

**No console:**
```
Nome: Maria Silva
Idade: 16
Cidade: Juazeiro
Hobby: Jogar futebol
Apresentação: Olá! Meu nome é Maria Silva, tenho 16 anos...
```

**Na página:**
```
Meu Perfil

Nome: Maria Silva
Idade: 16 anos
Cidade: Juazeiro, Bahia
Hobby: Jogar futebol
Comida favorita: Tapioca
Cor favorita: Azul
Sonho: Ser desenvolvedora web
```

---

## 🚀 Desafio Extra

Quer ir além? Tente adicionar:

1. **Cálculo de idade:**
   ```javascript
   const anoAtual = 2024;
   const anoNascimento = 2008;
   let idade = anoAtual - anoNascimento;
   ```

2. **Contador de caracteres do nome:**
   ```javascript
   const nome = 'Maria Silva';
   console.log(`Seu nome tem ${nome.length} caracteres`);
   ```

3. **Estilo CSS bonito:**
   - Cores
   - Fontes
   - Espaçamento
   - Bordas

---

**Boa sorte! 🎉**
