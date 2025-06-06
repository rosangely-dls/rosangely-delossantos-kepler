document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  const parentElement = document.body;
  const footer = document.createElement("footer");

  footer.classList.add("my-footer");

  parentElement.appendChild(footer);

  const today = new Date();
  const thisYear = today.getFullYear();

  const copyrightParagraph = document.createElement("p");
  copyrightParagraph.textContent = `\u00A9 ${thisYear} Rosangely De Los Santos. All rights reserved.`;

  footer.appendChild(copyrightParagraph);
});

const skills = ["HTML", "CSS", "JavaScript", "Python"];

const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = skills[i];

  const listItem = document.createElement("li");
  listItem.textContent = skill;

  skillsList.appendChild(listItem);
}

const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  console.log("Form submitted");

  event.preventDefault();
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  console.log("Name:", userName);
  console.log("Email:", userEmail);
  console.log("Message:", userMessage);

  const messageSection = document.getElementById("messages");
  console.log(messageSection);
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  console.log(messageList);
  console.log(newMessage);

  newMessage.innerHTML = ` 
    <a href="mailto:${userEmail}">${userName}</a>
        <span>: ${userMessage}</span>
    `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.parentNode.removeChild(entry);
  });

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  messageForm.reset();
});

const githubUsername = "rosangely-dls";

fetch(`https://api.github.com/users/${githubUsername}/repos`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const repositories = data;
    if (repositories.length === 0) {
      console.log("No projects found for this user.");
    } else {
      console.log(repositories);

      const projectSection = document.getElementById("Projects");
      const projectList = projectSection.querySelector("ul");

      for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement("li");
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
      }
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
    console.log(
      "Unable to fetch projects at this time. Please try again later."
    );
  });
