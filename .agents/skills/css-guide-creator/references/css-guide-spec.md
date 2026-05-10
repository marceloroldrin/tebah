# CSS Guide Spec

## Source Intent

This skill reproduces the behavior and constraints defined by:

- `.vscode/css-guide.skill.json`
- `.vscode/css-guide.prompt.md`
- `ROLE-AGENTE-CRIADOR.md`

Apply the rules below whenever generating or updating a Tebah CSS guide.

## Trigger Pattern

Use this workflow for requests such as:

- criar guia css
- gerar documentacao css
- exemplo bem
- exemplo grid

It is especially relevant for files matching:

- `**/modulo-*-css/**/exemplos/*.html`

## Inputs To Infer Or Confirm

- `topic`: the CSS concept being taught, such as Flexbox, Grid, BEM, or selectors
- `examples`: one or more practical components or scenarios
- `language`: default to `pt-br`

## Main Prompt Template

Use this structure as the task baseline:

```text
Crie um guia CSS completo sobre [TOPIC] com os seguintes exemplos: [EXAMPLES]

Use os arquivos /global.css e /global.js para a base do design e interatividade.
O guia deve ser estruturado em seções numeradas, cada uma com uma explicação teórica e um exemplo prático interativo.
```

## Expected Page Structure

1. Create an HTML page with a header containing `<h1>` and a short introduction.
2. Follow with numbered `<section>` blocks.
3. Always include these assets in `<head>`:

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
<link rel="stylesheet" href="/global.css">
<script src="/global.js" defer></script>
```

4. Include Prism scripts at the end of `<body>`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-css.min.js"></script>
```

5. Create a dedicated local CSS file such as `[topic].css` for example-specific styling only.

## Example Contract

Every example must follow this structure:

```html
<section>
    <h2>X. Nome do Exemplo</h2>
    <p>Descricao concisa do que o exemplo demonstra e quais propriedades CSS estao envolvidas.</p>

    <div class="example-container">
        <div class="example-visual">
            <article class="card card--hover">
                <span class="card__tag">Destaque</span>
            </article>
        </div>

        <div class="code-tabs">
            <button class="tab-btn active" data-tab="htmlX">HTML</button>
            <button class="tab-btn" data-tab="cssX">CSS</button>

            <div class="tab-content active" id="htmlX">
                <pre><code class="language-html">&lt;!-- Codigo HTML escapado --&gt;</code></pre>
            </div>

            <div class="tab-content" id="cssX">
                <pre><code class="language-css">/* Codigo CSS especifico do exemplo */</code></pre>
            </div>
        </div>
    </div>
</section>
```

The tabs rely on `global.js`, so keep the `data-tab`, `tab-btn`, and `tab-content` structure intact.

## Local CSS Rules

In `[topic].css`:

- Do not redeclare global page styles such as `body`, `h1`, `h2`, or generic layout containers already covered by `global.css`.
- Style only the example components being demonstrated.
- Prefer the cleanest possible class names for examples.
- Do not introduce artificial helper prefixes such as `demo-` unless the project already depends on them.
- For components with elements and modifiers, use BEM naming.
- Use only these project variables:
  - `--primary`
  - `--bg`
  - `--panel`
  - `--border`
  - `--text`
- Format CSS snippets shown to learners with one property per line.

## Writing Style

- Write in accessible Portuguese.
- Keep theory concise and practical.
- Follow the educational tone of `ROLE-AGENTE-CRIADOR.md`.
- Prefer examples that help beginners understand how the CSS works by seeing and comparing results.

## Expected Generated Files

- `[topic].html`
- `[topic].css`
