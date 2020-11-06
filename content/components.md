---
title: Some components we have
items:
  - Item1
  - Item2
  - Item3
---

## Alerts

<alert type="info"> An info aleart </alert>

<alert type="success"> An sucess aleart </alert>

<alert type="warning"> An warning aleart </alert>

<alert type="danger"> A danger alert </alert>

<badge> A badge </badge><badge> A badge </badge><badge> A badge </badge>

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxt/content-theme-docs
  ```

  </code-block>

  <code-block label="NPM">

  ```bash
  npm install @nuxt/content-theme-docs
  ```
  </code-block>
</code-group>


<!-- TODO: Let this be more natural -->
<list :items="items"></list>
