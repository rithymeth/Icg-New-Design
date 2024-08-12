<template>
    <div class="page-layout">
      <!-- Page Header -->
      <header class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold">{{ title }}</h1>
        </div>
      </header>
  
      <!-- Page Content -->
      <main class="container mx-auto px-4 py-8">
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageLayout',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
  </script>