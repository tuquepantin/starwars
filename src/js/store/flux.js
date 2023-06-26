const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			endPoint:["people", "planets", "vehicles"],
			BASEURL: "https://www.swapi.tech/api",
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

                        let response = await fetch(`${store.BASEURL}/${endPoint}`)
                        let data = await response.json()
                        data.results.forEach(async (item) => {
                            let responseItem = await fetch(`${store.BASEURL}/${endPoint}/${item.uid}`)
                            let dataItem = await responseItem.json()

                            setStore({
                                [endPoint]: [...store[endPoint], dataItem.result]
                            })
                            window.localStorage.setItem(endPoint, JSON.stringify(store[endPoint]))

                        })
                    })
                }

            },
			
		}
	};
};

export default getState;
