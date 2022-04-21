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
    
    topPick.innerHTML = `<img src="${data1.img}" alt="${data1.name}"><img>`;

    
    //fetch trending-companies
    const response2 = await fetchTopCompanies();
    const data2 = response2[i];
    trendingCompanies.innerHTML = `<img src="${data2.img}" alt="${data2.name}"><img>`;
}

// button

// const buttons = document.getElementsByClassName("button2");


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', callToServer); //false
// }

// function callToServer(){
//     console.log("This will be a call to server");
// }

