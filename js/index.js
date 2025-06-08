//Wait for the DOM to be fully loaded before executing the script //
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  //Create and append footer element to the body
  const parentElement = document.body;
  const footer = document.createElement("footer");

  footer.classList.add("my-footer");

  parentElement.appendChild(footer);

  //Get the current year and add a copyright notice
  const today = new Date();
  const thisYear = today.getFullYear();

  const copyrightParagraph = document.createElement("p");
  copyrightParagraph.textContent = `\u00A9 ${thisYear} Rosangely De Los Santos. All rights reserved.`;

  footer.appendChild(copyrightParagraph);
});

//List of skills to be displayed
const skills = ["HTML", "CSS", "JavaScript", "Python"];

//Select the skills section and its list element
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

//Populate the skills list with items
for (let i = 0; i < skills.length; i++) {
  const skill = skills[i];

  const listItem = document.createElement("li");
  listItem.textContent = skill;

  skillsList.appendChild(listItem);
}

//Select the form and add a submit event listener
const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  console.log("Form submitted");

  //Prevent default form submission behavior
  event.preventDefault();

  //Retrieve form data
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  //Log form data to the console
  console.log("Name:", userName);
  console.log("Email:", userEmail);
  console.log("Message:", userMessage);

  //Create a new message entry
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

  //Add a remove button to the message
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.parentNode.removeChild(entry);
  });

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  //Reset form fields
  messageForm.reset();
});

//Github username for fetching repositories
const githubUsername = "rosangely-dls";

//Fetch repositories from GitHub API
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

      //Select the projects section and its list element
      const projectSection = document.getElementById("Projects");
      const projectList = projectSection.querySelector("ul");

      //Populate the projects list with repository names
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
