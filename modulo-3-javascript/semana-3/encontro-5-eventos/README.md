# Encontro 5 - Eventos em JavaScript

## 📋 Informações do Encontro

- **Módulo:** 3 - JavaScript: Lógica e Interatividade
- **Semana:** 3
- **Duração:** 2 horas
- **Pré-requisitos:** Encontro 4 - DOM Básico

---

## 🎯 Objetivos de Aprendizado

Ao final deste encontro, você será capaz de:

- ✅ Entender o que são eventos
- ✅ Adicionar event listeners
- ✅ Trabalhar com eventos de clique
- ✅ Capturar eventos de teclado
- ✅ Usar eventos de formulário
- ✅ Prevenir comportamento padrão
- ✅ Obter informações do evento

---

## 📚 Teoria (30-40 min)

### O que são Eventos?

Eventos são **ações** que acontecem na página:
- Clique do mouse
- Tecla pressionada
- Formulário enviado
- Mouse sobre elemento
- Página carregada

### Adicionando Event Listeners

**Forma moderna (recomendada):**
```javascript
const botao = document.getElementById('botao');
botao.addEventListener('click', function() {
    console.log('Botão clicado!');
});
```

**Forma inline (evite):**
```html
<button onclick="minhaFuncao()">Clique</button>
```

### Eventos Comuns

**Click - Clique do mouse:**
```javascript
botao.addEventListener('click', () => {
    console.log('Clicou!');
});
```

**Keypress - Tecla pressionada:**
```javascript
input.addEventListener('keypress', (e) => {
    console.log('Tecla:', e.key);
});
```

**Submit - Envio de formulário:**
```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previne recarregar página
    console.log('Formulário enviado');
});
```

**Mouseover/Mouseout:**
```javascript
elemento.addEventListener('mouseover', () => {
    elemento.style.backgroundColor = 'yellow';
});

elemento.addEventListener('mouseout', () => {
    elemento.style.backgroundColor = 'white';
});
```

### Objeto Event

```javascript
botao.addEventListener('click', (evento) => {
    console.log('Tipo:', evento.type);
    console.log('Alvo:', evento.target);
    console.log('Posição X:', evento.clientX);
    console.log('Posição Y:', evento.clientY);
});
```

### preventDefault()

Previne o comportamento padrão:
```javascript
link.addEventListener('click', (e) => {
    e.preventDefault(); // Link não abre
    console.log('Link clicado mas não abriu');
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Não recarrega página
    console.log('Formulário não enviou');
});
```

---

## 💻 Prática (60-80 min)

### Exercício 1: Eventos de Clique

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Eventos de Clique</title>
    <style>
        body { font-family: Arial; padding: 40px; text-align: center; }
        button { padding: 15px 30px; margin: 10px; font-size: 18px; cursor: pointer; }
        .contador { font-size: 48px; margin: 20px; }
    </style>
</head>
<body>
    <h1>Contador de Cliques</h1>
    <div class="contador" id="contador">0</div>
    <button id="btnAumentar">➕ Aumentar</button>
    <button id="btnDiminuir">➖ Diminuir</button>
    <button id="btnResetar">🔄 Resetar</button>
    
    <script>
        let contador = 0;
        
        const display = document.getElementById('contador');
        const btnAumentar = document.getElementById('btnAumentar');
        const btnDiminuir = document.getElementById('btnDiminuir');
        const btnResetar = document.getElementById('btnResetar');
        
        btnAumentar.addEventListener('click', () => {
            contador++;
            display.textContent = contador;
        });
        
        btnDiminuir.addEventListener('click', () => {
            contador--;
            display.textContent = contador;
        });
        
        btnResetar.addEventListener('click', () => {
            contador = 0;
            display.textContent = contador;
        });
    </script>
</body>
</html>
```

### Exercício 2: Eventos de Teclado

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Eventos de Teclado</title>
    <style>
        body { font-family: Arial; padding: 40px; }
        input { padding: 15px; font-size: 18px; width: 80%; }
        .resultado { margin: 20px 0; padding: 20px; background: #f0f0f0; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>Digite algo:</h1>
    <input type="text" id="input" placeholder="Digite aqui...">
    <div class="resultado" id="resultado"></div>
    
    <script>
        const input = document.getElementById('input');
        const resultado = document.getElementById('resultado');
        
        input.addEventListener('keyup', (e) => {
            resultado.innerHTML = `
                <p><strong>Você digitou:</strong> ${input.value}</p>
                <p><strong>Última tecla:</strong> ${e.key}</p>
                <p><strong>Caracteres:</strong> ${input.value.length}</p>
            `;
        });
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                alert(`Você digitou: ${input.value}`);
            }
        });
    </script>
</body>
</html>
```

---

## 🏠 Para Casa

### Tarefa 1: Formulário Interativo
- [ ] Criar formulário com validação
- [ ] Usar evento `submit`
- [ ] Prevenir envio com `preventDefault()`
- [ ] Validar campos antes de processar

### Tarefa 2: Jogo de Cliques
- [ ] Criar botão que muda de posição ao clicar
- [ ] Contar pontos
- [ ] Usar eventos de mouse

---

## 🤖 Uso da IA neste Encontro

### ✅ USE IA para:
- Entender diferentes tipos de eventos
- Ver exemplos de addEventListener
- Aprender sobre preventDefault

### 💡 Prompts Sugeridos
```
Explique addEventListener em JavaScript
```
```
Diferença entre keypress, keydown e keyup
```

---

## ✅ Checklist de Aprendizado

- [ ] Entende o que são eventos
- [ ] Sabe usar addEventListener
- [ ] Conhece eventos comuns (click, keypress, submit)
- [ ] Sabe usar preventDefault()
- [ ] Consegue acessar informações do evento

---

## 📚 Recursos Adicionais

- [MDN - Eventos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN - addEventListener](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)

---

## 🔗 Navegação

- [⬅️ Encontro Anterior - DOM Básico](../../semana-2/encontro-4-dom-basico/)
- [➡️ Próximo Encontro - Manipulação DOM](../encontro-6-manipulacao-dom/)
- [📚 Voltar ao Módulo 3](../../)
- [🏠 Início do Curso](../../../)

---

**Dúvidas?** Pratique com diferentes eventos! 🚀
