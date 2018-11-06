"use strict";
function TodoController(){
    const vm = this;
    vm.list = [
        {
            task: "dishes",
            completed: true
        },
        {
            task: "feed dog",
            completed: false
        },
        {
            task: "fold laundry",
            completed: true
        },
        {
            task: "cook dinner",
            completed: false
        },

    ];
    vm.addTask = (newItem) => {
        vm.list.push({task: newItem, completed: false});
    };
    vm.removeTask = (index) => {
        vm.list.splice(index, 1);
    };
    vm.completeTask = (chore) => {
        chore.completed = !chore.completed;
    };
}

angular
    .module("todoApp")
    .controller("TodoController", TodoController);
