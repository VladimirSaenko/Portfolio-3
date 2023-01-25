const APIURL = 'https://api.github.com/users/';
const main = document.getElementById("main");
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  try {
    const res = await fetch(APIURL + username);
    const data = await res.json();
    // console.log('res: ' + res);
    // console.log('data: ' + data);
    // console.log('data: ' + JSON.stringify(data));
    getRepos(username);
    createUserCard(data);
  } catch (error) {
    createErrorCard('error')
    // console.log(error);
    // console.log(error.message);
  }
}

async function getRepos(username) {
  try {
    const res = await fetch(APIURL + username + '/repos?sort=created');
    const data = await res.json();
    addReposToCard(data);
  } catch (error) {
    console.log(error);
  }
}

function createUserCard(user) {
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : '';
  const { avatar_url, name, followers, following, public_repos} = user;
	const cardHTML = `
    <div class="card">
    <div>
      <img src="${avatar_url}" alt="${name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${followers}<strong>Followers</strong></li>
        <li>${following}<strong>Following</strong></li>
        <li>${public_repos}<strong>Repos</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>
  `;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
  <div class="card"><h1>${msg}</h1></div>`
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');
  repos.slice(0, 5).forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;
    if(user) {
      if(user == 'VladimirSaenko' ||
       user == 'alexanderkhapchenko' ||
       user == 'OneFY' || 
       user == 'Otanukun' ||
       user == 'Vladimirsaenko' ||
       user == 'vladimirSaenko' ||
       user == 'Alexanderkhapchenko' ||
       user == 'AlexanderKhapchenko' ||
       user == 'Vladimir Saenko' ||
       user == 'witcherwow240' ||
       user == 'Alexander Khapchenko') {
        createErrorCard('top secret');
      }
      else if(user == 'aboba' || user == 'AleksandraHrevtsova'
      || user == 'Aleksandra Hrevtsova'
      || user == 'aleksandrahrevtsova') {
        createErrorCard('AMOGUS');
      }
      else {
        getUser(user);
      }
      search.value = '';
    }
})
