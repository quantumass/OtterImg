<template>
  
<section class="relative  bg-gray-50">
<div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80');
          ">
          <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black-900"></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 class="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p class="mt-4 text-lg text-gray-200">
                  OtterImg's background removal service transforms your visuals with lightning-fast processing times and precise accuracy. Our mission is to make professional-looking visuals accessible to everyone. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0px)">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-gray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-10 bg-gray-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <font-awesome-icon :icon="['fas', 'award']" />
                  </div>
                  <h6 class="text-xl font-semibold">Lightning-fast processing times</h6>
                  <p class="mt-2 mb-4 text-gray-500">
                    Our background removal services offer some of the fastest processing times in the industry, allowing you to transform your visuals quickly and easily.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <font-awesome-icon :icon="['fas', 'retweet']" />
                  </div>
                  <h6 class="text-xl font-semibold">Advanced AI technology</h6>
                  <p class="mt-2 mb-4 text-gray-500">
                    We use advanced AI technology to ensure precise accuracy when removing backgrounds from your images, even when dealing with complex backgrounds.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <font-awesome-icon :icon="['fas', 'fingerprint']" />
                  </div>
                  <h6 class="text-xl font-semibold">Dedicated customer support</h6>
                  <p class="mt-2 mb-4 text-gray-500">
                    Our team is dedicated to providing you with top-notch customer support, helping you with any questions or issues you may encounter along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
      </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {  },
});
</script>
