<template>
  <div class="lotto-view min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-500 to-blue-400">
        Lotto Games
      </h1>

      <!-- Featured Jackpot Section -->
      <div class="mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl overflow-hidden shadow-2xl">
        <div class="p-8 text-center">
          <h2 class="text-4xl font-bold mb-4 text-gray-900">Mega Millions Jackpot</h2>
          <p class="text-6xl font-bold mb-6 text-gray-900">$345,000,000</p>
          <p class="text-xl mb-8 text-gray-800">Next Draw: {{ nextDraw }}</p>
          <button class="bg-gray-900 text-yellow-400 font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300 transform hover:scale-105">
            Play Now
          </button>
        </div>
      </div>
      
      <!-- Filter and Search Section -->
      <div class="mb-12 bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl">
        <div class="flex flex-wrap justify-between items-center mb-6">
          <div class="flex flex-wrap gap-4 mb-4 sm:mb-0">
            <button v-for="category in categories" :key="category" 
                    :class="['py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg', 
                             selectedCategory === category ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900' : 'bg-gray-700 text-yellow-400']"
                    @click="selectCategory(category)">
              {{ category }}
            </button>
          </div>
          <div class="relative w-full sm:w-64">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search games..." 
              class="w-full pl-10 pr-4 py-2 rounded-full bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 text-white placeholder-gray-400"
            />
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      <!-- Lotto Games Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="game in filteredGames"
          :key="game.id"
          class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 border border-gray-700"
        >
          <div class="relative">
            <img :src="game.image" :alt="game.name" class="w-full h-48 object-cover" />
            <div class="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-3 py-1 m-2 rounded-full text-xs font-bold transform rotate-3">
              {{ game.category }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2 text-yellow-400">{{ game.name }}</h3>
            <p class="text-gray-400 mb-4">{{ game.description }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">Jackpot:</span>
              <span class="text-sm font-semibold text-green-400">${{ game.jackpot }}</span>
            </div>
            <button
              class="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-full hover:from-green-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 hover:shadow-lg font-bold"
            >
              Quick Play
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-gradient-to-r from-yellow-400 via-green-500 to-blue-400 text-gray-900 py-3 px-8 rounded-full hover:from-yellow-500 hover:via-green-600 hover:to-blue-500 transition duration-300 transform hover:scale-105 hover:shadow-2xl font-bold">
          Load More Games
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LottoView",
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'All Games',
      categories: ['All Games', 'Powerball', 'Mega Millions', 'State Lotteries', 'Scratch Cards'],
      nextDraw: 'Tuesday, 8:00 PM ET',
      lottoGames: [
        {
          id: 1,
          name: "Powerball",
          description: "America's favorite lottery game with massive jackpots!",
          image: require("@/assets/224.png"),
          category: "Powerball",
          jackpot: "180,000,000"
        },
        {
          id: 2,
          name: "Mega Millions",
          description: "Mega-sized jackpots twice a week!",
          image: require("@/assets/224.png"),
          category: "Mega Millions",
          jackpot: "345,000,000"
        },
        {
          id: 3,
          name: "State Lottery",
          description: "Your state's official lottery game.",
          image: require("@/assets/224.png"),
          category: "State Lotteries",
          jackpot: "5,000,000"
        },
        {
          id: 4,
          name: "Lucky 7 Scratch",
          description: "Instant win scratch card game!",
          image: require("@/assets/224.png"),
          category: "Scratch Cards",
          jackpot: "77,777"
        },
        // Add more lotto games as needed
      ],
    };
  },
  computed: {
    filteredGames() {
      return this.lottoGames.filter(game => {
        const matchesSearch = game.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                              game.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory === 'All Games' || game.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      });
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    }
  }
};
</script>

<style scoped>
.lotto-view {
  background-image: url('@/assets/banner.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.lotto-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(255, 255, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 40% 60%, rgba(255, 255, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 60% 80%, rgba(255, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 100% 100%;
  animation: float 10s infinite ease-in-out;
  pointer-events: none;
}
</style>