# Desafio 1 - Minha Primeira Página Interativa

## 🎯 Objetivo

Criar uma página HTML com JavaScript que responda a cliques do usuário, mudando conteúdo e estilos da página.

---

## 📋 Requisitos

### Obrigatórios
- [ ] Criar arquivo `index.html` com estrutura HTML básica
- [ ] Criar arquivo `script.js` externo
- [ ] Ter pelo menos 1 título (`<h1>`)
- [ ] Ter pelo menos 2 parágrafos (`<p>`)
- [ ] Ter pelo menos 3 botões
- [ ] Cada botão deve fazer algo diferente quando clicado
- [ ] Usar `console.log()` para registrar cada ação
- [ ] Adicionar comentários explicando o código JavaScript

### Opcionais (Desafio Extra)
- [ ] Adicionar um contador de cliques
- [ ] Mudar cores de fundo ao clicar
- [ ] Adicionar mais de 5 botões com ações diferentes
- [ ] Criar um botão que reseta tudo

---

## 📝 Instruções

### Passo 1: Criar a Estrutura HTML

Crie um arquivo `index.html` com:
- Estrutura HTML básica
- Um título principal
- Dois ou três parágrafos
- Três ou mais botões
- Link para o arquivo `script.js` no final do `<body>`

**Dica:** Use IDs nos elementos que você quer modificar com JavaScript.

### Passo 2: Criar o Arquivo JavaScript

Crie um arquivo `script.js` e:
1. Adicione um `console.log()` para confirmar que o arquivo foi carregado
2. Use `document.getElementById()` para pegar os elementos
3. Use `addEventListener('click', function() { ... })` para adicionar ações aos botões

### Passo 3: Adicionar Interatividade

Faça cada botão realizar uma ação diferente:
- **Botão 1:** Mudar o texto de um elemento
- **Botão 2:** Mudar a cor de um elemento
- **Botão 3:** Mostrar um alerta ou mudar o tamanho da fonte

### Passo 4: Testar

1. Abra o arquivo HTML no navegador
2. Abra o console (F12)
3. Clique em cada botão e veja se funciona
4. Verifique se as mensagens aparecem no console

---

## 💡 Dicas

1. **IDs únicos:** Cada elemento deve ter um ID único
   ```html
   <h1 id="titulo">Meu Título</h1>
   <p id="paragrafo1">Primeiro parágrafo</p>
   ```

2. **Pegar elementos:** Use `getElementById`
   ```javascript
   const titulo = document.getElementById('titulo');
   ```

3. **Mudar texto:** Use `textContent`
   ```javascript
   titulo.textContent = 'Novo texto';
   ```

4. **Mudar estilo:** Use `style`
   ```javascript
   titulo.style.color = 'blue';
   ```

5. **Console.log:** Sempre registre as ações
   ```javascript
   console.log('Botão clicado!');
   ```

---

## 🤖 Como a IA Pode Ajudar

### Depois de tentar sozinho:

1. **Revisar código:**
   ```
   Revise este código JavaScript e sugira melhorias:
   [seu código]
   ```

2. **Debugar erros:**
   ```
   Estou tendo este erro: [erro]
   Meu código: [código]
   O que pode estar errado?
   ```

3. **Entender conceitos:**
   ```
   Explique como funciona getElementById em JavaScript
   ```

---

## ✅ Critérios de Avaliação

Seu desafio está completo quando:

- [ ] A página HTML abre sem erros
- [ ] O JavaScript está em arquivo externo
- [ ] Todos os botões funcionam
- [ ] Mensagens aparecem no console
- [ ] O código tem comentários explicativos
- [ ] Você entende o que cada linha faz

---

## 🎨 Exemplo de Resultado

Sua página deve ter:
- Um título que pode ser mudado
- Parágrafos que podem mudar de cor ou texto
- Botões que respondem a cliques
- Mensagens no console mostrando as ações

---

## 🔗 Recursos

- [MDN - getElementById](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById)
- [MDN - addEventListener](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
- [W3Schools - JavaScript Events](https://www.w3schools.com/js/js_events.asp)

---

**Boa sorte!** 🚀 Lembre-se: primeiro tente sozinho, depois use IA para revisar!
