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
    const techDiv = document.createElement("img");
    const tempDiv1 = document.createElement("div");
    tempDiv1.setAttribute("class", "grid-item");
    techDiv.setAttribute("src", technologyData.img);
    techDiv.setAttribute("alt", technologyData.name);
    techDiv.setAttribute("class", "img");
    tempDiv1.appendChild(techDiv);
    technologyGrid.appendChild(tempDiv1);

      
    //architecture
    
    const architectureData = architectureArr[i];
    const tempDiv2 = document.createElement("div");
    tempDiv2.setAttribute("class", "grid-item");
    const archDiv = document.createElement("img");
    archDiv.setAttribute("src", architectureData.img);
    archDiv.setAttribute("alt", architectureData.name);
    archDiv.setAttribute("class", "img");
    tempDiv2.appendChild(archDiv);
    architectureGrid.appendChild(tempDiv2);

    //data_analysis
    
    const data_analysisData = data_analysisArr[i];
    const tempDiv3 = document.createElement("div");
    tempDiv3.setAttribute("class", "grid-item");
    const data_analysisDiv = document.createElement("img");
    data_analysisDiv.setAttribute("src", data_analysisData.img);
    data_analysisDiv.setAttribute("alt", data_analysisData.name);
    data_analysisDiv.setAttribute("class", "img");
    tempDiv3.appendChild(data_analysisDiv);
    data_analysisGrid.appendChild(tempDiv3);

    //entertainment
    const entertainmentData = entertainmentArr[i];
    const tempDiv4 = document.createElement("div");
    tempDiv4.setAttribute("class", "grid-item");
    const entertainmentDiv = document.createElement("img");
    entertainmentDiv.setAttribute("src", entertainmentData.img);
    entertainmentDiv.setAttribute("alt", entertainmentData.name);
    entertainmentDiv.setAttribute("class", "img");
    tempDiv4.appendChild(entertainmentDiv);
    entertainmentGrid.appendChild(tempDiv4);
}



