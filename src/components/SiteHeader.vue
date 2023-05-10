<script>
import { getTodayDate } from "@/services/api/getTodayDate.js";

export default {
  name: "SiteHeader",

  props: {
    site_title: String,
  },

  data() {
    return {
      dateData: [],
    };
  },

  created: function () {
    this.retrieveDateData();
  },

  methods: {
    async retrieveDateData() {
      this.dateData = await getTodayDate();
    },
  },
};
</script>

<template>
  <div class="site-header">
    <span class="title">
      ° .･｡ <img src="../assets/logo.png" class="logo" /> {{ site_title }} ˖°
      ･｡ﾟ
    </span>
    <br /><br />
    <div class="site-header">
      <span class="today-date" v-if="$data.dateData.hasOwnProperty(0)">
        <a href="#my-sign">･｡ﾟ My Sign</a> |
        <a href="#all-signs">.･｡ All Signs</a> | <b>Today's date : </b
        >{{ dateData }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.site-header {
  backdrop-filter: blur(2px);
  border-radius: 30px;
  background-color: #e3ddbe00;
  padding: 1%;
  box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.title {
  color: rgb(0, 0, 0);
  font-size: 5em;
  font-family: "Amatic SC", cursive;
}

.logo {
  height: 1.2em;
  vertical-align: middle;
}

.today-date {
  color: rgb(0, 0, 0);
  font-size: 1.2em;
  font-family: "Futura Round Cond Light";
}

@media (max-width: 750px) {
  .title {
    font-size: 2.2em;
  }
}
</style>
