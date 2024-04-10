const projects = document.querySelector("#projects");

const projectsList = [
  {
    title: "animation-mario",
  },
  {
    title: "animation-flipping-cards",
  },
  {
    title: "animation-pop-up",
  },
  {
    title: "animation-position",
  },
  {
    title: "caffe-retro",
  },
  {
    title: "calendar",
  },
  {
    title: "dential-clinic",
  },
  {
    title: "favorite-recipe",
  },
  {
    title: "insurance-project",
  },
  {
    title: "jood",
  },
  {
    title: "media-player",
  },
  {
    title: "personal-page",
  },
  {
    title: "planned-planthood",
  },
  {
    title: "registrerings-form",
  },
];

projectsList.forEach((project, index )=> {
    let html = `
        <li class="project" id=${index}>
            <a class="web-link" href="./${project.title}" >
                <div class="img-wrapper">
                    <img src="./go-to-web.svg" alt=${project.title}>
                </div>
                <h4>${project.title}</h4>
            </a>
            <a class="github-link" href="https://github.com/SarbastHesso/All-projects/tree/main/HTML%26CSS/${project.title}">
              <div class="img-wrapper">
                  <img src="./Octicons-mark-github.svg" alt=${project.title}>
              </div>
            </a>
        </li>
    `;
    projects.innerHTML += html;
})
