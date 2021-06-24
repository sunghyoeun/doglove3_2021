<template>
    <div>
        <section class = "hero is-link" style="text-align: center;">
            <div class="hero-body">
                <p class="title"><i class="fas fa-first-aid"></i> 응급처치 방법</p>
                <p class ="subtitle">캠핑 시 일어날 수 있는 안전사고 응급처치 방법</p>
            </div>
        </section>
        <hr/>
        <section class = "columns" >
            <div style="width: 15%;"></div>
            <div class="column" >
                <article class="message" style="text-align: center;">
                    <div class="message-header">자세한 내용을 보려면 안전사고의 이름을 클릭하세요.</div>
                    <div class="message-body">
                        <table class = "table is-striped is-hoverable is-fullwidth">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="pos in content.length">
                                    <tr :key="pos">
                                        <td style="width: 7cm;"><img v-bind:src = photo[pos-1]></td>
                                        <td><a v-bind:href = 'link[pos -1]'>{{content[pos-1]}}</a></td>
                                    </tr>
                                </template>
                               </tbody>
                        </table>
                    </div>
                </article>
                
                <div class="content">
                   <span class="tag is-danger">출처</span> <a href="https://www.gocamping.or.kr/">한국관광공사 고캠핑</a>
                </div>
                <div class="content">
                    <span class="tag is-warning">JSON</span>
                    <a href="/photo.json">Photo</a>
                </div>
            </div>
            <div style="width: 15%;"></div>
        </section>

    </div>
</template>
<script>
    import photojson from "~/static/photo.json";
    export default {
        data() {
			return {
                photo: photojson.images,
                content: photojson.names,
                link: photojson.link
			};
        }
    };
</script>