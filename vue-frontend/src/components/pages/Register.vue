<template>
    <section>
        <div
            class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        >
            <div
                class="w-full bg-purple-900 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
            >
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl text-center text-blue-400 font-bold leading-tight tracking-tight md:text-2xl"
                    >
                        Create Account
                    </h1>

                    <form
                        @submit.prevent="authStore.handleRegister(form)"
                        class="space-y-4 md:space-y-6"
                        action="#"
                    >
                        <div>
                            <label
                                for="name"
                                class="block mb-2 text-sm font-medium text-white"
                                >Name</label
                            >

                            <input
                                type="name"
                                name="name"
                                id="name"
                                v-model="form.name"
                                class="bg-gray-50 border border-blue-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Jhon"
                                required=""
                            />
                        </div>

                        <div>
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-white"
                                >Your email</label
                            >

                            <input
                                type="email"
                                name="email"
                                id="email"
                                v-model="form.email"
                                class="bg-gray-50 border border-blue-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="email@example.com"
                                required=""
                            />
                        </div>

                        <div>
                            <label
                                for="password"
                                class="block mb-2 text-sm font-medium text-white"
                                >Password</label
                            >

                            <input
                                type="password"
                                name="password"
                                id="password"
                                v-model="form.password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-blue-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required=""
                            />
                        </div>

                        <div>
                            <label
                                for="password-confirmation"
                                class="block mb-2 text-sm font-medium text-white"
                                >Password-confirmation</label
                            >

                            <input
                                type="password"
                                name="password-confirmation"
                                id="password-confirmation"
                                v-model="form.password_confirmation"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-blue-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required=""
                            />
                        </div>

                        <div class="pt-4">
                            <button
                                type="submit"
                                class="w-full text-black bg-blue-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Register
                            </button>
                        </div>

                        <p class="text-sm font-light text-blue-200">
                            Already have an account?

                            <router-link
                                to="/login"
                                class="font-medium text-red-400 hover:underline"
                                >Log In</router-link
                            >
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();

const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});
</script>
