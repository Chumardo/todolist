<template>
    <div>
        <div v-if="authStore.user">
            <h1 class="text-white">Name: {{ authStore.user.name }}</h1>
            <h1 class="text-white">Email: {{ authStore.user.email }}</h1>
        </div>
        <div v-else>
            <div
                class="flex flex-col text-white text-center"
                v-for="item in items"
                :key="item.id"
            >
                <ul>
                    <li>{{ item.title }}</li>
                </ul>
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
