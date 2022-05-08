const topPick = document.getElementById("topPick");
const trendingCompanies = document.getElementById("trendingCompanies");


async function fetchTopPics(){
  const tpResponse = await fetch(`companies/get-top-picks`
  , {
    method: 'GET',
    
  })
  const data = await tpResponse.json();
  console.log(data);
  return data;
}
async function fetchTopCompanies(){
  const tcResponse = await fetch(`companies/get-trending-companies`
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

    const href = document.createElement('a')
    href.setAttribute('class', 'jobclick')
    href.setAttribute('href', '/descriptions')

    const text = document.createElement('span')
    text.setAttribute('class', 'jobtitle')
    text.innerText=data1.title

    href.appendChild(text)

    tempDiv1.appendChild(topPickDiv);
    topPick.appendChild(tempDiv1);
    tempDiv1.appendChild(href)
    
    //fetch trending-companies
    const response2 = await fetchTopCompanies();
    const data2 = response2[i];

    const trendingDiv = document.createElement("img");
    const tempDiv2 = document.createElement("div");
    tempDiv2.setAttribute("class", "grid-item");

    const href2 = document.createElement('a')
    href2.setAttribute('class', 'jobclick')
    href2.setAttribute('href', '/descriptions')

    const text2 = document.createElement('span')
    text2.setAttribute('class', 'jobtitle')
    text2.innerText=data2.title

    href2.appendChild(text)

    trendingDiv.setAttribute("src", data2.img);
    trendingDiv.setAttribute("alt", data2.name);
    trendingDiv.setAttribute("class", "img");
    tempDiv2.appendChild(trendingDiv);
    trendingCompanies.appendChild(tempDiv2);
    tempDiv2.appendChild(href2)
}

