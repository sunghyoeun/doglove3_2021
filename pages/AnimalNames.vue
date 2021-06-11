<template>
    <div>
        <section class = "hero is-warning">
            <div class="hero-body">
                <p class = "title">
                    <i class = "fas fa-exclamation-triangle"></i>캠핑장 위험 요소
                </p>
                <p class="subtitle">
                    캠핑장에 나타날 수 있는 위험 요소
                </p>
            </div>
        </section>
        <hr/>
        <section class = "columns">
            <div class="column">
                <table class = "table">
                    <thead><div class="message-header"><p>동물</p></div>
                        <tr>
                            <th>번호</th>
                            <th>동물</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for=" pos in tableDogBreeds.length">
                            <tr :key="pos">
                                <td>{{pos}}</td>
                                <td>{{tableDogBreeds [pos - 1]}}</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
                <div class="content">
                    <p class = "tag is-danger">출처</p>
                    <a href="https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a">github</a><br>
                    <a class = "button is-primary is-small" href="https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json">animals json</a>
                    
                </div>
            </div>
        </section>

    </div>
</template>
<script>
	import axios from 'axios';
	export default {
		async asyncData() {
			const AnimalNames = await axios.get('https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json');
            //alert(Object.keys(AnimalNames));
            return {
                tableDogBreeds: AnimalNames.data,
            };
		}
	};
</script>