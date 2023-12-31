//////////////////////////////////////////////// VUE ////////////////////////////////////////////////

// Destructure Vue Object
const { createApp } = Vue

//  Vue Main Function
createApp({

    // Parameters
    data() {
        return {
            carouselItems: slides,
            currentIitem: 0,
            intervalID: 0,
        }
    },

    // Methods
    methods: {
        changeImage(clicked, thumbIndex) {

            // Perdonami Donato
            if (clicked === 'prev') { this.currentIitem > 0 ? this.currentIitem-- : this.currentIitem = this.carouselItems.length - 1 }
            if (clicked === 'next') { this.currentIitem < this.carouselItems.length - 1 ? this.currentIitem++ : this.currentIitem = 0 }
            if (clicked === 'thumb') { this.currentIitem = thumbIndex }

        },

        startAutoplay() {

            this.intervalID = setInterval(() => {
                this.changeImage('next')
            }, 3 * 1000);

        },

        stopAutoplay() {

            clearInterval(this.intervalID)

        }
    },

    // LifeCycle Functions
    mounted() {

        this.startAutoplay()

    }

}).mount('#app')