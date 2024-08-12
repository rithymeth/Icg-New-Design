<template>
  <div class="help-view min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
        Help Center
      </h1>

      <!-- Search Section -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <input 
            type="text" 
            placeholder="Search for help..." 
            v-model="searchQuery"
            class="w-full py-3 px-4 pl-12 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-center text-yellow-400">Quick Links</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button v-for="link in quickLinks" :key="link.id" 
            class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center">
            <i :class="[link.icon, 'mr-2']"></i>
            {{ link.text }}
          </button>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-center text-yellow-400">Frequently Asked Questions</h2>
        <div class="max-w-3xl mx-auto">
          <div v-for="faq in faqs" :key="faq.id" class="mb-4">
            <button @click="faq.isOpen = !faq.isOpen" 
              class="w-full text-left bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition duration-300 flex justify-between items-center">
              <span class="font-bold">{{ faq.question }}</span>
              <i :class="[faq.isOpen ? 'fa-chevron-up' : 'fa-chevron-down', 'fas']"></i>
            </button>
            <div v-if="faq.isOpen" class="bg-gray-700 p-4 rounded-b-lg mt-1">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Help Categories -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-center text-yellow-400">Help Categories</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="category in helpCategories" :key="category.id" 
            class="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-bold mb-3 text-yellow-400">{{ category.title }}</h3>
            <ul class="space-y-2">
              <li v-for="item in category.items" :key="item" class="text-gray-300 hover:text-white">
                <a href="#" class="flex items-center">
                  <i class="fas fa-angle-right mr-2"></i>
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Contact Support -->
      <div class="text-center">
        <h2 class="text-3xl font-bold mb-4 text-yellow-400">Still Need Help?</h2>
        <p class="text-gray-300 mb-6">Our support team is here to assist you 24/7</p>
        <button class="bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 py-3 px-8 rounded-full hover:from-yellow-500 hover:to-red-600 transition duration-300 transform hover:scale-105 font-bold text-lg">
          Contact Support
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpView",
  data() {
    return {
      searchQuery: '',
      quickLinks: [
        { id: 1, text: 'Account', icon: 'fas fa-user', route: '/auth' },
        { id: 2, text: 'Deposits', icon: 'fas fa-money-bill-wave', route: '/' },
        { id: 3, text: 'Withdrawals', icon: 'fas fa-hand-holding-usd', route: '/' },
        { id: 4, text: 'Bonuses', icon: 'fas fa-gift' },
      ],
      faqs: [
        { 
          id: 1, 
          question: 'How do I create an account?', 
          answer: 'To create an account, click on the "Sign Up" button in the top right corner of our website and follow the registration process.',
          isOpen: false
        },
        { 
          id: 2, 
          question: 'What payment methods do you accept?', 
          answer: 'We accept various payment methods including credit cards, e-wallets, and cryptocurrencies. Please check our Banking page for a full list.',
          isOpen: false
        },
        { 
          id: 3, 
          question: 'How long do withdrawals take?', 
          answer: 'Withdrawal times vary depending on the method chosen. E-wallets are usually the fastest, processing within 24 hours. Bank transfers may take 3-5 business days.',
          isOpen: false
        },
      ],
      helpCategories: [
        {
          id: 1,
          title: 'Account Management',
          items: ['Registration', 'Verification', 'Password Reset', 'Account Security']
        },
        {
          id: 2,
          title: 'Banking',
          items: ['Deposit Methods', 'Withdrawal Process', 'Transaction History', 'Payment Issues']
        },
        {
          id: 3,
          title: 'Gaming',
          items: ['Game Rules', 'Responsible Gaming', 'Technical Issues', 'Game Fairness']
        },
      ]
    };
  }
};
</script>

<style scoped>
.help-view {
  background-image: url('@/assets/banner.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

/* Add a subtle sparkle animation */
@keyframes sparkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.help-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 40% 60%, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 60% 80%, rgba(255, 215, 0, 0.1) 1px, transparent 1px);
  background-size: 100% 100%;
  animation: sparkle 5s infinite;
  pointer-events: none;
}
</style>