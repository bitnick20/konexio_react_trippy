import Config from '';

class Api {
    constructor (props) {
        super(props);

    }

    getHome () {
        // const url = `${Config.host} + "/api/home"`;
        const url = "http://localhost:3001/api/home";
        console.log("src/utils/Api :", url);

        fetch(url) 
            .then(res = res.json())
            .then( data => { 
                
                const cities = data.cities;

            });
        }


}



export default new Api();
getHome();