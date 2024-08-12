<template>
  <div class="promotions-view min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-cover bg-center opacity-10" :style="{ backgroundImage: `url(${require('@/assets/banner.jpg')})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-teal-900/50"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <h1 class="text-6xl font-bold mb-8 text-center">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          Casino Promotions
        </span>
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div v-for="promo in promotions" :key="promo.id" 
             class="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 border border-gray-700">
          <div class="relative">
            <img :src="promo.image" :alt="promo.title" class="w-full h-48 object-cover" />
            <div class="absolute top-0 left-0 bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 px-3 py-1 m-2 rounded-full text-xs font-bold transform -rotate-3">
              {{ promo.tag }}
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="mr-4 p-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full">
                <span class="text-2xl">{{ promo.icon }}</span>
              </div>
              <h3 class="font-bold text-2xl text-yellow-400">{{ promo.title }}</h3>
            </div>
            <p class="text-gray-400 mb-4">{{ promo.description }}</p>
            <div class="mb-4">
              <span class="text-sm font-semibold text-green-400">{{ promo.bonus }}</span>
            </div>
            <button
              class="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 py-2 px-4 rounded-full hover:from-yellow-500 hover:to-red-600 transition duration-300 transform hover:scale-105 hover:shadow-lg font-bold"
            >
              Claim Now
            </button>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <h2 class="text-3xl font-bold mb-4 text-yellow-400">How to Claim</h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          To claim any of our fantastic promotions, simply click the "Claim Now" button and follow the instructions. Make sure you're logged in to your account to take advantage of these offers. Terms and conditions apply to all promotions.
        </p>
      </div>

      <div class="mt-12 text-center">
        <button class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white py-3 px-8 rounded-full hover:from-yellow-500 hover:via-red-600 hover:to-pink-600 transition duration-300 transform hover:scale-105 hover:shadow-2xl font-bold text-lg">
          View All Promotions
        </button>
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
  name: "PromotionsView",
  data() {
    return {
      promotions: [
        {
          id: 1,
          title: "Welcome Bonus",
          description: "Get a massive bonus on your first deposit!",
          image: require("@/assets/224.png"),
          tag: "New Players",
          bonus: "100% up to $500",
          icon: '🎁'
        },
        {
          id: 2,
          title: "Weekly Cashback",
          description: "Enjoy cashback on your weekly losses.",
          image: require("@/assets/224.png"),
          tag: "Regular",
          bonus: "10% Cashback",
          icon: '🔄'
        },
        {
          id: 3,
          title: "High Roller Bonus",
          description: "Exclusive bonus for our high stakes players.",
          image: require("@/assets/224.png"),
          tag: "VIP",
          bonus: "50% up to $2000",
          icon: '👑'
        },
        {
          id: 4,
          title: "Refer a Friend",
          description: "Bring your friends and get rewarded!",
          image: require("@/assets/224.png"),
          tag: "Referral",
          bonus: "$100 per friend",
          icon: '👥'
        },
        {
          id: 5,
          title: "Slot Tournament",
          description: "Compete in our weekly slot tournament.",
          image: require("@/assets/224.png"),
          tag: "Tournament",
          bonus: "$10,000 Prize Pool",
          icon: '🏆'
        },
        {
          id: 6,
          title: "Loyalty Program",
          description: "Earn points as you play and exchange for bonuses.",
          image: require("@/assets/224.png"),
          tag: "Loyalty",
          bonus: "Up to 20% Cashback",
          icon: '⭐'
        }
      ]
    };
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