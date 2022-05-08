const displayContainer = document.getElementById("display-container");

async function fetchCompany1() {
  const company1 = await fetch(`/companies/get-jobs?company=Google`
    , {
      method: 'GET',
    });
  const data = await company1.json();
  return data;
}

async function fetchCompany2() {
  const company2 = await fetch(`/companies/get-jobs?company=Sony`
    , {
      method: 'GET',
      
    });
  const data = await company2.json();
  return data;
}

async function fetchCompany3() {
  const company3 = await fetch(`/companies/get-jobs?company=Ubisoft`
    , {
      method: 'GET',
    });
  const data = await company3.json();
  return data;
}

async function fetchCompany4() {
  const company4 = await fetch(`/companies/get-jobs?company=Apple`
    , {
      method: 'GET',
    });
  const data = await company4.json();
  return data;
}

//Company1

const company1 = await fetchCompany1();
buildJobs(company1);


//Company2

const company2 = await fetchCompany2();
buildJobs(company2);

//Company3

const company3 = await fetchCompany3();
buildJobs(company3);

//Company4
const company4 = await fetchCompany4();
buildJobs(company4);



function buildJobs(company) {
  const gridTitle = document.createElement("span");
  gridTitle.setAttribute("class","grid-title");

  const gridContainer = document.createElement("div");
  gridContainer.setAttribute("class","grid-container");

  const gridGroup = document.createElement("div");
  gridGroup.setAttribute("class","grid-group");

  const companyName = document.createTextNode(company[0].cname);
  gridTitle.appendChild(companyName);

  for (let i = 0; i < 5; ++i) {
    const data = company[i];
    const styleDiv = document.createElement("div");
    styleDiv.setAttribute("class", "grid-item");

    const href = document.createElement('a')
    href.setAttribute('class', 'jobclick')
    href.setAttribute('href', `/description?id=${data.id}`)

    const text = document.createElement('span')
    text.setAttribute('class', 'jobtitle')
    text.innerText=data.title

    href.appendChild(text)

    const companyImage = document.createElement("img");
    companyImage.setAttribute("src", data.img);
    companyImage.setAttribute("alt", data.title);
    companyImage.setAttribute("class", "img");

    styleDiv.appendChild(companyImage);
    styleDiv.appendChild(href);
    gridContainer.appendChild(styleDiv);
    gridTitle.appendChild(gridContainer);
    gridGroup.appendChild(gridTitle);
    
  }
  displayContainer.appendChild(gridGroup);
}