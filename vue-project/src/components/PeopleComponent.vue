<script lang="ts">
class Person{
    name: string = '';
    surname: string = '';
};
export default{
    data(){
        return {
            name: "",
            surname: "",
            people: [] as Person[]
        }
    },
    methods: {
        add_Person(){
            var person = new Person();
            person.name = this.name;
            person.surname = this.surname;
            this.people.push(person)
            console.log(this.people);
        }
    },
    computed: {
        person_Count(){
            return this.people.length
        }
    }
}
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