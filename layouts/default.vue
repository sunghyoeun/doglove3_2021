<template>
  <div>
    <nav class="breadcrumb">
      <ul>
        <li></li>
        <li><nuxt-link to="/"><i class="fas fa-home"></i>&nbsp;홈</nuxt-link></li>
        <li><nuxt-link to="/Recocamp"><i class="fas fa-exclamation"></i>&nbsp;이달의 캠핑장(Firebase)</nuxt-link></li>
        <li><nuxt-link to="/Music"><i class ="fas fa-music"></i>&nbsp;Music</nuxt-link></li>
        <li><nuxt-link to="/UsefulCamp"><i class="far fa-smile"></i>&nbsp;필수품 추천</nuxt-link></li>
        <li><nuxt-link to="/Warningcamp"><i class ="fas fa-exclamation-triangle"></i>&nbsp;위험사항</nuxt-link></li>
        <li><nuxt-link to="/FirstAid"><i class ="fas fa-first-aid"></i>&nbsp;응급처치</nuxt-link></li>
      </ul>
    </nav>
    <nuxt/> 
    <footer class="footer">
      <div class="content has-text-centered">
        <i class="fas fa-copyright"></i>2020-2021, 모든 저작권은 <strong>성효은</strong>에게 있습니다.
      </div>
    </footer>
  </div>
  </template>

