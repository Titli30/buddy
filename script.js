document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("landing").style.display = "none";
  document.getElementById("builder").style.display = "block";
});

function addEducation() {
  const container = document.getElementById("educationFields");
  const div = document.createElement("div");
  div.innerHTML = `
    <input type="text" placeholder="Degree" class="eduDegree">
    <input type="text" placeholder="Duration" class="eduDuration">
    <input type="text" placeholder="Location" class="eduLocation">
  `;
  container.appendChild(div);
}

function addExperience() {
  const container = document.getElementById("experienceFields");
  const div = document.createElement("div");
  div.innerHTML = `
    <input type="text" placeholder="Role" class="expRole">
    <input type="text" placeholder="Company" class="expCompany">
    <input type="text" placeholder="Duration" class="expDuration">
    <textarea placeholder="Description" class="expDesc"></textarea>
  `;
  container.appendChild(div);
}

document.getElementById("photoInput").addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    document.getElementById("previewImage").src = reader.result;
  };
  if (file) reader.readAsDataURL(file);
});

function generateResume() {
  document.getElementById("previewName").innerText = document.getElementById("name").value;
  document.getElementById("previewTitle").innerText = document.getElementById("title").value;
  document.getElementById("previewPhone").innerText = document.getElementById("phone").value;
  document.getElementById("previewEmail").innerText = document.getElementById("email").value;
  document.getElementById("previewAddress").innerText = document.getElementById("address").value;
  document.getElementById("previewGitHub").innerText = document.getElementById("github").value;
  document.getElementById("previewGuardian").innerText = document.getElementById("guardian").value;
  document.getElementById("previewHobbies").innerText = document.getElementById("hobbies").value;
  document.getElementById("previewProfile").innerText = document.getElementById("profile").value;

  const skills = document.getElementById("skills").value.split(",");
  const skillList = document.getElementById("previewSkills");
  skillList.innerHTML = "";
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.innerText = skill.trim();
    skillList.appendChild(li);
  });

  const langs = document.getElementById("languages").value.split(",");
  const langList = document.getElementById("previewLanguages");
  langList.innerHTML = "";
  langs.forEach(lang => {
    const li = document.createElement("li");
    li.innerText = lang.trim();
    langList.appendChild(li);
  });

  const eduContainer = document.getElementById("previewEducation");
  eduContainer.innerHTML = "";
  const degrees = document.querySelectorAll(".eduDegree");
  degrees.forEach((_, i) => {
    const degree = degrees[i].value;
    const dur = document.querySelectorAll(".eduDuration")[i].value;
    const loc = document.querySelectorAll(".eduLocation")[i].value;
    if (degree) {
      eduContainer.innerHTML += `<p><strong>${degree}</strong> (${dur})<br>${loc}</p>`;
    }
  });

  const expContainer = document.getElementById("previewExperience");
  expContainer.innerHTML = "";
  const roles = document.querySelectorAll(".expRole");
  roles.forEach((_, i) => {
    const role = roles[i].value;
    const comp = document.querySelectorAll(".expCompany")[i].value;
    const dur = document.querySelectorAll(".expDuration")[i].value;
    const desc = document.querySelectorAll(".expDesc")[i].value;
    if (role) {
      expContainer.innerHTML += `<p><strong>${role}</strong> (${dur})<br>${comp}<br>${desc}</p>`;
    }
  });
}

function downloadPDF() {
  const element = document.getElementById("preview");
  html2pdf().from(element).save("resume.pdf");
}
