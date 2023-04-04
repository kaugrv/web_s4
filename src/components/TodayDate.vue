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
    <div class="today-date" v-if="$data.dateData.hasOwnProperty(0)" ><b>Today's date : </b>{{dateData[0].current_date}}</div>
</template>


<style scoped>
    .today-date {
        color: rgb(0, 0, 0);
        font-size: 1.5vw;
        font-family:'Futura Round Cond Light'
    }
    
</style>