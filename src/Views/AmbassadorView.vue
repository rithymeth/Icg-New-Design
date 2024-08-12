<template>
  <div class="ambassador-view min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
        Ambassador Program
      </h1>

      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-2xl mb-16">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-64 w-full object-cover md:w-48" src="@/assets/banner1.jpg" alt="Ambassador Program">
          </div>
          <div class="p-8">
            <h2 class="text-2xl font-bold mb-4 text-yellow-400">Become a Casino Ambassador</h2>
            <p class="text-gray-300 mb-4">
              Join our exclusive ambassador program and represent our casino to the world. Enjoy VIP benefits, special rewards, and the opportunity to grow your own brand alongside ours.
            </p>
            <button class="bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 py-2 px-6 rounded-full hover:from-yellow-500 hover:to-red-600 transition duration-300 transform hover:scale-105 font-bold">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-yellow-400">Ambassador Benefits</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <i class="fas fa-gift text-4xl mb-4 text-yellow-400"></i>
            <h3 class="text-xl font-bold mb-2">Exclusive Bonuses</h3>
            <p class="text-gray-300">Enjoy special bonuses and promotions available only to our ambassadors</p>
          </div>
          <div class="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <i class="fas fa-percentage text-4xl mb-4 text-yellow-400"></i>
            <h3 class="text-xl font-bold mb-2">Revenue Share</h3>
            <p class="text-gray-300">Earn a percentage of the revenue generated from your referrals</p>
          </div>
          <div class="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <i class="fas fa-star text-4xl mb-4 text-yellow-400"></i>
            <h3 class="text-xl font-bold mb-2">VIP Treatment</h3>
            <p class="text-gray-300">Access exclusive events, personalized support, and VIP services</p>
          </div>
        </div>
      </div>

      <!-- How It Works Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-yellow-400">How It Works</h2>
        <div class="max-w-3xl mx-auto">
          <div class="flex flex-col md:flex-row items-center mb-8">
            <div class="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-gray-900 font-bold text-xl mr-4 mb-4 md:mb-0">1</div>
            <div class="flex-grow">
              <h3 class="text-xl font-bold mb-2">Apply</h3>
              <p class="text-gray-300">Fill out our application form and tell us why you'd be a great ambassador</p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center mb-8">
            <div class="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-gray-900 font-bold text-xl mr-4 mb-4 md:mb-0">2</div>
            <div class="flex-grow">
              <h3 class="text-xl font-bold mb-2">Get Approved</h3>
              <p class="text-gray-300">Our team will review your application and get in touch if you're selected</p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center">
            <div class="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-gray-900 font-bold text-xl mr-4 mb-4 md:mb-0">3</div>
            <div class="flex-grow">
              <h3 class="text-xl font-bold mb-2">Start Earning</h3>
              <p class="text-gray-300">Begin promoting our casino and enjoying the benefits of being an ambassador</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Ambassadors (if applicable) -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-yellow-400">Featured Ambassadors</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="ambassador in featuredAmbassadors" :key="ambassador.id" class="text-center">
            <img :src="ambassador.image" :alt="ambassador.name" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
            <h3 class="font-bold text-lg">{{ ambassador.name }}</h3>
            <p class="text-gray-400">{{ ambassador.role }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <h2 class="text-3xl font-bold mb-4 text-yellow-400">Ready to Join?</h2>
        <p class="text-gray-300 mb-8">Become a part of our exclusive ambassador program today!</p>
        <button class="bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 py-3 px-8 rounded-full hover:from-yellow-500 hover:to-red-600 transition duration-300 transform hover:scale-105 font-bold text-lg">
          Apply Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AmbassadorView",
  data() {
    return {
      featuredAmbassadors: [
        { id: 1, name: "Alex Johnson", role: "Poker Pro", image: require("@/assets/banner2.jpg") },
        { id: 2, name: "Emma Wilson", role: "Slots Expert", image: require("@/assets/banner2.jpg") },
        { id: 3, name: "Michael Chen", role: "Blackjack Master", image: require("@/assets/banner2.jpg") },
        { id: 4, name: "Sophia Rodriguez", role: "Roulette Specialist", image: require("@/assets/banner2.jpg") },
      ]
    };
  }
};
</script>

<style scoped>
.ambassador-view {
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

.ambassador-view::before {
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