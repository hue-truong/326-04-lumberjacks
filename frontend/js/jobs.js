const technologyGrid = document.getElementById("technology");
const architectureGrid = document.getElementById("architecture");
const data_analysisGrid = document.getElementById("data_analysis");
const entertainmentGrid = document.getElementById("entertainment");

const technologyArr = await fetchTech();
const architectureArr = await fetchArch();
const data_analysisArr = await fetchData_Analysis();
const entertainmentArr = await fetchEntertainment();


async function fetchTech(){
    const techResponse = await fetch(`http://localhost:3000/companies/get-companies`
    , {
      method: 'GET',
    });
    const data = await techResponse.json();
    return data;
  }

  async function fetchArch(){
    const archResponse = await fetch(`http://localhost:3000/companies/get-companies`
    , {
      method: 'GET',
    });
    const data = await archResponse.json();
    return data;
  }

  async function fetchData_Analysis(){
    const dataResponse = await fetch(`http://localhost:3000/companies/get-companies`
    , {
      method: 'GET',
    });
    const data = await dataResponse.json();
    return data;
  }

  async function fetchEntertainment(){
    const entertainmentResponse = await fetch(`http://localhost:3000/companies/get-companies`
    , {
      method: 'GET',
    });
    const data = await entertainmentResponse.json();
    return data;
  }

for(let i = 0; i<5; ++i){
    
    //technology
    
    const technologyData = technologyArr[i];
    technologyGrid.innerHTML = `<img src="${technologyData.img}" alt="${technologyData.name}"><img>`;

      
    //architecture
    
    const architectureData = architectureArr[i];
    architectureGrid.innerHTML = `<img src="${architectureData.img}" alt="${architectureData.name}"><img>`;

    //data_analysis
    
    const data_analysisData = data_analysisArr[i];
    data_analysisGrid.innerHTML = `<img src="${data_analysisData.img}" alt="${data_analysisData.name}"><img>`;

    //entertainment
    const entertainmentData = entertainmentArr[i];
    entertainmentGrid.innerHTML = `<img src="${entertainmentData.img}" alt="${entertainmentData.name}"><img>`;
}



