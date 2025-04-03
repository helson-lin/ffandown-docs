<script setup>
import Theme from 'vitepress/theme'
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
const { Layout } = Theme
</script>

<template>
    <Layout>
        <template #home-hero-before>
            <div class="banner" v-if="frontmatter?.hero?.banner">{{ frontmatter?.hero?.banner }}</div>
        </template>
    </Layout>
</template>