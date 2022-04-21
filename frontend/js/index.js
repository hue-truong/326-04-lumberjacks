const topPick = document.getElementById("topPick");
const trendingCompanies = document.getElementById("trendingCompanies");


async function fetchTopPics(){
  const tpResponse = await fetch(`http://localhost:3000/companies/get-top-picks`
  , {
    method: 'GET',
    
  })
  const data = await tpResponse.json();
  console.log(data);
  return data;
}
async function fetchTopCompanies(){
  const tcResponse = await fetch(`http://localhost:3000/companies/get-top-picks`
  , {
    method: 'GET',
  });
  const data = await tcResponse.json();
  return data;
}

for(let i = 0; i<5; ++i){

    //fetch top-picks

    const response1 = await fetchTopPics();
    const data1 = response1[i];
  
    const topPickDiv = document.createElement("img");
    const tempDiv1 = document.createElement("div");
    tempDiv1.setAttribute("class", "grid-item");
    topPickDiv.setAttribute("src", data1.img);
    topPickDiv.setAttribute("alt", data1.name);
    topPickDiv.setAttribute("class", "img");
    tempDiv1.appendChild(topPickDiv);
    topPick.appendChild(tempDiv1);
    
    //fetch trending-companies
    const response2 = await fetchTopCompanies();
    const data2 = response2[i];

    const trendingDiv = document.createElement("img");
    const tempDiv2 = document.createElement("div");
    tempDiv2.setAttribute("class", "grid-item");
    trendingDiv.setAttribute("src", data2.img);
    trendingDiv.setAttribute("alt", data2.name);
    trendingDiv.setAttribute("class", "img");
    tempDiv2.appendChild(trendingDiv);
    trendingCompanies.appendChild(tempDiv2);
}

// button

// const buttons = document.getElementsByClassName("button2");


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', callToServer); //false
// }

// function callToServer(){
//     console.log("This will be a call to server");
// }

