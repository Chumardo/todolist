<template>
    <div>
        <h1 class="text-white">Name: {{ user?.name }}</h1>
        <h1 class="text-white">Email: {{ user?.email }}</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const user = ref();
onMounted(async () => {
    const data = await axios.get("/api/user");
    user.value = data.data;
});
</script>
