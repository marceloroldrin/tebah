# Desafio Git - Versionando o Cardápio

## Objetivo
Criar um repositório Git para o projeto do cardápio e publicar no GitHub.

## Passo a Passo

### 1. Configurar Git (se ainda não fez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### 2. Inicializar Repositório

```bash
cd pasta-do-cardapio
git init
```

### 3. Adicionar Arquivos

```bash
git add .
git status
```

### 4. Fazer Primeiro Commit

```bash
git commit -m "Adiciona estrutura inicial do cardápio"
```

### 5. Criar Repositório no GitHub

1. Acesse github.com
2. Clique em "New repository"
3. Dê um nome: `cardapio-digital`
4. Deixe público
5. NÃO adicione README, .gitignore ou licença
6. Clique em "Create repository"

### 6. Conectar com GitHub

```bash
git remote add origin https://github.com/seu-usuario/cardapio-digital.git
git branch -M main
git push -u origin main
```

## Checklist

- [ ] Git configurado com nome e email
- [ ] Repositório inicializado
- [ ] Primeiro commit feito
- [ ] Repositório criado no GitHub
- [ ] Código enviado para o GitHub
- [ ] Repositório visível no navegador

## Commits Adicionais

Faça mais 2-3 commits com melhorias:

```bash
git add .
git commit -m "Adiciona seção de bebidas"
git push
```

## Mensagens de Commit

✅ **Boas:**
- "Adiciona seção de sobremesas"
- "Corrige erro de validação no HTML"
- "Melhora acessibilidade das imagens"

❌ **Ruins:**
- "update"
- "fix"
- "mudanças"

## Bônus

- Crie um arquivo README.md descrevendo o projeto
- Adicione um .gitignore
- Faça commits pequenos e frequentes
- Use GitHub Pages para publicar o site
