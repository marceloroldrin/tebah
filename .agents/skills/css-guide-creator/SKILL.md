---
name: css-guide-creator
description: Generate interactive CSS teaching guides that follow the Tebah project pattern, including numbered sections, practical examples, code tabs, Prism.js highlighting, and mandatory integration with /global.css and /global.js. Use when Codex needs to create or revise HTML/CSS example guides for topics such as Flexbox, Grid, BEM, selectors, responsiveness, or other CSS concepts inside this project, especially for files under modulo-*-css and exemplos/.
---

# CSS Guide Creator

Create CSS documentation pages that match the Tebah visual and educational pattern.

## Workflow

1. Read `.vscode/css-guide.skill.json`, `.vscode/css-guide.prompt.md`, and `ROLE-AGENTE-CRIADOR.md` if they exist and preserve their intent.
2. Identify the topic, the practical examples to demonstrate, and the target folder, usually an `exemplos/` directory inside `modulo-*-css`.
3. Generate two files for the guide:
   - `[topic].html`
   - `[topic].css`
4. Keep the HTML responsible for structure, explanation, code snippets, Prism assets, and links to global files.
5. Keep the local CSS focused only on the example components shown in the guide.

## Required Output Rules

- Link `/global.css` and `/global.js` from the project root.
- Include Prism.js with the Tomorrow theme.
- Build the page with a header, an introduction, and numbered `<section>` blocks.
- For each example, include:
  - a short explanation in accessible Portuguese
  - a visual demo area using `.example-visual`
  - code tabs using the existing `global.js` tab behavior
- Write CSS snippets shown in the tabs with one property per line.
- Use only the project design variables: `--primary`, `--bg`, `--panel`, `--border`, `--text`.
- Preserve the educational tone defined in `ROLE-AGENTE-CRIADOR.md`: practical, clear, beginner-friendly, and accessible.

## File Placement

- Prefer creating the guide near the lesson that uses it.
- When the user does not specify filenames, use the normalized topic name in kebab-case:
  - `flexbox.html`
  - `flexbox.css`
- Avoid editing `global.css` or `global.js` unless the user explicitly asks for framework-level changes.

## Content Guidelines

- Explain only what the student needs to understand the demonstrated concept.
- Make examples progressive and practical.
- Keep descriptions concise.
- Use semantic HTML.
- Escape code correctly inside `<pre><code>`.
- Prefer clean, direct class names.
- Avoid artificial prefixes such as `demo-` unless they are already part of an established local convention.
- When a component has internal parts or variations, prefer BEM naming such as `card`, `card__tag`, and `card--highlight`.

## References

- Read `references/css-guide-spec.md` for the full contract, mandatory HTML structure, external dependencies, and local CSS rules.
