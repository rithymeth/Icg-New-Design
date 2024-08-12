<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-lg shadow-2xl">
      <div class="text-center">
        <img class="mx-auto h-16 w-auto" src="@/assets/logo1.png" alt="Casino Logo" />
        <h2 class="mt-6 text-3xl font-extrabold text-yellow-400">
          {{ activeTab === "login" ? "Sign in to your account" : "Create a new account" }}
        </h2>
      </div>

      <!-- Tab Switcher -->
      <div class="flex border-b border-gray-600">
        <button
          @click="activeTab = 'login'"
          :class="[
            'flex-1 py-2 px-4 text-center focus:outline-none',
            activeTab === 'login'
              ? 'border-b-2 border-yellow-400 text-yellow-400 font-medium'
              : 'text-gray-300',
          ]"
        >
          Login
        </button>
        <button
          @click="activeTab = 'register'"
          :class="[
            'flex-1 py-2 px-4 text-center focus:outline-none',
            activeTab === 'register'
              ? 'border-b-2 border-yellow-400 text-yellow-400 font-medium'
              : 'text-gray-300',
          ]"
        >
          Register
        </button>
      </div>

      <!-- Login Form -->
      <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="login-username" class="sr-only">Username</label>
            <input
              id="login-username"
              name="username"
              type="text"
              autocomplete="username"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-gray-300 bg-gray-800 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              placeholder="Username"
              v-model="loginForm.username"
            />
          </div>
          <div>
            <label for="login-password" class="sr-only">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-gray-300 bg-gray-800 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              placeholder="Password"
              v-model="loginForm.password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-600 bg-gray-700 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-300">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-yellow-400 hover:text-yellow-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Sign in
          </button>
        </div>
      </form>

      <!-- Register Form -->
      <form v-if="activeTab === 'register'" @submit.prevent="handleRegister" class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="register-name" class="sr-only">User Name</label>
            <input
              id="register-name"
              name="name"
              type="text"
              autocomplete="name"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-gray-300 bg-gray-800 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              placeholder="Username"
              v-model="registerForm.name"
            />
          </div>
          <div>
            <label for="register-phone" class="sr-only">Phone Number</label>
            <input
              id="register-phone"
              name="phone"
              type="phone"
              autocomplete="phone"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-gray-300 bg-gray-800 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              placeholder="Phone Number"
              v-model="registerForm.phone"
            />
          </div>
          <div>
            <label for="register-password" class="sr-only">Password</label>
            <input
              id="register-password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-gray-300 bg-gray-800 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              placeholder="Password"
              v-model="registerForm.password"
            />
          </div>
          <div>
            <label for="register-confirm-password" class="sr-only">Confirm Password</label>
            <input
              id="register-confirm-password"
              name="confirm-password"
              type="password"
              autocomplete="new-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-gray-300 bg-gray-800 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
              v-model="registerForm.confirmPassword"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRegisterPage",
  data() {
    return {
      activeTab: "login",
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        name: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    handleLogin() {
      // Implement login logic here
      console.log("Login attempt", this.loginForm);
      // You would typically make an API call here
    },
    handleRegister() {
      // Implement registration logic here
      console.log("Register attempt", this.registerForm);
      // You would typically make an API call here
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
