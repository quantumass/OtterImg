<template>
	<vue-final-modal v-model="isModalActive" classes="modal-container" content-class="modal-content">
		<form v-on:submit.prevent="updateUser" action="#" method="POST">
			<div class="relative h-custom-screen overflow-y-auto overflow-x-hidden">
				<div class>
					<div class="flex items-center p-2">
						<h3 class="text-xl flex-1 uppercase">Update profile</h3>
						<button class="text-white rounded w-9 h-9 bg-red-600" @click="isModalActive = false">X</button>
					</div>
					<hr />
				</div>
				<div class="mt-4">
					<label class="block text-gray-700">Avatar</label>
					<input
						type="file"
						class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
						ref="avatar"
						@change="onFileChange"
						accept="image/*"
					/>
				</div>

				<div>
					<label class="block text-gray-700">Username</label>
					<input
						type="text"
						v-model="form.username"
						placeholder="Enter Username"
						class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
						autofocus
						autocomplete
					/>
				</div>

				<div class="mt-4">
					<label class="block text-gray-700">Name</label>
					<input
						type="text"
						v-model="form.name"
						placeholder="Enter Name"
						class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
						autofocus
						autocomplete
					/>
				</div>

				<div class="mt-4">
					<label class="block text-gray-700">Email Address</label>
					<input
						type="email"
						v-model="form.email"
						placeholder="Enter Email Address"
						class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
						autofocus
						autocomplete
						disabled
					/>
				</div>
				<div class="mt-4">
					<label class="block text-gray-700">Old Password</label>
					<input
						type="password"
						v-model="form.oldPassword"
						placeholder="Enter old password"
						minlength="6"
						class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
					/>
				</div>

				<div class="mt-4">
					<label class="block text-gray-700">Password</label>
					<input
						type="password"
						v-model="form.password"
						placeholder="Enter Password"
						minlength="6"
						class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
					/>
				</div>
				<div class="mt-4">
					<label class="block text-gray-700">Password Confirmation</label>
					<input
						type="password"
						v-model="form.passwordConfirm"
						placeholder="Enter Password Confirmation"
						minlength="6"
						class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
					/>
				</div>

				<div class="mt-4">
					<label class="block text-gray-700">Bio</label>
					<textarea
						v-model="form.bio"
						placeholder="Enter Bio"
						class="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
						autofocus
						autocomplete
					></textarea>
				</div>
			</div>
			<div class="shadow-lg -m-4 p-4 bg-white">
				<button
					type="submit"
					class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3"
				>
					<loader title="Update" :isLoading="isLoading" />
				</button>
			</div>
		</form>
	</vue-final-modal>
	<section class="relative block h-96" id="tab-nav">
		<div
			class="absolute top-0 w-full h-full bg-center bg-cover"
			:style="`background-image: url(${require('@/assets/img/user-cover.jpg')});`"
		>
			<span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
		</div>
		<div
			class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
			style="transform: translateZ(0px)"
		>
			<svg
				class="absolute bottom-0 overflow-hidden"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0"
			>
				<polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" />
			</svg>
		</div>
	</section>
	<section class="relative pt-16 bg-blueGray-200">
		<div class="container mx-auto px-4">
			<div
				class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 pb-6"
			>
				<div class="bg-white mb-8">
					<nav class="flex flex-col sm:flex-row relative">
						<button
							v-for="(tab, index) in tabNames"
							:key="index"
							class="py-4 px-6 block hover:text-indigo-500 focus:outline-none border-b-2 font-medium"
							:class="selectedTab == tab || (index == 0 && selectedTab === null) ? 'text-indigo-500 border-indigo-500 z-10' : 'text-gray-400 border-white'"
							@click="selectTab(tab)"
						>{{ tab }}</button>
						<div class="w-full border-b-2 border-gray-100 absolute bottom-0 left-0"></div>
					</nav>
				</div>
				<section v-if="selectedTab == tabNames[0] || selectedTab === null" class="px-6">
					<div class="flex flex-wrap justify-center">
						<div class="w-full lg:w-4/12 px-4 lg:order-2">
							<div class="relative h-32 w-full flex justify-center">
								<img
									v-if="user.avatar != 'filename.jpg' && user.avatar"
									alt="..."
									:src="user.avatar"
									class="shadow-xl rounded-full align-middle border-none absolute h-full w-32"
								/>
								<svg
									v-else
									class="shadow-xl rounded-full h-auto align-middle border-none absolute"
									viewBox="0 0 36 36"
									fill="none"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									width="128"
									height="128"
								>
									<title>Elizabeth Cady</title>
									<mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
										<rect width="36" height="36" rx="72" fill="#FFFFFF" />
									</mask>
									<g mask="url(#mask__beam)">
										<rect width="36" height="36" fill="#fff5d6" />
										<rect
											x="0"
											y="0"
											width="36"
											height="36"
											transform="translate(7 7) rotate(333 18 18) scale(1)"
											fill="#d96153"
											rx="6"
										/>
										<g transform="translate(3.5 3.5) rotate(-3 18 18)">
											<path d="M13,19 a1,0.75 0 0,0 10,0" fill="#000000" />
											<rect x="11" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000" />
											<rect x="23" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000" />
										</g>
									</g>
								</svg>
							</div>
						</div>
						<div class="w-full lg:w-4/12 lg:order-3 lg:text-right lg:self-center text-center"></div>
						<div class="w-full lg:w-4/12 lg:order-1 lg:text-left lg:self-center text-center"></div>
					</div>
					<div class="text-center mt-6">
						<h3
							class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 capitalize"
						>{{ user.name }}</h3>
						<div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
							<i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
							{{ user.email }}
						</div>
						<div class="py-2 inline-block sm:mt-0">
							<button
								@click="showUserForm"
								class="bg-primary w-28 flex items-center gap-1 active:bg-primaryLight uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
								type="button"
							>
								<div class="flex items-center gap-1">
									<font-awesome-icon :icon="['fas', 'edit']" class="inline-block w-4" />Update
								</div>
							</button>
						</div>
						<div class="py-2 inline-block sm:mt-0">
							<button
								@click="logout"
								class="bg-black-800 w-28 flex items-center gap-1 active:bg-black-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
								type="button"
							>
								<font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" class="inline-block w-4" />Logout
							</button>
						</div>
						<div class="flex justify-center py-4 lg:pt-4 pt-8">
							<div class="mr-4 p-3 text-center">
								<span
									class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
								>{{ user.credits }}</span>
								<span class="text-sm text-blueGray-400">Credits</span>
							</div>
							<div class="mr-4 p-3 text-center">
								<span
									class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
								>{{ totalImages }}</span>
								<span class="text-sm text-blueGray-400">Photos</span>
							</div>
							<div class="lg:mr-4 p-3 text-center">
								<span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">0</span>
								<span class="text-sm text-blueGray-400">VIP</span>
							</div>
						</div>
						<div>
							<router-link
								:to="{ name: 'Profile', query: { tab: tabNames[1]} }"
								class="bg-gradient-to-r from-yellow-500 to-yellow-600 inline-flex items-center gap-1 active:bg-black-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
								type="button"
							>
								<font-awesome-icon :icon="['fas', 'credit-card']" class="inline-block w-2" />buy 300 credits
							</router-link>
						</div>
						<div class="mb-2 text-blueGray-600 mt-10">
							<i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
							{{ levels[0].name }} - {{ levels[0].description }}
						</div>
						<div class="mb-2 text-blueGray-600">
							<i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
							{{ levels[0].university }}
						</div>
					</div>
					<div class="text-center">
						<div class="flex flex-wrap justify-center">
							<div class="w-full lg:w-9/12 px-4">
								<p v-if="user.bio" class="mb-4 text-lg leading-relaxed text-blueGray-700">{{ user.bio }}</p>
								<a href="#" v-else @click="showUserForm" class="font-normal text-primary">Add your bio</a>
							</div>
						</div>
					</div>
				</section>
				<section v-if="selectedTab == tabNames[2]" class="main container mx-auto px-4">
					<div v-if="!imagesLoaded">
						<loader title="loading your gallery ..." isLoading="true"></loader>
					</div>
					<div class="w-full mb-4">
						<BGRemover />
					</div>
					<div v-show="imagesLoaded" class="main_content">
						<div v-if="totalImages == 0">
							You didn't upload any image
							<br />
							<router-link :to="{name: 'Home'}" class="font-normal text-primary">START NOW</router-link>
						</div>
						<div
							v-for="(image, key) in images"
							:key="key"
							v-show="!image.isHidden"
							class="picture_wrapper"
						>
							<div>
								<ImgComparisonSlider class="shadow-lg w-full">
									<img slot="first" class="w-full" :src="image.publicSrc" alt />
									<img
										slot="second"
										class="w-full"
										:src="image.optimizedPublicSrc"
										@load="imageLoaded"
										@error="() => imageError(key)"
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
							</div>
						</div>
					</div>
					<div class="w-full text-center">
						<button
							v-if="imagesLoaded && page < totalPages"
							@click="loadMore"
							class="bg-primary inline-flex justify-center items-center text-white mt-2 py-2 px-4 rounded"
						>
							<font-awesome-icon
								:icon="['fas', 'arrows-rotate']"
								:class="isLoadingMore ? 'animate-spin' : ''"
								class="mr-2 w-4"
							/>Load more
						</button>
					</div>
				</section>
				<section
					v-if="selectedTab == tabNames[3]"
					class="main container flex flex-wrap gap-4 mx-auto px-4"
				>
					<a
						href="https://imgotter.com"
						target="_blank"
						class="w-1/4 rounded-2xl cursor-pointer shadow-lg bg-cover"
						:style="`background-image: url('${require('@/assets/img/pattern-transparent-image-orange.png')}');`"
					>
						<img class="w-full" :src="require('@/assets/img/illustration-intro-rmbg.png')" />
						<a
							target="_blank"
							class="bg-black-900 inline-flex items-center text-white w-full mt-2 py-2 px-4 rounded-b-2xl"
						>
							<font-awesome-icon :icon="['fas', 'pen-nib']" class="mr-2 w-4" />Background Remover
						</a>
					</a>
					<a
						class="w-1/4 relative rounded-2xl cursor-pointer shadow-lg bg-cover"
						:style="`background-image: url('${require('@/assets/img/pattern-transparent-image-orange.png')}');filter: grayscale(1);`"
					>
						<div class="absolute top-0 left-0 w-full h-full bg-gray-800 rounded-2xl opacity-75"></div>
						<div
							class="text-2xl text-white absolute w-full text-center uppercase"
							style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
						>Comming Soon</div>
						<img class="w-full" :src="require('@/assets/img/illustration-intro.png')" />
						<a
							target="_blank"
							class="bg-black-900 inline-flex items-center text-white w-full mt-2 py-2 px-4 rounded-b-2xl"
						>
							<font-awesome-icon :icon="['fas', 'pen-nib']" class="mr-2 w-4" />UP SCALING IMAGE
						</a>
					</a>
					<a
						class="w-1/4 rounded-2xl cursor-pointer shadow-lg bg-cover"
						:style="`background-image: url('${require('@/assets/img/pattern-transparent-image-orange.png')}');filter: grayscale(1);`"
					>
						<div class="absolute top-0 left-0 w-full h-full bg-gray-800 rounded-2xl opacity-75"></div>
						<div
							class="text-2xl text-white absolute w-full text-center uppercase"
							style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
						>Comming Soon</div>
						<img class="w-full" :src="require('@/assets/img/illustration-intro-optimize.png')" />
						<a
							target="_blank"
							class="bg-black-900 inline-flex items-center text-white w-full mt-2 py-2 px-4 rounded-b-2xl"
						>
							<font-awesome-icon :icon="['fas', 'pen-nib']" class="mr-2 w-4" />PNG Optimizer
						</a>
					</a>
				</section>
				<section v-show="selectedTab == tabNames[1]">
					<div class="bg-white relative">
						<div
							class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row"
						>
							<div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:flex-row">
								<div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
									<div class="flex flex-col items-center justify-center w-full h-full relative p-24 pr-28">
										<img :src="require('@/assets/img/payment.png')" class="btn-" />
									</div>
								</div>
								<div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
									<div
										class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10"
									>
										<p
											class="w-full text-2xl font-medium text-center leading-snug uppercase"
										>More credits points</p>
										<div class="relative h-custom-screen overflow-y-auto overflow-x-hidden">
											<div class="p-8 w-400px">
												<img :src="require('@/assets/img/credits.png')" class="w-full mx-auto" />
												<div class="py-4">
													Elevate your images to the next level with our IMGOtter services. Purchase 300 credit points and transform your pictures into transparent masterpieces.
													<p class="font-extrabold">
														With just
														<span class="line-through">35$</span> 25$ Buy Know
													</p>
												</div>
												<br />
												<div id="smart-button-container">
													<div style="text-align: center;">
														<div id="paypal-button-container"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<svg
										viewBox="0 0 91 91"
										class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300 fill-current"
									>
										<g stroke="none" stroke-width="1" fill-rule="evenodd">
											<g fill-rule="nonzero">
												<g>
													<g>
														<circle cx="3.261" cy="3.445" r="2.72" />
														<circle cx="15.296" cy="3.445" r="2.719" />
														<circle cx="27.333" cy="3.445" r="2.72" />
														<circle cx="39.369" cy="3.445" r="2.72" />
														<circle cx="51.405" cy="3.445" r="2.72" />
														<circle cx="63.441" cy="3.445" r="2.72" />
														<circle cx="75.479" cy="3.445" r="2.72" />
														<circle cx="87.514" cy="3.445" r="2.719" />
													</g>
													<g transform="translate(0 12)">
														<circle cx="3.261" cy="3.525" r="2.72" />
														<circle cx="15.296" cy="3.525" r="2.719" />
														<circle cx="27.333" cy="3.525" r="2.72" />
														<circle cx="39.369" cy="3.525" r="2.72" />
														<circle cx="51.405" cy="3.525" r="2.72" />
														<circle cx="63.441" cy="3.525" r="2.72" />
														<circle cx="75.479" cy="3.525" r="2.72" />
														<circle cx="87.514" cy="3.525" r="2.719" />
													</g>
													<g transform="translate(0 24)">
														<circle cx="3.261" cy="3.605" r="2.72" />
														<circle cx="15.296" cy="3.605" r="2.719" />
														<circle cx="27.333" cy="3.605" r="2.72" />
														<circle cx="39.369" cy="3.605" r="2.72" />
														<circle cx="51.405" cy="3.605" r="2.72" />
														<circle cx="63.441" cy="3.605" r="2.72" />
														<circle cx="75.479" cy="3.605" r="2.72" />
														<circle cx="87.514" cy="3.605" r="2.719" />
													</g>
													<g transform="translate(0 36)">
														<circle cx="3.261" cy="3.686" r="2.72" />
														<circle cx="15.296" cy="3.686" r="2.719" />
														<circle cx="27.333" cy="3.686" r="2.72" />
														<circle cx="39.369" cy="3.686" r="2.72" />
														<circle cx="51.405" cy="3.686" r="2.72" />
														<circle cx="63.441" cy="3.686" r="2.72" />
														<circle cx="75.479" cy="3.686" r="2.72" />
														<circle cx="87.514" cy="3.686" r="2.719" />
													</g>
													<g transform="translate(0 49)">
														<circle cx="3.261" cy="2.767" r="2.72" />
														<circle cx="15.296" cy="2.767" r="2.719" />
														<circle cx="27.333" cy="2.767" r="2.72" />
														<circle cx="39.369" cy="2.767" r="2.72" />
														<circle cx="51.405" cy="2.767" r="2.72" />
														<circle cx="63.441" cy="2.767" r="2.72" />
														<circle cx="75.479" cy="2.767" r="2.72" />
														<circle cx="87.514" cy="2.767" r="2.719" />
													</g>
													<g transform="translate(0 61)">
														<circle cx="3.261" cy="2.846" r="2.72" />
														<circle cx="15.296" cy="2.846" r="2.719" />
														<circle cx="27.333" cy="2.846" r="2.72" />
														<circle cx="39.369" cy="2.846" r="2.72" />
														<circle cx="51.405" cy="2.846" r="2.72" />
														<circle cx="63.441" cy="2.846" r="2.72" />
														<circle cx="75.479" cy="2.846" r="2.72" />
														<circle cx="87.514" cy="2.846" r="2.719" />
													</g>
													<g transform="translate(0 73)">
														<circle cx="3.261" cy="2.926" r="2.72" />
														<circle cx="15.296" cy="2.926" r="2.719" />
														<circle cx="27.333" cy="2.926" r="2.72" />
														<circle cx="39.369" cy="2.926" r="2.72" />
														<circle cx="51.405" cy="2.926" r="2.72" />
														<circle cx="63.441" cy="2.926" r="2.72" />
														<circle cx="75.479" cy="2.926" r="2.72" />
														<circle cx="87.514" cy="2.926" r="2.719" />
													</g>
													<g transform="translate(0 85)">
														<circle cx="3.261" cy="3.006" r="2.72" />
														<circle cx="15.296" cy="3.006" r="2.719" />
														<circle cx="27.333" cy="3.006" r="2.72" />
														<circle cx="39.369" cy="3.006" r="2.72" />
														<circle cx="51.405" cy="3.006" r="2.72" />
														<circle cx="63.441" cy="3.006" r="2.72" />
														<circle cx="75.479" cy="3.006" r="2.72" />
														<circle cx="87.514" cy="3.006" r="2.719" />
													</g>
												</g>
											</g>
										</g>
									</svg>
									<svg
										viewBox="0 0 91 91"
										class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500 fill-current"
									>
										<g stroke="none" stroke-width="1" fill-rule="evenodd">
											<g fill-rule="nonzero">
												<g>
													<g>
														<circle cx="3.261" cy="3.445" r="2.72" />
														<circle cx="15.296" cy="3.445" r="2.719" />
														<circle cx="27.333" cy="3.445" r="2.72" />
														<circle cx="39.369" cy="3.445" r="2.72" />
														<circle cx="51.405" cy="3.445" r="2.72" />
														<circle cx="63.441" cy="3.445" r="2.72" />
														<circle cx="75.479" cy="3.445" r="2.72" />
														<circle cx="87.514" cy="3.445" r="2.719" />
													</g>
													<g transform="translate(0 12)">
														<circle cx="3.261" cy="3.525" r="2.72" />
														<circle cx="15.296" cy="3.525" r="2.719" />
														<circle cx="27.333" cy="3.525" r="2.72" />
														<circle cx="39.369" cy="3.525" r="2.72" />
														<circle cx="51.405" cy="3.525" r="2.72" />
														<circle cx="63.441" cy="3.525" r="2.72" />
														<circle cx="75.479" cy="3.525" r="2.72" />
														<circle cx="87.514" cy="3.525" r="2.719" />
													</g>
													<g transform="translate(0 24)">
														<circle cx="3.261" cy="3.605" r="2.72" />
														<circle cx="15.296" cy="3.605" r="2.719" />
														<circle cx="27.333" cy="3.605" r="2.72" />
														<circle cx="39.369" cy="3.605" r="2.72" />
														<circle cx="51.405" cy="3.605" r="2.72" />
														<circle cx="63.441" cy="3.605" r="2.72" />
														<circle cx="75.479" cy="3.605" r="2.72" />
														<circle cx="87.514" cy="3.605" r="2.719" />
													</g>
													<g transform="translate(0 36)">
														<circle cx="3.261" cy="3.686" r="2.72" />
														<circle cx="15.296" cy="3.686" r="2.719" />
														<circle cx="27.333" cy="3.686" r="2.72" />
														<circle cx="39.369" cy="3.686" r="2.72" />
														<circle cx="51.405" cy="3.686" r="2.72" />
														<circle cx="63.441" cy="3.686" r="2.72" />
														<circle cx="75.479" cy="3.686" r="2.72" />
														<circle cx="87.514" cy="3.686" r="2.719" />
													</g>
													<g transform="translate(0 49)">
														<circle cx="3.261" cy="2.767" r="2.72" />
														<circle cx="15.296" cy="2.767" r="2.719" />
														<circle cx="27.333" cy="2.767" r="2.72" />
														<circle cx="39.369" cy="2.767" r="2.72" />
														<circle cx="51.405" cy="2.767" r="2.72" />
														<circle cx="63.441" cy="2.767" r="2.72" />
														<circle cx="75.479" cy="2.767" r="2.72" />
														<circle cx="87.514" cy="2.767" r="2.719" />
													</g>
													<g transform="translate(0 61)">
														<circle cx="3.261" cy="2.846" r="2.72" />
														<circle cx="15.296" cy="2.846" r="2.719" />
														<circle cx="27.333" cy="2.846" r="2.72" />
														<circle cx="39.369" cy="2.846" r="2.72" />
														<circle cx="51.405" cy="2.846" r="2.72" />
														<circle cx="63.441" cy="2.846" r="2.72" />
														<circle cx="75.479" cy="2.846" r="2.72" />
														<circle cx="87.514" cy="2.846" r="2.719" />
													</g>
													<g transform="translate(0 73)">
														<circle cx="3.261" cy="2.926" r="2.72" />
														<circle cx="15.296" cy="2.926" r="2.719" />
														<circle cx="27.333" cy="2.926" r="2.72" />
														<circle cx="39.369" cy="2.926" r="2.72" />
														<circle cx="51.405" cy="2.926" r="2.72" />
														<circle cx="63.441" cy="2.926" r="2.72" />
														<circle cx="75.479" cy="2.926" r="2.72" />
														<circle cx="87.514" cy="2.926" r="2.719" />
													</g>
													<g transform="translate(0 85)">
														<circle cx="3.261" cy="3.006" r="2.72" />
														<circle cx="15.296" cy="3.006" r="2.719" />
														<circle cx="27.333" cy="3.006" r="2.72" />
														<circle cx="39.369" cy="3.006" r="2.72" />
														<circle cx="51.405" cy="3.006" r="2.72" />
														<circle cx="63.441" cy="3.006" r="2.72" />
														<circle cx="75.479" cy="3.006" r="2.72" />
														<circle cx="87.514" cy="3.006" r="2.719" />
													</g>
												</g>
											</g>
										</g>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!--<section v-if="selectedTab == tabNames[4]" class="main container flex flex-wrap gap-4 mx-auto px-4">
          <messaging></messaging>
				</section>-->
			</div>
		</div>
	</section>
