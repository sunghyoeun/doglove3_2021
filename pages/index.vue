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
    <figure class="image is-3by1"><img src="~assets/camping.png" alt=""></figure>
    <div class = "columns">
      <div class="column">
        
        <article class="message">
          <div class="message-header">
            <p>캠핑의 의미</p>
          </div>
          <div class="message-body">
            보통 캠프라고 약칭하며, 야영(野營)이라고도 한다. 
            텐트 혹은 간단한 임시 건물 등에서 야외의 일시적인 생활을 하는 일로 고정적인 방갈로(bungalow)나 오두막집(Hutte) 등을 이용하는 것,
            또 등산의 경우에 간단한 첼트자크(Zeltsack) 등에서 비바크(Biwak)하는 것, 적설기에 설동(雪洞)이나 이글루(igloo)를 이용하는 것, 
            숙박 설비를 아무것도 갖지 않는 야영 등도 넓은 의미로는 포함하고 있다. 
            제2차 세계대전 후에 자전거나 자동차에 텐트를 싣고 캠프장을 순회하는 오토 캠프(auto camp)도 유럽과 미국 등 여러 나라에서 성행하고 있다. 
            캠프의 본래의 의미는 '동지와 협동 생활을 하는 것'으로, 야외의 자연 속에서 서로의 인격에 접촉할 수 있는 소박한 협동 생활을 영위함으로써 바람직한 인간 관계를 갖고, 
            또 등산•수영•낚시 그 밖의 야외 활동을 통하여 자연으로부터 배움과 동시에 몸을 단련하는 것에 의의를 찾을 수 있다. 
            근대 산업의 발달과 함께 도시 생활이 기계화되고 사람들이 여가 활동을 야외에서 구하는 경향으로 인하여 급속히 성행하게 되었다. 
            캠핑은 크게 나누면 조직적인 캠핑과 개인적•가족적 캠핑으로 분류된다.
            <br/><br/><strong>캠핑의 추가적인 보충 설명 및 유례</strong><br/><br/>
            야영 또는 노영이라고도 한다. 캠핑의 본래 의미는 '동지끼리 협동생활을 한다'는 것으로, 
            자연 속에서 서로의 인격에 접촉하는 소박한 협동생활을 함으로써 우호적인 인간관계를 맺고, 
            또 등산 ·수영 ·낚시 기타 야외 활동을 통해 자연에서 배울 뿐만 아니라 신체를 단련하는 것에 의의를 찾을 수 있다.
            캠핑에 교육적 의의를 부여하고, 일정한 프로그램 아래 집단생활을 실시하게 된 것은 19세기 후반이고, 
            미국에서는 남북전쟁 무렵 워싱턴의 거너리교(校)의 교장이었던 FW건에 의해 교육 캠핑이 최초로 시작되었다고 한다. 
          </div>
        </article>
      </div>
      <div class="column">
        <article class ="message">
          <div class="message-header">
            <p>캠핑의 종류 </p>
          </div>
          <table class = "table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>캠핑</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr class = "is-selected">
                <td>오토캠핑</td>
                <td>자동차(Auto)와 야영(Camping)의 합성어로, 원래는 미국에서는 캠핑 전용차량을 이용해 야영하는 것을 뜻한다.<br />하지만 우리나라에서는 레저용 차량이나 자동차에 텐트를 싣고 지정된 장소에 가서 야영하는 형태로 발전</td>
              </tr>
              <tr>
                <td>백패킹</td>
                <td>‘짊어지고 나른다(Backpacking)’라는 뜻으로 1박 이상의 야영 생활에 필요한 장비를 갖추고 자연을 벗 삼아 자유롭게 다니는 여행</td>
              </tr>
              <tr>
                <td>오지캠핑</td>
                <td>해안이나 도시에서 멀리 떨어진 대륙 내부의 땅에서 캠핑을 즐기는 것</td>
              </tr>
              <tr>
                <td>원정캠핑</td>
                <td>캠핑장 여러 곳을 돌아다니며 하는 캠핑</td>
              </tr>
              <tr>
                <td>비박캠핑</td>
                <td>주로 등산 도중 텐트를 치지 않고 간단하게 비를 피할 수 있는 곳으로 들어가 하룻밤을 보내는 것을 의미</td>
              </tr>
              <tr>
                <td>글램핑</td>
                <td>글래머(glamour)와 캠핑(camping)의 합성어로 일반적인 캠핑과는 다르게 시설이 갖추어져 있어 편리하게 이용할 수 있는 사전 준비된 캠핑을 의미</td>
              </tr>
              <tr>
                <td>도시캠핑</td>
                <td>도시에서 즐기는 캠핑</td>
              </tr>
              <tr>
                <td>옥상캠핑</td>
                <td>옥상에서 즐기는 캠핑</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>
  </div>
</template>