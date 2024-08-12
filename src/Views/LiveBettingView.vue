<template>
  <div class="live-betting-view min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-400">
        Live Betting
      </h1>

      <!-- Featured Match Section -->
      <div class="mb-16 bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
        <div class="relative h-64 bg-cover bg-center" style="background-image: url('@/assets/featured-match-bg.jpg');">
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="text-center">
              <h2 class="text-4xl font-bold mb-4">{{ featuredMatch.teams }}</h2>
              <p class="text-2xl mb-4">{{ featuredMatch.score }}</p>
              <p class="text-xl mb-6">{{ featuredMatch.time }}</p>
              <button class="bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:from-red-600 hover:to-yellow-600 transition duration-300 transform hover:scale-105">
                Bet Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Filter and Search Section -->
      <div class="mb-12 bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl">
        <div class="flex flex-wrap justify-between items-center mb-6">
          <div class="flex flex-wrap gap-4 mb-4 sm:mb-0">
            <button v-for="category in categories" :key="category" 
                    :class="['py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg', 
                             selectedCategory === category ? 'bg-gradient-to-r from-red-400 to-yellow-500 text-gray-900' : 'bg-gray-700 text-yellow-400']"
                    @click="selectCategory(category)">
              {{ category }}
            </button>
          </div>
          <div class="relative w-full sm:w-64">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search matches..." 
              class="w-full pl-10 pr-4 py-2 rounded-full bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 text-white placeholder-gray-400"
            />
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      <!-- Live Matches Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="match in filteredMatches"
          :key="match.id"
          class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 border border-gray-700"
        >
          <div class="p-6">
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-semibold text-red-400">LIVE</span>
              <span class="text-sm font-semibold text-gray-400">{{ match.time }}</span>
            </div>
            <h3 class="font-bold text-xl mb-4 text-yellow-400">{{ match.teams }}</h3>
            <p class="text-2xl font-bold text-center mb-4">{{ match.score }}</p>
            <div class="grid grid-cols-3 gap-2 mb-4">
              <button
                v-for="(odd, index) in match.odds"
                :key="index"
                class="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105"
              >
                {{ odd }}
              </button>
            </div>
            <button
              class="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-full hover:from-green-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 hover:shadow-lg font-bold"
            >
              Place Bet
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-gradient-to-r from-red-400 via-yellow-500 to-green-400 text-gray-900 py-3 px-8 rounded-full hover:from-red-500 hover:via-yellow-600 hover:to-green-500 transition duration-300 transform hover:scale-105 hover:shadow-2xl font-bold">
          Load More Matches
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LiveBettingView",
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'All Sports',
      categories: ['All Sports', 'Football', 'Basketball', 'Tennis', 'Hockey'],
      featuredMatch: {
        teams: "Real Madrid vs Barcelona",
        score: "2 - 2",
        time: "65:00"
      },
      liveMatches: [
        {
          id: 1,
          teams: "Liverpool vs Manchester City",
          score: "1 - 1",
          time: "52:30",
          category: "Football",
          odds: ["2.10", "3.50", "3.20"]
        },
        {
          id: 2,
          teams: "LA Lakers vs Golden State Warriors",
          score: "76 - 72",
          time: "Q3 08:45",
          category: "Basketball",
          odds: ["1.90", "1.90"]
        },
        {
          id: 3,
          teams: "Djokovic vs Nadal",
          score: "6-4, 3-5",
          time: "Set 2",
          category: "Tennis",
          odds: ["1.75", "2.05"]
        },
        {
          id: 4,
          teams: "Boston Bruins vs Toronto Maple Leafs",
          score: "2 - 3",
          time: "P2 15:20",
          category: "Hockey",
          odds: ["2.30", "3.10", "2.80"]
        },
        // Add more live matches as needed
      ],
    };
  },
  computed: {
    filteredMatches() {
      return this.liveMatches.filter(match => {
        const matchesSearch = match.teams.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory === 'All Sports' || match.category === this.selectedCategory;
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
.live-betting-view {
  background-image: url('@/assets/banner.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.live-betting-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 0, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 40% 60%, rgba(0, 0, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 60% 80%, rgba(255, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 100% 100%;
  animation: pulse 5s infinite;
  pointer-events: none;
}
</style>