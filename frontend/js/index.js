const topPick = document.getElementById("topPick");
const trendingCompanies = document.getElementById("trendingCompanies");

const tpResponse = await fetch(`http://localhost:3000/companies/get-top-picks`, {
    method: 'GET',
  });
  // const tcResponse = await fetch(`http://localhost:3000/companies/get-company`, {
  //   method: 'GET',
  // });
const tcResponse = await fetch(`http://localhost:3000/companies/get-top-picks`, {
    method: 'GET',
  });
  
for(let i = 0; i<5; ++i){

    //fetch top-picks
    const image1 = tpResponse[i];
    const data1 = await tpResponse.json();
    const tpDiv = document.createElement(`<img><a href=${image1}><img>`);
    topPick.appendChild(tpDiv);

    
    //fetch trending-companies
    
    const image2 = tcResponse[i];
    const data2 = await tcResponse.json();
    const tcDiv = document.createElement(`<img><a href=${image2}><img>`);
    trendingCompanies.appendChild(tcDiv);
}

console.log(tpResponse.data)
// button

// const buttons = document.getElementsByClassName("button2");


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', callToServer); //false
// }

// function callToServer(){
//     console.log("This will be a call to server");
// }

