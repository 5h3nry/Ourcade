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
        ${hash = '#/home'
          ? `<div class='active'>
            <a href="#/home"><img src="Media/Home.png"></a>
            </div>` 
          : `<div class='inactive'>
            <a href="#/home"><img src="Media/Home.png"></a>
            </div>`}
        <div><a href="#/activity"><img src="Media/Activity.png"></a></div>
        <a id="review" href="#/review"><img src="Media/Review.png"></a>
        <div><a href="#/dashboard"><img src="Media/PFP.png"></a></div>
        ${state.user 
          ? `<div><a href="#" id="logoutLink"><img src="Media/Logout.png"></a></div>` 
          : `<div><a href="#/login"><img src="Media/Login.png"></a></div>`}
    </nav>
  `;
}
// ==========================
// 3. Route Map
// ==========================

const routes = {
  '#/home': Home,
  '#/login': LogIn,
  '#/dashboard': Dashboard,
  '#/activity': Activity,
  '#/review': Review,
};

// Define protected routes list (what's behind the login)
const protectedRoutes = ['#/dashboard', '#/activity'];

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

  const page = routes[window.location.hash || '#/home'];
  app.innerHTML = page ? page() : `<h1>404 <br><br> Page does not exist</h1>`;

  attachEvents();
}

// ==========================
// 5. Pages Components
// ==========================

function Home() {
  if (state.user) {
    return String.raw`
    <section>
      <div class="hero">
        <img src="Media\Locke Key Art.jpg">
        <h1 class="hero">Get Ready for <b class="unifrakturmaguntia-regular">Pandemonium</b></h2>
        <p>Move over Vayne, there's a new Demon Hunter in town. Play as the latest Champion 'Locke' in League of Legend's demon packed summer event - Pandemonium: Act 2.</p>
        <a class="button" href="https://youtu.be/1UZGkOzRlws?si=rKFICt2vB0ESaUnd">Experience Pandemonium</a>
      </div>
    </section>
    
    <h1 class="title jersey-10-regular" id="home"><span class="title">Our</span>Cade</h1> <br>

    <div class="shelf">
      <div>
        <h3>Newly Updated →</h3>
      </div>
      <div class="games">
        <img src="Media/Game Thumbnails/Overwatch.jpg">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/Outlast Trials.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
      </div>
    </div>

    <div class="shelf">
      <div>
        <h3>Friend Activity →</h3>
      </div>
      <div class="games">
        <img src="Media/Game Thumbnails/Overwatch.jpg">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/Outlast Trials.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
      </div>
    </div>

    <div class="shelf">
      <div>
        <h3>Newly Updated →</h3>
      </div>
      <div class="games">
        <img src="Media/Game Thumbnails/Overwatch.jpg">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/Outlast Trials.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
      </div>
    </div>
  `;
  }

  return String.raw`
    <section>
      <div class="hero">
        <img src="Media\Locke Key Art.jpg">
        <h1 class="hero">Get Ready for <b class="unifrakturmaguntia-regular">Pandemonium</b></h2>
        <p>Move over Vayne, there's a new Demon Hunter in town. Play as the latest Champion 'Locke' in League of Legend's demon packed summer event - Pandemonium: Act 2.</p>
        <a class="button" href="https://youtu.be/1UZGkOzRlws?si=rKFICt2vB0ESaUnd">Experience Pandemonium</a>
      </div>
    </section>
    
    <h1 class="title jersey-10-regular" id="home"><span class="title">Our</span>Cade</h1> <br>

    <div class="shelf">
      <div>
        <h3>Newly Updated →</h3>
      </div>
      <div class="games">
        <img src="Media/Game Thumbnails/Minecraft.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/Overwatch.jpg">
        <img src="Media/Game Thumbnails/Outlast Trials.png">
      </div>
    </div>

    <div class="shelf">
      <div>
        <h3>Friends are playing →</h3>
      </div>
      <div class="games">
        <img src="Media/Game Thumbnails/Overwatch.jpg">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/Outlast Trials.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
      </div>
    </div>

    <div class="shelf">
      <div>
        <h3>Newly Updated →</h3>
      </div>
      <div class="games">
        <img src="Media/Game Thumbnails/Overwatch.jpg">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/Outlast Trials.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
        <img src="Media/Game Thumbnails/League of Legends.png">
      </div>
    </div>
  `;
}


function LogIn() {
  if (state.user) {
    return String.raw`
      <h1 class="title jersey-10-regular" id="login"><span class="title">Our</span>Cade</h1>
      <h1>Welcome back, <span>${state.user}</span></h1>
      <button id="logoutBtn">Logout</button>
    `;
  }

  return String.raw`
    <h1 class="title jersey-10-regular login"><span class="title">Our</span>Cade</h1>
    <br>
    <img class="login" src="Media/PFP.png">
    <h2 class="jersey-10-regular login">Login</h1>
    <h3 class="jersey-10-regular login">Choose your character!</h2>
    <br>

    
    <form class="login">
      <h3>Username:</h3>
      <input id="username" placeholder="Username"> <br> <br>
      <h3>Password:</h3>
      <input id="password" type="password" placeholder="Password"> <br><br>
      <button class="button" id="loginBtn">Login</button>
    </form>
  `;
}

function Dashboard() {
  return String.raw`
    <h1><span style="color: #0593f2;">${state.user}'s </span>Dashboard</h1>
    <p>Protected content. User must be logged in to view this page</p>
  `;
}

function Activity() {
  return String.raw`
  <h1>Activity Page</h1>
  <p> Some information about the app</p>`;
}

function Review() {
  return String.raw`
  <h1>Review</h1>
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
window.addEventListener('hashchange', Nav)
window.location.hash = '#/home';