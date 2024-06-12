<script setup>

import {add_Person} from 'PeopleListComponent.vue';
function add_Person(){
        var person = new Person2();
        person.name = name.value;
        person.surname = surname.value;
        people.push(person)
        console.log(people);
}
class Person{
    name = '';
    surname = '';
};
const name = ref('');
const surname = ref("");
const people =  reactive([])
</script>

<template>
    <input v-model="name">
    <input v-model="surname">
    <button @click="add_Person">Add Person</button>
    <div v-for="person in people">
        <li>{{ person.name }} {{person.surname}}</li>
    </div>
</template>