<script>
  import SignPreview from './SignPreview.vue';

  export default {
    name: 'MySign',
    components: {
      SignPreview,
    },
    props:['sign'],
    data() {
      return {
        birthdate : "2001-01-01",
        my_sign: this.getSign()
      }
    },
    watch: {
    birthdate() {
      this.my_sign = this.getSign();
    },
  },

    methods:{      
        getSign() {
            const date = new Date(this.birthdate);

            // Extract the month and day from the Date object
            const month = date.getMonth() + 1;
            const day = date.getDate();

            // Determine the zodiac sign based on the month and day
            let zodiac_sign = "";
            if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
                zodiac_sign = "Aries";
            } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
                zodiac_sign = "Taurus";
            } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
                zodiac_sign = "Gemini";
            } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
                zodiac_sign = "Cancer";
            } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
                zodiac_sign = "Leo";
            } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
                zodiac_sign = "Virgo";
            } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
                zodiac_sign = "Libra";
            } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
                zodiac_sign = "Scorpio";
            } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
                zodiac_sign = "Sagittarius";
            } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
                zodiac_sign = "Capricorn";
            } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
                zodiac_sign = "Aquarius";
            } else {
                zodiac_sign = "Pisces";
            }

                const my_sign = this.sign.find((s) => s.sign_name === zodiac_sign);
                return my_sign || null; // return null if sign is not found
            }

        },
        getMySign() {
            this.my_sign = this.getSign();
    }
    
  };

</script>

<template>    
    <h2 id="my-sign">My Sign</h2> 
    <label for="birth-date"> Your birthdate : </label>
    <input type="date" id="birth-date" name="birth-date" v-model="birthdate">
  
    <div>
      <SignPreview
        class="my-sign"
        :sign_logo="my_sign.sign_logo"
        :sign_name="my_sign.sign_name"
        :sign_img="my_sign.sign_img"
        :mood="my_sign.mood"
        :description="my_sign.description"
        :color="my_sign.color"
        :lucky_number="my_sign.lucky_number"
        :lucky_time="my_sign.lucky_time"
        :sky_img_url="my_sign.sky_img_url"
      />
    </div>
  </template>

<style scoped>
    h2 {
        font-family: 'Amatic SC', cursive;
    }
</style>