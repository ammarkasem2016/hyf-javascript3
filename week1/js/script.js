// JASON


var zarJson = document.getElementById("zarJson");
var infoJson = document.getElementById("infoJson");
var pageNum = 1;




zarJson.addEventListener("click", function (){
    
    var xRaq = new XMLHttpRequest();
    xRaq.open('Get','js/movie_' + pageNum +  '.json');
    xRaq.onload = function () {
        var xData = JSON.parse(xRaq.responseText);
        addHtml(xData);
    };
    
    pageNum++;
    xRaq.send();
    
    
    if(pageNum > 5){
        zarJson.classList.add("hide");
        zarJson.style.backgroundColor = '#eee';
        zarJson.style.color = 'lightgray';
    }
    

});

function addHtml(data){
    var htmlText = "";
    
    for (i = 0; i < data.length; i++){
        htmlText += "<span class='black'><p><b>"  + data[i].name  + 
            " Year's "  + 
            data[i].model + "</span></b><br><span class='gold'> Writers:</span><span class='silver'>";
        for ( j = 0; j < data[i].type.writers.length; j++){
            
            if (j == 0) {
                htmlText += data[i].type.writers[j];
            } else{
                htmlText += " and " + data[i].type.writers[j];
            }
        }
        
        htmlText += "</span><br><span class='gold'> Stars : </span>";
        for ( j = 0; j < data[i].type.stars.length; j++){
            
            if (j == 0) {
                htmlText += data[i].type.stars[j];
            } else{
                htmlText += " and " + data[i].type.stars[j];
            }
        }
        
        htmlText += "<br><span class='gold'>Rate : </span><span class='darkred'>For US Box Office : " + data[i].rate + ".";
            
          htmlText  += "</span><hr></p>";
        
    }
   infoJson.insertAdjacentHTML('beforeend',htmlText);
}




