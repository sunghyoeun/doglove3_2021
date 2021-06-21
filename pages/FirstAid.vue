<template>
    <div>
        <section class = "hero is-link">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-first-aid"></i>응급처치 방법
                </p>
                <p class ="subtitle">
                    캠핑 시 일어날 수 있는 안전사고 응급처치 방법
                </p>
            </div>
        </section>
        <section class = "columns">
            <div class="column">
                <table class = "table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>사진</th>
                            <th>내용</th>
                        </tr>
                    </thead>
                    <tbody>
                     <template v-for="pos in content.length">
                         <tr :key="pos">
                             <td>{{pos}}</td>
                            <td><img src= "photo[pos - 1]" ></td>
                             <td>{{content[pos - 1]}}</td>
                         </tr>
                     </template>
                    </tbody>
                </table>
               <div class="content">
                   <span class="tag is-danger">출처</span> <a href="http://naver.com">naver 검색</a>
                </div>
                <div class="content">
                    <span class="tag is-warning">JSON</span>
                    <a href="/beachcamp.json">바다 캠핑장 JSON</a>
                </div>
            </div>
        </section>        
    </div>
</template>
<script>
    import photojson from "~/static/photo.json";
    import contentjson from "~/static/content.json";
    export default {
        data() {
            return {
                photo: photojson.images,
                content: contentjson.names
            };
        }
    };
</script>