<template>
  <div class="download-view min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        Download Our Casino App
      </h1>

      <div class="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-full w-full object-cover md:w-48" src="@/assets/banner1.jpg" alt="App Preview">
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-yellow-400 font-semibold">Experience the thrill</div>
            <h2 class="block mt-1 text-2xl leading-tight font-bold text-white">Casino at Your Fingertips</h2>
            <p class="mt-2 text-gray-400">Download our app and enjoy a world-class casino experience anytime, anywhere. Access your favorite games, manage your account, and receive exclusive mobile offers!</p>
          </div>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- iOS Download -->
        <div class="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 class="text-2xl font-bold mb-4 text-yellow-400">Download for iOS</h3>
          <div class="flex items-center justify-between">
            <a href="#" class="bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 py-2 px-6 rounded-full hover:from-yellow-500 hover:to-red-600 transition duration-300 transform hover:scale-105 font-bold">
              Download on App Store
            </a>
            <div class="qr-code bg-white p-2 rounded-lg">
              <!-- Replace with actual QR code image -->
              <img src="@/assets/QR.png" alt="iOS QR Code" class="w-24 h-24">
            </div>
          </div>
        </div>

        <!-- Android Download -->
        <div class="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 class="text-2xl font-bold mb-4 text-yellow-400">Download for Android</h3>
          <div class="flex items-center justify-between">
            <a href="#" class="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-6 rounded-full hover:from-green-500 hover:to-blue-600 transition duration-300 transform hover:scale-105 font-bold">
              Download on Google Play
            </a>
            <div class="qr-code bg-white p-2 rounded-lg">
              <!-- Replace with actual QR code image -->
              <img src="@/assets/QR.png" alt="Android QR Code" class="w-24 h-24">
            </div>
          </div>
        </div>
      </div>

      <!-- App Features -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-yellow-400">App Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <i class="fas fa-mobile-alt text-4xl mb-4 text-yellow-400"></i>
            <h3 class="text-xl font-bold mb-2">Mobile-Optimized Games</h3>
            <p class="text-gray-400">Enjoy your favorite casino games optimized for mobile play</p>
          </div>
          <div class="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <i class="fas fa-lock text-4xl mb-4 text-yellow-400"></i>
            <h3 class="text-xl font-bold mb-2">Secure Transactions</h3>
            <p class="text-gray-400">Fast and secure deposits and withdrawals on the go</p>
          </div>
          <div class="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
            <i class="fas fa-gift text-4xl mb-4 text-yellow-400"></i>
            <h3 class="text-xl font-bold mb-2">Exclusive Bonuses</h3>
            <p class="text-gray-400">Access special promotions available only on mobile</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadView",
};
</script>

<style scoped>
.download-view {
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

.download-view::before {
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