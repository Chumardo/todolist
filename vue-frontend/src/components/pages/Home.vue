<template>
    <div>
        <div v-if="authStore.user">
            <h1 class="text-white">Name: {{ authStore.user.name }}</h1>
            <h1 class="text-white">Email: {{ authStore.user.email }}</h1>
        </div>
        <div v-else>
            <div
                class="flex flex-col items-center justify-center px-6 py-8 mx-auto overflow-visible"
            >
                <div
                    class="w-full bg-purple-900 rounded-lg drop-shadow-2xl md:mt-0 sm:max-w-md xl:p-0"
                >
                    <div class="p-6 sm:p-8 text-center">
                        <h1
                            class="text-xl pb-10 text-blue-400 font-bold leading-tight tracking-tight md:text-4xl"
                        >
                            Todo List
                        </h1>
                        <div
                            class="border-solid border-4 border-blue-400 rounded-lg"
                        >
                            <div
                                class="flex flex-col text-white border-solid border-y-2 border-blue-400"
                            >
                                <div
                                    v-for="item in items"
                                    :key="item.id"
                                    class="flex justify-between items-center m-3"
                                >
                                    <label
                                        :for="item.id"
                                        class="ml-2 text-xl pr-5 font-medium capitalize text-white-900 dark:text-white-300 md:text-2xl hover:cursor-pointer"
                                    >
                                        {{ item.title }}
                                    </label>
                                    <input
                                        :id="item.id"
                                        type="checkbox"
                                        value=""
                                        class="w-4 h-4 text-blue-600 bg-white-100 border-white-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useItemStore } from "../../stores/item";

const authStore = useAuthStore();

const itemStore = useItemStore();

const items = itemStore.items;

onMounted(async () => {
    await authStore.getUser();
});
</script>
