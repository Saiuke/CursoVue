<template>
    <div class="contador">
        <p>{{contador}}</p>
        <button @click="adicionar">Add</button>
        <button @click="subtrair">Sub</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            contador: 0,
        }
    },
    methods:{
        adicionar(){
            this.contador++
        },
        subtrair(){
            this.contador--
        }
    }
}
</script>

<style>
    .contador p{
        border-block: 5px;
        border-style: groove;
        border-color: blueviolet;
        border-width: 3px;
        padding: 5px;
        background-color: darkslategray;
        width: 5vw;
        color:whitesmoke;
        font-size: 18px;
        text-align: center;
    }
</style>