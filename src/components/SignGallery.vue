<script>
    import SignPreview from './SignPreview.vue';
    import {getSignData}from '@/services/api/signRepository.js'
    import {getNASAPics} from '@/services/api/getNASAPics.js';

    export default {
        name: 'SignGallery',
        components: {
            SignPreview
		},
        computed: {
            signOrganizedData: function() {
                const filterFunc = (a) => a.sign_name.toLowerCase().includes(this.search.toLowerCase());
                let organizeddata = this.signData.filter(filterFunc);

                if(this.signSortType=="AZName") {
                    const comparator = (a, b) => (a.sign_name).localeCompare(b.sign_name) ;
                    return (organizeddata).sort(comparator);    
                }
                
                if(this.signSortType=="ZAName") {
                    const comparator = (a, b) => (a.sign_name).localeCompare(b.sign_name) ;
                    return (organizeddata).sort(comparator).reverse();    
                }

                if(this.signSortType=="Dates") {
                    return organizeddata
                }
                
                return organizeddata
        }
        },

        data() {
            return {
                signData : [],
                NASAPics : [],
                search: "",
                signSortType: "Dates"
            }
        },

        created: 
        function() {
            this.retrieveSignData();
            
            this.retrievesNASAPics();
        },
        
        methods: {
            cleanSearch: function() {
                this.search = ""
            },
            async retrieveSignData() {
                this.signData = await getSignData()
            },
            async retrievesNASAPics() {
                  try {
                        this.NASAPics = await getNASAPics();
                    } catch (error) {
                        console.error(error);
                        alert("Failed to retrieve NASA pics. Please try again later.");
                    }
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
            <option value="Dates">Date</option>
            <option value="AZName">Signs A-Z</option>
            <option value="ZAName">Signs Z-A</option>

        </select>
    </div>

    <div class="sign-gallery">
    <div v-for="sign in signOrganizedData" :key="sign.sign_name" class="gallery-preview">
      <SignPreview 
        :sign_logo="sign.sign_logo"
        :sign_name="sign.sign_name"
        :sign_img ="sign.sign_img"
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
        color:rgb(0, 0, 0);
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
        display: grid; 
        position: relative;
        grid-template-columns: 33% 33% 33%;   
        margin-left: auto;
        margin-right: auto;
    }

    .gallery-preview{
        transition: 0.5s linear;

    }

    .sign-gallery:hover > .gallery-preview:not(:hover) {
        filter:blur(3px);
        backdrop-filter: blur(3px);
        transition: 0.5s linear;
    }


</style>