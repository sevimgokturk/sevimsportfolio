        let images=document.getElementById("image-galeri");

        setInterval(setRandomElement,1500);
        
        function setRandomElement(){
            let index =Math.floor(Math.random() *7); 
            images.src="../img/"+index+"sevim.jpeg";
        }
        document.getElementById("iframeMedunna").style.visibility="hidden";
       function  medunnaProjectInfo(){
        if(document.getElementById("iframeMedunna").style.visibility=="hidden"){
            document.getElementById("iframeMedunna").style.visibility="";
        }else{
            document.getElementById("iframeMedunna").style.visibility="hidden";
        }  
       }

       //=======

       let items=document.getElementsByClassName("grid-item");
    function winnerCart(index){
        items[index].style.fontSize = "21px";
     }
    function start(){
        let intervalid = setInterval(startGame,200);
        console.log(intervalid);
        let timeout= (Math.floor(Math.random() * 30)+1)*200;
        let index=(timeout/200-1)%items.length;
        setTimeout(() => {
            clearInterval(intervalid);
            winnerCart(index);
        }, timeout);

        let i=0;      
        function startGame(){
                i=i%items.length;
               for( let j=0; j<items.length; j++){
                items[j].style.backgroundColor="pink";
                items[j].style.fontSize = "15px"   
                }
                items[i].style.backgroundColor="blue";              
                i++;                 
                }
                return 1;   
    } 
    //=======

    let cityName;

    function weatherForecast(){
        cityName= document.getElementById("searchBar").value; 
        console.log(cityName) 
        const key = '611f82c52d88fdc394707becbad58cf8'
        const ur = 'https://api.openweathermap.org/data/2.5/'
        let query="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=611f82c52d88fdc394707becbad58cf8&units=metric"
        fetch(query)
        .then(response => response.json())
        .then( data => {
            console.log(data)
            document.getElementById("city").innerHTML= data.name;
            document.getElementById("temp").innerHTML=Math.round(data.main.temp)+" °C"
            document.getElementById("desc").innerHTML=data.weather[0].description
        });
        document.getElementById("searchBar").value="";
        
    }
    //=========
   

        