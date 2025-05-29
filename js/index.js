document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
const parentElement = document.body; 
const footer = document.createElement('footer');

footer.classList.add('my-footer');

parentElement.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyrightParagraph = document.createElement('p');
copyrightParagraph.textContent = `\u00A9 ${thisYear} Rosangely De Los Santos. All rights reserved.`;

footer.appendChild(copyrightParagraph);
});

const skills = ['HTML', 'CSS', 'JavaScript', 'Python'];

const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++) {
    const skill = skills[i];

    const listItem = document.createElement('li');
    listItem.textContent = skill;

    skillsList.appendChild(listItem);
}