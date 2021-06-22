<template>
    <div>
        <section class="hero is-success" style="text-align: center;">
            <div class="hero-body">
                <p class="title">
					<i class="fas fa-exclamation-triangle"></i>캠핑장 위험요소
				</p>
                <p class="subtile">
					안전사고 상황을 알려주는 통계를 시각적으로 보여줍니다.
				</p>
            </div>
        </section>
        <hr />
        <section class="columns">
			<div style="width: 5%;"></div>
            <div class="column">
                <article class="message">
                    <div class="message-header">연도별 안전사고</div>
                    <div class="message-body">
                        <div id="lineChart" :style="`width:100%;height:${chartHeight}px`"></div>
                        <div class="content">
                            <p class="tag is-danger">출처</p>
                            <a href="http://www.ciss.go.kr/www/selectBbsNttView.do?bbsNo=84&nttNo=34143&key=187">한국소비자원</a>
                        </div>
                    </div>
                </article>
            </div>
            <div class="column">
                <article class="message">
                    <div class="message-header">안전사고 종류</div>
                    <div class="message-body">
                        <div id="pieChart" style="width:100%;height:400px"></div>
                        <div class="content">
                            <p class="tag is-danger">출처</p>
                            <a href="http://www.ciss.go.kr/www/selectBbsNttView.do?bbsNo=84&nttNo=34143&key=187">한국소비자원</a>
                        </div>
                    </div>
                </article>
            </div>
			<div style="width: 5%;"></div>
        </section>
    </div>
</template>
<script>
	import toastuiChart from '~/plugins/toastuiChart';
	let showChart = false;
	const dogCaringMoney = {
		categories: [
			'2015년',
			'2016년',
			'2017년',
			'2018년',
			'2019년',
		], // y-axis
		series: [
			// x-axis
			{
				name: '건수(건)',
				data: [30, 43, 37, 34, 51],
			}
		],
	};
	const dogStartYear = {
		categories: ['안전사고'],
		series: [
			{
				name: '미끄러짐·넘어짐',
				data: 26,
			},
			{
				name: '부딪힘',
				data: 21,
			},
			{
				name: '추락',
				data: 19,
			},
			{
				name: '놀림·끼임',
				data: 7,
			},
			{
				name: '기타 물리적 충격',
				data: 6,
			},
			{
				name: '화재, 발연, 발화 관련',
				data: 18,
			},
            {
				name: '고온물질',
				data: 18,
			},
            {
				name: '가스 관련 및 기타',
				data: 5,
			},
            {
				name: '피부접촉에 의한 위험 및 위해',
				data: 4,
			},
		],
	};
	export default {
		data() {
			return { chartHeight: 400 };
		},
		mounted() {
			if (!showChart && process.client) {
				if (!toastuiChart('bar', 'lineChart', dogCaringMoney)) return;
				if (!toastuiChart('pie', 'pieChart', dogStartYear)) return;
				showChart = true;
			}
		},
		destroyed() {
			showChart = false;
		},
	};
</script>