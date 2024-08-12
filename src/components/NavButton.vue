<template>
    <button 
      class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    >
      <i :class="icon"></i>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      }
    }
  }
  </script>