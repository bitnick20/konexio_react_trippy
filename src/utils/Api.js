import Config from '../Config';

class Api {
    
    getHome () {
         // const url = "http://localhost:3001/api/home" ;
        const url = Config.host + "/api/home";
        console.log("src/utils/Api :", url);

        // const cities =  [];
        // console.log("src/utils/Api cities :", cities);

        // je dois faire un return avec le resultat de mon fetch pour pouvoir l'utiliser ailleurs
        return(fetch(url) 
            .then(res => res.json())
            .then(json => { 
                // console.log("src/utils/Api json :", json);

                console.log("src/utils/Api json", json);
                const cities = json.cities;
                console.log("src/utils/Api cities", cities);
                return cities;
 
            }));
        }
}



export default new Api();
