<template>
  <div :class="['min-h-screen flex flex-col', isDarkMode ? 'dark' : '']">
    <div class="flex flex-1">
      <!-- Sidebar -->
      <SideBar
        :is-sidebar-collapsed="isSidebarCollapsed"
        :is-dark-mode="isDarkMode"
        @toggle-sidebar="toggleSidebar"
      />

      <!-- Main Content Area with Navbar -->
      <div class="flex-1 flex flex-col w-full">
        <NavBar :is-dark-mode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
        <main
          :class="[
            'flex-grow p-4 transition-all duration-300',
            isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64',
          ]"
        >
          <!-- Main Content Goes Here -->
          <router-view />
        </main>
      </div>
    </div>
    <!-- Footer -->
    <FooterView class="flex-shrink-0" :is-dark-mode="isDarkMode" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  components: {
    NavBar,
    SideBar,
    FooterView,
  },
  data() {
    return {
      isSidebarCollapsed: false,
      isDarkMode: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      console.log("Dark mode toggled in App.vue. New state:", this.isDarkMode);
    },
  },
};
</script>

<style>
/* Global Styles */
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Dark Mode Styles */
.dark {
  background-color: #121212;
  color: #e0e0e0;
}

/* Adjustments for when the sidebar is collapsed */
@media (min-width: 768px) {
  .ml-20 {
    margin-left: 5rem;
  }
  .ml-64 {
    margin-left: 16rem;
  }
}
</style>
