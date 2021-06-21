<template>
  <div>
    <nav class="breadcrumb">
      <ul>
        <li><nuxt-link to="/"><i class="fas fa-home"></i>&nbsp;홈으로</nuxt-link></li>
        <li><nuxt-link to="/Warningcamp"><i class ="fas fa-utensils"></i>&nbsp;갬핑장 위험사항</nuxt-link></li>
        <li><nuxt-link to="/FirstAid"><i class ="fas fa-first-aid"></i>&nbsp;응급처치</nuxt-link></li>
        <li><nuxt-link to="/Recocamp"><i class ="fas fa-file-signature"></i>&nbsp;이달의 추천 캠핑장</nuxt-link></li>
        <li><nuxt-link to="/Newscamp"><i class ="fas fa-chart-bar"></i>&nbsp;캠핑소식(Firebase)</nuxt-link></li>
        <li><nuxt-link to="/UsefulCamp"><i class ="fas fa-chart-bar"></i>&nbsp;캠핑필수품</nuxt-link></li>
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

