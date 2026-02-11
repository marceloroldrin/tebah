# Encontro 4: Formulários HTML

## 🎯 Objetivos
- Dominar a criação de formulários HTML
- Conhecer os diferentes tipos de inputs
- Implementar validação HTML5
- Criar formulários acessíveis e usáveis

## 📚 Teoria (45 min)

### Estrutura Básica de Formulários

```html
<form action="/enviar" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>
    
    <button type="submit">Enviar</button>
</form>
```

### Tipos de Input

#### Texto
- `text` - Texto simples
- `email` - Email (com validação)
- `tel` - Telefone
- `password` - Senha
- `url` - URL
- `search` - Busca

#### Números e Datas
- `number` - Números
- `range` - Slider
- `date` - Data
- `time` - Hora
- `datetime-local` - Data e hora

#### Seleção
- `checkbox` - Múltipla escolha
- `radio` - Escolha única
- `select` - Lista suspensa
- `textarea` - Texto longo

#### Outros
- `file` - Upload de arquivo
- `color` - Seletor de cor
- `hidden` - Campo oculto

### Atributos Importantes

```html
<input 
    type="text"
    name="nome"
    id="nome"
    placeholder="Digite seu nome"
    required
    minlength="3"
    maxlength="50"
    pattern="[A-Za-z ]+"
    autocomplete="name"
>
```

### Validação HTML5

- `required` - Campo obrigatório
- `minlength` / `maxlength` - Tamanho do texto
- `min` / `max` - Valores numéricos
- `pattern` - Expressão regular
- `type` - Validação por tipo (email, url, etc)

### Agrupamento

```html
<fieldset>
    <legend>Informações Pessoais</legend>
    <!-- campos aqui -->
</fieldset>
```

## 💻 Prática (60 min)

### Exercício 1: Formulário de Cadastro
Criar formulário com:
- Nome completo
- Email
- Telefone
- Data de nascimento
- Senha (com confirmação)

### Exercício 2: Formulário de Prato
Criar formulário para cadastrar prato do cardápio:
- Nome do prato
- Descrição (textarea)
- Preço (number)
- Categoria (select)
- Vegetariano? (checkbox)
- Nível de picância (radio)
- Foto (file)

### Exercício 3: Formulário de Busca
Criar busca avançada com:
- Termo de busca
- Filtros (checkboxes)
- Faixa de preço (range)
- Ordenação (select)

## 🏠 Para Casa
1. Criar formulário completo de contato para o cardápio digital
2. Incluir validação em todos os campos
3. Adicionar mensagens de erro personalizadas
4. Testar acessibilidade do formulário
5. Garantir que funciona apenas com teclado

## 🤖 Uso da IA

### ❌ NÃO use IA para:
- Gerar o formulário completo
- Copiar validações prontas sem entender

### ✅ USE IA para:
- Revisar suas validações
- Entender expressões regulares (pattern)
- Verificar acessibilidade do formulário
- Aprender sobre atributos específicos

### 💡 Prompts Sugeridos
```
"Meu formulário está com validação correta? [cole código]"

"Como criar um pattern para validar telefone brasileiro?"

"Este formulário está acessível? [cole código]"

"Qual a diferença entre name e id em inputs?"
```

## 🎨 Boas Práticas

1. **Sempre use labels**
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

2. **Agrupe campos relacionados**
```html
<fieldset>
    <legend>Endereço</legend>
    <!-- campos de endereço -->
</fieldset>
```

3. **Forneça feedback visual**
```css
input:invalid {
    border-color: red;
}
input:valid {
    border-color: green;
}
```

4. **Use placeholders como exemplo, não como label**
```html
<label for="cpf">CPF:</label>
<input type="text" id="cpf" placeholder="000.000.000-00">
```

5. **Desabilite submit até validação**
```html
<button type="submit" disabled>Enviar</button>
```

## 📖 Recursos
- [MDN - Formulários HTML](https://developer.mozilla.org/pt-BR/docs/Learn/Forms)
- [HTML5 Input Types](https://www.w3schools.com/html/html_form_input_types.asp)
- [Regex101](https://regex101.com/) - Testar expressões regulares

## ✅ Checklist
- [ ] Todos os inputs têm labels associados
- [ ] Usei tipos de input apropriados (email, tel, date, etc)
- [ ] Adicionei validação HTML5
- [ ] Agrupei campos relacionados com fieldset
- [ ] Testei o formulário apenas com teclado
- [ ] Revisei com IA após implementar
