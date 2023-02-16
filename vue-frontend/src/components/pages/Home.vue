<template>
    <div>
        <div v-if="authStore.user">
            <h1 class="text-white">Name: {{ authStore.user.name }}</h1>
            <h1 class="text-white">Email: {{ authStore.user.email }}</h1>
        </div>
        <div v-else>Go and Log In</div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();

onMounted(async () => {
    await authStore.getUser();
});
</script>
