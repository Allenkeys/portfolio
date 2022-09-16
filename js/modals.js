const projects = [
  {
    name: 'Tonic',
    image: './images/Snapshoot1.png',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    live: '#',
    repository: 'https://github.com/Allenkeys/portfolio',
    technology: ['html', 'css', 'javascript'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    name: 'uber navigation',
    image: './images/Snapshoot2.png',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    see: '#',
    repository: 'https://github.com/Allenkeys/portfolio',
    technology: ['html', 'css', 'javascript'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  },
  {
    name: 'facebook 360',
    image: './images/Snapshoot3.png',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    live: 'https://nedramrez.github.io/portfolio',
    repository: 'https://github.com/Allenkeys/portfolio',
    technology: ['html', 'css', 'javascript'],
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  },
  {
    name: 'multi-post stories',
    image: './images/Snapshoot4.png',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    live: '#',
    repository: 'https://github.com/Allenkeys/portfolio',
    technology: ['html', 'css', 'javascript'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  },
];

const portfolio = document.querySelector('#portfolio');

function getAllProjects() {
  projects.forEach((project) => {
    const cards = document.createElement('div');
    cards.classList.add('skills');

    cards.innerHTML = `<img class="sample" src='${project.image}' alt="uber navigation project snapshoot">
<header class="project-header">
<h2>${project.name}</h2>
<ul class="tags">
<li class="diff-li">${project.tags[0]}</li>
<li>${project.tags[1]}</li>
<li>${project.tags[2]}</li>
</ul>
<p>${project.description}</p>
<ul class="set-stack">
<li class="stack">${project.technology[0]}</li>
<li class="stack">${project.technology[1]}</li>
<li class="stack">${project.technology[2]}</li>
</ul>
<button class="btn projectBtn" type="submit">see project</button>
</header>`;
    portfolio.appendChild(cards);
  });
}

function getProjectModal() {
  const projectList = [];

  projects.forEach((project) => {
    const modal = document.createElement('div');
    modal.classList.add('modal-wrapper');
    modal.innerHTML = `<div class="skills mod-container">
<div class="modal-header">
<p class="modal-close"><i class="fa-solid fa-xmark"></i></p>
<h2>${project.name}</h2>
<ul class="tags">
<li class="diff-li">${project.tags[0]}</li>
<li>${project.tags[1]}</li>
<li>${project.tags[2]}</li>
</ul>
</div>

<img class="sample mod" src='${project.image}' alt="multi-purpose stories project snapshoot">

<header class="project-header">
<p>${project.description}</p>
<ul class="set-stack">
<li class="stack">${project.technology[0]}</li>
<li class="stack">${project.technology[1]}</li>
<li class="stack">${project.technology[2]}</li>
</ul>
<div class="rule"></div>
<div class="btnflex">
<button class="btn mod" type="submit">see live<img src="../images/livecon.png" alt="check live version"></button>
<button class="btn mod" type="submit">see source<img src="../images/giticon.png" alt="check live version"></button
</div>
</header>
</div>`;
    projectList.push(modal);
  });
  return projectList;
}

function getSpecificModal() {
  const projectBtns = document.querySelectorAll('.projectBtn');
  const allProjectModal = getProjectModal();

  for (let i = 0; i < projectBtns.length; i += 1) {
    projectBtns[i].addEventListener('click', () => {
      allProjectModal[i].classList.add('active');
      portfolio.appendChild(allProjectModal[i]);

      const close = document.querySelectorAll('.modal-close');
      close.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.parentElement.parentElement.parentElement.classList.remove('active');
        });
      });
    });
  }
}

getAllProjects();
getSpecificModal();
