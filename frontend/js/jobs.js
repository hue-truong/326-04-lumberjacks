const technologyGrid = document.getElementById("technology");
const architectureGrid = document.getElementById("architecture");
const data_analysisGrid = document.getElementById("data_analysis");
const entertainmentGrid = document.getElementById("entertainment");

const technologyArr = await fetchTech();
const architectureArr = await fetchArch();
const data_analysisArr = await fetchData_Analysis();
const entertainmentArr = await fetchEntertainment();


async function fetchTech(){
    const techResponse = await fetch(`/jobs/get-jobs`
    , {
      method: 'GET',
    });
    const data = await techResponse.json();
    return data;
  }

  async function fetchArch(){
    const archResponse = await fetch(`/jobs/get-jobs`
    , {
      method: 'GET',
    });
    const data = await archResponse.json();
    return data;
  }

  async function fetchData_Analysis(){
    const dataResponse = await fetch(`/jobs/get-jobs`
    , {
      method: 'GET',
    });
    const data = await dataResponse.json();
    return data;
  }

  async function fetchEntertainment(){
    const entertainmentResponse = await fetch(`/jobs/get-jobs`
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
    techDiv.setAttribute("alt", technologyData.title);
    techDiv.setAttribute("class", "img");
    tempDiv1.appendChild(techDiv);

    const href = document.createElement('a')
    href.setAttribute('class', 'jobclick')
    href.setAttribute('href', `/description?id=${technologyData.id}`)

    const text = document.createElement('span')
    text.setAttribute('class', 'jobtitle')
    text.innerText= technologyData.title
    href.appendChild(text)
    tempDiv1.appendChild(href)

    technologyGrid.appendChild(tempDiv1);

      
    //architecture
    
    const architectureData = architectureArr[i];
    const tempDiv2 = document.createElement("div");
    tempDiv2.setAttribute("class", "grid-item");
    const archDiv = document.createElement("img");
    archDiv.setAttribute("src", architectureData.img);
    archDiv.setAttribute("alt", architectureData.title);
    archDiv.setAttribute("class", "img");
    tempDiv2.appendChild(archDiv);
    
    const href2 = document.createElement('a')
    href2.setAttribute('class', 'jobclick')
    href2.setAttribute('href', `/description?id=${architectureData.id}`)

    const text2 = document.createElement('span')
    text2.setAttribute('class', 'jobtitle')
    text2.innerText= architectureData.title
    href2.appendChild(text2)
    tempDiv2.appendChild(href2)

    architectureGrid.appendChild(tempDiv2);

    //data_analysis
    
    const data_analysisData = data_analysisArr[i];
    const tempDiv3 = document.createElement("div");
    tempDiv3.setAttribute("class", "grid-item");
    const data_analysisDiv = document.createElement("img");
    data_analysisDiv.setAttribute("src", data_analysisData.img);
    data_analysisDiv.setAttribute("alt", data_analysisData.title);
    data_analysisDiv.setAttribute("class", "img");
    tempDiv3.appendChild(data_analysisDiv);

    const href3 = document.createElement('a')
    href3.setAttribute('class', 'jobclick')
    href3.setAttribute('href', `/description?id=${data_analysisData.id}`)

    const text3 = document.createElement('span')
    text3.setAttribute('class', 'jobtitle')
    text3.innerText= data_analysisData.title
    href3.appendChild(text3)
    tempDiv3.appendChild(href3)

    data_analysisGrid.appendChild(tempDiv3);

    //entertainment
    const entertainmentData = entertainmentArr[i];
    const tempDiv4 = document.createElement("div");
    tempDiv4.setAttribute("class", "grid-item");
    const entertainmentDiv = document.createElement("img");
    entertainmentDiv.setAttribute("src", entertainmentData.img);
    entertainmentDiv.setAttribute("alt", entertainmentData.title);
    entertainmentDiv.setAttribute("class", "img");
    tempDiv4.appendChild(entertainmentDiv);

    const href4 = document.createElement('a')
    href4.setAttribute('class', 'jobclick')
    href4.setAttribute('href', `/description?id=${entertainmentData.id}`)

    const text4 = document.createElement('span')
    text4.setAttribute('class', 'jobtitle')
    text4.innerText= entertainmentData.title
    href4.appendChild(text4)
    tempDiv4.appendChild(href4)

    entertainmentGrid.appendChild(tempDiv4);
}



