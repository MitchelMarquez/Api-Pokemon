//"https://pokeapi.co/api/v2/pokemon/890"

const tipoPokemon = async pokemon => {

    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        const data = await response.json();

        console.log(data);

        return data;


    } catch (error) {

        console.log(error);

        return false;

        //alert('NO ENCUENTRA');

    }

};