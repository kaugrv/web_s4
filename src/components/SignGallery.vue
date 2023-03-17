<script>
    import SignPreview from './SignPreview.vue';
    import {getSignData}from '@/services/api/signRepository.js'


    export default {
        name: 'SignGallery',
        components: {
            SignPreview
        },

        data() {
            return {
                signData : []
            }
        },

        created: function() {
            this.retrieveSignData()
        },
        
        methods: {
            async retrieveSignData() {
                    this.signData = await getSignData()
            }
        }
        
    }

    </script>

<template>
    <div class="sign-gallery">
    <div v-for="i in 12" :key="i">
      <SignPreview v-if="$data.signData.hasOwnProperty(i-1)" 
        :sign_logo="signData[i-1].sign_logo"
        :sign_name="signData[i-1].sign_name"
        :date_range="signData[i-1].date_range"
        :mood="signData[i-1].mood"
        :description="signData[i-1].description"
        :color="signData[i-1].color"
        :lucky_number="signData[i-1].lucky_number"
        :lucky_time="signData[i-1].lucky_time"

      />


    </div>

    </div>
</template>


<style scoped>
    .sign-gallery {
    margin-top: 60px;
    border-width:2px;
    display: grid;

    justify-content: center;
    align-content: center;

    grid-template-columns: 300px 300px 300px 300px;
    }
</style>