---
id: fe-concepts
---

# Front End Concepts

In this exercise, we'll familiarize ourselves with basic concepts and patterns that will be important throughout this workshop, specifically learning about:

- ... semantic HTML.
- ... WAI-ARIA.
- ... inherent styles, and the cascade.
- ... CSS reset techniques.
- ... styled components and variants, using the Stitches library.

There's a lot of preface here before getting into work, but get through it; there will be work.

## Semantic HTML Elements

A semantic element clearly describes its meaning to both the browser and the developer. This also has ramifications for search engine optimization (SEO), accessibility, etc. It is important to choose the correct elements for any given page component.

Non-semantic elements, such as `<div>` and `<span>`, tell us very little about their content.

Semantic elements, such as `<form>`, `<table>` and `<article>`, clearly define their content.

You will often want to choose the element with the most appropriate semantic meaning. However, there are frequent occasions when a non-semantic element's lack of explicit meaning is exactly why it should be used instead.

For more, see [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp) at W3 Schools.

## WAI-ARIA

WAI-ARIA is a complex topic, and one that I will only discuss here in passing.

The acronym breaks down as:

- Web Accessibility Initiative (WAI)
- Accessible Rich Internet Applications (ARIA)

The WAI-ARIA specification defines accessibility semantics for the creation of accessible web experiences. 

In short, you decorate your markup with additional `aria-` and `role` attributes that identify the purpose of each element. A "role" is a promise that the author of that element has also incorporated JavaScript enabling that element to fulfill its declared purpose. For example, the element `<div role="button">` must incorporate JS that enables it to behave as a button.

In this particular case, it would probably be better to use an HTML `<button>` element, taking advantage of the element's natural semantics.

In many projects, accessibility is sacrificed on the altar of velocity. To often, accessibility is addressed as a retrofit task, after the app has found at least some product-market fit.

WAI-ARIA can be overkill, especially if it's not well understood amongst the team. Moreover, depending on the app and its intended audience, natural accessibility considerations may be sufficient.

- Choose appropriate HTML elements according to their semantic meaning;
- lean into the browser's native features for keyboard-only navigation;
- honor the DOM and maintain a natural tab-order through the page;
- ensure that interactive elements are focusable.

**No ARIA is better than Bad ARIA.** [Read this to understand why.](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)

A front end engineer is rarely expected to be a master of WAI-ARIA, but you should at least understand what it is, and why it's important. And now you do.

On the other hand, you can put yourself head and shoulders above the competition by becoming a WAI-ARIA ninja. Some teams won't care, but the teams that care will care a lot.

For more, bookmark the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/). It's a comprehensive resource for documentation, patterns and best practices.

Also, familiarize yourself with the government's [Guidance on Web Accessibility and the ADA](https://www.ada.gov/resources/web-guidance/), because the Internet is mandated to be accessible by penalty of law.

## CSS

**CSS** (Cascading Style Sheets) is a declarative language that defines the appearance of HTML elements for various media types, primarily `all` or `screen`, but also for `print`, `tv`, [and more](https://www.w3.org/TR/CSS21/media.html%23media-types).

Most importantly, **CSS is fun!**

- [CSS Default Values Reference](https://www.w3schools.com/cssref/css_default_values.php)