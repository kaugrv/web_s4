<script>
    import SignPreview from './SignPreview.vue';
    import MySign from './MySign.vue';
    import {getSignData} from '@/services/api/signRepository.js'

    export default {
        name: 'SignGallery',
        components: {
            MySign,
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
                search: "",
                signSortType: "Dates"
            }
        },

        created: 
            function() {
                this.retrieveSignData();
            },
        
        methods: {
            cleanSearch: function() {
                this.search = ""
            },
            async retrieveSignData() {
                this.signData = await getSignData();
            },
            fillSearch: function(clickedSign){
                this.search = clickedSign;
            },
        }
    }

</script>

<template>
 

    <MySign :sign="signData"/>

    <h2 id="all-signs">All Signs</h2>
    <div class="gallery-options">
        <input type="text" v-model="search" placeholder="Search for a sign...">			
        <button @click="fillSearch('Aries')">♈</button>
        <button @click="fillSearch('Taurus')">♉</button>
        <button @click="fillSearch('Gemini')">♊</button>
        <button @click="fillSearch('Cancer')">♋</button>
        <button @click="fillSearch('Leo')">♌</button>
        <button @click="fillSearch('Virgo')">♍</button>
        <button @click="fillSearch('Libra')">♎</button>
        <button @click="fillSearch('Scorpio')">♏</button>
        <button @click="fillSearch('Sagittarius')">♐</button>
        <button @click="fillSearch('Capricorn')">♑</button>
        <button @click="fillSearch('Aquarius')">♒</button>
        <button @click="fillSearch('Pisces')">♓</button>
        <button  @click="cleanSearch"> X </button> 
        <br>
        <br> 
        <label for="sign-sort">Sort by : </label>
        <select v-model="signSortType" id="sign-sort">
            <option value="Dates">Date</option>
            <option value="AZName">Signs A-Z</option>
            <option value="ZAName">Signs Z-A</option>
        </select>
    </div>
          
    <br> 
    <br>
    
    <div class="sign-gallery">
    <div v-for="sign in signOrganizedData" :key="sign.sign_name"   >
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
        :sky_img_url="sign.sky_img_url"
      />
    </div>

    </div>
</template>


<style scoped>
    label {
      font-family:'Futura Round Cond Light';
    }

    input {
        padding: 12px;
        width: 30vw;
        border-radius: 5px;
        border: none;
        outline: none;
        font-family:'Futura Round Cond Light';
    }

    button {
        border-radius: 5px;
        padding: 12px;    
    }

    .sign-gallery {
        display: grid; 
        grid-template-columns: 32.8333vw 32.8333vw 32.8333vw;
    }

    h2 {
        font-family: 'Amatic SC', cursive;
    }
    .my-sign {
        width: 32.83333vw;
    }

</style>