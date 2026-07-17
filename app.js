// ==========================
// 1. Global State
// ==========================

const state = {
  user: 'Ava', //CHANGE BACK AFTER DONE EDITING PROTECTED PAGES
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

    <section>
      <div class="shelf">
        <div>
          <img class="shelf" src="Media/Discover.png">
          <h3>Newly Updated →</h3>
        </div>
        <div class="games">
          <img src="Media/Game Thumbnails/Outlast Trials.jpg">
          <img src="Media/Game Thumbnails/Subnautica2.jpg">
          <img src="Media/Game Thumbnails/Minecraft.png">
          <img src="Media/Game Thumbnails/League of Legends.png">
          <img src="Media/Game Thumbnails/Overwatch.jpg">
        </div>
      </div>
    </section>

    <section>
      <div class="recommended">
        <div class="header">
          <img id="star" src="Media/Star Left.png"><h2>Ourcade Recommends</h2><img id="star" src="Media/Star Right.png">
        </div>

        <div class="image">
          <img src="Media/Game Thumbnails/Outlast Trials.jpg">
        </div>

        <div class="content">
          <h3 class="rubik-distressed-regular" >The Outlast Trials:<br>Project Boneyard</h3>
          <p>The Outlast Trials' latest update brings a brand new trial for Coyle "Locksock the Warden", a whole overhaul for the Invasion gamemode and a brand new Ex-Pop <strong>"The Biter"</strong>. Needless for you to say, there's a lot for you to <em>sink your teeth into.</em></p>
          <a class="button" href="https://www.youtube.com/watch?v=iVMzxqKMz1k">Watch the Trailer</a>
        </div>
      </div>
    </section>

    <section>
      <div class="shelf">
        <div>
          <img class="shelf" src="Media/Activity.png">
          <h3>Friends are playing →</h3>
        </div>
        <div class="games">
          <img src="Media/Game Thumbnails/Pokopia.jpg">
          <img src="Media/Game Thumbnails/Overwatch.jpg">
          <img src="Media/Game Thumbnails/StardewValley.jpg">
          <img src="Media/Game Thumbnails/League of Legends.png">
          <img src="Media/Game Thumbnails/Outlast Trials.jpg">
          <img src="Media/Game Thumbnails/Palworld.jpg">
        </div>
      </div>
    </section>

    <section>
      <div class="shelf">
        <div>
          <img class="shelf" src="Media/Popular.png">
          <h3>Popular →</h3>
        </div>
        <div class="games">
          <img src="Media/Game Thumbnails/Overwatch.jpg">
          <img src="Media/Game Thumbnails/League of Legends.png">
          <img src="Media/Game Thumbnails/Outlast Trials.jpg">
          <img src="Media/Game Thumbnails/Marvel Rivals.jpg">
          <img src="Media/Game Thumbnails/Palworld.jpg">
          <img src="Media/Game Thumbnails/Subnautica2.jpg">
        </div>
      </div>
    </section>
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

    <section>
      <div class="shelf">
        <div>
          <img class="shelf" src="Media/Discover.png">
          <h3>Newly Updated →</h3>
        </div>
        <div class="games">
          <img src="Media/Game Thumbnails/Outlast Trials.jpg">
          <img src="Media/Game Thumbnails/Subnautica2.jpg">
          <img src="Media/Game Thumbnails/Minecraft.png">
          <img src="Media/Game Thumbnails/League of Legends.png">
          <img src="Media/Game Thumbnails/Overwatch.jpg">
        </div>
      </div>
    </section>

    <section>
      <div class="recommended">
        <div class="header">
          <img id="star" src="Media/Star Left.png"><h2>Ourcade Recommends</h2><img id="star" src="Media/Star Right.png">
        </div>

        <div class="image">
          <img src="Media/Game Thumbnails/Outlast Trials.jpg">
        </div>

        <div class="content">
          <h3 class="rubik-distressed-regular" >The Outlast Trials:<br>Project Boneyard</h3>
          <p>The Outlast Trials' latest update brings a brand new trial for Coyle "Locksock the Warden", a whole overhaul for the Invasion gamemode and a brand new Ex-Pop <strong>"The Biter"</strong>. Needless for you to say, there's a lot for you to <em>sink your teeth into.</em></p>
          <a class="button" href="https://www.youtube.com/watch?v=iVMzxqKMz1k">Watch the Trailer</a>
        </div>
      </div>
    </section>

    <section>
      <div class="shelf">
        <div>
          <img class="shelf" src="Media/Activity.png">
          <h3>Friends are playing →</h3>
        </div>
        <div class="games blur">
          <img src="Media/Game Thumbnails/Pokopia.jpg">
          <img src="Media/Game Thumbnails/Overwatch.jpg">
          <img src="Media/Game Thumbnails/StardewValley.jpg">
          <img src="Media/Game Thumbnails/League of Legends.png">
          <img src="Media/Game Thumbnails/Outlast Trials.jpg">
          <img src="Media/Game Thumbnails/Palworld.jpg">
        </div>
        <a class="disclaimer" href="#/login">To see Friend Activity, please Login.</a>
      </div>
    </section>

    <section>
      <div class="shelf">
        <div>
          <img class="shelf" src="Media/Popular.png">
          <h3>Popular →</h3>
        </div>
        <div class="games">
          <img src="Media/Game Thumbnails/Overwatch.jpg">
          <img src="Media/Game Thumbnails/League of Legends.png">
          <img src="Media/Game Thumbnails/Outlast Trials.jpg">
          <img src="Media/Game Thumbnails/Marvel Rivals.jpg">
          <img src="Media/Game Thumbnails/Palworld.jpg">
          <img src="Media/Game Thumbnails/Subnautica2.jpg">
        </div>
      </div>
    </section>
  `;
}


function LogIn() {
  if (state.user) {
    return String.raw`
    <div class="title">
      <h1 class="title jersey-10-regular" id="login"><span class="title"><a class="noUnderline" href="#/home">Our</span>Cade</h1></a>
    </div>
      <h1>Welcome back, <span>${state.user}</span></h1>
      <button id="logoutBtn">Logout</button>
    `;
  }

  return String.raw`
    <div class="title">
      <h1 class="title jersey-10-regular" id="login"><span class="title"><a class="noUnderline" href="#/home">Our</span>Cade</h1></a>
    </div>
    <br>
    <img class="login" src="Media/PFP.png">
    <h2 class="jersey-10-regular login">Login</h1>
    <h3 class="jersey-10-regular login">Choose your character!</h2>
    <br>

    
    <form class="login">
      <h3>Username:</h3>
      <input autocomplete="off" id="username" placeholder="Username"> <br> <br>
      <h3>Password:</h3>
      <input autocomplete="off" id="password" type="password" placeholder="Password"> <br><br>
      <button class="button" id="loginBtn">Login</button>
    </form>
  `;
}

function Dashboard() {
  return String.raw`
    <div class="title">
      <h1 class="title jersey-10-regular" id="login"><span class="title"><a class="noUnderline" href="#/home">Our</span>Cade</h1></a>
    </div>

    <div><h1 class="activity jersey-10-regular">${state.user}'s Dashboard</h1></div>
    
    <div class="dashboard-wrapper">
      <div class="dashboard pfp">
        <img src="Media/PFP.png">
      </div>

      <div class="dashboard info">
        <h2 id="username">${state.user}</h2>
        <p>Hours Played: 67</p>
        <p>Games Owned: 15</p>
        <p>Achievements Earned: 329</p>
      </div>

      <div class="dashboard content">
        <div class="shelf">
          <div>
            <img class="shelf" src="Media/Top Games.png">
            <h3>Your Top Games →</h3>
          </div>
          
          <div class="games">
            <img src="Media/Game Thumbnails/Pokopia.jpg">
            <img src="Media/Game Thumbnails/StardewValley.jpg">
            <img src="Media/Game Thumbnails/Minecraft.png">
            <img src="Media/Game Thumbnails/League of Legends.png">
            <img src="Media/Game Thumbnails/Overwatch.jpg">
          </div>
        </div>

        <div id="friends" class="shelf">
        <div>
          <img class="shelf" src="Media/Activity.png">
          <h3>Friends →</h3>
        </div>
        <div class="friends">
          <img src="Media/PFPs/Mario.jpg">
          <img src="Media/PFPs/Luigi.jpg">
          <img src="Media/PFPs/Peach.jpg">
          <img src="Media/PFPs/Kirby.jpg">
          <img src="Media/PFPs/Bayonetta.jpg">
          <img src="Media/PFPs/Pikachu.png">
          <img src="Media/PFPs/Coyle.jpg">
          <img src="Media/PFPs/Villager.jpg">
        </div>
      </div>
  `;
}

function Activity() {
  return String.raw`
  <div class="title">
      <h1 class="title jersey-10-regular" id="login"><span class="title"><a class="noUnderline" href="#/home">Our</span>Cade</h1></a>
  </div>

  <div><h1 class="activity jersey-10-regular">Activity</h1></div>

  <section>
    <div class="activity-wrapper">
      <div class="activity"><img class="pfp" src="Media/PFPs/Mario.jpg"><p><strong>Mario</strong> played <strong>Subnautica 2</strong> for the first time.</p></div>
      <div class="activity"><img class="pfp" src="Media/PFPs/Kirby.jpg">
        <div><p><strong>Kirby</strong> recommends <strong>The Outlast Trials</strong>:</p><br><p class="user-review">"DO NOT INHALE THE ENEMIES IT STRAIGHT UP GAVE ME SCHIZOPHRENIA !!!"</p></div>
      </div>
      <div class="activity"><img class="pfp" src="Media/PFPs/Pikachu.png"><p><strong>Pikachu</strong> played <strong>Pokopia</strong> for the first time.</p></div>
      <div class="activity"><img class="pfp" src="Media/PFPs/Coyle.jpg"><p><strong>Coyle</strong> reached <strong id="emerald">Emerald</strong> in <strong>League of Legends</strong>!</p></div>
      <div class="activity"><img class="pfp" src="Media/PFPs/Luigi.jpg">
        <div><p><strong>Luigi</strong> does not reccomend <strong>The Outlast Trials</strong>:</p><br><p class="user-review">"MAMA MIA!"</p></div>
      </div>
      <div class="activity"><img class="pfp" src="Media/PFPs/Mario.jpg">
        <div><p><strong>Mario</strong> recommends <strong>The Outlast Trials</strong>:</p><br><p class="user-review">"Played this with Luigi and he cried the whole time, TOTALLY reccomend."</p></div>
      </div>
      <div class="activity"><img class="pfp" src="Media/PFPs/Villager.jpg"><p><strong>Villager</strong> played <strong>Stardew Valley</strong> for the first time.</p></div>
      <div class="activity"><img class="pfp" src="Media/PFPs/Luigi.jpg"><p><strong>Luigi</strong> played <strong>The Outlast Trials</strong> for the first time.</p></div>
      <div class="activity"><img class="pfp" src="Media/PFPs/Mario.jpg"><p><strong>Mario</strong> played <strong>The Outlast Trials</strong> for the first time.</p></div>
      <div class="activity"><img class="game" src="Media/Game Thumbnails/Outlast Trials.jpg"><p><strong>The Outlast Trials</strong> recieved an update: <strong>"Project Boneyard"</strong></p></div>
      <div class="activity"><img class="pfp" src="Media/PFPs/Bayonetta.jpg"><p><strong>Bayonetta</strong> reached <strong id="champion">Champion</strong> in <strong>Overwatch</strong>!</p></div>
      <div class="activity"><img class="pfp" src="Media/PFPs/Peach.jpg"><p><strong>Peach</strong> played <strong>Minecraft</strong> for the first time.</p></div>
    </div>
</section>
  `;
}

function Review() {
  return String.raw`
    <div class="title">
      <h1 class="title jersey-10-regular" id="login"><span class="title"><a class="noUnderline" href="#/home">Our</span>Cade</h1></a>
    </div>

    <div><h1 class="activity jersey-10-regular">Review</h1></div>

    <div class="review-wrapper">
      <div class="review game">
        <img src="Media/Game Thumbnails/League of Legends.png">
      </div>

      <div class="review select">
          <label for="game-Select">Game:</label>
          <select name="select-Game" id="game-Select">
            <option value="League">League of Legends</option>
            <option value="Outlast">The Outlast Trials</option>
            <option value="Minecraft">Minecraft</option>
            <option value="Subnautica">Subnautica 2</option>
            <option value="Pokopia">Pokopia</option>
            <option value="Marvel">Marvel Rivals</option>
          </select><br>


          <label for="playtime-Select">Playtime:</label>
          <select name="select-Playtime" id="playtime-Select">
            <option value="0-100">0-100 Hours</option>
            <option value="100-500">100-500 Hours</option>
            <option value="500-1000">500-1000 Hours</option>
            <option value="1000-2000">1000-2000 Hours</option>
            <option value="2000-3000">2000-3000 Hours</option>
            <option value="3000+">3000+ Hours</option>
          </select><br>

          <label for="rank-Select">Rank:</label>
          <select name="select-Rank" id="rank-Select">
            <option value="Iron">Iron</option>
            <option value="Bronze">Bronze</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
            <option value="Emerald">Emerald</option>
          </select><br>

          <label class="star-rating" for="star-rating">Rating:</label><br>
          <label> 1</label><input name="rating" type="radio">
          <label> 2</label><input name="rating" type="radio">
          <label> 3</label><input name="rating" type="radio">
          <label> 4</label><input name="rating" type="radio">
          <label> 5</label><input name="rating" type="radio">
      </div>

      <div class="review-input">
        <label name="review">Leave your review:</label><br>
        <textarea name="review">Type your review here.</textarea>
        <input id="submit" type="submit" />
      </div>
    </div>
  `;
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

function resetScroll() {
  document.getElementById("app").scroll(0, 0);
}
// ==========================
// 8. Bootstrapping - App Start
// ==========================

window.addEventListener('hashchange', router);
window.addEventListener('hashchange', resetScroll);
window.addEventListener('load', router);
window.addEventListener('hashchange', Nav)
window.location.hash = '#/home';