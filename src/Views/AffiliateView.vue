<template>
  <div class="affiliate-view min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        Affiliate Program
      </h1>

      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-2xl mb-16">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-64 w-full object-cover md:w-48" src="@/assets/banner1.jpg" alt="Affiliate Program">
          </div>
          <div class="p-8">
            <h2 class="block mt-1 text-2xl leading-tight font-bold text-yellow-400">Partner With Us</h2>
            <p class="mt-2 text-gray-400">Join our affiliate program and earn substantial commissions by promoting our casino. Benefit from our high-converting platform, reliable tracking, and timely payouts.</p>
            <button class="mt-4 bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 py-2 px-6 rounded-full hover:from-yellow-500 hover:to-red-600 transition duration-300 transform hover:scale-105 font-bold">
              Join Now
            </button>
          </div>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-yellow-400">Why Choose Our Affiliate Program?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <i class="fas fa-percentage text-4xl mb-4 text-yellow-400"></i>
            <h3 class="text-xl font-bold mb-2">High Commissions</h3>
            <p class="text-gray-400">Earn up to 50% revenue share with our competitive commission structure</p>
          </div>
          <div class="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <i class="fas fa-chart-line text-4xl mb-4 text-yellow-400"></i>
            <h3 class="text-xl font-bold mb-2">Real-Time Tracking</h3>
            <p class="text-gray-400">Monitor your performance with our advanced tracking system</p>
          </div>
          <div class="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <i class="fas fa-money-bill-wave text-4xl mb-4 text-yellow-400"></i>
            <h3 class="text-xl font-bold mb-2">Fast Payouts</h3>
            <p class="text-gray-400">Enjoy timely and reliable payments for your earnings</p>
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
              <h3 class="text-xl font-bold mb-2">Sign Up</h3>
              <p class="text-gray-400">Complete our simple registration process to become an affiliate</p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center mb-8">
            <div class="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-gray-900 font-bold text-xl mr-4 mb-4 md:mb-0">2</div>
            <div class="flex-grow">
              <h3 class="text-xl font-bold mb-2">Promote</h3>
              <p class="text-gray-400">Use our marketing materials to promote our casino to your audience</p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center">
            <div class="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-gray-900 font-bold text-xl mr-4 mb-4 md:mb-0">3</div>
            <div class="flex-grow">
              <h3 class="text-xl font-bold mb-2">Earn</h3>
              <p class="text-gray-400">Start earning commissions for every player you refer</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <h2 class="text-3xl font-bold mb-4 text-yellow-400">Ready to Get Started?</h2>
        <p class="text-gray-400 mb-8">Join our affiliate program today and start earning!</p>
        <button class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white py-3 px-8 rounded-full hover:from-yellow-500 hover:via-red-600 hover:to-pink-600 transition duration-300 transform hover:scale-105 font-bold text-lg">
          Apply Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AffiliateView",
};
</script>

<style scoped>
.affiliate-view {
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

.affiliate-view::before {
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