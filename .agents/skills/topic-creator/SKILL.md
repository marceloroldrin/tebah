---
name: topic-creator
description: Create or update simple topic-level index.html pages for Tebah lesson folders. Use when Codex needs to turn a lesson README into a student-facing landing page with the topic title, a short description, and links to one or more files inside exemplos/, while relying on /global.css and /global.js instead of local presentation CSS.
---

# Topic Creator

Create a minimal `index.html` for a Tebah topic folder.

This skill is for the topic landing page only. It does not create or redesign the files inside `exemplos/`.

## Use When

- A topic folder needs a new `index.html`
- An existing topic `index.html` should be updated to match the current `README.md`
- The user wants a simple page for students with links to examples

## Workflow

1. Read the topic `README.md`.
2. Inspect the `exemplos/` folder and list the relevant example files.
3. Create or update only the topic-level `index.html`.
4. Keep the page short, clear, and student-facing.

## Required Output Rules

- Use `/global.css` and `/global.js`.
- Do not create a local CSS file for the topic page.
- Prefer classes already defined in `global.css`, such as `container`, `example-container`, and `btn`.
- Use semantic HTML.
- Keep the page simple: title, short description, and links to examples.
- If there are multiple examples, list all of them clearly.
- If filenames are too technical, improve only the visible link label, not the file path.

## Content Rules

- Base the content on the lesson `README.md`.
- Write in accessible Brazilian Portuguese.
- Keep the description concise.
- Avoid copying the whole `README.md` into the page.
- Do not include teacher-facing guidance.
- Do not embed the example contents into the topic page.

## Scope Guardrails

- Do not modify files inside `exemplos/` unless the user explicitly asks.
- Do not create tabs, code blocks, or a full interactive guide unless the user explicitly asks for that.
- Do not add inline styles if the existing `global.css` classes are enough.

## Suggested Structure

```html
<body>
  <div class="container">
    <header>
      <h1>...</h1>
      <p>...</p>
    </header>

    <section class="example-container">
      <h2>Objetivos</h2>
      ...
    </section>

    <section class="example-container">
      <h2>Exemplos deste tópico</h2>
      <a class="btn btn--primary" href="./exemplos/...">...</a>
    </section>
  </div>
</body>
```
