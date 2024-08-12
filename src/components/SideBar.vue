<template>
  <div>
    <!-- Mobile Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      @click="closeMobileMenu"
    ></div>

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed top-0 left-0 h-screen shadow-lg transition-all duration-300 z-50 flex flex-col',
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
        isSidebarCollapsed ? 'w-20' : 'w-64',
        isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'
      ]"
    >
      <div class="p-4 flex justify-between items-center h-16">
        <img
          src="@/assets/logo1.png"
          alt="Logo"
          :class="[isSidebarCollapsed ? 'w-10' : 'w-32', 'transition-all duration-300']"
        />
        <button
          @click="closeMobileMenu"
          class="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav class="flex-grow overflow-y-auto">
        <ul class="space-y-2 p-3">
          <li v-for="(item, index) in sidebarItems" :key="index">
            <router-link
              :to="item.route"
              class="flex items-center p-3 rounded-xl transition-all duration-200 group"
              :class="{ 'justify-center': isSidebarCollapsed }"
            >
              <i
                :class="[
                  item.icon,
                  'text-xl group-hover:text-blue-500 transition-colors duration-200',
                  isSidebarCollapsed ? '' : 'mr-3'
                ]"
              ></i>
              <span 
                :class="[
                  'transition-all duration-200',
                  isSidebarCollapsed ? 'opacity-0 absolute' : 'opacity-100'
                ]"
              >
                {{ item.text }}
              </span>
              <div
                :class="[
                  'absolute inset-0 rounded-xl transition-all duration-200 z-[-1]',
                  'group-hover:bg-blue-500 group-hover:bg-opacity-10'
                ]"
              ></div>
            </router-link>
          </li>
        </ul>
      </nav>

      <button 
        @click="toggleSidebar"
        class="p-4 w-full flex justify-center items-center hover:bg-blue-500 hover:bg-opacity-10 transition-colors duration-200 md:block hidden"
      >
        <i :class="[isSidebarCollapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left', 'text-xl']"></i>
      </button>
    </aside>

    <!-- Mobile Toggle Button -->
    <button
      @click="toggleMobileMenu"
      class="fixed top-4 left-4 z-50 md:hidden bg-gray-800 text-white p-2 rounded-md focus:outline-none"
    >
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isSidebarCollapsed: Boolean,
    isDarkMode: Boolean,
  },
  data() {
    return {
      isMobileMenuOpen: false,
      sidebarItems: [
        { icon: 'fas fa-home', text: 'Home', route: '/' },
        { icon: 'fas fa-futbol', text: 'Sport', route: '/sport' },
        { icon: 'fas fa-dice', text: 'Casino', route: '/casino' },
        { icon: 'fas fa-gamepad', text: 'Slots', route: '/slots' },
        { icon: 'fas fa-table', text: 'Table Games', route: '/table-games' },
        { icon: 'fas fa-rocket', text: 'Crash Games', route: '/crash-games' },
        { icon: 'fas fa-fish', text: 'Fishing Games', route: '/fishing-games' },
        { icon: 'fas fa-gamepad', text: 'Arcade', route: '/arcade' },
        { icon: 'fas fa-ticket-alt', text: 'Lotto', route: '/lotto' },
        { icon: 'fas fa-gift', text: 'Promotions', route: '/promotions' },
        { icon: 'fas fa-download', text: 'Download', route: '/download' },
        { icon: 'fas fa-handshake', text: 'Affiliate', route: '/affiliate' },
        { icon: 'fas fa-star', text: 'Ambassador', route: '/ambassador' },
        { icon: 'fas fa-question-circle', text: 'Help', route: '/help' },
        { icon: 'fas fa-phone', text: 'Contact Us', route: '/contact-us' },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>