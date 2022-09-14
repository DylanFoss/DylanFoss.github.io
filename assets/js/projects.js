var githubUsername = 'DylanFoss'

function updateProjects(){
  fetch('https://gh-pinned-repos.egoist.sh/?username=' + githubUsername)
  .then(response => response.json())
  .then(data => {
    data.forEach(addProject);
  });

}

function addProject(project, _){
  if (project['name'] != githubUsername + '.github.io'){
    if ('content' in document.createElement('template')) {
      var projects = document.getElementById('project-cards');
      var template = document.getElementById('project-card-template');

      var card = template.content.cloneNode(true);
      console.log(card.querySelector("div"));
      card.querySelector("h5").innerHTML = project['repo'];
      card.querySelector("p").innerHTML = project['description'];
      card.querySelector("a").href = project['link'];
      card.querySelector("img").src = "assets/images/" + project['repo'] + ".png";

      projects.appendChild(card);
    }
  }
}