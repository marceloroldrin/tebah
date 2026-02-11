# Desafio 4 - Formulário Completo de Contato

## Objetivo
Criar um formulário de contato completo com validação HTML5.

## Requisitos

Seu formulário deve ter os seguintes campos:

1. **Nome completo** (obrigatório)
2. **Email** (obrigatório, validação de email)
3. **Telefone** (obrigatório, tipo tel)
4. **Assunto** (select com opções)
5. **Mensagem** (textarea, obrigatório)
6. **Aceitar termos** (checkbox, obrigatório)

## Estrutura Base

```html
<form>
  <div>
    <label for="nome">Nome Completo:</label>
    <input type="text" id="nome" name="nome" required>
  </div>
  
  <!-- Adicione os outros campos -->
  
  <button type="submit">Enviar Mensagem</button>
</form>
```

## Validações Necessárias

- [ ] Todos os campos obrigatórios têm `required`
- [ ] Email usa `type="email"`
- [ ] Telefone usa `type="tel"`
- [ ] Textarea tem `rows` definido
- [ ] Todos os inputs têm `label` associado
- [ ] Select tem opção padrão "Selecione..."

## Opções do Select (Assunto)

- Dúvida sobre o cardápio
- Sugestão de prato
- Reclamação
- Elogio
- Outro

## Bônus

- Adicione `placeholder` nos campos
- Use `minlength` e `maxlength` onde fizer sentido
- Adicione um campo de data (type="date")
- Estilize o formulário com CSS básico
