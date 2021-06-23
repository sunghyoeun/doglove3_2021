<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title"><i class="fas fa-user-check"></i>캠핌 필수품</p>
                <p class="subtile">
                    캠핑시 필요한 물건
                </p>
            </div>
        </section>
        <hr />
        <section class="columns">
            <div style="width: 5%;"></div>
            <div class="column">
                <table class="table">
                    <thead>
                        <th>번호</th>
                        <th>Tent 필수품</th>
                        <th>중요도</th>
                    </thead>
                    <tbody>
                        <template v-for="pos in tableTentKeys.length">
                            <tr :key="pos">
                                <td>{{ pos }}</td>
                                <td>
                                    <button :class="`button ${colors[(pos - 1) % colorSize]} is-light`">
                                    {{ tableTentKeys[pos - 1] }}
                                    </button>
                                </td>
                                <td>
                                    <span class="tag is-black" v-if="((ar = tableTentBreeds[tableTentKeys[pos - 1]]), ar.length == 0)">없음</span>
                                    <span v-else>
                                        <template v-for="subbreed in ar">
                                            <span  class= "tag is-danger" :key="subbreed">{{subbreed}}</span>&nbsp;
                                        </template>
                                    </span>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
                <div class="content">
                    <p class="tag is-danger">출처</p>
                    <a href="https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=dox1120&logNo=221034044708">네이버 블로그</a><br />
                    <a class="button is-primary is-small" href="https://www.gocamping.or.kr/">go camping</a>
                </div>
            </div>
            <div class="column">
                <table class="table">
                    <thead>
                        <th>번호</th>
                        <th>Kitchen 필수품</th>
                        <th>중요도</th>
                    </thead>
                    <tbody>
                        <template v-for="pos in tableKitchenKeys.length">
                            <tr :key="pos">
                                <td>{{ pos }}</td>
                                <td>
                                    <button :class="`button ${colors[(pos - 1) % colorSize]} is-light`">
                                    {{ tableKitchenKeys[pos - 1]}}
                                    </button>
                                </td>
                                <td>
                                    <span class="tag is-black" v-if="((ar = tableKitchenBreeds[tableKitchenKeys[pos - 1]]), ar.length == 0)">없음</span>
                                    <span v-else>
                                        <template v-for="subbreed in ar">
                                            <span   class= "tag is-danger" :key="subbreed">{{subbreed}}</span>&nbsp;
                                        </template>
                                    </span>
                                </td>
                            </tr>
                        </template> 
                    </tbody>
                </table>
                <div class="content">
                    <p class="tag is-danger">출처</p>
                    <a href="https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=dox1120&logNo=221034044708">네이버 블로그</a><br />
                    <a class="button is-primary is-small" href="https://www.gocamping.or.kr/">go camping</a>
                </div>
            </div>
            <div class="column">
                <table class="table">
                    <thead>
                        <th>번호</th>
                        <th>있으면 좋은 물건</th>
                        <th>중요도</th>
                    </thead>
                    <tbody>
                        <template v-for="pos in tableUseKeys.length">
                            <tr :key="pos">
                                <td>{{ pos }}</td>
                                <td>
                                    <button :class="`button ${colors[(pos - 1) % colorSize]} is-light`">
                                    {{ tableUseKeys[pos - 1]}}
                                    </button>
                                </td>
                                <td>
                                    <span class="tag is-black" v-if="((ar = tableUseBreeds[tableUseKeys[pos - 1]]), ar.length == 0)">없음</span>
                                    <span v-else>
                                        <template v-for="subbreed in ar">
                                            <span  class= "tag is-danger" :key="subbreed">{{subbreed}}</span>&nbsp;
                                        </template>
                                    </span>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
                <div class="content">
                    <p class="tag is-danger">출처</p>
                    <a href="https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=dox1120&logNo=221034044708">네이버 블로그</a><br />
                    <a class="button is-primary is-small" href="https://www.gocamping.or.kr/">go camping</a>
                </div>
            </div>
            <div style="width: 5%;"></div>
        </section>
    </div>
 </template>
 <script>
    import axios from 'axios';
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
             dogNameField: 'dogName',
             colors: colors,
             colorSize: colors.length,
          };
       },
       async asyncData() {
          const Useful = await axios.get('https://raw.githubusercontent.com/sunghyoeun/doglove3_2021/master/static/warning.json');
          return {
             tableTentBreeds: Useful.data.tent,
             tableTentKeys: Object.keys(Useful.data.tent),
             tableKitchenBreeds: Useful.data.kitchen,
             tableKitchenKeys: Object.keys(Useful.data.kitchen),
             tableUseBreeds: Useful.data.useful,
             tableUseKeys: Object.keys(Useful.data.useful),
          };
       },
    };
 </script>