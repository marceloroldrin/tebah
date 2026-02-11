# Encontro 3: Acessibilidade Web

## 🎯 Objetivos
- Compreender a importância da acessibilidade web
- Conhecer as diretrizes WCAG básicas
- Implementar práticas de acessibilidade em HTML
- Testar acessibilidade com ferramentas

## 📚 Teoria (45 min)

### O que é Acessibilidade Web?
Garantir que pessoas com deficiências possam usar a web:
- Visual (cegueira, baixa visão, daltonismo)
- Auditiva (surdez)
- Motora (dificuldade de usar mouse)
- Cognitiva (dislexia, autismo)

### Princípios WCAG (Web Content Accessibility Guidelines)
1. **Perceptível**: Informação deve ser apresentada de forma que usuários possam perceber
2. **Operável**: Interface deve ser navegável
3. **Compreensível**: Informação e operação devem ser compreensíveis
4. **Robusto**: Conteúdo deve funcionar com tecnologias assistivas

### Práticas Essenciais

#### 1. Texto Alternativo em Imagens
```html
<img src="prato.jpg" alt="Moqueca de peixe servida em panela de barro">
```

#### 2. Hierarquia de Headings
```html
<h1>Restaurante</h1>
  <h2>Cardápio</h2>
    <h3>Pratos Principais</h3>
    <h3>Sobremesas</h3>
```

#### 3. Labels em Formulários
```html
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome">
```

#### 4. Contraste de Cores
- Texto normal: mínimo 4.5:1
- Texto grande: mínimo 3:1

#### 5. Navegação por Teclado
- Todos os elementos interativos devem ser acessíveis via Tab
- Ordem lógica de foco

#### 6. ARIA (Accessible Rich Internet Applications)
```html
<button aria-label="Fechar menu">X</button>
<nav aria-label="Menu principal">...</nav>
```

## 💻 Prática (60 min)

### Exercício 1: Auditoria de Acessibilidade
Revisar páginas anteriores e identificar problemas:
- Imagens sem alt
- Headings fora de ordem
- Baixo contraste
- Formulários sem labels

### Exercício 2: Galeria Acessível
Criar galeria de imagens com:
- Texto alternativo descritivo
- Legendas com `<figcaption>`
- Navegação por teclado
- ARIA labels apropriados

### Exercício 3: Formulário Acessível
Criar formulário de contato com:
- Labels associados corretamente
- Mensagens de erro claras
- Instruções visíveis
- Validação acessível

## 🏠 Para Casa
1. Instalar extensão de acessibilidade no navegador (WAVE, axe DevTools)
2. Testar suas páginas anteriores
3. Corrigir todos os problemas encontrados
4. Documentar as melhorias feitas

## 🤖 Uso da IA

### ❌ NÃO use IA para:
- Gerar textos alternativos genéricos
- Copiar código de acessibilidade sem entender

### ✅ USE IA para:
- Revisar se seus textos alt são descritivos
- Verificar hierarquia de headings
- Entender quando usar ARIA
- Aprender sobre casos específicos

### 💡 Prompts Sugeridos
```
"Meus textos alternativos estão descritivos o suficiente? [cole código]"

"Como posso melhorar a acessibilidade deste formulário? [cole código]"

"Quando devo usar aria-label vs aria-labelledby?"

"Este contraste de cores é acessível? Fundo: #333, Texto: #666"
```

## 🛠️ Ferramentas
- **WAVE**: Extensão para Chrome/Firefox
- **axe DevTools**: Ferramenta de auditoria
- **Lighthouse**: Auditoria integrada no Chrome
- **Contrast Checker**: Verificar contraste de cores

## 📖 Recursos
- [WCAG 2.1 em Português](https://www.w3.org/Translations/WCAG21-pt-BR/)
- [MDN - Acessibilidade](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)

## ✅ Checklist
- [ ] Todas as imagens têm texto alternativo descritivo
- [ ] Hierarquia de headings está correta (h1 > h2 > h3)
- [ ] Formulários têm labels associados
- [ ] Testei navegação apenas com teclado
- [ ] Usei ferramenta de auditoria de acessibilidade
- [ ] Revisei com IA após implementar
