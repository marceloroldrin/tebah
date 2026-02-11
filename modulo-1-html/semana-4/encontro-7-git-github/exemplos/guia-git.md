# Guia Prático de Git e GitHub

## Comandos Básicos

### Configuração Inicial
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Iniciar Repositório
```bash
git init
```

### Verificar Status
```bash
git status
```

### Adicionar Arquivos
```bash
git add index.html
git add .
```

### Fazer Commit
```bash
git commit -m "Adiciona estrutura inicial do cardápio"
```

### Ver Histórico
```bash
git log
git log --oneline
```

### Conectar com GitHub
```bash
git remote add origin https://github.com/seuusuario/seu-repositorio.git
```

### Enviar para GitHub
```bash
git push -u origin main
```

### Atualizar do GitHub
```bash
git pull origin main
```

## Trabalhando com Branches

### Criar Branch
```bash
git branch nova-funcionalidade
```

### Mudar de Branch
```bash
git checkout nova-funcionalidade
```

### Criar e Mudar (atalho)
```bash
git checkout -b nova-funcionalidade
```

### Listar Branches
```bash
git branch
```

### Mesclar Branch
```bash
git checkout main
git merge nova-funcionalidade
```

### Deletar Branch
```bash
git branch -d nova-funcionalidade
```

## Fluxo de Trabalho Recomendado

1. **Fazer alterações**
2. **Verificar status**: `git status`
3. **Adicionar arquivos**: `git add .`
4. **Fazer commit**: `git commit -m "Descrição clara"`
5. **Enviar**: `git push`

## Boas Práticas de Commit

### ✅ Bons Commits
```
git commit -m "Adiciona seção de sobremesas ao cardápio"
git commit -m "Corrige validação do formulário de contato"
git commit -m "Melhora acessibilidade das imagens"
```

### ❌ Commits Ruins
```
git commit -m "mudanças"
git commit -m "fix"
git commit -m "atualizacao"
```

## GitHub Pages

### Publicar Site
1. Vá em Settings do repositório
2. Clique em Pages
3. Selecione branch `main`
4. Clique em Save
5. Acesse: `https://seuusuario.github.io/seu-repositorio`

## Comandos Úteis

### Desfazer Alterações
```bash
git checkout -- arquivo.html
```

### Desfazer Último Commit (mantém alterações)
```bash
git reset --soft HEAD~1
```

### Ver Diferenças
```bash
git diff
```

### Clonar Repositório
```bash
git clone https://github.com/usuario/repositorio.git
```

## Arquivo .gitignore

Crie um arquivo `.gitignore` para ignorar arquivos:

```
node_modules/
.DS_Store
*.log
.env
```

## Dicas

1. **Commit frequentemente**: Pequenos commits são melhores
2. **Mensagens descritivas**: Explique o que e por quê
3. **Teste antes de commitar**: Garanta que o código funciona
4. **Use branches**: Para novas funcionalidades
5. **Pull antes de push**: Evite conflitos

## Recursos

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
