<template>
  <div class="container">
    <Breadcrumb :items="['menu.library', 'menu.library.list']" />
    <BookList :title="$t('menu.library.list')" />
  </div>
</template>

<script lang="ts" setup>
  import BookList from '../components/booklist.vue';
</script>

<style scoped lang="less"></style>
