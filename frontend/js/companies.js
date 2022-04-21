const technologyGrid = document.getElementById("technology");
const architectureGrid = document.getElementById("architecture");
const data_analysisGrid = document.getElementById("data_analysis");
const entertainmentGrid = document.getElementById("entertainment");

const jobsResponse = await fetch(`/jobs/get-jobs`, {
    method: 'GET',
  });
const response = await tpResponse.json();

const technologyArr = response[0];
const architectureArr = response[1];
const data_analysisArr = response[2];
const entertainmentArr = response[3];

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