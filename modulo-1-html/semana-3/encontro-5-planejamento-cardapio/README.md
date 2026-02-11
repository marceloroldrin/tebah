# Encontro 5: Planejamento do Cardápio Digital

## 🎯 Objetivos
- Planejar a estrutura do projeto âncora
- Definir requisitos do cardápio digital
- Criar wireframes em HTML
- Organizar informações de forma lógica

## 📚 Teoria (30 min)

### O Projeto: Cardápio Digital

Um cardápio digital para comércios locais deve ter:

#### Funcionalidades Essenciais
1. **Listagem de Pratos**
   - Nome, descrição, preço
   - Foto do prato
   - Categoria (entrada, principal, sobremesa, bebida)
   - Indicadores (vegetariano, vegano, sem glúten, picante)

2. **Navegação**
   - Menu por categorias
   - Busca de pratos
   - Filtros (preço, tipo, restrições)

3. **Informações do Estabelecimento**
   - Nome e logo
   - Endereço e contato
   - Horário de funcionamento
   - Redes sociais

4. **Extras**
   - Destaques/promoções
   - Avaliações
   - Opção de pedido (futuro)

### Estrutura de Informação

```
Cardápio Digital
├── Header
│   ├── Logo
│   ├── Nome do Restaurante
│   └── Navegação
├── Hero/Banner
│   └── Destaque do dia
├── Categorias
│   ├── Entradas
│   ├── Pratos Principais
│   ├── Sobremesas
│   └── Bebidas
├── Cada Prato
│   ├── Foto
│   ├── Nome
│   ├── Descrição
│   ├── Preço
│   └── Tags/Indicadores
└── Footer
    ├── Contato
    ├── Endereço
    ├── Horários
    └── Redes Sociais
```

### Planejamento

#### 1. Pesquisa
- Visitar estabelecimentos locais
- Entender necessidades dos donos
- Observar cardápios existentes
- Identificar problemas comuns

#### 2. Definição de Conteúdo
- Quantos pratos?
- Quais categorias?
- Que informações são essenciais?
- Fotos disponíveis?

#### 3. Wireframe
Esboço simples da estrutura (pode ser no papel ou HTML básico)

## 💻 Prática (75 min)

### Exercício 1: Pesquisa de Campo (20 min)
Em grupos, pesquisar:
- 3 cardápios locais (físicos ou digitais)
- Listar pontos positivos e negativos
- Identificar informações essenciais
- Documentar ideias

### Exercício 2: Definir Estrutura (20 min)
Individualmente:
- Escolher um estabelecimento (real ou fictício)
- Listar todas as seções necessárias
- Definir categorias de pratos
- Planejar navegação

### Exercício 3: Wireframe HTML (35 min)
Criar estrutura básica em HTML:
- Apenas estrutura semântica (sem CSS)
- Usar comentários para indicar funcionalidades futuras
- Incluir conteúdo de exemplo
- Focar em organização lógica

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cardápio - [Nome do Estabelecimento]</title>
</head>
<body>
    <header>
        <!-- Logo e navegação -->
    </header>
    
    <main>
        <section id="destaque">
            <!-- Prato do dia -->
        </section>
        
        <section id="entradas">
            <!-- Lista de entradas -->
        </section>
        
        <!-- Outras categorias -->
    </main>
    
    <footer>
        <!-- Informações de contato -->
    </footer>
</body>
</html>
```

## 🏠 Para Casa

### Tarefa Principal
Criar a estrutura HTML completa do seu cardápio digital com:

1. **Conteúdo Real**
   - Mínimo 12 pratos (3 por categoria)
   - Descrições reais
   - Preços realistas
   - Informações do estabelecimento

2. **Estrutura Semântica**
   - Header, nav, main, sections, articles, footer
   - Headings hierárquicos
   - Listas para itens relacionados

3. **Acessibilidade**
   - Textos alternativos
   - Labels em formulários (se houver)
   - Navegação lógica

4. **Organização**
   - Código comentado
   - Indentação correta
   - Nomes de classes descritivos (preparando para CSS)

### Checklist do Projeto
- [ ] Escolhi estabelecimento (real ou fictício)
- [ ] Defini todas as categorias
- [ ] Criei pelo menos 12 pratos
- [ ] Estruturei com HTML semântico
- [ ] Adicionei informações de contato
- [ ] Revisei acessibilidade
- [ ] Validei o HTML
- [ ] Documentei com comentários

## 🤖 Uso da IA

### ❌ NÃO use IA para:
- Gerar a estrutura completa do cardápio
- Criar conteúdo dos pratos
- Escrever o HTML por você

### ✅ USE IA para:
- Revisar sua estrutura de informação
- Verificar se a hierarquia está lógica
- Validar HTML semântico
- Sugerir melhorias na organização

### 💡 Prompts Sugeridos
```
"Revisei a estrutura do meu cardápio [cole código]. A organização está lógica?"

"Estou usando as tags semânticas corretas para um cardápio digital?"

"Como posso melhorar a hierarquia de informações? [cole estrutura]"

"Faltou alguma seção importante em um cardápio digital?"
```

## 📋 Exemplo de Estrutura de Prato

```html
<article class="prato">
    <figure>
        <img src="moqueca.jpg" alt="Moqueca de peixe em panela de barro com dendê">
        <figcaption>Moqueca Baiana</figcaption>
    </figure>
    
    <h3>Moqueca de Peixe</h3>
    
    <p class="descricao">
        Peixe fresco cozido em leite de coco, dendê, tomate e pimentões.
        Servido com arroz branco e pirão.
    </p>
    
    <p class="preco">R$ 45,00</p>
    
    <ul class="tags">
        <li>Sem glúten</li>
        <li>Picante</li>
    </ul>
</article>
```

## 📖 Recursos
- [Exemplos de cardápios digitais](https://www.behance.net/search/projects?search=digital%20menu)
- [UX para restaurantes](https://uxdesign.cc/)

## ✅ Checklist
- [ ] Pesquisei cardápios existentes
- [ ] Defini estrutura de informação
- [ ] Criei wireframe HTML
- [ ] Planejei todas as seções
- [ ] Documentei decisões de design
- [ ] Revisei com IA após planejar
