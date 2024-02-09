const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characterList : [],
			planetsList : [],
			starshipsList : [],
			favoritesList : [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then(data => {
				// Map over each character and fetch details from the individual endpoint
					const characterProperties = data.results.map(item =>
						fetch(item.url)
						.then(response => response.json())
						.then(characterDetails => ({
							name: characterDetails.result.properties.name,
							gender: characterDetails.result.properties.gender,
							hairColor: characterDetails.result.properties.hair_color,
							eyeColor: characterDetails.result.properties.eye_color,
							uid: item.uid,
						}))
					);
			  
					// Wait for all promises to resolve before updating the state
					Promise.all(characterProperties)
					.then(updatedCharactersList => {
						setStore({ characterList: updatedCharactersList });
					})
					.catch(err => console.error(err));
				})
				.catch(err => console.error(err));
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(response => response.json())
				.then(data => {
				// Map over each planet and fetch details from the individual endpoint
					const planetsProperties = data.results.map(item =>
						fetch(item.url)
						.then(response => response.json())
						.then(planetsDetails => ({
							name: planetsDetails.result.properties.name,
							population: planetsDetails.result.properties.population,
							terrain: planetsDetails.result.properties.terrain,
							uid: item.uid,
						}))
					);
			  
					// Wait for all promises to resolve before updating the state
					Promise.all(planetsProperties)
					.then(updatedPlanetsList => {
						setStore({ planetsList: updatedPlanetsList });
					})
					.catch(err => console.error(err));
				})
				.catch(err => console.error(err));
			},
			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships")
				.then(response => response.json())
				.then(data => {
				// Map over each planet and fetch details from the individual endpoint
					const starshipsProperties = data.results.map(item =>
						fetch(item.url)
						.then(response => response.json())
						.then(starshipsDetails => ({
							model: starshipsDetails.result.properties.model,
							crew: starshipsDetails.result.properties.crew,
							passengers: starshipsDetails.result.properties.passengers,
							maxAtmospheringSpeed: starshipsDetails.result.properties.max_atmosphering_speed,
							uid: item.uid,
						}))
					);
			  
					// Wait for all promises to resolve before updating the state
					Promise.all(starshipsProperties)
					.then(updatedStarshipsList => {
						setStore({ starshipsList: updatedStarshipsList });
					})
					.catch(err => console.error(err));
				})
				.catch(err => console.error(err));
			},
			addToFavorites: ({type, uid, name}) => {
				const store = getStore();
				const newFavorite = { type, uid, name };
        		setStore({ favoritesList: [...store.favoritesList, newFavorite] });
			},
			removeFromFavorites: ({type, uid, name}) => {
				const store = getStore();
				const updatedFavoritesList = store.favoritesList.filter(item => !(item.type === type && item.uid === uid && item.name === name));
    			setStore({ favoritesList: updatedFavoritesList });
			},
		}
	};
};

export default getState;
