var apiEl="qe6jwDZrvB6O-IE_i0Xpbg5RLR8snOynbmtGV81Ny24";


var formEl=document.querySelector("form")
var searchEl=document.querySelector(".search-input")
var resultEl=document.querySelector(".searchResults")
var showMoreEl=document.querySelector(".show")

var inputData="";
var page=1;

async function searchImages(){
    inputData=searchEl.value;
    var url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiEl}`;    
    var response=await fetch(url);
    var data=await response.json();
    var result=data.results;

    if(page===1){
        resultEl.innerHTML="";
    }

    result.map(function(result){
        var imgEl=document.createElement("div");
        imgEl.classList.add("result");
        var img=document.createElement("img");
        img.src=result.urls.small;
        img.alt=result.alt_description;
        var imgDesc=document.createElement("a");
        imgDesc.href=result.links.html;
        imgDesc.target="_blank";
        imgDesc.textContent=result.alt_description;
        imgEl.appendChild(img);
        imgEl.appendChild(imgDesc);
        resultEl.appendChild(imgEl);
    })

    page++;
    if(page>1){
        showMoreEl.style.display="block";
        showMoreEl.style.margin="50px auto";
    
    }
    
    
    
}

formEl.addEventListener("submit",function(event){
    event.preventDefault();
    page=1;
    searchImages();
}) 

showMoreEl.addEventListener("click",function(){searchImages()});