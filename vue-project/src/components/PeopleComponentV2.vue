<script setup>
import { computed, reactive, ref } from 'vue';


class Person2{
    name = '';
    surname = '';
};


const name = ref('');
const surname = ref("");
const people =  reactive([])
function add_Person(){
        var person = new Person2();
        person.name = name.value;
        person.surname = surname.value;
        people.push(person)
        console.log(people);
    }
const person_Count = computed(() => {
    return people.length;
})

</script>

<template>
<input v-model="name">
<input v-model="surname">
<button @click="add_Person">Add Person</button>
<div v-for="person in people">
    <li>{{ person.name }} {{person.surname}}</li>
</div>
{{ person_Count }}

</template>