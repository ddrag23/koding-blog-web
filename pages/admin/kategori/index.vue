<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  title: "Kategori",
  breadcrumb: "Kategori",
});
useHead({
  title: "Kategori | Koding blog",
});
</script>

<template>
  <el-card class="box-card" shadow="never">
    <template #header>
      <div class="flex justify-between">
        <span>Daftar Transaksi Masuk</span>
        <el-button class="button" text>Add</el-button>
      </div>
    </template>
    <KategoriDatagrid />
  </el-card>
</template>
