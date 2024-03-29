<script>
import SignPreview from "./SignPreview.vue";
import MySign from "./MySign.vue";
import { getSignData } from "@/services/api/signRepository.js";

export default {
  name: "SignGallery",
  components: {
    MySign,
    SignPreview,
  },

  computed: {
    signOrganizedData: function () {
      const filterFunc = (a) =>
        a.sign_name.toLowerCase().includes(this.search.toLowerCase());
      let organizeddata = this.signData.filter(filterFunc);

      if (this.signSortType == "AZName") {
        const comparator = (a, b) => a.sign_name.localeCompare(b.sign_name);
        return organizeddata.sort(comparator);
      }

      if (this.signSortType == "ZAName") {
        const comparator = (a, b) => a.sign_name.localeCompare(b.sign_name);
        return organizeddata.sort(comparator).reverse();
      }

      if (this.signSortType == "Dates") {
        return organizeddata;
      }

      return organizeddata;
    },
  },

  data() {
    return {
      signData: [],
      search: "",
      signSortType: "Dates",
    };
  },

  created: function () {
    this.retrieveSignData();
  },

  methods: {
    cleanSearch: function () {
      this.search = "";
    },
    async retrieveSignData() {
      this.signData = await getSignData();
    },
    fillSearch: function (clickedSign) {
      this.search = clickedSign;
    },
  },
};
</script>

<template>
  <MySign :sign="signData" />

  <h2 id="all-signs">ﾟ.*･｡ﾟ All Signs ﾟ.*･｡ﾟ</h2>

  <div class="gallery-options">
    <div class="search-div">
      <input type="text" v-model="search" placeholder="Search for a sign... " />
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
      <a href="#all-signs"><button @click="cleanSearch">X</button></a>
    </div>

    <br />

    <label for="sign-sort">Sort by : </label>
    <select v-model="signSortType" id="sign-sort">
      <option value="Dates">Date</option>
      <option value="AZName">Signs A-Z</option>
      <option value="ZAName">Signs Z-A</option>
    </select>
  </div>

  <br />

  <div class="sign-gallery">
    <div v-for="sign in signOrganizedData" :key="sign.sign_name">
      <SignPreview
        :sign_logo="sign.sign_logo"
        :sign_name="sign.sign_name"
        :sign_img="sign.sign_img"
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
select {
  font-family: "Futura Round";
  border: 0;
  background-color: #efefef;
}

input {
  padding: 12px;
  width: 30vw;
  border-radius: 5px;
  border: none;
  outline: none;
}

button {
  border-radius: 5px;
  padding: 12px;
  margin: 0.5%;
  border: #e3ddbe;
  background-color: #e3ddbe;
  cursor: pointer;
}

button:hover {
  border: #2f2d23;
  background-color: #fffade;
}

button:active {
  background-color: #fefefc;
}

.gallery-options {
  padding: 1%;
  backdrop-filter: blur(2px);
  border-radius: 30px;
  background-color: #e3ddbe36;
  box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.1);
}

.sign-gallery {
  display: grid;
  grid-template-columns: 32.8333vw 32.8333vw 32.8333vw;
}

h2 {
  text-align: center;
  font-family: "Amatic SC", cursive;
  font-size: 3.3em;
}

.my-sign {
  width: 32.83333vw;
}

@media (max-width: 700px) {
  .sign-gallery {
    display: flex;
    flex-direction: column;
  }

  .my-sign {
    width: 300px;
  }

  h2 {
    font-size: 2em;
  }
}
</style>
