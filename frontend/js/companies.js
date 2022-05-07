const gridGroup = document.getElementById("display-container");

async function fetchCompany1() {
  const company1 = await fetch(`/companies/company/get-jobs`
    , {
      method: 'GET',
    });
  const data = await company1.json();
  return data;
}

async function fetchCompany2() {
  const company2 = await fetch(`/companies/company/get-jobs`
    , {
      method: 'GET',
    });
  const data = await company2.json();
  return data;
}

async function fetchCompany3() {
  const company3 = await fetch(`/companies/company/get-jobs`
    , {
      method: 'GET',
    });
  const data = await company3.json();
  return data;
}

async function fetchCompany4() {
  const company4 = await fetch(`/companies/company/get-jobs`
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
  const gridTitle = document.createElement("div");
  const companyName = document.createTextNode(company[0].name);
  gridTitle.appendChild(companyName);

  for (let i = 0; i < 5; ++i) {
    const data = company[i];
    const styleDiv = document.createElement("div");
    styleDiv.setAttribute("class", "grid-item");


    const companyImage = document.createElement("img");
    companyImage.setAttribute("src", data.img);
    companyImage.setAttribute("alt", data.job_title);
    companyImage.setAttribute("class", "img");


    const jobDiv = document.createElement("div");
    jobDiv.setAttribute("class", "jobtitle")


    const jobTitleText = document.createTextNode(data.job_title);
    jobDiv.appendChild(jobTitleText);

    styleDiv.appendChild(companyImage);
    styleDiv.appendChild(jobDiv);
    gridGroup.appendChild(styleDiv);
  }

}