<template>
  <div class="sport-view min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-6xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500">
        Sports Betting
      </h1>

      <!-- Featured Event Section -->
      <div class="mb-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl overflow-hidden shadow-2xl">
        <div class="p-8 flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-6 md:mb-0">
            <h2 class="text-4xl font-bold mb-4 text-white">Featured: Champions League Final</h2>
            <p class="text-xl mb-6 text-gray-100">Manchester City vs Real Madrid</p>
            <button class="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 transform hover:scale-105">
              Bet Now
            </button>
          </div>
          <div class="md:w-1/2">
            <img src="@/assets/banner1.jpg" alt="Champions League Final" class="rounded-xl shadow-lg">
          </div>
        </div>
      </div>
      
      <!-- Filter and Search Section -->
      <div class="mb-12 bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl">
        <div class="flex flex-wrap justify-between items-center mb-6">
          <div class="flex flex-wrap gap-4 mb-4 sm:mb-0">
            <button v-for="category in categories" :key="category" 
                    :class="['py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg', 
                             selectedCategory === category ? 'bg-gradient-to-r from-yellow-400 to-green-500 text-gray-900' : 'bg-gray-700 text-yellow-400']"
                    @click="selectCategory(category)">
              {{ category }}
            </button>
          </div>
          <div class="relative w-full sm:w-64">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search events..." 
              class="w-full pl-10 pr-4 py-2 rounded-full bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 text-white placeholder-gray-400"
            />
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      <!-- Sports Events Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="event in filteredEvents"
          :key="event.id"
          class="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 border border-gray-700"
        >
          <div class="relative">
            <img :src="event.image" :alt="event.name" class="w-full h-48 object-cover" />
            <div class="absolute top-0 right-0 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 m-2 rounded-full text-xs font-bold transform rotate-3">
              {{ event.category }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2 text-yellow-400">{{ event.name }}</h3>
            <p class="text-gray-400 mb-4">{{ event.description }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-semibold text-gray-500">{{ event.time }}</span>
              <span class="text-sm font-semibold text-green-400">Odds: {{ event.odds }}</span>
            </div>
            <button
              class="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-full hover:from-green-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Place Bet
            </button>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 text-white py-3 px-8 rounded-full hover:from-yellow-500 hover:via-green-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
          Load More Events
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SportView",
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'All Sports',
      categories: ['All Sports', 'Soccer', 'Basketball', 'Tennis', 'Racing'],
      sportsEvents: [
        {
          id: 1,
          name: "Premier League: Man City vs Liverpool",
          description: "Top of the table clash in the English Premier League.",
          image: require("@/assets/224.png"),
          category: "Soccer",
          time: "Today, 20:00",
          odds: "2.05"
        },
        {
          id: 2,
          name: "NBA: Lakers vs Warriors",
          description: "Western Conference showdown in the NBA.",
          image: require("@/assets/224.png"),
          category: "Basketball",
          time: "Tomorrow, 19:30",
          odds: "1.95"
        },
        {
          id: 3,
          name: "Wimbledon: Djokovic vs Nadal",
          description: "Grand Slam tennis action from Wimbledon.",
          image: require("@/assets/224.png"),
          category: "Tennis",
          time: "July 10, 15:00",
          odds: "1.75"
        },
        {
          id: 4,
          name: "F1: Monaco Grand Prix",
          description: "High-speed racing through the streets of Monaco.",
          image: require("@/assets/224.png"),
          category: "Racing",
          time: "This Sunday, 14:00",
          odds: "3.50"
        },
        // Add more sports events as needed
      ],
    };
  },
  computed: {
    filteredEvents() {
      return this.sportsEvents.filter(event => {
        const matchesSearch = event.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                              event.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory === 'All Sports' || event.category === this.selectedCategory;
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
.sport-view {
  background-image: url('@/assets/banner1.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@keyframes sparkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.sport-view::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 100% 100%;
  animation: sparkle 5s infinite;
  pointer-events: none;
}
</style>