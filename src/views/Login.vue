<template>
  <section class="flex flex-col md:flex-row h-full items-center">

        <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/4 h-full">
        <img :src="require('@/assets/img/aflou.jpg')" alt="" class="w-full h-full object-cover">
        </div>

        <div class="bg-white shadow w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-2/4 h-full
            flex items-center justify-center md:px-24 px-8 py-8">

        <div v-if="isValid" class="w-full h-100">


            <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

            <form v-on:submit.prevent="login" class="mt-6" action="#" method="POST">
            <div>
                <label class="block text-gray-700">Email Address / Username</label>
                <input type="text" v-model="form.email" name="" id="" placeholder="Enter Email Address or Username" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>

            <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input type="password" v-model="form.password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required>
            </div>

            <div class="text-right mt-2">
                <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
            </div>

            <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6">
                    <span class="flex gap-2">
                        <font-awesome-icon v-if="!isLoading" class="w-4" :icon="['fas', 'arrow-right-to-bracket']" />
                        <loader title="Log In" :isLoading="isLoading" />
                    </span>
            </button>
            </form>

            <!-- <hr class="my-6 border-gray-300 w-full">

            <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                <div class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
                <span class="ml-4">
                Log in
                with
                Google</span>
                </div>
                </button> -->

            <p class="mt-8">Need an account? 
              <router-link :to="{name: 'Register'}" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
                    account</router-link></p>


        </div>
        <div v-else class="bg-white py-8 px-4 rounded-lg">
            <div class="flex items-center">
            <div class="text-lg text-gray-700 flex justify-center w-full gap-2">
                <p class="text-yellow-600 w-6">
                    <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
                </p>
                Your account has not been activated
            </div>
            </div>
            <div class="text-sm text-gray-500 mt-2">
                We've sent you a verification email, please check your inbox and follow the instructions to verify your email address.
            </div>
            <div class="text-center">
                <button @click="resend" ref="formContainer" class="bg-green-800 hover:bg-green-900 text-white text-sm py-1 px-4 rounded mt-2">
                    <loader title="Resend" :isLoading="isLoading" />
                </button>
            </div>
        </div>
        </div>

        </section>
</template>

<script>
import pb from '@/services/PocketConfig';
import { logError } from "@/utils/helpers"
export default {
    data: () => ({
        form: {},
        isLoading: false,
        isValid: true
    }),
    mounted: function() {
        console.log("pb.authStore.model: ", pb.authStore.model)
        if (pb.authStore && pb.authStore.model && !pb.authStore.model.verified) {
            this.isValid = false
        } else if (pb.authStore && pb.authStore.model && pb.authStore.model.verified) {
            this.$router.push({ name: "Profile" })
        }
    },
    methods: {
        resend: async function() {
            this.isLoading = true
            try {
                await pb.collection('users').requestVerification(pb.authStore.model.email || this.form.email)
                this.isLoading = false
            } catch (error) {
                this.isLoading = false
                logError(this, error)
            }
        },
        login: async function() {

            this.isLoading = true

            try {

                await pb.collection('users').authWithPassword(
                    this.form.email,
                    this.form.password,
                );

                if (!pb.authStore.model.verified) {
                    this.isValid = false
                } else {
                    let route = await this.$router.resolve({ name: "Profile" });
                    location.href = route.href
                }

                this.isLoading = false
                
            } catch (error) {
                this.isLoading = false
                logError(this, error)
            }
        }
    }
}
</script>

<style>

</style>