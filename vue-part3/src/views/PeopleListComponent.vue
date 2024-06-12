<script setup>
import people from '../store.js';
defineProps(['text']);
</script>

<template>
    <h1>{{text}}</h1>
    <div v-for="person in people">
        <li>{{ person.name }} {{person.surname}}</li>
    </div>
</template>