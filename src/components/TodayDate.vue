<script>
    import {getTodayDate} from '@/services/api/getTodayDate.js'

    export default {
        name: 'TodayDate',

        data() {
            return {
                dateData : []
            }
        },

        created: function() {
            this.retrieveDateData()
        },
        
        methods: {
            async retrieveDateData() {
                    this.dateData = await getTodayDate()
            }
        }
        
    }
</script>

<template>
    <div class="today-date" v-if="$data.dateData.hasOwnProperty(0)" >
        Today date : {{dateData[0].current_date}}
    </div>
</template>


<style scoped>
    .today-date {
        
            text-align: center;
        color: aliceblue;
        font-size: 1.5vw;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    
</style>