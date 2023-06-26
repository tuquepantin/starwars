const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			endPoint:["people", "planets", "vehicles"],
			URLBASE: "https://www.swapi.tech/api",
			people: JSON.parse(localStorage.getItem("people"))||[],
			planets: JSON.parse(localStorage.getItem("planets"))||[],
            vehicles: JSON.parse(localStorage.getItem("vehicles"))||[],
            favorites: []
		},
		actions: {
			getData: () => {
                let store = getStore()
                if (store.people.length <= 0) {

                    store.endPoint.forEach(async (endPoint) => {

                        let response = await fetch(`${store.URLBASE}/${endPoint}`)
                        let data = await response.json()
                        data.results.forEach(async (item) => {
                            let responseItem = await fetch(`${store.URLBASE}/${endPoint}/${item.uid}`)
                            let dataItem = await responseItem.json()

                            setStore({
                                [endPoint]: [...store[endPoint], dataItem.result]
                            })
                            window.localStorage.setItem(endPoint, JSON.stringify(store[endPoint]))

                        })
                    })
                }

            },
            addFavorite: (favorite) => {
                let store = getStore();
                const isFavorite = store.favorites.some(fav=>fav._id == favorite._id)
                if(isFavorite){
                    setStore({favorites:store.favorites.filter(fav=>fav._id !== favorite._id)})
                    console.log("alreadyFavorite")
                } else{
                    setStore({favorites:[...store.favorites, favorite]})   
                    console.log("nuevo favorito")                 
                }

                console.log(isFavorite)
            }
			
		}
	};
};

export default getState;
