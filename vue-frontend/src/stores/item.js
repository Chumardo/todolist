import { defineStore } from "pinia";

export const useItemStore = defineStore("item", {
    state: () => ({
        items: [
            { id: "1", title: "learn javascript" },
            { id: "2", title: "learn vue" },
            { id: "3", title: "learn laravel" },
        ],
    }),
});
