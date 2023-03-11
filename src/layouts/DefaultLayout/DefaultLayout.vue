<template>
  <nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4 ">
    <div class="container relative mx-auto flex max-w-6xl flex-wrap items-center justify-between">
      <router-link :to="{name: 'Home'}" class="flex items-center">
        <img :src="require('@/assets/img/logo-xxl.png')" class="absolute left-0 top-0 -mt-4 h-24 text-brightRed" alt="">
        <span class=" ml-24 self-center whitespace-nowrap text-xl font-semibold">IMGOtter</span>
      </router-link>
      <div class="mt-2 sm:mt-0 sm:flex md:order-2">
        <!-- Login Button -->
        <router-link v-if="!authUser" :to="{name: 'Login'}" type="button" class="rounde mr-3 hidden border border-brightRed py-1.5 px-6 text-center text-sm font-medium text-brightRed focus:outline-none focus:ring-4 focus:ring-red-300 md:inline-block rounded-lg">Login</router-link>
        <router-link v-if="!authUser" :to="{name: 'Register'}" type="button" class="rounde mr-3 hidden bg-brightRed py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-brightRed focus:outline-none focus:ring-4 focus:ring-red-300 md:mr-0 md:inline-block rounded-lg">Register</router-link>
        <router-link v-if="authUser" :to="{name: 'Profile'}" type="button" class="rounde mr-3 hidden bg-brightRed py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-brightRed focus:outline-none focus:ring-4 focus:ring-red-300 md:mr-0 md:inline-block rounded-lg">Profile</router-link>
        <!-- Register Button -->
        <button @click="isMenuOpened = !isMenuOpened" data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div :class="isMenuOpened ? '' : 'hidden'" class="w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
        <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
          <li>
            <router-link :to="{name: 'Home'}" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-brightRed" aria-current="page">Home</router-link>
          </li>
          <!-- <li>
            <router-link :to="{name: 'Services'}" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-brightRed">Services</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Pricing'}" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-brightRed" aria-current="page">Pricing</router-link>
          </li> -->
          <li>
            <router-link :to="{name: 'Contact'}" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-brightRed">Contact</router-link>
          </li>
          <li>
            <router-link :to="{name: 'About'}" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-brightRed">About</router-link>
          </li>
          <li>
            <router-link v-if="!authUser" :to="{name: 'Login'}" class="block md:hidden rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-brightRed">Login</router-link>
          </li>
          <li>
            <router-link v-if="!authUser" :to="{name: 'Register'}" class="block md:hidden rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-brightRed">Register</router-link>
          </li>
          <li>
            <router-link v-if="authUser" :to="{name: 'Profile'}" class="block md:hidden rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-brightRed">Profile</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="mt-16">
    <slot></slot>
  </main>

  <!-- Footer -->
  <footer class="bg-veryDarkBlue">
      <!-- Flex Container -->
      <div
        class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        <!-- Logo and social links container -->
        <div
          class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <!-- Logo -->
          <div class="flex items-center text-white gap-2">
            <img :src="require('@/assets/img/logo-xxl.png')" class="h-8" alt="" />
            <span class=" text-xl ">IMGOtter</span>
          </div>
          <!-- Social Links Container -->
          
        </div>
        <!-- List Container -->
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <router-link :to="{name: 'Home'}" class="hover:text-brightRed">Home</router-link>
            <router-link :to="{name: 'About'}" class="hover:text-brightRed">About</router-link>
            <!-- <router-link :to="{name: 'Services'}" class="hover:text-brightRed">Services</router-link> -->
            <router-link :to="{name: 'Contact'}" class="hover:text-brightRed">Contact</router-link>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <router-link :to="{name: 'CookiePolicy'}" class="hover:text-brightRed">Cookie Policy</router-link>
            <router-link :to="{name: 'PrivacyPolicy'}" class="hover:text-brightRed">Privacy Policy</router-link>
          </div>
        </div>

        <!-- Input Container -->
        <div class="flex flex-col justify-between">
          <form v-on:submit.prevent="addToNewsletter" action="#" method="POST" >
            <div class="flex space-x-3">
              <input
                type="text"
                v-model="form.email"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                <loader title="Go" :isLoading="isLoading" />
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
import pb from '@/services/PocketConfig';
import { getToast, logError } from '@/utils/helpers'

export default {
  data() {
    return {
      isMenuOpened: false,
      isLight: true,
      form: {},
      isLoading: false
    };
  },
  watch: {
    isLight() {
      this.switchMode();
    },
    $route() {
      this.isMenuOpened = false
    },
  },
  components: {

  },
  methods: {
    addToNewsletter: async function() {
      this.isLoading = true
      try {
        await pb.collection('newsletters').create(this.form);
        getToast(this).fire({
          icon: "success",
          title: "Thank you, You will receive our love letters"
        });
        this.form = {}
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        logError(this, error)
      }
    },
    switchMode() {
      let htmlElem = document.querySelector("html");
      htmlElem.classList[this.isLight ? "remove" : "add"]("dark");
      localStorage.setItem("vwmode-islight", this.isLight);
    },
  },
  computed: {
    authUser: function() {
      return pb.authStore && pb.authStore.model ? pb.authStore.model : null
    }
  },
  mounted() {
    this.isLight = JSON.parse(localStorage.getItem("vwmode-islight"));
  },
};
</script>

<style>
nav ul li a.router-link-active {
  color: hsla(12, 88%, 59%, var(--tw-text-opacity));
}
</style>
