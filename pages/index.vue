<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          <i class="fas fa-caravan"></i> 캠핑장 찾기
        </p>
        <p class="subtitle">
          나만의 캠핑장 정보를 볼 수 있는 사이트
        </p>
      </div>
    </section>
    <div class = "columns">
      <div class="column">
        <article class="message">
          <div class="message-header">
            <p>캠핑의 의미</p>
          </div>
          <div class="message-body">
            <figure class="image is-128x128">
              <img src="~assets/fire.png" alt="">
            </figure>
            보통 캠프라고 약칭하며, 야영(野營)이라고도 한다. 
            텐트 혹은 간단한 임시 건물 등에서 야외의 일시적인 생활을 하는 일로 고정적인 방갈로(bungalow)나 오두막집(Hutte) 등을 이용하는 것, 
            또 등산의 경우에 간단한 첼트자크(Zeltsack) 등에서 비바크(Biwak)하는 것, 
            적설기에 설동(雪洞)이나 이글루(igloo)를 이용하는 것, 
            숙박 설비를 아무것도 갖지 않는 야영 등도 넓은 의미로는 포함하고 있다
          </div>
        </article>
        <article class = "notification">
          <div class="message-header">
            <p>등산을 동반하는 캠핑 필수품</p>
          </div>
          <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr >
                <th>기본물품</th>
                <th>구급약</th>
                <th>구난용품</th>
                <th>식량</th>
                <th>식수</th>
                <th>옷</th>
                <th>편의물품</th>
                <th>해충구제</th>
              </tr>
            </thead>
            <tbody>
              <tr class = "is-selected">
                <td>배낭</td>
                <td>반창고</td>
                <td>나침반</td>
                <td>비상식량</td>
                <td>생수</td>
                <td>고글</td>
                <td>물티슈</td>
                <td>모기장</td>
              </tr>
              <tr>
                <td>수건</td>
                <td>붕대</td>
                <td>라디오</td>
                <td>전투식량</td>
                <td>정수제</td>
                <td>등산화</td>
                <td>숟가락</td>
                <td>살충제</td>
              </tr>
              <tr>
                <td>수통</td>
                <td>소독약</td>
                <td>로프</td>
                <td>통조림</td>
                <td>차</td>
                <td>깔깔이</td>
                <td>야전샵</td>
                <td>해충기피제</td>
              </tr>
              <tr>
                <td>지팡이</td>
                <td>소화제</td>
                <td>멀티툴 <small>(맥가이버 칼)</small></td>
                <td></td>
                <td>필터</td>
                <td>모자</td>
                <td>자외선 차단제</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
      <div class="column">
        <article class="message">
          <div class="message-header">
            <p>캠핑의 종류 </p>
          </div>
          <div class="message-body">
            <figure class="image is-128x128">
              <img src="~assets/tree.png" alt="" />
            </figure>
            오토캠핑, 백패킹, 오지 캠핑,가족캠핑,솔로캠핑,팀캠핑,미니멀 캠핑,감성 캠핑,원정 캠핑,비박,글램핑,도시 캠핑,옥상 캠핑
          </div>
        </article>
        <article class ="notification">
          <div class="message-header">
            <p>캠핑에 필요없는 물품</p>
          </div>
          <table class = "table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>물품 이름</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr class = "is-selected">
                <td>마체테</td>
                <td>마체테를 이용해 가지를 치거나 호신용으로 써야 하는 곳은 애초에 입산금지 지역이다.</td>
              </tr>
              <tr>
                <td>무전기</td>
                <td>스마트폰이 더 편하고 잘 터지며 기능도 더 많다. </td>
              </tr>
              <tr>
                <td>세탁비누</td>
                <td>캠핑장에서의 세탁은 번거로운 것은 물론, 경우에 따라서는 환경을 오염시킬 수 있다. </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>
  </div>
</template>