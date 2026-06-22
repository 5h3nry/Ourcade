// ==========================
// 1. Global State
// ==========================

const state = {
  user: null,
  isLoading: false
};

// ==========================
// 2. Navigation Component
// ==========================

function Nav() {
  return String.raw`
    <nav>
      <div class="nav-left">
        <a href="#/"><img src="Media\Hompage Icon Active.png"></a>
        <a href="#/about">About</a>
        ${state.user ? `<a href="#/dashboard">Dashboard</a>` : ''}
        ${state.user 
          ? `<a href="#" id="logoutLink">Logout</a>` 
          : `<a href="#/login">Login</a>`}
      </div>        
    </nav>
  `;
}
// ==========================
// 3. Route Map
// ==========================

const routes = {
  '#/': Home,
  '#/login': LogIn,
  '#/dashboard': Dashboard,
  '#/about': About
};

// Define protected routes list (what's behind the login)
const protectedRoutes = ['#/dashboard'];

function router() {
  const hash = window.location.hash || '#/';

  // Route guard:
  // If the current route is one of the protected routes AND there is no logged-in user, 
  // redirect the user to the login page.
  if (protectedRoutes.includes(hash) && !state.user) {
    window.location.hash = '#/login';
    return;
  }

  render();
}

// ==========================
// 4. Render Engine - what is being showed on the document (html)
// ==========================

function render() {
  const app = document.getElementById('app');
  const nav = document.getElementById('nav');

  nav.innerHTML = Nav();  //  display nav every time DELETE COMMENT AFTER DONE ARRANGING REGULAR CONTENT

  if (state.isLoading) {
    app.innerHTML = `<p>Loading...</p>`;
    return;
  }

  const page = routes[window.location.hash || '#/'];
  app.innerHTML = page ? page() : `<h1>404 <br><br> Page does not exist</h1>`;

  attachEvents();
}

// ==========================
// 5. Pages Components
// ==========================

function Home() {
  if (state.user) {
    return String.raw`
    <div class="hero">
      <h1 class="hero">Get Ready for <b class="jacquard-12-regular">Pandemonium</b></h2>
      <p>Move over Vayne, there's a new Demon Hunter in town. Play as the latest Champion 'Locke' in League of Legend's demon packed summer event - Pandemonium: Act 2.</p>
      <button type="button">Read More</button>
    </div>
    <h1 class="title">OurCade</h1>
    <p>This is the Home Page</p>
  `;
  }

  return String.raw`
    <div class="hero">
      <h1 class="hero">Get Ready for <b class="jacquard-12-regular">Pandemonium</b></h2>
      <p>Move over Vayne, there's a new Demon Hunter in town. Play as the latest Champion 'Locke' in League of Legend's demon packed summer event - Pandemonium: Act 2.</p>
      <button type="button">Read More</button>
    </div>
    <h1 class="title">OurCade</h1>
    <p>This is the Home Page</p>
  `;
}


function LogIn() {
  if (state.user) {
    return String.raw`
      <h1>Welcome back, <span style="color: #0593f2;">${state.user}</span></h1>
      <button id="logoutBtn">Logout</button>
    `;
  }

  return String.raw`
    <h1>Login</h1>
    <input id="username" placeholder="Username"> <br> <br>
    <input id="password" type="password" placeholder="Password"> <br><br>
    <button id="loginBtn">Login</button>
  `;
}

function Dashboard() {
  return String.raw`
    <h1><span style="color: #0593f2;">${state.user}'s </span>Dashboard</h1>
    <p>Protected content. User must be logged in to view this page</p>
  `;
}

function About() {
  return String.raw`
  <h1>About Page</h1>
  <p> Some information about the app</p>`;
}

// ==========================
// 6. Event Binding
// ==========================

function attachEvents() {

  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) loginBtn.addEventListener('click', login);

  const logoutLink = document.getElementById('logoutLink');
  if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      logout();
    });
  }
}


// =======7. Auth Logic======
//   LOG IN LOGIC
// ==========================

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Please fill in all fields');
    return;
  }

  state.isLoading = true;
  render();

  setTimeout(() => {
    state.user = username;
    state.isLoading = false;
    window.location.hash = '#/dashboard';
  }, 800);
}

// =======7. Auth Logic======
//   LOG OUT LOGIC
// ==========================


function logout() {
  // Ask the user for confirmation
  const confirmed = confirm("Do you really want to log out?");
  if (!confirmed) return; // user cancelled

  // If confirmed, proceed
  state.user = null;

  if (window.location.hash === '#/login' || window.location.hash === '') {
    render(); // re-render Home in logged-out state
  } else {
    window.location.hash = '#/login'; // redirect to Home
  }
}
// ==========================
// 8. Bootstrapping - App Start
// ==========================

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
