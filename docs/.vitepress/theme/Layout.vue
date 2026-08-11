<script setup>
import DefaultTheme from 'vitepress/theme'
import ReadingProgress from './components/ReadingProgress.vue'
import BackToTop from './components/BackToTop.vue'
import CopyCode from './components/CopyCode.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <ReadingProgress />
      <BackToTop />
      <CopyCode />
    </template>
  </Layout>
</template>
