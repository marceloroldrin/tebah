# Desafio 3 - Galeria Acessível

## Objetivo
Criar uma galeria de imagens com boa acessibilidade.

## Requisitos

1. Criar uma página com pelo menos **5 imagens** de pratos típicos
2. Cada imagem deve ter:
   - Atributo `alt` bem descritivo
   - Um título (`<h3>`)
   - Uma breve descrição (`<p>`)
   - Um link para "Ver receita" com texto descritivo

3. Estrutura semântica:
   - Use `<section>` para a galeria
   - Use `<article>` para cada prato
   - Use `<figure>` e `<figcaption>` se quiser

## Exemplo de Estrutura

```html
<section>
  <h2>Galeria de Pratos Típicos</h2>
  
  <article>
    <img src="prato1.jpg" alt="Descrição detalhada do prato">
    <h3>Nome do Prato</h3>
    <p>Descrição breve do prato</p>
    <a href="receita.html">Veja a receita completa de [Nome do Prato]</a>
  </article>
  
  <!-- Mais artigos... -->
</section>
```

## Checklist de Acessibilidade

- [ ] Todas as imagens têm `alt` descritivo
- [ ] Links têm textos claros (não "clique aqui")
- [ ] Estrutura semântica está correta
- [ ] Testei navegação por teclado (Tab)
- [ ] Rodei Lighthouse e verifiquei a pontuação de acessibilidade

## Bônus

- Adicione `<figure>` e `<figcaption>` para as imagens
- Teste com um leitor de tela (NVDA ou VoiceOver)
- Adicione atributos ARIA se necessário