</template>

  <script>
import pb from "@/services/PocketConfig";
import { logError, getToast } from "@/utils/helpers";
import { $vfm, VueFinalModal, ModalsContainer } from "vue-final-modal";
import { ImgComparisonSlider } from "@img-comparison-slider/vue";
import BGRemover from "./components/BGRemover.vue";
import Messaging from "./components/Messaging.vue";

export default {
	data: () => ({
		isModalActive: false,
		isPaymentModalActive: false,
		defaultAvatar:
			"https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51",
		levels: [
			{
				name: "The Slacker",
				description: "generates very few images",
				university: "University of Procrastination"
			},
			{
				name: "The Novice",
				description: "just starting out",
				university: "University of Beginnings"
			},
			{
				name: "The Rookie",
				description: "still learning",
				university: "University of Learning"
			},
			{
				name: "The Learner",
				description: "starting to gain some skill",
				university: "University of Skill Acquisition"
			},
			{
				name: "The Prodigy",
				description: "skilled and generates high-quality images",
				university: "University of Prodigies"
			},
			{
				name: "The Maestro",
				description: "a true expert and generates outstanding images",
				university: "University of Masters"
			},
			{
				name: "The Legend",
				description: "the best of the best",
				university: "University of Legends"
			},
			{
				name: "The Specialty",
				description: "good at generating one specific type of image",
				university: "University of Specialties"
			},
			{
				name: "The Renaissance",
				description:
					"good at generating a variety of different types of images",
				university: "University of Renaissance"
			},
			{
				name: "The Level Up",
				description:
					"consistently generating more and more creative and funny images",
				university: "University of Upgraders"
			}
		],
		selectedTab: null,
		tabNames: [
			"Personal Informations",
			"Buying more credits",
			"Gallery",
			"Tools"
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
		Messaging,
		BGRemover,
		ImgComparisonSlider
	},
	watch: {
		$route: function() {
			this.checkRoutes();
		}
	},
	mounted: function() {
		if (pb.authStore && pb.authStore.model) {
			this.user = pb.authStore.model;
			this.user.avatar = `${process.env.VUE_APP_POCKET_API}/api/files/_pb_users_auth_/${this.user.id}/${this.user.avatar}`;
			this.getImages();
			// Create a new script element
			var script = document.createElement("script");
			// Set the source and attributes for the PayPal script
			script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.VUE_APP_SANDBOX_PAYPAL_PAYMENT_CLIENT}&currency=USD`;
			script.setAttribute(
				"data-sdk-integration-source",
				"button-factory"
			);
			// Define a function to be called when the script has finished loading
			script.onload = () => {
				this.initPayPalButton();
			};
			// Find the <head> tag and append the script to it
			var head = document.getElementsByTagName("head")[0];
			head.appendChild(script);
			this.checkRoutes();
		} else {
			this.$router.push({ name: "Login" });
		}
	},
	methods: {
		async checkRoutes() {
			await pb.collection("users").authRefresh();
			let nav = document.querySelector("#tab-nav");
			nav.scrollIntoView();
			if (this.$route.query.credits) {
				this.selectedTab = this.tabNames[1];
			} else if (this.$route.query.tab) {
				this.selectedTab = this.$route.query.tab;
			}
		},
		selectTab(tab) {
			// this.selectedTab = tab
			this.$router.push({ name: "Profile", query: { tab } });
		},
		initPayPalButton() {
			let vm = this;

			paypal
				.Buttons({
					style: {
						shape: "rect",
						color: "gold",
						layout: "vertical",
						label: "paypal"
					},

					createOrder: function(data, actions) {
						return actions.order.create({
							purchase_units: [
								{
									description:
										"Buy 300 Credits for using IMGOtter",
									amount: { currency_code: "USD", value: 10 }
								}
							]
						});
					},

					onApprove: function(data, actions) {
						console.log("data: ", data);
						return actions.order
							.capture()
							.then(async function(orderData) {
								vm.isPaymentModalActive = false;
								await pb
									.collection("users")
									.update(vm.user.id, {
										paymentInfo: {
											...orderData,
											paymentId: data.paymentID
										}
									});
								await pb.collection("users").authRefresh();
								getToast(vm).fire({
									icon: "success",
									title:
										"Thank you, Your credits points will be updated in seconds"
								});
							});
					},

					onError: function(err) {
						console.log(err);
						getToast(vm).fire({
							icon: "error",
							title: "Sorry we couldn't verify the payment"
						});
					}
				})
				.render("#paypal-button-container");
		},
		logout() {
			pb.authStore.clear();
			location.href = "/";
		},
		loadMore() {
			this.isLoadingMore = true;
			this.page += 1;
			this.getImages();
		},
		imageLoaded() {
			this.loadedImages++;
			if (this.loadedImages + this.errorImages === this.images.length) {
				this.imagesLoaded = true;
				this.isLoadingMore = false;
			}
		},
		imageError(key) {
			console.log("key", key);
			console.log("this.images", this.images);
			this.images[key].isHidden = true;
			this.errorImages++;
			if (this.loadedImages + this.errorImages === this.images.length) {
				this.imagesLoaded = true;
				this.isLoadingMore = false;
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
			const resultList = await pb
				.collection("images")
				.getList(this.page, 10, {});
			this.totalPages = resultList.totalPages;
			this.totalImages = resultList.totalItems;
			if (this.totalImages == 0) this.imagesLoaded = true;
			else {
				this.images = [
					...this.images,
					...resultList.items.map(el => ({
						...el,
						publicSrc: `${process.env.VUE_APP_POCKET_API}/api/files/c83ukhcc0l9jq90/${el.id}/${el.image}`,
						optimizedPublicSrc: `${process.env.VUE_APP_POCKET_API}/api/files/c83ukhcc0l9jq90/${el.id}/${el.convertedImage}`
					}))
				];
			}
		},
		onFileChange: function() {
			this.formData = new FormData();
			this.formData.append("avatar", this.$refs.avatar.files[0]);
		},
		showUserForm: function() {
			this.isModalActive = true;
			this.form = this.user;
		},
		updateUser: async function() {
			this.isLoading = true;

			Object.keys(this.form).forEach(key => {
				if (!this.formData) this.formData = new FormData();
				if (key != "avatar") this.formData.append(key, this.form[key]);
			});

			try {
				await pb
					.collection("users")
					.update(this.user.id, this.formData);
				await pb.collection("users").authRefresh();
				this.isModalActive = false;
				this.isLoading = false;
			} catch (error) {
				this.isLoading = false;
				logError(this, error);
			}
		}
	}
};
</script>