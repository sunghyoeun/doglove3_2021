<template>
  <div>
    <section class="hero is-success" style="text-align: center;">
      <div class="hero-body">
        <p class="title"><i class="fas fa-music" ></i> S O N G <i class="fas fa-music" ></i></p>
        <p class="subtitle">캠핑할 때 듣기 좋은 노래</p>
      </div>
    </section>
    <hr />
    <section class="columns">
      <div style="width: 5%;"></div>
      <div class="column">
        <article class="message">
          <div class="message-header">음악 추천 List</div>
          <div class="message-body">
            <table class="table">
              <thead style="text-align: center;">
                <th>No</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
              </thead>
              <tbody>
                <template v-for="pos in tableTitleBreeds.length">
                  <tr :key="pos">
                    <td>{{pos}}</td>
                    <td><button :class="`button ${colors[(pos - 1) % colorSize]} is-light`">{{ tableTitleBreeds[pos - 1] }}</button></td>
                    <td>{{ tableSingerBreeds[pos - 1] }}</td>
                    <td>{{ tableAlbumBreeds[pos - 1] }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </article>
        <div class="content">
          <p class="tag is-danger">출처</p>
          <a href="https://www.genie.co.kr/">지니뮤직</a><br />
        </div>
      </div>
      <div class="column">
        <article class="message">
            <div class="message-header">캠핑장 음악 선호도</div>
            <div class="message-body">
                <div id="pieChart" style="width:100%;height:400px"></div>
                <div class="content">
                    <p class="tag is-danger">출처</p>
                    <a href="http://naver.com">네이버</a>
                </div>
            </div>
        </article>
    </div>
      <div style="width: 5%;"></div>
    </section>
  </div>
</template>
<script>
  import axios from 'axios';
  import toastuiChart from '~/plugins/toastuiChart';
  let showChart = false;
  
  const dogStartYear = {
		categories: ['선호 장르'],
		series: [
			{
				name: '가요',
				data: 14,
			},
			{
				name: '발라드',
				data: 26,
			},
			{
				name: '댄스',
				data: 30,
			},
			{
				name: 'R&B/소울',
				data: 13,
			},
			{
				name: '락/메탈',
				data: 12,
      },
			{
				name: 'POP',
				data: 20,
			},
      {
				name: '랩/힙합',
				data: 17,
			},
      {
				name: '일렉트로니카',
				data: 4,
			},
      {
				name: '인디',
				data: 19,
			},
      {
				name: '블루스/포크',
				data: 2,
			},
      {
				name: '트롯',
				data: 4,
			},
      {
				name: 'OST',
				data: 3,
			},
      {
				name: 'JPOP',
				data: 2,
			},
      {
				name: '재즈',
				data: 1,
			},
      {
				name: '클래식',
				data: 10,
			},
      {
				name: '뉴에이지',
				data: 5,
			},
      {
				name: '월드뮤직',
				data: 23,
			},
		],
	};
  export default {
    data() {
      const colors = [
        'is-white',
        'is-primary',
        'is-link',
        'is-info',
        'is-success',
        'is-warning',
        'is-danger',
      ];
      return {
        colors: colors,
        colorSize: colors.length,
        chartHeight: 400
      };
    },
    mounted() {
			if (!showChart && process.client) {
				if (!toastuiChart('pie', 'pieChart', dogStartYear)) return;
				showChart = true;
			}
		},
		destroyed() {
			showChart = false;
		},
    async asyncData() {
    const music = await axios.get('https://raw.githubusercontent.com/sunghyoeun/doglove3_2021/master/static/music.json');

      return {
        tableTitleBreeds: music.data.title,
        tableSingerBreeds: music.data.singer,
        tableAlbumBreeds: music.data.album,

      };
    },
  };
</script>
