<template>
  <nav :class="[
    'fixed top-0 left-0 right-0 z-50 shadow-md transition-colors duration-200',
    isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" :src="isDarkMode ? require('@/assets/logo.png') : require('@/assets/logo1.png')" alt="Casino Logo">
          </div>
          <!-- Navigation Links -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a v-for="link in navLinks" :key="link.text" :href="link.route"
               :class="[
                 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                 isDarkMode
                   ? 'text-gray-300 hover:border-gray-300 hover:text-white'
                   : 'text-gray-500 hover:border-gray-300 hover:text-gray-700',
                 'border-transparent'
               ]">
              {{ link.text }}
            </a>
          </div>
        </div>
        
        <!-- Right side menu -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <!-- Dark mode toggle -->
          <button @click="toggleDarkMode" :class="[
            'p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-400 hover:text-gray-500'
          ]">
            <span class="sr-only">Toggle dark mode</span>
            <i :class="[isDarkMode ? 'fas fa-sun' : 'fas fa-moon', 'text-xl']"></i>
          </button>

          <!-- Notifications -->
          <button :class="[
            'ml-3 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-500'
          ]">
            <span class="sr-only">View notifications</span>
            <i class="fas fa-bell text-xl"></i>
          </button>

          <!-- User menu -->
          <div v-if="isLoggedIn" class="ml-3 relative">
            <div>
              <button @click="toggleUserMenu" class="rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="@/assets/224.png" alt="User avatar">
              </button>
            </div>
            <div v-if="isUserMenuOpen" :class="[
              'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none',
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            ]" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <a href="#" :class="[
                'block px-4 py-2 text-sm',
                isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
              ]" role="menuitem">Your Profile</a>
              <a href="#" :class="[
                'block px-4 py-2 text-sm',
                isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
              ]" role="menuitem">Settings</a>
              <a @click="logout" :class="[
                'block px-4 py-2 text-sm cursor-pointer',
                isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
              ]" role="menuitem">Sign out</a>
            </div>
          </div>
          
          <!-- Login/Register button -->
          <div v-else class="ml-3">
            <router-link to="/auth" :class="[
              'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
              isDarkMode
                ? 'text-black bg-yellow-400 hover:bg-yellow-300'
                : 'text-white bg-blue-600 hover:bg-blue-700'
            ]">
              Login
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="toggleMobileMenu" :class="[
            'inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500',
            isDarkMode
              ? 'text-gray-400 hover:text-white hover:bg-gray-700'
              : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'
          ]">
            <span class="sr-only">Open main menu</span>
            <i :class="[isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars', 'block h-6 w-6']"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" :class="['sm:hidden', isDarkMode ? 'bg-gray-900' : 'bg-white']">
      <div class="pt-2 pb-3 space-y-1">
        <a v-for="link in navLinks" :key="link.text" :href="link.route"
           :class="[
             'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
             isDarkMode
               ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
               : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700',
             'border-transparent'
           ]">
          {{ link.text }}
        </a>
      </div>
      <div :class="['pt-4 pb-3 border-t', isDarkMode ? 'border-gray-700' : 'border-gray-200']">
        <div v-if="isLoggedIn" class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="@/assets/224.png" alt="User avatar">
          </div>
          <div class="ml-3">
            <div :class="['text-base font-medium', isDarkMode ? 'text-white' : 'text-gray-800']">{{ userName }}</div>
            <div :class="['text-sm font-medium', isDarkMode ? 'text-gray-400' : 'text-gray-500']">{{ userEmail }}</div>
          </div>
        </div>
        <div class="mt-3 space-y-1">
          <a v-if="isLoggedIn" href="#" :class="[
            'block px-4 py-2 text-base font-medium',
            isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
          ]">Your Profile</a>
          <a v-if="isLoggedIn" href="#" :class="[
            'block px-4 py-2 text-base font-medium',
            isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
          ]">Settings</a>
          <a v-if="isLoggedIn" @click="logout" :class="[
            'block px-4 py-2 text-base font-medium cursor-pointer',
            isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
          ]">Sign out</a>
          <router-link v-else to="/auth" :class="[
            'block px-4 py-2 text-base font-medium',
            isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
          ]">
            Login / Register
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    isDarkMode: Boolean,
  },
  data() {
    return {
      isLoggedIn: false, // This should be reactive based on your auth state
      userName: 'John Doe', // This should be set when user logs in
      userEmail: 'john@example.com', // This should be set when user logs in
      isUserMenuOpen: false,
      isMobileMenuOpen: false,
      navLinks: [
        { text: 'Home', route: '/' },
        { text: 'Casino', route: '/casino' },
        { text: 'Sports', route: '/sport' },
        { text: 'Promotions', route: '/promotions' },
        { text: 'VIP', route: '/vip' },
      ],
    };
  },
  methods: {
    toggleDarkMode() {
      this.$emit('toggle-dark-mode');
    },
    toggleUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    logout() {
      // Implement logout logic here
      this.isLoggedIn = false;
      this.isUserMenuOpen = false;
      // You might want to redirect to home page or login page after logout
    },
  },
};
</script>