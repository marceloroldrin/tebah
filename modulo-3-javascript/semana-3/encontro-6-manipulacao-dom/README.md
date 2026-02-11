# Encontro 6 - Manipulação Avançada do DOM

## 📋 Informações do Encontro

- **Módulo:** 3 - JavaScript: Lógica e Interatividade
- **Semana:** 3
- **Duração:** 2 horas
- **Pré-requisitos:** Encontro 5 - Eventos

---

## 🎯 Objetivos de Aprendizado

- ✅ Criar listas dinâmicas
- ✅ Adicionar e remover elementos
- ✅ Trabalhar com arrays e DOM
- ✅ Criar componentes interativos
- ✅ Manipular dados e interface juntos

---

## 📚 Teoria (30-40 min)

### Criando Listas Dinâmicas

```javascript
const lista = ['Item 1', 'Item 2', 'Item 3'];
const ul = document.getElementById('lista');

lista.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});
```

### Removendo Elementos

```javascript
const elemento = document.getElementById('item');
elemento.remove(); // Remove o elemento
```

### Trabalhando com Arrays

```javascript
let tarefas = [];

function adicionarTarefa(texto) {
    tarefas.push(texto);
    renderizarTarefas();
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    renderizarTarefas();
}

function renderizarTarefas() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    
    tarefas.forEach((tarefa, indice) => {
        const li = document.createElement('li');
        li.textContent = tarefa;
        
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.onclick = () => removerTarefa(indice);
        
        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}
```

---

## 💻 Prática (60-80 min)

### Exercício: Lista de Tarefas Completa

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Lista de Tarefas</title>
    <style>
        body { font-family: Arial; padding: 40px; max-width: 600px; margin: 0 auto; }
        input { padding: 10px; width: 70%; font-size: 16px; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
        .tarefa { background: #f0f0f0; padding: 15px; margin: 10px 0; border-radius: 5px; display: flex; justify-content: space-between; }
        .btn-remover { background: #e74c3c; color: white; border: none; padding: 5px 15px; border-radius: 3px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>📝 Lista de Tarefas</h1>
    <input type="text" id="inputTarefa" placeholder="Digite uma tarefa">
    <button onclick="adicionarTarefa()">Adicionar</button>
    <div id="listaTarefas"></div>
    
    <script>
        let tarefas = [];
        
        function adicionarTarefa() {
            const input = document.getElementById('inputTarefa');
            const texto = input.value.trim();
            
            if (texto === '') {
                alert('Digite uma tarefa!');
                return;
            }
            
            tarefas.push(texto);
            input.value = '';
            renderizar();
        }
        
        function removerTarefa(indice) {
            tarefas.splice(indice, 1);
            renderizar();
        }
        
        function renderizar() {
            const lista = document.getElementById('listaTarefas');
            lista.innerHTML = '';
            
            tarefas.forEach((tarefa, indice) => {
                const div = document.createElement('div');
                div.className = 'tarefa';
                div.innerHTML = `
                    <span>${tarefa}</span>
                    <button class="btn-remover" onclick="removerTarefa(${indice})">Remover</button>
                `;
                lista.appendChild(div);
            });
        }
    </script>
</body>
</html>
```

---

## 🏠 Para Casa

### Tarefa: Carrinho de Compras
- [ ] Adicionar produtos ao carrinho
- [ ] Remover produtos
- [ ] Calcular total
- [ ] Mostrar quantidade de itens

---

## 🔗 Navegação

- [⬅️ Encontro Anterior - Eventos](../encontro-5-eventos/)
- [➡️ Próximo Encontro - Projeto Cardápio](../../semana-4/encontro-7-projeto-cardapio/)
- [📚 Voltar ao Módulo 3](../../)

---

**Pratique muito! 🚀**
