# Desafio 1 - Editor de Perfil

## 🎯 Objetivo
Criar um editor de perfil interativo usando manipulação do DOM.

## 📋 Requisitos
- [ ] Exibir informações de perfil (nome, idade, cidade, bio)
- [ ] Botão "Editar" para cada campo
- [ ] Modificar conteúdo ao clicar em editar
- [ ] Usar `textContent` e `innerHTML`
- [ ] Adicionar classe CSS ao editar
- [ ] Mostrar mensagem de confirmação

## 💡 Dica
```javascript
function editarNome() {
    const nome = document.getElementById('nome');
    const novoNome = prompt('Digite o novo nome:');
    if (novoNome) {
        nome.textContent = novoNome;
        nome.classList.add('editado');
    }
}
```

**Boa sorte! 🎉**
