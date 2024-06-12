<script setup>
import { reactive, ref } from 'vue';
import people from '../store';
import { useRouter } from 'vue-router';

const router = useRouter();
defineProps(['text']);
function add_Person(){
        var person = new Person();
        person.name = name.value;
        person.surname = surname.value;
        people.push(person)
        console.log(people);
        router.push('/list');
}
class Person{
    name = '';
    surname = '';
};
const name = ref('');
const surname = ref("");
</script>

<template>
    <form>
    <h1>{{text}}</h1>
    <input v-model="name">
    <input v-model="surname">
    <button @click.stop.prevent="add_Person" >Add Person</button>
    </form>
</template>