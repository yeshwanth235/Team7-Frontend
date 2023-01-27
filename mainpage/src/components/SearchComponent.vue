<template>
<div class="searchDiv">
    <div ><input type="text" placeholder="Search mobiles" v-model="content"/> <button><i class="icon-search"></i></button></div>
    
    <p>Something place where all mobiles are avaliable</p>
</div>
    
</template>


<script>
export default {
    name:"SearchComponent",
    emits: ["alter-hide"],
    data() {
        return {
            content: "",
        };
    },
    watch: {
        content(newValue) {
            if(newValue.length < 2) {
                this.$emit("alter-hide", false, newValue);
            }else {
                this.$emit("alter-hide", true, newValue);
            }
        }
    }
}
</script>


<style scoped>
p {
    font-size: 20px;
    padding-top: 10px;
}

input {
    height: 38px;
    width: 430px;
    margin: 0 10px 6px 10px;
    border-radius: 11px;
}

input::placeholder {
    top: 10px;
    margin-left: 50px;
    font-size: 20px;
}

button {
    font-size: 30px;
    position: relative;
    right: 50px;
    bottom: 4px;
    border: none;
    background: none;
    opacity: 0.8;
} 
</style>