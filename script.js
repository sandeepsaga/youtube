// Academic Qualification
function addNewAQ() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "eqFeild", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let AQ = document.getElementById("AddAQ");
  let addAQbtn = document.getElementById("aqAddbtn");
  AQ.insertBefore(newNode, addAQbtn);
}

// Work Experience
function addNewWE() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "weFeild", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let weOb = document.getElementById("we");
  let webtn = document.getElementById("weAddbtn");
  weOb.insertBefore(newNode, webtn);
}

// Awards/Scholarship/Achievments
function Awardsfun() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "aFeild", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let Awards = document.getElementById("Awards");
  let addAbtn = document.getElementById("Addbtn");
  Awards.insertBefore(newNode, addAbtn);
}

// Projects
function AddProject() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "pFeild", "mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let p = document.getElementById("pro");
  let pAddbtn = document.getElementById("pAddbtn");
  p.insertBefore(newNode, pAddbtn);
}


// Generate CV
// function GenerateCV() {
//     //    console.log('generate');
//     let nameFeild = document.getElementById('nameFeild').value;
//     let eduFeild = document.getElementById('eduFeild').value;
//     let contactFeild = document.getElementById('contactFeild').value;
//     let emailFeild = document.getElementById('emailFeild').value;
//     let dobFeild = document.getElementById('dobFeild').value;
//     let addressFeild = document.getElementById('addressFeild').value;
//     let interestFeild = document.getElementById('interestFeild').value;
//     let gitFeild = document.getElementById('gitFeild').value;
//     let linkedinFeild = document.getElementById('linkedinFeild').value;
//     let fbFeild = document.getElementById('fbFeild').value;
//     let instaFeild = document.getElementById('instaFeild').value;
//     let twitterFeild = document.getElementById('twitterFeild').value;

//     let eqFeild = document.getElementsByClassName('eqFeild');
//     let weFeild = document.getElementsByClassName('weFeild');
//     let aFeild = document.getElementsByClassName('aFeild');
//     let pFeild = document.getElementsByClassName('pFeild');

//     let comFeild = document.getElementById('comFeild').value;
//     let softFeild = document.getElementById('softFeild').value;
//     let addFeild = document.getElementById('addFeild').value;
//     let langFeild = document.getElementById('langFeild').value;


//     // Take All id's from CV-Template
//     document.getElementById('nameT').innerHTML = nameFeild;
//     document.getElementById('BioT').innerHTML = eduFeild;
//     document.getElementById('contactT').innerHTML = contactFeild;
//     document.getElementById('emailT').innerHTML = emailFeild;
//     document.getElementById('dobT').innerHTML = dobFeild;
//     document.getElementById('addressT').innerHTML = addressFeild;
//     document.getElementById('gitT').innerHTML = `<a href="${gitFeild}" target="_blank"><img src="icons/github.svg" alt=""></a>`;
//     document.getElementById('linkT').innerHTML = `<a href="${linkedinFeild}" target="_blank" ><img src="icons/linkedin.svg" alt=""></a>`;
//     document.getElementById('instaT').innerHTML = `<a href="${instaFeild}" target="_blank" ><img src="icons/instagram.svg" alt=""></a>`;
//     document.getElementById('fbT').innerHTML = `<a href="${fbFeild}" target="_blank"><img src="icons/facebook.svg" alt=""></a>`;
//     document.getElementById('twitterT').innerHTML = `<a href="${twitterFeild}" target="_blank" ><img src="icons/twitter.svg" alt=""></a>`;
//     document.getElementById('aiT').innerHTML = interestFeild;

//     //Class -> Academic
//     let str = "";
//     for (let e of eqFeild) {
//         str = str + ` <li>${e.value}</li>`;
//     }
//     document.getElementById('aqT').innerHTML = str;

//     //Work exper
//     let por = "";
//     for (let e of weFeild) {
//         por = por + `<li>${e.value}</li>`;
//     }
//     document.getElementById('weT').innerHTML = por;

//     //award
//     let a = "";
//     for (let e of aFeild) {
//         a = a + `<li>${e.value}</li>`;
//     }
//     document.getElementById('awT').innerHTML = a;

//     //Projects
//     let pro = "";
//     for (let e of pFeild) {
//         pro = pro + `<li>${e.value}</li>`;
//     }
//     document.getElementById('projectT').innerHTML = pro;

