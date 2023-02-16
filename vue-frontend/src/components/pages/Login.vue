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
                        Log In
                    </h1>
                    <form
                        @submit.prevent="authStore.handleLogin(form)"
                        class="space-y-4 md:space-y-6"
                        action="#"
                    >
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
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                    />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-white"
                                        >Remember me</label
                                    >
                                </div>
                            </div>
                            <router-link
                                to="reset-password"
                                class="text-sm font-medium text-blue-400 hover:underline"
                                >Forgot password?</router-link
                            >
                        </div>
                        <button
                            type="submit"
                            class="w-full text-black bg-blue-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Log in
                        </button>
                        <p class="text-sm font-light text-blue-200">
                            Don’t have an account yet?
                            <router-link
                                to="/register"
                                class="font-medium text-red-400 hover:underline"
                                >Register</router-link
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
    email: "",
    password: "",
});
</script>
