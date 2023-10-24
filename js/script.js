//////////////////////////////////////////////// VUE ////////////////////////////////////////////////

// Destructure Vue Object
const { createApp } = Vue

//  Vue Main Function
createApp({

    // Parameters
    data() {
        return {
            carouselItems: slides,
            currentIitem: 0
        }
    },

    // Methods
    methods: {

    },

    // LifeCycle Functions
    created() {
        console.log(this.carouselItems[1].image)
    }

}).mount('#app')