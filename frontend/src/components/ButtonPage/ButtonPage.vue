<template>
    <button 
    class="ButtonPage"
    :class="[
        `BottonPage__color-${color}`,
        `BottonPage__size-${size}` 
    ]"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "ButtonPage",
    props: {
        color: {
            type: String,
            default:'white',
    validator: val => ['white', 'terra'].includes(val),
        },
        size: {
            type: String,
            default: null,
    validator: val => ['s', 'l'].includes(val),
        },
        
        },
    }

</script>
<style scoped>
.ButtonPage {
    padding-top: 0.5vh;
    padding-bottom: 0.5vh;
    padding-left: 1.1vw;
    padding-right: 1.1vw;
    border-style: none;
    border-radius: 25px;
    font-family: var(--outfit);
    margin: auto;
    flex-wrap: wrap;
}

.ButtonPage:hover {
cursor:pointer;
}

.BottonPage__color-white {
    background: var(--blanco);
    color: var(--verde);
box-shadow: 1px 1px 10px rgba(245, 245, 245, 0.904);
}

.BottonPage__color-white:hover {
    /* border: solid 5px; */
    color: var(--blanco);
    background: var(--verde);
}

.BottonPage__size-s {
    font-size:medium;
}

.BottonPage__size-l {
    font-size:x-large;
}


.BottonPage__color-terra {
    background: var(--tierra);
    color: var(--blanco);
}

.BottonPage__color-terra:hover {
    color: var(--blanco);
    background: var(--verde);
}


</style>