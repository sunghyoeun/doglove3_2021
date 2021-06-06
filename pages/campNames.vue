<template>
    <div>
        <section class = "hero is-link">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-umbrella-beach"></i>바다 캠핑과    
                    <i class="fas fa-mountain"></i>산 캠핑
                </p>
                <p class ="subtitle">
                    어디로 캠핑을 가고 싶나요!
                </p>
            </div>
        </section>
        <section class = "columns">
            <div class="column">
               <table class = "table is-striped is-hoverable is-fullwidth">
                   <thead>
                       <tr>
                           <th>번호</th>
                           <th>바다 캠핑장</th>
                       </tr>
                   </thead>
                   <tbody>
                    <template v-for="pos in tablebeachcamp.length">
                        <tr :key="pos">
                            <td>{{ pos }}</td>
                            <td>{{ tablebeachcamp[pos - 1] }}</td>
                        </tr>
                    </template>
                        
                   </tbody>
               </table>
               <div class="content">
                   <span class="tag is-danger">출처</span> <a href="">naver 검색</a>
                </div>
                <div class="content">
                    <span class="tag is-warning">JSON</span>
                    <a href="/beachcamp.json">바다 캠핑장 JSON</a>
                </div>
            </div>
            <div class="column">
                <section class = "columns">
                    <div class="column">
                       <table class = "table is-striped is-hoverable is-fullwidth">
                           <thead>
                               <tr>
                                   <th>번호</th>
                                   <th>산 캠핑장</th>
                               </tr>
                           </thead>
                           <tbody>
                            <template v-for="pos in tablemountaincamp.length">
                                <tr :key="pos">
                                    <td>{{ pos }}</td>
                                    <td>{{ tablemountaincamp[pos - 1] }}</td>
                                </tr>
                            </template>
                           </tbody>
                       </table>
                       <div class="content">
                        <span class="tag is-danger">출처</span> <a href="">naver 검색</a>
                     </div>
                     <div class="content">
                         <span class="tag is-warning">JSON</span>
                         <a href="/mountaincamp.json">산 캠핑장을 위한 JSON</a>
                     </div>
                    </div>
                    <div class="column">
                       
                    </div>
                </section>
            </div>
        </section>        
    </div>
</template>

<script>
    import beachcamp from "~/static/beachcamp.json";
    import mountaincamp from "~/static/mountaincamp.json";
    export default {
        data() {
            return {
                tablebeachcamp: beachcamp.names,
                tablemountaincamp: mountaincamp.names
            };
        }
    };
</script>