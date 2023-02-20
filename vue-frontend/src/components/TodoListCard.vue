<template>
    <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto overflow-visible"
    >
        <!-- Example data -->
        <div
            v-if="props.example"
            class="w-full bg-purple-900 rounded-lg drop-shadow-2xl md:mt-0 sm:max-w-md xl:p-0"
        >
            <div class="p-6 sm:p-8 text-center">
                <h1
                    class="text-xl pb-10 text-blue-400 font-bold leading-tight tracking-tight md:text-4xl"
                >
                    Todo List
                </h1>
                <form
                    @submit.prevent="updateList(form)"
                    class="flex items-center pb-3 pl-3 pr-3"
                >
                    <input
                        class="appearance-none bg-white border-none w-full text-bkac mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        v-model="form.title"
                        placeholder="New Todo"
                    />
                    <button type="submit" class="pt-1">
                        <font-awesome-icon
                            icon="plus-square"
                            id="plus-square"
                            class="h-8"
                        />
                    </button>
                </form>
                <div v-if="props.data.length <= 0">
                    <h1 class="text-red-300">There is nothing, add new Todo</h1>
                </div>
                <div
                    v-if="props.data.length > 0"
                    class="border-solid border-4 border-blue-400 rounded-lg"
                >
                    <div
                        class="flex flex-col text-white border-solid border-y-2 border-blue-400 divide-blue-400 divide-y-4"
                    >
                        <div
                            v-for="item in props.data"
                            :key="item.id"
                            class="flex justify-between items-center p-3"
                        >
                            <label
                                :for="item.id"
                                :class="[
                                    item.completed
                                        ? 'line-through text-green-500'
                                        : '',
                                    'ml-2 text-xl pr-5 text-start font-medium capitalize text-white-900 md:text-2xl hover:cursor-pointer',
                                ]"
                            >
                                {{ item.title }}
                            </label>
                            <div
                                class="flex items-center gap-2 justify-bteween"
                            >
                                <input
                                    :id="item.id"
                                    type="checkbox"
                                    v-model="item.completed"
                                    class="w-4 h-4 text-blue-600 bg-white-100 border-white-300 rounded focus:ring-blue-500"
                                    @change="
                                        itemStore.updateCheck(
                                            item.id,
                                            item.completed
                                        )
                                    "
                                />
                                <button
                                    @click="itemStore.deleteItem(item.id)"
                                    class="fa-trash"
                                >
                                    <font-awesome-icon
                                        icon="fa-trash"
                                        id="fa-trash"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- API data -->
        <div
            v-if="!props.example"
            class="w-full bg-purple-900 rounded-lg drop-shadow-2xl md:mt-0 sm:max-w-md xl:p-0"
        >
            <div class="p-6 sm:p-8 text-center">
                <h1
                    class="text-xl pb-10 text-blue-400 font-bold leading-tight tracking-tight md:text-4xl"
                >
                    Todo List
                </h1>
                <form
                    @submit.prevent="addApiItem(form)"
                    class="flex items-center pb-3 pl-3 pr-3"
                >
                    <input
                        class="appearance-none bg-white border-none w-full text-bkac mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        v-model="form.title"
                        placeholder="New Todo"
                    />
                    <button type="submit" class="pt-1">
                        <font-awesome-icon
                            icon="plus-square"
                            id="plus-square"
                            class="h-8"
                        />
                    </button>
                </form>
                <div v-if="props.data.length <= 0">
                    <h1 class="text-red-300">There is nothing, add new Todo</h1>
                </div>
                <div
                    v-if="props.data.length > 0"
                    class="border-solid border-4 border-blue-400 rounded-lg"
                >
                    <div
                        class="flex flex-col text-white border-solid border-y-2 border-blue-400 divide-blue-400 divide-y-4"
                    >
                        <div
                            v-for="item in props.data"
                            :key="item.id"
                            class="flex justify-between items-center p-3"
                        >
                            <label
                                :for="item.id"
                                :class="[
                                    item.status
                                        ? 'line-through text-green-500'
                                        : '',
                                    'ml-2 text-xl pr-5 text-start font-medium capitalize text-white-900 md:text-2xl hover:cursor-pointer',
                                ]"
                            >
                                {{ item.title }}
                            </label>
                            <div
                                class="flex items-center gap-2 justify-bteween"
                            >
                                <input
                                    :id="item.id"
                                    type="checkbox"
                                    :checked="item.status"
                                    v-model="status"
                                    class="w-4 h-4 text-blue-600 bg-white-100 border-white-300 rounded focus:ring-blue-500"
                                    @change="
                                        itemStore.updateStatus(status, item.id)
                                    "
                                />
                                <button
                                    @click="itemStore.deleteApiItem(item.id)"
                                    class="fa-trash"
                                >
                                    <font-awesome-icon
                                        icon="fa-trash"
                                        id="fa-trash"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useItemStore } from "../stores/item";

const props = defineProps(["data", "example"]);

const form = ref({
    title: "",
});

const authStore = useAuthStore();
const itemStore = useItemStore();

function updateList(form) {
    itemStore.addItem(form);
    form.title = "";
}

function addApiItem(form) {
    const req_data = {
        title: form.title,
        user_id: authStore.authUser.id,
    };
    itemStore.addApiItem(req_data);
    form.title = "";
}
</script>

<style scoped>
.fa-trash {
    color: red;
}

#plus-square {
    color: rgb(0, 255, 0);
}
</style>
