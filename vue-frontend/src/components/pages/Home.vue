<template>
    <div>
        <div v-if="authStore.user">
            <TodoListCard :data="apiItems" :example="false" />
        </div>
        <div v-else>
            <TodoListCard :data="exampleItems" :example="true" />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useItemStore } from "../../stores/item";
import TodoListCard from "../TodoListCard.vue";

const authStore = useAuthStore();

const itemStore = useItemStore();

const exampleItems = itemStore.items;
let apiItems = [];

onMounted(async () => {
    await authStore.getUser();
});

onMounted(async () => {
    apiItems = await itemStore.getItems();
});
</script>
