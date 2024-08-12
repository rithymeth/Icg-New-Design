<template>
  <footer
    class="['bg-gray-900 text-gray py-12 px-4', isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800']"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-2 lg:col-span-1">
          <img src="@/assets/logo1.png" alt="ICG Gaming" class="h-10 mb-6" />
          <p class="text-sm leading-relaxed mb-6">
            Experience the thrill of gaming with ICG. Join us for endless entertainment
            and exciting rewards in a safe and responsible gaming environment.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.text">
              <a
                :href="link.url"
                class="text-gray-400 hover:text-white transition-colors duration-200"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Support</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors duration-200"
                >Help Center</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors duration-200"
                >Responsible Gaming</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors duration-200"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Stay Updated</h3>
          <p class="text-sm mb-4">
            Subscribe for the latest updates and exclusive offers.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-grow p-2 rounded-l-lg bg-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              class="bg-yellow-400 text-black p-2 rounded-r-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-sm mb-4 md:mb-0">&copy; 2024 ICG Gaming. All rights reserved.</p>
        <div class="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
          <a
            href="#"
            class="text-gray-400 hover:text-white transition-colors duration-200"
            >Privacy Policy</a
          >
          <a
            href="#"
            class="text-gray-400 hover:text-white transition-colors duration-200"
            >Terms of Service</a
          >
          <a
            href="#"
            class="text-gray-400 hover:text-white transition-colors duration-200"
            >Cookie Policy</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      quickLinks: [
        { text: "About Us", url: "#" },
        { text: "Games", url: "#" },
        { text: "Promotions", url: "#" },
        { text: "Affiliate Program", url: "#" },
        { text: "VIP Program", url: "#" },
      ],
    };
  },
  methods: {
    subscribeNewsletter() {
      // Implement newsletter subscription logic
      console.log("Newsletter subscription submitted");
    },
  },
};
</script>