//     //Skills
//     document.getElementById('clT').innerHTML = comFeild;
//     document.getElementById('spT').innerHTML = softFeild;
//     document.getElementById('acT').innerHTML = addFeild;
//     document.getElementById('lkT').innerHTML = langFeild;

//     // Setting Up Profile photo
// let fileInput = document.getElementById("picFeild");
// if (fileInput.files && fileInput.files[0] instanceof Blob) {
//   let reader = new FileReader();
//   reader.readAsDataURL(fileInput.files[0]);
//   reader.onloadend = function () {
//     document.getElementById("mypic").src = reader.result;
//   };
// } else {
//   console.error("Invalid file or no file selected");
// }

//     // reader.onloadend = function () {
//     //     // console.log(reader.result);
//     //     document.getElementById('mypic').src = reader.result;
//     // }


//     document.getElementById('cv-form').style.display = 'none';
//     document.getElementById('footer').style.display = 'none';
//     document.getElementById('nav').style.display = 'none';
//     document.getElementById('cv-template').style.display = 'block';

// }
function GenerateCV() {
    // Get all input field values (optional handling)
    const getVal = id => document.getElementById(id)?.value || "";

    document.getElementById('nameT').innerHTML = getVal('nameFeild');
    document.getElementById('BioT').innerHTML = getVal('eduFeild');
    document.getElementById('contactT').innerHTML = getVal('contactFeild');
    document.getElementById('emailT').innerHTML = getVal('emailFeild');
    document.getElementById('dobT').innerHTML = getVal('dobFeild');
    document.getElementById('addressT').innerHTML = getVal('addressFeild');
    document.getElementById('aiT').innerHTML = getVal('interestFeild');

    // Social links (create only if value exists)
    const setLink = (value, elementId, icon) => {
        if (value.trim() !== "") {
            document.getElementById(elementId).innerHTML =
                `<a href="${value}" target="_blank"><img src="icons/${icon}.svg" alt=""></a>`;
        } else {
            document.getElementById(elementId).innerHTML = "";
        }
    };

    setLink(getVal('gitFeild'), 'gitT', 'github');
    setLink(getVal('linkedinFeild'), 'linkT', 'linkedin');
    setLink(getVal('instaFeild'), 'instaT', 'instagram');
    setLink(getVal('fbFeild'), 'fbT', 'facebook');
    setLink(getVal('twitterFeild'), 'twitterT', 'twitter');

    // Academic Qualifications
    const eqFeild = document.getElementsByClassName('eqFeild');
    document.getElementById('aqT').innerHTML = Array.from(eqFeild)
        .filter(e => e.value.trim())  // exclude empty values
        .map(e => `<li>${e.value}</li>`)
        .join("");

    // Work Experience
    const weFeild = document.getElementsByClassName('weFeild');
    document.getElementById('weT').innerHTML = Array.from(weFeild)
        .filter(e => e.value.trim())
        .map(e => `<li>${e.value}</li>`)
        .join("");

    // Awards
    const aFeild = document.getElementsByClassName('aFeild');
    document.getElementById('awT').innerHTML = Array.from(aFeild)
        .filter(e => e.value.trim())
        .map(e => `<li>${e.value}</li>`)
        .join("");

    // Projects
    const pFeild = document.getElementsByClassName('pFeild');
    document.getElementById('projectT').innerHTML = Array.from(pFeild)
        .filter(e => e.value.trim())
        .map(e => `<li>${e.value}</li>`)
        .join("");

    // Skills
    document.getElementById('clT').innerHTML = getVal('comFeild');
    document.getElementById('spT').innerHTML = getVal('softFeild');
    document.getElementById('acT').innerHTML = getVal('addFeild');
    document.getElementById('lkT').innerHTML = getVal('langFeild');

    // Profile Photo Upload (safe and optional)
    const fileInput = document.getElementById("picFeild");
    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = function () {
                document.getElementById("mypic").src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }

    // Show Template, Hide Form
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('nav').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

//Print CV
// function printCV() {
//     window.print();
// }

function printCV() {
    document.getElementById('printT').style.display = 'none';
    const element = document.body;
    const options = {
      margin: 0,
      filename: 'your_resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  }

// function openinp(){
    
// }