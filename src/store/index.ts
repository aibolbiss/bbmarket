import { defineStore } from 'pinia';

export const useMarketStore = defineStore('marketStore', {
	state: () => ({
		inputValue: '',
		market: [],
	}),
	getters:{
		favoriteFilter(){
			let favorite: any = this.market.filter((item: any) => item.isFavorite)
			return favorite.filter((item: any) => item.description.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1)
		},
		dealFilter(){
			let deal: any = this.market.filter((item: any) => item.isDeals)
			return deal.filter((item: any) => item.description.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1)
		},
		searchFilter(): any{
			return this.market.filter((item: any) => item.description.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1)
		}
	},
	actions:{
		async getAllProducts(){
			let serverURL = 'https://bb-market.herokuapp.com/api/stock'
			let response = await fetch(serverURL)
			let data = await response.json()
			this.market = data
		},
		isDeal(id: any){
			const idx = this.market.findIndex((el: any) => el.id === id);
			const market: any = this.market[idx]
			market.isDeals = true;
		},
		isFavorite(id: any){
			const idx = this.market.findIndex((el: any) => el.id === id);
			const market: any = this.market[idx]
			market.isFavorite = true;
		},
		deleteFavorite(id: any){
			const idx = this.market.findIndex((el: any) => el.id === id);
			const market: any = this.market[idx]
			market.isFavorite = false;
		},
		isPay(id: any){
			const idx = this.market.findIndex((el: any) => el.id === id);
			const market: any = this.market[idx]
			market.isPaid = true;
		},
	}
})