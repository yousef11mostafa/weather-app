

let input=document.getElementById("input");
let btn=document.getElementById("submit");
let results=document.querySelector(".results");
let message=document.querySelector(".message")
let apikey="bd147691b5a1b0d61a573492b93bd101";



btn.addEventListener("click",function(e){
  e.preventDefault();
  let city_name=document.getElementById("input").value; 
 if(city_name!==""){
  get_wheather_data(city_name);
  }
})

async function get_wheather_data(name){
       try{
         
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}&units=metric`
        );
       
        if(!response.ok){
          throw  new Eroor("un correct")
        }

        results.classList.remove("active");
        message.classList.add("active");

            const json= await response.json();
            // console.log(json)
            let icon=json.weather[0].icon;
            document.querySelector(".image").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
            document.querySelector(".temperature span").innerHTML=json.main.temp;
            document.querySelector(".temperature p").innerHTML=json.weather[0].description;
            document.getElementById("feels").innerHTML=json.main.feels_like;
            document.getElementById("humitidy").innerHTML=json.main.humidity;
            document.getElementById("speed").innerHTML=json.wind.speed;

           
      }catch(e){
          console.log(e);
          results.classList.add("active");
          message.classList.remove("active");
      }
}            
 