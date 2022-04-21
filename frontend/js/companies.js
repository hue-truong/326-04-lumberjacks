const technologyGrid = document.getElementById("technology");
const architectureGrid = document.getElementById("architecture");
const data_analysisGrid = document.getElementById("data_analysis");
const entertainmentGrid = document.getElementById("entertainment");

const company1 = await fetchCompany1();
const company2 = await fetchCompany2();
const company3 = await fetchCompany3();
const company4 = await fetchCompany4();


async function fetchCompany1(){
    const company1 = await fetch(`http://localhost:3000/companies/get-jobs`
    , {
      method: 'GET',
    });
    const data = await company1.json();
    return data;
  }

async function fetchCompany2(){
    const company2 = await fetch(`http://localhost:3000/companies/get-jobs`
    , {
      method: 'GET',
    });
    const data = await company2.json();
    return data;
  }
  
async function fetchCompany3(){
    const company3 = await fetch(`http://localhost:3000/companies/get-jobs`
    , {
      method: 'GET',
    });
    const data = await company3.json();
    return data;
  }

async function fetchCompany4(){
    const company4 = await fetch(`http://localhost:3000/companies/get-top-picks`
    , {
      method: 'GET',
    });
    const data = await company4.json();
    return data;
  }

for(let i = 0; i<5; ++i){
    
    //technology
    
    const technologyData = technologyArr[i];
    const technologyDiv = document.createElement(`<img src="${technologyData.img}" alt="${technologyData.name}"><img>`);
    technologyGrid.appendChild(technologyDiv);

      
    //architecture
    
    const architectureData = architectureArr[i];
    const architectureDiv = document.createElement(`<img src="${architectureData.img}" alt="${technologyData.name}"><img>`);
    architectureGrid.appendChild(architectureDiv);

    //data_analysis
    
    const data_analysisData = data_analysisArr[i];
    const data_analysisDiv = document.createElement(`<img src="${data_analysisData.img}" alt="${data_analysisData.name}"><img>`);
    data_analysisGrid.appendChild(tcDiv);

    //entertainment
    const entertainmentData = entertainmentArr[i];
    const entertainmentDiv = document.createElement(`<img src="${entertainmentData.img}" alt="${entertainmentData.name}"><img>`);
    entertainmentGrid.appendChild(entertainmentDiv);
}