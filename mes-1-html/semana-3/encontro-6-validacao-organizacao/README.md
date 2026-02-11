# Encontro 6: Validação e Organização de Código

## 🎯 Objetivos
- Validar HTML com ferramentas oficiais
- Organizar código de forma profissional
- Aplicar boas práticas de nomenclatura
- Preparar código para trabalho em equipe

## 📚 Teoria (45 min)

### Validação de HTML

#### Por que validar?
- Garantir compatibilidade entre navegadores
- Evitar erros silenciosos
- Melhorar acessibilidade
- Facilitar manutenção
- Preparar para SEO

#### Ferramentas de Validação
1. **W3C Validator** (https://validator.w3.org/)
   - Validador oficial
   - Identifica erros de sintaxe
   - Sugere correções

2. **HTML5 Validator** (extensões de navegador)
   - Validação em tempo real
   - Integração com editor

3. **Lighthouse** (Chrome DevTools)
   - Auditoria completa
   - Performance, acessibilidade, SEO
   - Boas práticas

### Organização de Código

#### Estrutura de Arquivos
```
projeto-cardapio/
├── index.html
├── sobre.html
├── contato.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── logo.png
│   └── pratos/
│       ├── moqueca.jpg
│       └── acaraje.jpg
└── README.md
```

#### Nomenclatura

**Arquivos e Pastas**
- Minúsculas
- Sem espaços (use hífen)
- Descritivos
```
✅ moqueca-baiana.jpg
❌ Moqueca Baiana.jpg
❌ img1.jpg
```

**IDs e Classes**
- Descritivos e semânticos
- Kebab-case (hífen)
- Evitar abreviações obscuras
```html
✅ <div class="prato-destaque">
❌ <div class="pd">
❌ <div class="PratoDestaque">
```

#### Indentação e Formatação

```html
<!-- ✅ BOM -->
<section class="menu">
    <h2>Pratos Principais</h2>
    <article class="prato">
        <h3>Moqueca</h3>
        <p>Descrição...</p>
    </article>
</section>

<!-- ❌ RUIM -->
<section class="menu"><h2>Pratos Principais</h2><article class="prato"><h3>Moqueca</h3><p>Descrição...</p></article></section>
```

#### Comentários

```html
<!-- ========== HEADER ========== -->
<header>
    <!-- Logo e navegação principal -->
</header>

<!-- ========== CONTEÚDO PRINCIPAL ========== -->
<main>
    <!-- Seção de destaques -->
    <section id="destaques">
        ...
    </section>
</main>
```

### Boas Práticas

1. **Um h1 por página**
```html
✅ <h1>Cardápio - Restaurante Sabor Baiano</h1>
❌ <h1>Cardápio</h1> <h1>Bem-vindo</h1>
```

2. **Hierarquia lógica de headings**
```html
✅ h1 > h2 > h3
❌ h1 > h3 > h2
```

3. **Atributos em ordem**
```html
<img 
    src="prato.jpg" 
    alt="Descrição" 
    width="300" 
    height="200"
    class="prato-imagem"
    id="prato-1"
>
```

4. **Fechar todas as tags**
```html
✅ <p>Texto</p>
❌ <p>Texto
```

5. **Usar aspas duplas**
```html
✅ <div class="container">
❌ <div class='container'>
```

## 💻 Prática (60 min)

### Exercício 1: Validação (20 min)
1. Validar seu cardápio no W3C Validator
2. Corrigir todos os erros encontrados
3. Corrigir todos os warnings
4. Documentar problemas encontrados

### Exercício 2: Reorganização (20 min)
1. Criar estrutura de pastas adequada
2. Renomear arquivos seguindo convenções
3. Organizar imagens em subpastas
4. Atualizar referências no HTML

### Exercício 3: Refatoração (20 min)
1. Revisar indentação
2. Adicionar comentários organizacionais
3. Padronizar nomenclatura de classes
4. Verificar hierarquia de headings

## 🏠 Para Casa

### Tarefa 1: Validação Completa
- [ ] Validar todas as páginas no W3C
- [ ] Corrigir 100% dos erros
- [ ] Resolver warnings importantes
- [ ] Fazer auditoria com Lighthouse
- [ ] Atingir score mínimo de 90 em acessibilidade

### Tarefa 2: Organização
- [ ] Criar estrutura de pastas profissional
- [ ] Renomear todos os arquivos adequadamente
- [ ] Adicionar comentários organizacionais
- [ ] Padronizar indentação (2 ou 4 espaços)
- [ ] Criar arquivo README.md do projeto

### Tarefa 3: Documentação
Criar README.md com:
- Nome do projeto
- Descrição
- Estrutura de arquivos
- Como visualizar
- Tecnologias usadas
- Autor

```markdown
# Cardápio Digital - Restaurante Sabor Baiano

Cardápio digital responsivo para restaurante de comida baiana.

## Estrutura
- `index.html` - Página principal
- `css/` - Estilos (futuro)
- `images/` - Imagens dos pratos

## Como visualizar
Abra o arquivo `index.html` no navegador.

## Tecnologias
- HTML5
- Semântico e acessível

## Autor
[Seu Nome]
```

## 🤖 Uso da IA

### ❌ NÃO use IA para:
- Corrigir erros automaticamente sem entender
- Reorganizar código sem sua supervisão

### ✅ USE IA para:
- Entender erros de validação
- Aprender sobre boas práticas
- Revisar nomenclatura
- Sugerir melhorias de organização

### 💡 Prompts Sugeridos
```
"O validador retornou este erro: [cole erro]. O que significa e como corrigir?"

"Minha nomenclatura de classes está seguindo boas práticas? [cole exemplos]"

"Como posso melhorar a organização deste código? [cole código]"

"Este README está completo para um projeto de cardápio digital?"
```

## 🛠️ Ferramentas

### Validação
- [W3C Validator](https://validator.w3.org/)
- [HTML5 Validator](https://html5.validator.nu/)
- Chrome Lighthouse

### Formatação
- [Prettier](https://prettier.io/) - Formatador automático
- [EditorConfig](https://editorconfig.org/) - Padronização

### Organização
- [HTML Best Practices](https://github.com/hail2u/html-best-practices)

## 📖 Recursos
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [MDN - HTML Guidelines](https://developer.mozilla.org/pt-BR/docs/MDN/Guidelines/Code_guidelines/HTML)

## ✅ Checklist
- [ ] HTML validado sem erros
- [ ] Estrutura de pastas organizada
- [ ] Arquivos nomeados corretamente
- [ ] Código indentado consistentemente
- [ ] Comentários organizacionais adicionados
- [ ] README.md criado
- [ ] Lighthouse score > 90 em acessibilidade
- [ ] Revisei com IA após organizar
