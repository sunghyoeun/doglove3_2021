<template>
	<div>
		<section class="hero is-light">
			<div class="hero-body">
				<p class="title" style="text-align: center;"><i class="fas fa-dog"></i> 이달의 추천 캠핑장</p>
				<p class="subtile" style="text-align: center;">
					외부 서비스인 Firebase가 함께 합니다.
				</p>
			</div>
		</section>
		<hr />
		<section class="box" style="text-align: center;">
			<form @submit.prevent="submitDogName">
				<div class="field">
					<label class="label">추천하고 싶은 캠핑장</label>
					<div class="control">
						<input style="width: 6cm; height: 0.8;"  type="text" v-model="newDogName" />
						<button class="button is-link" type="submit" >추천</button>
					</div>
					<p class="help is-success">
						캠핑장  Firebase에 소개할 이름을 입력하세요.
					</p>
				</div>
			</form>
		</section>
		<section class="columns" >
			<div style="width: 10%;"></div>
			<div class="column" style="text-align: center;">
				<div class="field">
					<label class="checkbox">
						<input type="checkbox" v-model="dogSort" @change="sortDogNames" /> 이달의 캠핑 <strong>정렬하기</strong>
					</label>
				</div>
				<table class="table is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>번호</th>
							<th>장소</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="pos in dogNamesSort.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ dogNamesSort[pos - 1] }}</td>
							</tr>
						</template>
					</tbody>
				</table>				
				<section class="notification is-info is-light">
					<p class="tag is-danger">출처</p>
                    <a href="https://www.gocamping.or.kr/">한국관광공사 고캠핑</a>
				</section>
			</div>
			<div style="width: 10%;"></div>
		</section>        
	</div>
</template>
<script>
	import fbDb from '~/plugins/firebaseDb';
    import beachcamp from "~/static/beachcamp.json";
    import mountaincamp from "~/static/mountaincamp.json";
	export default {
		data() {
			return {
				dogNames: [],
				dogNamesSort: [],
				dogSort: false,
				newDogName: '',
                tablebeachcamp: beachcamp.names,
                tablemountaincamp: mountaincamp.names
			};
		},
		mounted() {
			// this.getFbDbNames('place');
			this.onFbDbNames('place');
		},
		methods: {
			getFbDbNames(refName) {
				fbDb.ref(refName).child('names').get().then((snapshot) => {
					if (snapshot.exists()) {
						if (refName === 'place') {
							this.dogNames = snapshot.val();
							this.sortDogNames();
						}
					}
				});
			},
			onFbDbNames(refName) {
				fbDb.ref(refName).child('names').get().then((snapshot) => {
					if (snapshot.exists()) {
						if (refName === 'place') {
							this.dogNames = snapshot.val();
							this.sortDogNames();
						}
					}
				});
			},
			sortDogNames() {
				this.dogNamesSort = this.dogNames.slice(); // copy
				if (this.dogSort) this.dogNamesSort.sort();
			},
			submitDogName() {
				let newDogNames = this.dogNames.slice(); // copy
				newDogNames.push(this.newDogName);
				fbDb.ref('dogs').child('names')	.set(newDogNames); // overwrite
				fbDb.ref('dogs').child('size').set(newDogNames.length);
			},
		},
	};
</script>