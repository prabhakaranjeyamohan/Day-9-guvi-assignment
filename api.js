var request = new XMLHttpRequest(); 
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload = function() {
    var data = JSON.parse(request.response);
    
 

// a. Get all the countries from Asia continent /region using Filter function

const result_a = data.filter((x) => {
    if (x.region === "Asia")
    return true;
    
 })
 console.log(result_a);

 //b. Get all the countries with a population of less than 2 lakhs using Filter function

 const result_b = data.filter((x) => {
    if (x.population <200000)
    return true;
    
 })
 console.log(result_b);

//c.Print the following details name, capital, flag using forEach function

function myFunction(currentvalue,i) {
    console.log(data[i].name,data[i].capital,data[i].flag);

}

data.forEach(myFunction);

// d.Print the total population of countries using reduce function
const sum1 = data.reduce((accc,cc) => { 
    return accc+ cc.population;
    },0);
console.log(sum1);

// e.Print the country which uses US Dollars as currency.

const result_e = data.filter((x) => {
    if (x.currencies[0].code === "USD")
    return true;
   
 })
console.log(result_e)


}


   




//-------------OWN PRACTICE. PLEASE IGNORE--------------------------------------------------------------------------//

// practice
    // for(i=0;i<data.length;i++){
    //     var name=data[i].name;
    //     var lang=data[i].latlng;
    //     wd
        
    //     // console.log(data[i].name,data[i].latlng[0],data[i].latlng[1]);
//}


 // for(i=0;i<data.length;i++){
    //     console.log(data[i].name + "-" +data[i].region + '-' + data[i].subregion + " " + data[i].population);
    // }