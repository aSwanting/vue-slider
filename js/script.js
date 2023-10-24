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
        changeImage(clicked) {

            // Perdonami Donato
            if (clicked === 'prev') { this.currentIitem > 0 ? this.currentIitem-- : this.currentIitem = this.carouselItems.length - 1 }
            if (clicked === 'next') { this.currentIitem < this.carouselItems.length - 1 ? this.currentIitem++ : this.currentIitem = 0 }

        }
    },

    // LifeCycle Functions
    created() {
        console.log(this.carouselItems[1].image)
    }

}).mount('#app')