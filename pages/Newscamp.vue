<template>
    <div>
        <section class = "hero is-light">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-umbrella-beach"></i>캠핑소서 
                </p>
                <p class ="subtitle">
                    캠핑 시 안전사고 통계
                </p>
            </div>
        </section>
        <section class = "columns">
            <div class="column">
                <table class = "table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>장소</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="pos in campplace.length">
                            <tr :key="pos">
                                <td>{{ pos }}</td>
                                <td>{{ campplace[pos - 1] }}</td>
                            </tr>
                        </template>
                    </tbody>
                </table>

            </div>
        </section>
    </div>
</template>

<script>
    import fbDb from '~/plugins/firebaseDb';
    export default {
        data() {
            return {campplace: []};
        },
        mounted() {
            //this.getFbDb('place');
            this.onFbDb('place');
        },
        methods: {
            onFbDb(refName, data) {
                fbDb.ref(refName).child('names').on('value',(snapshot)=> {
                    if(snapshot.exists()) {
                        this.campplace = snapshot.val();
                    }
                });
            }
        }
    };
</script>