<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.image" :alt="article.alt" />

    <nav>
      <ul>
        <li
          v-for="link of article.toc"
          :key="link.id"
          :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}

.nuxt-content {
  max-width: 50em;
  display: block;
}

#__layout {
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
}

#__layout > * {
  grid-column: 2;
}
.full-bleed {
  width: 100%;
  grid-column: 1 / 4;
}
</style>
