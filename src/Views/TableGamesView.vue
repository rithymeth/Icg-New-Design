<template>
  <div class="table-games-view min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
        Table Games
      </h1>

      <!-- Featured Game Section -->
      <div class="mb-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
        <div class="p-8 flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-6 md:mb-0">
            <h2 class="text-4xl font-bold mb-4 text-white">Featured: VIP Blackjack</h2>
            <p class="text-xl mb-6 text-gray-100">Experience the thrill of high-stakes Blackjack!</p>
            <button class="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 transform hover:scale-105">
              Play Now
            </button>
          </div>
          <div class="md:w-1/2">
            <img src="@/assets/banner1.jpg" alt="VIP Blackjack" class="rounded-xl shadow-lg">
          </div>
        </div>
      </div>
      
      <!-- Filter and Search Section -->
      <div class="mb-12 bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl">
        <div class="flex flex-wrap justify-between items-center mb-6">
          <div class="flex flex-wrap gap-4 mb-4 sm:mb-0">
            <button v-for="category in categories" :key="category" 
                    :class="['py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg', 
                             selectedCategory === category ? 'bg-gradient-to-r from-green-400 to-blue-500 text-gray-900' : 'bg-gray-700 text-green-400']"
                    @click="selectCategory(category)">
              {{ category }}
            </button>
          </div>
          <div class="relative w-full sm:w-64">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search games..." 
              class="w-full pl-10 pr-4 py-2 rounded-full bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 text-white placeholder-gray-400"
            />
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      <!-- Table Games Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="game in filteredGames"
          :key="game.id"
          class="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 border border-gray-700"
        >
          <div class="relative">
            <img :src="game.image" :alt="game.name" class="w-full h-48 object-cover" />
            <div class="absolute top-0 right-0 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 m-2 rounded-full text-xs font-bold transform rotate-3">
              {{ game.category }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2 text-green-400">{{ game.name }}</h3>
            <p class="text-gray-400 mb-4">{{ game.description }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">{{ game.type }}</span>
              <span class="text-sm font-semibold text-blue-400">Min Bet: {{ game.minBet }}</span>
            </div>
            <button
              class="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-full hover:from-green-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white py-3 px-8 rounded-full hover:from-green-500 hover:via-blue-600 hover:to-purple-600 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          Load More Games
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableGamesView",
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'All Games',
      categories: ['All Games', 'Blackjack', 'Roulette', 'Poker', 'Baccarat'],
      tableGames: [
        {
          id: 1,
          name: "Classic Blackjack",
          description: "Try your luck against the dealer in this classic casino game.",
          image: require("@/assets/229.png"),
          category: "Blackjack",
          type: "Single Deck",
          minBet: "$5"
        },
        {
          id: 2,
          name: "European Roulette",
          description: "Place your bets and watch the wheel spin in this timeless favorite.",
          image: require("@/assets/229.png"),
          category: "Roulette",
          type: "Single Zero",
          minBet: "$1"
        },
        {
          id: 3,
          name: "Texas Hold'em Poker",
          description: "Test your skills against other players in this popular poker variant.",
          image: require("@/assets/229.png"),
          category: "Poker",
          type: "No Limit",
          minBet: "$10"
        },
        {
          id: 4,
          name: "Baccarat Squeeze",
          description: "Experience the suspense of this elegant and easy-to-play card game.",
          image: require("@/assets/229.png"),
          category: "Baccarat",
          type: "Mini Baccarat",
          minBet: "$25"
        },
        // Add more table games as needed
      ],
    };
  },
  computed: {
    filteredGames() {
      return this.tableGames.filter(game => {
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
.table-games-view {
  background-image: url('@/assets/banner.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@keyframes sparkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.table-games-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(46, 204, 113, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(52, 152, 219, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 40% 60%, rgba(155, 89, 182, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 60% 80%, rgba(241, 196, 15, 0.1) 1px, transparent 1px);
  background-size: 100% 100%;
  animation: sparkle 5s infinite;
  pointer-events: none;
}
</style>