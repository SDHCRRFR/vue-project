<template lang="">
    <div class="user_index">
        <h1>{{ title }}</h1>
    </div>
</template>


<script>
export default {
    name: 'UserIndex',
    data(){
        return {
            title: ('User Index')
        }
    },
    mounted(){
        
    }
    
}
</script>


<style>
.user_index{
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;

}
    
</style>