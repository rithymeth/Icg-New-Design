<template>
  <div class="contact-us-view min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-cover bg-center opacity-10" :style="{ backgroundImage: `url(${require('@/assets/banner.jpg')})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-teal-900/50"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <h1 class="text-6xl font-bold mb-8 text-center">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          Contact Us
        </span>
      </h1>

      <div class="max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl mb-16 border border-gray-700">
        <div class="md:flex">
          <div class="md:flex-1 p-8">
            <h2 class="text-2xl font-bold mb-6 text-yellow-400">Get in Touch</h2>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-400">Name</label>
                <input type="text" id="name" v-model="form.name" class="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-400">Email</label>
                <input type="email" id="email" v-model="form.email" class="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300">
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-400">Message</label>
                <textarea id="message" v-model="form.message" rows="4" class="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"></textarea>
              </div>
              <button type="submit" class="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 py-2 px-4 rounded-full hover:from-yellow-500 hover:to-red-600 transition duration-300 transform hover:scale-105 hover:shadow-lg font-bold">
                Send Message
              </button>
            </form>
          </div>
          <div class="md:flex-1 p-8 bg-gray-750/50 backdrop-blur-sm">
            <h2 class="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <span class="mr-3 text-yellow-400 text-2xl">📧</span>
                <span>support@casinoname.com</span>
              </div>
              <div class="flex items-center">
                <span class="mr-3 text-yellow-400 text-2xl">📞</span>
                <span>+1 (123) 456-7890</span>
              </div>
              <div class="flex items-center">
                <span class="mr-3 text-yellow-400 text-2xl">📍</span>
                <span>123 Casino Street, Las Vegas, NV 89101</span>
              </div>
            </div>
            <h3 class="text-xl font-bold mt-8 mb-4 text-yellow-400">Connect With Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <span class="text-3xl">💬</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <span class="text-3xl">👥</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <span class="text-3xl">📱</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center text-yellow-400">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 transition duration-300 hover:shadow-2xl hover:bg-gray-750/80">
            <h3 class="text-xl font-bold mb-2 text-yellow-400">{{ faq.question }}</h3>
            <p class="text-gray-400">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 z-0 pointer-events-none">
      <div v-for="n in 20" :key="n"
           class="absolute w-1 h-1 bg-yellow-400 rounded-full animate-twinkle"
           :style="{
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 5}s`
           }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUsView",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      faqs: [
        {
          question: "How do I create an account?",
          answer: "To create an account, click on the 'Sign Up' button in the top right corner of our website and follow the instructions."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including credit cards, e-wallets, and cryptocurrencies. Please check our Banking page for a full list."
        },
        {
          question: "How long do withdrawals take?",
          answer: "Withdrawal times vary depending on the method chosen. E-wallets are usually the fastest, processing within 24 hours. Bank transfers may take 3-5 business days."
        }
      ]
    };
  },
  methods: {
    submitForm() {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.form);
      // Reset form after submission
      this.form = { name: '', email: '', message: '' };
      // Show a success message to the user
      alert('Thank you for your message. We will get back to you soon!');
    }
  }
};
</script>

<style scoped>
@keyframes twinkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.animate-twinkle {
  animation: twinkle 5s infinite;
}
</style>