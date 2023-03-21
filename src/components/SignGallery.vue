<script>
    import SignPreview from './SignPreview.vue';
    import {getSignData}from '@/services/api/signRepository.js'

    export default {
        name: 'SignGallery',
        components: {
            SignPreview
        
		},
        computed: {
            signOrganizedData: function() {
                let organizeddata = this.signData
                if(this.signSortType=="AZName") {
                    const comparator = (a, b) => (a.sign_name).localeCompare(b.sign_name) ;
                    return (organizeddata).sort(comparator);    
                }
                if(this.signSortType=="ZAName") {
                    const comparator = (a, b) => (a.sign_name).localeCompare(b.sign_name) ;
                    return (organizeddata).sort(comparator).reverse();    
                }
                return organizeddata
        }
        },

        data() {
            return {
                signData : [],
                search: "",
                signSortType: "AZName"
            }
        },

        created: function() {
            this.retrieveSignData()
        },
        
        methods: {
            cleanSearch: function() {
                this.search = ""
            },
            async retrieveSignData() {
                this.signData = await getSignData()
            }
        }
    }

</script>

<template>
    <br>
    <div class="gallery-options">
        <input type="text" v-model="search" placeholder="What is your sign?">			
        <button  @click="cleanSearch"> X </button>
        <br><br>
        <label for="sign-sort">Sort by : </label>
        <select v-model="signSortType" id="sign-sort">
            <option value="AZName">Signs A-Z</option>
            <option value="ZAName">Signs Z-A</option>
        </select>
    </div>

    <div class="sign-gallery">
    <div v-for="sign in signOrganizedData" :key="sign.sign_name">
      <SignPreview  
        :sign_logo="sign.sign_logo"
        :sign_name="sign.sign_name"
        :date_range="sign.date_range"
        :mood="sign.mood"
        :description="sign.description"
        :color="sign.color"
        :lucky_number="sign.lucky_number"
        :lucky_time="sign.lucky_time"
      />
    </div>

    </div>
</template>


<style scoped>
    label{
        color:rgb(255, 255, 255);
    }

    input {
        color: inherit;
        padding: 12px;
        width: 30vw;
        border-radius: 5px;
        border: none;
        outline: none;

    }

    button {
        border-radius: 5px;
        padding: 12px;    
}
    .sign-gallery {
        margin-top: 60px;
        border-width:2px;
        display: grid;

        justify-content: center;
        align-content: center;

        grid-template-columns: 380px 380px 380px 380px;
    }
</style>