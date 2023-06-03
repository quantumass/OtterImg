<template>
	<form class="mb-2 relative">
		<input
			type="file"
			name="file"
			ref="image"
			id="file"
			class="sr-only"
			@change="() => onFileChange()"
			accept="image/*"
		/>
		<label
			@dragover.prevent="handleDragOver"
			@dragleave="handleDragLeave"
			@drop="handleDrop"
			:for="!isLoading ? 'file' : ''"
			class="relative drag-drop-zone bg-white flex min-h-[200px] items-center justify-center rounded-md border-2 border-dashed border-[#e0e0e0] text-center"
			:class="[!isLoading ? 'p-12' : '', isDragging ? 'active' : '']"
		>
			<img
				v-if="!isLoading"
				:src="require('@/assets/img/upload.png')"
				class="absolute bottom-0 left-0 lg:w-52 w-0 m-2"
			/>
			<div v-if="!isLoading">
				<span class="mb-2 block text-xl font-semibold text-[#07074D]">Drop files here</span>
				<span class="mb-2 block text-base font-medium text-[#6B7280]">Or</span>
				<span
					class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] bg-white"
				>Browse</span>
			</div>
			<div v-else class="w-full">
				<!-- follow me on twitter @asad_codes -->
				<div class="flex flex-wrap place-items-center w-full">
					<!-- card -->
					<div class="shadow-lg rounded-xl p-4 bg-white relative overflow-hidden w-full">
						<div class="w-full h-full block">
							<div class="w-full">
								<p class="text-gray-800 text-sm font-medium mb-2">Working On:</p>
								<p class="text-gray-800 text-xl font-medium mb-2">
									<loader :title="tasks[step].title" :isLoading="step == 6 ? false : isLoading" />
								</p>
								<p class="text-gray-400 text-sm mb-4">{{ tasks[step].description }}</p>
							</div>
							<div class="flex items-center justify-between my-2">
								<p v-if="step < 6" class="text-gray-300 text-sm">{{ step + 1 }}/6 task completed</p>
								<p v-else class="text-gray-300 text-sm">completed</p>
							</div>
							<div class="w-full h-2 bg-blue-200 rounded-full">
								<div
									v-if="step < 6"
									:class="`w-${(step > 3 ? 3 : step) + 1}/4 h-full text-center text-xs text-white bg-blue-600 rounded-full`"
								></div>
								<div
									v-else
									:class="`w-full h-full text-center text-xs text-white bg-green-600 rounded-full`"
								></div>
							</div>
							<div v-if="step == 6 && image" class="mt-2">
								<loader v-if="!isImageLoaded && !isImageError" title="loading ..." :isLoading="true"></loader>
								<div v-show="isImageLoaded || isImageError">
									<ImgComparisonSlider class="shadow-lg">
										<img slot="first" style="width: 100%" :src="image.publicSrc" alt />
										<img
											slot="second"
											style="width: 100%"
											:src="image.optimizedPublicSrc"
											@load="() => isImageLoaded = true"
											@error="() => isImageError = true"
											alt
										/>
									</ImgComparisonSlider>
									<a
										target="_blank"
										:href="image.optimizedPublicSrc"
										:download="image.convertedImage"
										class="bg-black-900 inline-flex items-center text-white w-full mt-2 py-2 px-4 rounded hover:bg-black-600"
									>
										<font-awesome-icon :icon="['fas', 'download']" class="mr-2 w-4" />DOWNLOAD
									</a>
									<button
										@click="retry"
										class="bg-primary inline-flex items-center text-white w-full mt-2 py-2 px-4 rounded"
									>
										<font-awesome-icon :icon="['fas', 'arrows-rotate']" class="mr-2 w-4" />Try another one
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</label>
		<div
			v-if="message.text"
			class="absolute top-0 left-0 rounded-lg bg-gray-200 opacity-70 w-full h-full"
		></div>
	</form>
	<div
		v-if="message.text"
		div
		class="flex flex-col mt-4 p-8 bg-white border-2 border-dashed border-red-400 rounded-md"
	>
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-16 h-16 rounded-2xl p-3 border border-red-100 text-red-400 bg-red-50"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<div class="flex flex-col ml-3">
					<div class="font-medium leading-none">You reached your limit !</div>
					<p class="text-sm text-gray-600 leading-none mt-1">
						{{ message.text }}
						<router-link :to="message.action">{{ message.buttonText }}</router-link>
					</p>
				</div>
			</div>
			<router-link
				class="flex-no-shrink bg-gradient-to-r from-yellow-500 to-yellow-600 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 text-white rounded-full"
				:to="{ name: 'Profile', query: { credits: true } }"
			>Buy more credits</router-link>
		</div>
	</div>
</template>

  <script>
