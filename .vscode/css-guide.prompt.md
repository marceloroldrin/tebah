# Prompt Template: CSS Documentation Guide

## Template Principal
```
Crie um guia CSS completo sobre [TOPIC] com os seguintes exemplos: [EXAMPLES]

Use os arquivos /global.css e /global.js para a base do design e interatividade.
O guia deve ser estruturado em seções numeradas, cada uma com uma explicação teórica e um exemplo prático interativo.
```

## Estrutura Esperada
1.  **HTML**: Header com título `<h1>` e introdução, seguido de seções `<section>` numeradas.
2.  **Arquivos Globais**: SEMPRE inclua `<link rel="stylesheet" href="/global.css">` e `<script src="/global.js" defer></script>` no `<head>`.
3.  **Estilo Local**: Crie um arquivo CSS local (ex: `css-[topic].css`) apenas para os estilos específicos dos componentes de exemplo, usando as variáveis do `global.css` (`--primary`, `--bg`, `--panel`, `--border`).
4.  **Interatividade**: As abas funcionam automaticamente através do `global.js`. Use a estrutura de botões com `data-tab`.
5.  **Conteúdo**: Explicações concisas e exemplos práticos em português.
6.  **Syntax Highlighting**: Use Prism.js (links CDN no HTML).

## Componente de Exemplo (Contrato Visual)
Cada exemplo deve seguir rigorosamente esta estrutura HTML, utilizando as classes do `global.css`:

```html
<section>
    <h2>X. Nome do Exemplo</h2>
    <p>Descrição concisa do que o exemplo demonstra e quais propriedades CSS estão envolvidas.</p>

    <div class="example-container">
        <!-- Área Visual: Onde o componente é renderizado -->
        <div class="example-visual">
            <div class="exemplo-especifico">...</div>
        </div>

        <!-- Abas de Código: HTML e CSS -->
        <div class="code-tabs">
            <button class="tab-btn active" data-tab="htmlX">HTML</button>
            <button class="tab-btn" data-tab="cssX">CSS</button>

            <div class="tab-content active" id="htmlX">
                <pre><code class="language-html"><!-- Código HTML escapado --></code></pre>
            </div>

            <div class="tab-content" id="cssX">
                <pre><code class="language-css">/* Código CSS específico do exemplo */</code></pre>
            </div>
        </div>
    </div>
</section>
```

## Dependências Externas (Obrigatório no <head>)
```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
<link rel="stylesheet" href="/global.css">
<script src="/global.js" defer></script>
```

## Script de Prism (No final do <body>)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-css.min.js"></script>
```

## Regras de Design Local
No arquivo `css-[topic].css`:
- **NÃO** redeclare estilos de `body`, `h1`, `h2` ou containers globais.
- Use as variáveis: `--primary`, `--bg`, `--panel`, `--border`, `--text`.
- Foque exclusivamente nas classes dos componentes demonstrados (ex: `.grid-container`, `.flex-item`, `.btn-custom`).
- **SEMPRE** formate o código CSS com propriedades em linhas separadas (um por linha), nunca em linha única, para facilitar a leitura.

## Arquivos Gerados
- `css-[topic].css` (Estilos específicos dos exemplos)
- `css-[topic].html` (Estrutura completa seguindo o guia)