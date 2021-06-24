<template>
	<div>
		<section class="hero is-light">
			<div class="hero-body">
				<p class="title" style="text-align: center;"><i class="fas fa-star"></i> 이달의 추천 캠핑장<i class="fas fa-star"></i> </p>
				<p class="subtile" style="text-align: center;">
					외부 서비스인 Firebase가 함께 합니다.
				</p>
			</div>
		</section>
		<hr />
		<section class="box" style="text-align: center;">
			<form @submit.prevent="submitCampingName">
				<div class="field">
					<label class="label">추천하고 싶은 캠핑장</label>
					<div class="control">
						<input style="width: 6cm; height: 0.8;"  type="text" v-model="newcampingNames" />
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
						<input type="checkbox" v-model="campingSort" @change="sortCampingNames" /> 이달의 캠핑 <strong>정렬하기</strong>
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
						<template v-for="pos in campingNamesSort.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ campingNamesSort[pos - 1] }}</td>
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
	export default {
		data() {
			return {
				campingNames: [],
				campingNamesSort: [],
				campingSort: false,
				newcampingNames: '',
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
							this.campingNames = snapshot.val();
							this.sortCampingNames();
						}
					}
				});
			},
			onFbDbNames(refName) {
				fbDb.ref(refName).child('names').get().then((snapshot) => {
					if (snapshot.exists()) {
						if (refName === 'place') {
							this.campingNames = snapshot.val();
							this.sortCampingNames();
						}
					}
				});
			},
			sortCampingNames() {
				this.campingNamesSort = this.campingNames.slice(); // copy
				if (this.campingSort) this.campingNamesSort.sort();
			},
			submitCampingName() {
				let newcampingNames = this.campingNames.slice(); // copy
				newDogNames.push(this.newcampingNames);
				fbDb.ref('dogs').child('names').set(newcampingNames); // overwrite
				fbDb.ref('dogs').child('size').set(newcampingNames.length);
			},
		},
	};
</script>