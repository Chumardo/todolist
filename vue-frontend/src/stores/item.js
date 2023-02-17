import { defineStore } from "pinia";

export const useItemStore = defineStore("item", {
    state: () => ({
        items: [
            { id: "1", title: "learn javascript", completed: true },
            { id: "2", title: "learn vue", completed: false },
            { id: "3", title: "learn laravel", completed: false },
        ],
    }),
    actions: {
        updateCheck(id, completed) {
            if (this.items.id === id) {
                this.items.completed = completed;
            }
        },
        deleteItem(id) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id == id) {
                    this.items.splice(i, 1);
                }
            }
        },
    },
});
