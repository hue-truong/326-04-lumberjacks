const topPick = document.getElementById("topPick");
const trendingCompanies = document.getElementById("trendingCompanies");

const tpResponse = await fetch(`/get-top-picks`, {
    method: 'GET',
  });
  const tcResponse = await fetch(`/get-companies`, {
    method: 'GET',
  });


for(let i = 0; i<5; ++i){

    //fetch top-picks

    const response1 = await tpResponse.json();
    const data1 = tpResponse[i];
    const tpDiv = document.createElement(`<img src="${data1.img}" alt="${data1.name}"><img>`);
    topPick.appendChild(tpDiv);

      
    //fetch trending-companies
    const response2 = await tcResponse.json();
    const data2 = tcResponse[i];
 
    const tcDiv = document.createElement(`<img src="${data2.img}" alt="${data2.name}"><img>`);
    trendingCompanies.appendChild(tcDiv);

}

// button

// const buttons = document.getElementsByClassName("button2");


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', callToServer); //false
// }

// function callToServer(){
//     console.log("This will be a call to server");
// }

