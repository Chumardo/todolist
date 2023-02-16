<template>
    <header>
        <nav class="bg-purple-900 border-gray-200 px-4 lg:px-6 py-2.5">
            <div
                class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
            >
                <router-link to="/" class="flex items-center">
                    <img
                        class="mr-3 h-6 sm:h-9"
                        src="https://img.icons8.com/color-glass/48/null/todo-list--v1.png"
                    />
                    <span
                        class="text-blue-400 self-center text-xl font-semibold whitespace-nowrap"
                        >Todo list</span
                    >
                </router-link>
                <div v-if="authStore.user">
                    <h1 class="text-blue-400 font-bold">
                        {{ authStore.user.name }}
                    </h1>
                </div>
                <div
                    v-if="!authStore.user"
                    class="flex items-center lg:order-2"
                >
                    <router-link
                        to="/login"
                        class="text-blue-400 hover:bg-blue-400 hover:text-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                        >Log in</router-link
                    >
                </div>
                <div v-else>
                    <button
                        @click="authStore.handleLogout"
                        to="/logout"
                        class="text-blue-400 hover:bg-blue-400 hover:text-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>
