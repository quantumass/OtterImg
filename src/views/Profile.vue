<template>
    <vue-final-modal v-model="isPaymentModalActive" classes="modal-container" content-class="modal-content">
      <div class="-m-4 p-4 relative h-custom-screen overflow-y-auto">
        <div class="flex items-center p-2">
          <h3 class="text-xl flex-1 uppercase ">Update profile</h3>
          <button class="text-white rounded w-9 h-9 bg-red-600" @click="isPaymentModalActive = false">
            X
          </button>
        </div>
        <hr />
        <div class="p-8 w-400px">
          <img :src="require('@/assets/img/credits.png')" class="w-1/2 mx-auto">
          <div class="py-4">
          Elevate your images to the next level with our upscaling service. Purchase 300 credit points and transform your low-resolution pictures into stunning masterpieces.
          </div>
          <br />
          <div id="smart-button-container">
            <div style="text-align: center;">
              <div id="paypal-button-container"></div>
            </div>
          </div>
        </div>
      </div>
    </vue-final-modal>
    <vue-final-modal v-model="isModalActive" classes="modal-container" content-class="modal-content">
        <form v-on:submit.prevent="updateUser" action="#" method="POST">
        <div class="p-4 relative h-custom-screen overflow-y-auto">
            <div class="-m-4">
              <div class="flex items-center p-2">
                <h3 class="text-xl flex-1 uppercase ">Update profile</h3>
                <button class="text-white rounded w-9 h-9 bg-red-600" @click="isModalActive = false">
                  X
                </button>
              </div>
              <hr />
            </div>
            <div class="mt-4">
                <label class="block text-gray-700">Avatar</label>
                <input type="file" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" ref="avatar" @change="onFileChange" accept="image/*">
            </div>

            <div>
                <label class="block text-gray-700">Username</label>
                <input type="text" v-model="form.username" placeholder="Enter Username" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete>
            </div>

            <div class="mt-4">
                <label class="block text-gray-700">Name</label>
                <input type="text" v-model="form.name" placeholder="Enter Name" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete>
            </div>

            <div class="mt-4">
                <label class="block text-gray-700">Email Address</label>
                <input type="email" v-model="form.email" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete disabled>
            </div>
            <div class="mt-4">
                <label class="block text-gray-700">Old Password</label>
                <input type="password" v-model="form.oldPassword" placeholder="Enter old password" minlength="6" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500
focus:bg-white focus:outline-none">
</div>

            <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input type="password" v-model="form.password" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500
focus:bg-white focus:outline-none">
</div> <div class="mt-4">
            <label class="block text-gray-700">Password Confirmation</label>
            <input type="password" v-model="form.passwordConfirm" placeholder="Enter Password Confirmation" minlength="6" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none">
        </div>

        <div class="mt-4">
                <label class="block text-gray-700">Bio</label>
                <textarea v-model="form.bio" placeholder="Enter Bio" class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete></textarea>
            </div>

        
    </div>
    <div class="shadow-lg -m-4 p-4 bg-white">
      <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3">
              <loader title="Update" :isLoading="isLoading" />
      </button>
    </div>
    </form>
    </vue-final-modal>
   <section class="relative block h-96">
    <div class="absolute top-0 w-full h-full bg-center bg-cover" :style="`background-image: url(${require('@/assets/img/user-cover.jpg')});`">
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0px)">
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section class="relative pt-16 bg-blueGray-200">
    <div class="container mx-auto px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 pb-6">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-4/12 px-4 lg:order-2">
              <div class="relative w-full flex justify-center">
                <img 
                    v-if="user.avatar != 'filename.jpg' && user.avatar"
                    alt="..." 
                    :src="user.avatar" 
                    class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 h-32 w-32"
                >
                <svg v-else class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16" viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><title>Elizabeth Cady</title><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#fff5d6"></rect><rect x="0" y="0" width="36" height="36" transform="translate(7 7) rotate(333 18 18) scale(1)" fill="#d96153" rx="6"></rect><g transform="translate(3.5 3.5) rotate(-3 18 18)"><path d="M13,19 a1,0.75 0 0,0 10,0" fill="#000000"></path><rect x="11" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="23" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
              </div>
            </div>
            <div class="w-full lg:w-4/12 lg:order-3 lg:text-right lg:self-center text-center">
              <div class="py-6 mt-32 sm:mt-0">
                <button @click="showUserForm" class="bg-brightRed active:bg-brightRedLight uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Update profile
                </button>
              </div>
            </div>
            <div class="w-full lg:w-4/12 lg:order-1 lg:text-left lg:self-center text-center">
              <div class="py-6 mt-32 sm:mt-0">
                <button @click="logout" class="bg-black-800 active:bg-black-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                    Logout
                  </button>
              </div>
            </div>
          </div>
          <div class="text-center mt-12">
            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 capitalize">
              {{ user.name }}
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {{ user.email }}
            </div>
            <div class="flex justify-center py-4 lg:pt-4 pt-8">
              <div class="mr-4 p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{{ user.credits }}</span><span class="text-sm text-blueGray-400">Credits</span>
              </div>
              <div class="mr-4 p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{{ totalImages }}</span><span class="text-sm text-blueGray-400">Photos</span>
              </div>
              <div class="lg:mr-4 p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">0</span><span class="text-sm text-blueGray-400">VIP</span>
              </div>
            </div>
            <div>
              <button @click="isPaymentModalActive = true" class="bg-black-800 active:bg-black-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Buy 300 credits
                </button>
            </div>
            <div class="mb-2 text-blueGray-600 mt-10">
              <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>{{ levels[0].name }} - {{ levels[0].description }}
            </div>
            <div class="mb-2 text-blueGray-600">
              <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>{{ levels[0].university }}
            </div>
          </div>
          <div class="text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <p v-if="user.bio" class="mb-4 text-lg leading-relaxed text-blueGray-700">
                  {{ user.bio }}
                </p>
                <a href="#" v-else @click="showUserForm" class="font-normal text-brightRed">Add your bio</a>
              </div>
            </div>
          </div>
        </div>
        <section class="main container mx-auto px-4 border-t border-blueGray-200">
            <br />
            <h6 class="font-bold mb-4">Your gallery</h6>
            <div v-if="!imagesLoaded">
              <loader title="loading your gallery ..." isLoading="true"></loader>
            </div>
            <div v-show="imagesLoaded" class="main_content">
                <div v-if="totalImages == 0">
                  You didn't upload any image
                  <br />
                  <router-link :to="{name: 'Home'}" class="font-normal text-brightRed">START NOW</router-link>
                </div>
                <div v-for="(image, key) in images" :key="key" v-show="!image.isHidden" class="picture_wrapper">
                  <div>
                    <ImgComparisonSlider class="shadow-lg">
                      <img slot="first" style="width: 100%" :src="image.publicSrc" alt="" />
                      <img slot="second" style="width: 100%" :src="image.optimizedPublicSrc" @load="imageLoaded" @error="() => imageError(key)" alt="" />
                    </ImgComparisonSlider>
                    <a target="_blank" :href="image.optimizedPublicSrc" :download="image.convertedImage" class="bg-black-900 inline-flex  items-center text-white w-full mt-2 py-2 px-4 rounded hover:bg-black-600">
                      <font-awesome-icon :icon="['fas', 'download']" class="mr-2 w-4" />
                      DOWNLOAD
                    </a>
                  </div>
                </div>
            </div>
            <div class="w-full text-center">
              <button v-if="imagesLoaded && page < totalPages" @click="loadMore" class="bg-brightRed inline-flex justify-center items-center text-white mt-2 py-2 px-4 rounded">
                <font-awesome-icon :icon="['fas', 'arrows-rotate']" :class="isLoadingMore ? 'animate-spin' : ''" class="mr-2 w-4" />
                Load more
              </button>
            </div>
        </section>
      </div>
    </div>
  </section>
  </template>
  
  <script>

  import pb from '@/services/PocketConfig';
  import { logError } from '@/utils/helpers'
  import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
  import { ImgComparisonSlider } from '@img-comparison-slider/vue';

  export default {
    data: () => ({
        isModalActive: false,
        isPaymentModalActive: false,
        defaultAvatar: "https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51",
        levels: [
            {name: "The Slacker", description: "generates very few images", university: "University of Procrastination"},
            {name: "The Novice", description: "just starting out", university: "University of Beginnings"},
            {name: "The Rookie", description: "still learning", university: "University of Learning"},
            {name: "The Learner", description: "starting to gain some skill", university: "University of Skill Acquisition"},
            {name: "The Prodigy", description: "skilled and generates high-quality images", university: "University of Prodigies"},
            {name: "The Maestro", description: "a true expert and generates outstanding images", university: "University of Masters"},
            {name: "The Legend", description: "the best of the best", university: "University of Legends"},
            {name: "The Specialty", description: "good at generating one specific type of image", university: "University of Specialties"},
            {name: "The Renaissance", description: "good at generating a variety of different types of images", university: "University of Renaissance"},
            {name: "The Level Up", description: "consistently generating more and more creative and funny images", university: "University of Upgraders"}
        ],
        form: {},
        page: 1,
        totalImages: 0,
        totalPages: 1,
        formData: null,
        isLoading: false,
        isLoadingMore: false,
        gallery: null,
        images: [],
        imagesLoaded: false,
        loadedImages: 0,
        errorImages: 0,
        user: {}
    }),
    components: {
        VueFinalModal,
        ModalsContainer,
        ImgComparisonSlider
    },
    mounted: function() {
        if (pb.authStore && pb.authStore.model) {
          this.user = pb.authStore.model
          this.user.avatar = `${process.env.VUE_APP_POCKET_API}/api/files/_pb_users_auth_/${this.user.id}/${this.user.avatar}`
          this.getImages()
          // Create a new script element
          var script = document.createElement("script");
          // Set the source and attributes for the PayPal script
          script.src = "https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD";
          script.setAttribute("data-sdk-integration-source", "button-factory");
          // Define a function to be called when the script has finished loading
          script.onload = () => {
            this.initPayPalButton()
          };
          // Find the <head> tag and append the script to it
          var head = document.getElementsByTagName("head")[0];
          head.appendChild(script);
        } else {
          this.$router.push({ name: 'Login' })
        }
    },
    methods: {
      initPayPalButton() {
          paypal.Buttons({
            style: {
              shape: 'rect',
              color: 'gold',
              layout: 'vertical',
              label: 'paypal',
              
            },

            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [{"description":"Buy 300 Credits for using IMGOtter","amount":{"currency_code":"USD","value":10}}]
              });
            },

            onApprove: function(data, actions) {
              return actions.order.capture().then(function(orderData) {
                
                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>Thank you for your payment!</h3>';

                // Or go to another URL:  actions.redirect('thank_you.html');
                
              });
            },

            onError: function(err) {
              console.log(err);
            }
          }).render('#paypal-button-container');
        },
        logout() {
          pb.authStore.clear();
          location.href = "/"
        },
        loadMore() {
          this.isLoadingMore = true
          this.page += 1
          this.getImages()
        },
        imageLoaded() {
          this.loadedImages++
          if (this.loadedImages + this.errorImages === this.images.length) {
            this.imagesLoaded = true
            this.isLoadingMore = false
          }
        },
        imageError(key) {
          console.log("key", key)
          console.log("this.images", this.images)
          this.images[key].isHidden = true
          this.errorImages++
          if (this.loadedImages + this.errorImages === this.images.length) {
            this.imagesLoaded = true
            this.isLoadingMore = false
          }
        },
        changeExtension(fileName, newExtension) {
          var lastDot = fileName.lastIndexOf(".");
          if (lastDot === -1) {
            return fileName + "." + newExtension;
          } else {
            return fileName.slice(0, lastDot) + newExtension;
          }
        },
        getImages: async function() {
          const resultList = await pb.collection('images').getList(this.page, 10, {});
          this.totalPages = resultList.totalPages
          this.totalImages = resultList.totalItems
          if (this.totalImages == 0) this.imagesLoaded = true
          else {
            this.images = [ ...this.images, ...resultList.items.map(el => ({
              ...el,
              publicSrc: `${process.env.VUE_APP_POCKET_API}/api/files/c83ukhcc0l9jq90/${el.id}/${el.image}`,
              optimizedPublicSrc: `${process.env.VUE_APP_POCKET_API}/api/files/c83ukhcc0l9jq90/${el.id}/${el.convertedImage}`
            }))]
          }
        },
        onFileChange: function() {
          this.formData = new FormData();
          this.formData.append('avatar', this.$refs.avatar.files[0]);
        },
        showUserForm: function() {
            this.isModalActive = true
            this.form = this.user
        },
        updateUser: async function() {
            this.isLoading = true

            Object.keys(this.form).forEach(key => {
              if (key != "avatar") this.formData.append(key, this.form[key]);
            });

            try {
              await pb.collection('users').update(this.user.id, this.formData);
              this.isModalActive = false
              this.isLoading = false
              location.reload();
            } catch (error) {
              this.isLoading = false
              logError(this, error)
            }
        }
    }
  }
  </script>