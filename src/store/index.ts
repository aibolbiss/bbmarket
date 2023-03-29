import { defineStore } from 'pinia';

export const useMarketStore = defineStore('marketStore', {
	state: () => ({
		inputValue: '',
		stock: [
			{id:1, url: 'https://api.bb.market/bb_storage/files/download/156d7a4c18af4622a9ed4335210836ab/file.jpg', type: 'Аукцион', title: 'Гранулятор GRP', city: 'Санкт-Петербург, Красное Село', salesman: 'ООО «ФОРСС»', typeGoods: 'Оборудование', description: 'Пресс-грануляторы серии GRP разработаны с учетом многолетнего международного опыта в области гранулирования, имеют простую конструктивную схему, обеспечивающую высокую надежность агрегата, простое обслуживание, недорогие расходные материалы, хорошую ремонтопригодность.', price: '9 880 000', quantity: 2, costPerPiece: '4 940 000', isDeals: false, isFavorite: false, isPaid: false},
			{id:2, url: 'https://api.bb.market/bb_storage/files/download/05a8d886690549b6854060bc5a70f884/file.jpg', type: 'Разовая продажа', title: 'Ленточная пилорама «Тайга Т-1М»', city: 'Санкт-Петербург, Красное Село', salesman: 'ГК Тайга', typeGoods: 'Оборудование', description: 'Экономичная пилорама «Тайга Т-1М» с электроприводом и электрическим подъемом пильной каретки, предназначена для распиловки круглого леса диаметром до 65 см, на доски, брус и многого другого.', price: '645 000', quantity: 3, costPerPiece: '215 000', isDeals: false, isFavorite: false, isPaid: false},
			{id:3, url: 'https://api.bb.market/bb_storage/files/download/75ec3498657c460d823ec98665d40cb3/file.png', type: 'Аукцион', title: 'Ленточная пилорама «Тайга Т2»', city: 'Санкт-Петербург, Красное Село', salesman: 'ГК Тайга', typeGoods: 'Оборудование', description: '«Тайга Т2» — пилорама с электроприводом и электромеханическим механическим подъемом пильной каретки, предназначена для распиловки круглого леса диаметром до 90 см, на доски, брус и многое другое.', price: '675 000', quantity: 3, costPerPiece: '225 000', isDeals: false, isFavorite: false, isPaid: false},
			{id:4, url: 'https://api.bb.market/bb_storage/files/download/9cc193dd8a24410c89c0f302f323a394/file.jpg', type: 'Разовая продажа', title: 'Ленточная пилорама «Тайга Т-2М»', city: 'Санкт-Петербург, Красное Село', salesman: 'ГК Тайга', typeGoods: 'Оборудование', description: '«Тайга Т-2М» (модифицированная) - пилорама с электроприводом и электромеханическим механическим подъемом пильной каретки, предназначена для распиловки круглого леса диаметром до 90 см, на доски, брус и многое другое.', price: '750 000', quantity: 3, costPerPiece: '250 000', isDeals: false, isFavorite: false, isPaid: false},
			{id:5, url: 'https://api.bb.market/bb_storage/files/download/19694e1a045a485bb8277cec6f729758/file.jpg', type: 'Аукцион', title: 'Ленточная пилорама «Тайга Т-3»', city: 'Санкт-Петербург, Красное Село', salesman: 'ГК Тайга', typeGoods: 'Оборудование', description: '«Тайга Т-3» — пилорама с электроприводом и электромеханическим механическим подъемом пильной каретки, предназначена для распиловки круглого леса диаметром до 90 см, на доски, брус и многое другое.', price: '765 000', quantity: 3, costPerPiece: '255 000', isDeals: false, isFavorite: false, isPaid: false},

			{id:6, url: 'https://api.bb.market/bb_storage/files/download/6c658eea12d6427ca745c67b9e3a844c/file.png', type: 'Разовая продажа', title: 'Кресло «Анкор» опт', city: 'Санкт-Петербург, Красное Село', salesman: 'ООО «МАЛАККА МЕБЕЛЬ»', typeGoods: 'Мебель', description: 'Плетеное кресло Анкор (Ш700хГ600хВ940 мм)— практичное, легкое, долговечное. Кресло из ротанга дополнит интерьер загородного дома и квартиры в эко-стиле, в стиле кантри и прованс. Подойдет для благоустройства садовых участков, лоджий, веранд.', price: '23 600', quantity: 1, costPerPiece: '23 600', isDeals: false, isFavorite: false, isPaid: false},
			{id:7, url: 'https://api.bb.market/bb_storage/files/download/79d6667457f0410f9010afc1ec93ffd5/file.png', type: 'Аукцион', title: 'Кресло «Броутон» опт', city: 'Санкт-Петербург, Красное Село', salesman: 'ООО «МАЛАККА МЕБЕЛЬ»', typeGoods: 'Мебель', description: 'Основательное и комфортабельное, это кресло применимо не только в гостиной, где оно станет выразителем традиционно роскошного интерьерного решения для загородного дома. Не менее акцентно кресло из ротанга будет смотреться на террасе и даже в лаунж-зоне у бассейна. Тем более, что материал, из которого оно изготовлено, не боится ни палящего солнца, ни влаги, ни даже солёных морских брызг.', price: '23 600', quantity: 1, costPerPiece: '23 600', isDeals: false, isFavorite: false, isPaid: false},
			{id:8, url: 'https://api.bb.market/bb_storage/files/download/2f33dd36e80d41568d66568a151e42d2/file.png', type: 'Разовая продажа', title: 'Кресло «Амелия» опт', city: 'Санкт-Петербург, Красное Село', salesman: 'ООО «МАЛАККА МЕБЕЛЬ»', typeGoods: 'Мебель', description: 'Обыграйте достоинства интерьера загородного дома, дополнив его комфортабельным креслом «Амелия», ведь оно способно создать эффект обустроенного и благополучного дома. И если вам близок образ гостеприимного пространства, то и это кресло придется по душе. Глубокое и просторное, оно снабжено подлокотниками и слегка изогнутой спинкой, уютно принимающей вас в свои объятия.', price: '29 800', quantity: 1, costPerPiece: '29 800', isDeals: false, isFavorite: false, isPaid: false},
			{id:9, url: 'https://api.bb.market/bb_storage/files/download/c8e1d78eed684d2bb23877b4bc851c84/file.png', type: 'Аукцион', title: 'Кресло «Блисс» опт', city: 'Санкт-Петербург, Красное Село', salesman: 'ООО «МАЛАККА МЕБЕЛЬ»', typeGoods: 'Мебель', description: 'Идеальный вариант для тех, кто стремиться выделяться и удивлять – кресло «Блисс». Оно легко вплетётся в ваш интерьер и привнесет в него тепло и уют. Кресло ажурного плетения выглядит легким и воздушным, оно не загромождает пространство, но изящно заполняет его пустоты.', price: '39 800', quantity: 1, costPerPiece: '39 800', isDeals: false, isFavorite: false, isPaid: false},
			{id:10, url: 'https://api.bb.market/bb_storage/files/download/89c852944b334861a864f8ee46451f52/file.png', type: 'Разовая продажа', title: 'Кресло «Авиано» опт', city: 'Санкт-Петербург, Красное Село', salesman: 'ООО «МАЛАККА МЕБЕЛЬ»', typeGoods: 'Мебель', description: 'Согласитесь, от удобства посадки напрямую зависит то, насколько комфортным будет ваше времяпрепровождение. Дизайн этого просторного кресла буквально подчинен принципам комфорта: его глубокое сиденье, широкие подлокотники, позволяющие вольно раскинуть руки и даже пастельное спокойствие мягких подушек создают то самое настроение безмятежности и расслабленности.', price: '48 200', quantity: 1, costPerPiece: '48 200', isDeals: false, isFavorite: false, isPaid: false},
		]
	}),
	getters:{
		favoriteFilters(): any{
			return this.stock.filter((item) => item.isFavorite)
		},
		dealFilters(): any{
			return this.stock.filter((item) => item.isDeals)
		},
		searchFilter(): any{
			return this.stock.filter((item) => item.description.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1)
		}
	},
	actions:{
		isDeal(id: any): any{
			const idx = this.stock.findIndex(el => el.id === id);
			this.stock[idx].isDeals = true;
		},
		isFavorite(id: any): any{
			const idx = this.stock.findIndex(el => el.id === id);
			this.stock[idx].isFavorite = true;
		},
		deleteFavorite(id: any): any{
			const idx = this.stock.findIndex(el => el.id === id);
			this.stock[idx].isFavorite = false;
		},
		isPay(id: any): any{
			const idx = this.stock.findIndex(el => el.id === id);
			this.stock[idx].isPaid = true;
		},
	}
})