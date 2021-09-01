<template>
    <div class="time-container">
       <span class="time">{{ timeString }}</span>
    </div>
    <div v-show="!visible" class="time-header">
        <span class="time-header-time">{{ timeString }}</span>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            timeString: '00:00',
            visible: true,
        }
    },
    methods: {
        getTime() {
            let time = new Date()

            let timeString = time.toLocaleTimeString().toLowerCase().replace('pm', '').replace('am', '').slice(0, -5) + '0';

            this.timeString = timeString;
        },
        checkVisible(e) {
            let timeContainer = document.querySelector('.time-container');

            if (document.documentElement.scrollTop > (timeContainer.scrollHeight)) {
                this.visible = false;
            } else {
                this.visible = true;
            }
        },
    },
    mounted() {
        document.addEventListener('scroll', this.checkVisible)

        this.getTime();

        setInterval(this.getTime, 10000);
    }
}
</script>
<style scoped>
    .time {
        font-size: 5em;
    }

    .time-header {
        top: 0;
        left: 0;

        position: fixed;
        padding: 10px;
        font-size: 3em;
        height: 50px;
        background-color: white;
        /* backdrop-filter: blur(10px); */
        width: 100%;
        border-bottom: 1px solid rgb(173, 173, 173);
    }

    @media (min-width: 650px) {
        .time-header {
            z-index: -1;
            border-bottom: none;
        }
    }
</style>