import pb from "@/services/PocketConfig";
import { logError, getToast } from "@/utils/helpers";
import { ImgComparisonSlider } from "@img-comparison-slider/vue";

export default {
	name: "Home",
	data: () => ({
		step: 0,
		message: {},
		tasks: [
			{
				title: "Uploading image",
				description:
					"We are currently uploading your image to our AI server."
			},
			{
				title: "Analyzing image",
				description:
					"We are analyzing your image to determine the best enhancement methods."
			},
			{
				title: "Enhancing image",
				description:
					"We are now applying enhancement algorithm to your image."
			},
			{
				title: "Super Background remover",
				description:
					"Applying pretrained AI Background remover algorithm for removing background."
			},
			{
				title: "Saving image",
				description: "We are now saving the enhanced image for you."
			},
			{
				title: "About To finish",
				description: "About to finish processing your image, be ready"
			},
			{
				title: "Finished",
				description:
					"You can also check your images on your profile page"
			}
		],
		isDragging: false,
		image: null,
		loadingInterval: null,
		isImageLoaded: false,
		isImageError: false,
		isLoading: false
	}),
	beforeUnmount: function() {
		clearInterval(this.loadingInterval);
	},
	methods: {
		// Generate unique session code
		generateSessionCode() {
			const codeLength = 8;
			const characters =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			let code = "";
			for (let i = 0; i < codeLength; i++) {
				code += characters.charAt(
					Math.floor(Math.random() * characters.length)
				);
			}
			return code;
		},
		getSessionCode() {
			const sessionCode = localStorage.getItem("sessionCode");
			return sessionCode;
		},
		createSessionCode() {
			const newSessionCode = this.generateSessionCode();
			localStorage.setItem("sessionCode", newSessionCode);
		},
		retry: function() {
			this.step = 0;
			this.image = null;
			this.loadingInterval = null;
			this.isLoading = false;
			this.isImageLoaded = false;
			this.isImageError = false;
			this.$refs.image.value = "";
		},
		handleDrop(e) {
			e.preventDefault();
			const file = e.dataTransfer.files[0];
			this.onFileChange(file);
		},
		handleDragOver(e) {
			e.preventDefault();
			this.isDragging = true;
		},
		handleDragLeave(e) {
			e.preventDefault();
			this.isDragging = false;
		},
		onFileChange: async function(file = null) {
			if (
				(this.user && this.user.credits > 0) ||
				(!this.user && !this.getSessionCode())
			) {
				this.isLoading = true;
				let formData = new FormData();
				formData.append("image", file || this.$refs.image.files[0]);
				if (this.user) formData.append("user", this.user.id);
				try {
					this.image = await pb.collection("images").create(formData);
					pb.collection("images").subscribe(this.image.id, e => {
						this.image = e.record;
						(this.image.publicSrc = `${process.env.VUE_APP_POCKET_API}/api/files/c83ukhcc0l9jq90/${this.image.id}/${this.image.image}`),
							(this.image.optimizedPublicSrc = `${process.env.VUE_APP_POCKET_API}/api/files/c83ukhcc0l9jq90/${this.image.id}/${this.image.convertedImage}`);
						if (e.record.isProcessing && !e.record.isReady) {
							if (this.step == 1) this.step = 2;
							this.loadingInterval = setInterval(() => {
								if (this.step < 6) this.step += 1;
							}, 4000);
						} else if (e.record.isReady) {
							//clearInterval(this.loadingInterval)
							this.step = 6;
							this.createSessionCode();
						}
					});
					this.step = 1;
				} catch (error) {
					logError(this, error);
					clearInterval(this.loadingInterval);
					this.isLoading = false;
				}
			} else if (this.user && this.user.credits <= 0) {
				this.message.text = ":( You should buy more credits !";
				this.message.buttonText = "Buy credits";
				this.message.action = {
					name: "Profile",
					query: { credits: true }
				};
			} else {
				this.message.text =
					"Your 1 credits trial ended, create your account now and win 10 credits more !";
				this.message.buttonText = "Register";
				this.message.action = {
					name: "Register"
				};
			}
		}
	},
	computed: {
		user: function() {
			if (pb.authStore && pb.authStore.model) return pb.authStore.model;
			else return null;
		}
	},
	components: {
		ImgComparisonSlider
	}
};
</script>
  <style scoped>
.drag-drop-zone {
	background-image: url(https://preview.redd.it/qwd83nc4xxf41.jpg?auto=webp&s=172adf428061ec1b71c0d43b7ba870f85d46a816);
	background-repeat: repeat;
	background-size: 20rem;
	color: #6c6c6c;
	text-transform: uppercase;
}
.drag-drop-zone.active {
	border-color: rgb(35, 108, 35);
}
</style>