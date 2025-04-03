<script setup>
import Theme from 'vitepress/theme'
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
const { Layout } = Theme
</script>

<template>
  <header>
    <div class="banner" v-if="frontmatter?.hero?.banner">{{ frontmatter?.hero?.banner }}</div>
  </header>
  <Layout></Layout>
</template>