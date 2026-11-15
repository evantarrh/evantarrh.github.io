import './style.css';
import monkeyMusicImg from './assets/monkey-music.jpg';
import { bandcamps } from './bandcamps';
import { albums } from './albums';

const app = document.querySelector<HTMLElement>('#app')!;

const space = new Array(80).fill(' ').join('');
const marqueeText = `
  Thank you for visiting my Web-Site!${space}
  I hope you enjoyed it.${space}
  I am working on more music all the time. Even as we speak now${space}
  If you enjoy my music or would like to work together, I would like to hear from you :º)${space}
  Also reach out if you would like to suggest music for me to listen to. That kind of thing makes me happy${space}
  ╰( ͡ ° ͜ʖ ͡° )つ──☆*:・ﾟ
`;

const animateBumpyText = (text: string) => {
  const chars = Array.from(text).map((char, index) => {
    const className = index % 2 === 0 ? 'bumpy' : 'bumpy-2';
    return `<span class="${className}">${char === ' ' ? '&nbsp;' : char}</span>`;
  });

  return chars.join('');
};

const bandcampSection = () => {
  return `
  <div class="portfolio section">
    <h3>listen </h3>

    ${bandcamps
      .map((item) => {
        return `<div class="bandcamp-wrapper">
        <iframe sandbox="allow-scripts allow-same-origin allow-forms allow-popups" style="border: 0; margin: 0 auto; margin-top: 2rem; width: 100%; max-width: 600px; height: 120px;" src="${item.embedUrl}" seamless><a href="${item.albumUrl}">${item.embedTitle}</a></iframe>
      </div>`;
      })
      .join('')}
  </div>
  `;
};

const listeningSection = () => {
  const threeAlbums = albums
    .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 3);

  return threeAlbums
    .map((album) => {
      return `<li class="album-rec">
      <img src="${album.imgUrl}" width="160" height="160" onerror="this.onerror=null; this.src='${monkeyMusicImg}';" />
      <div class="album-info">
      <div class="title">${album.title}</div>
        <div class="artist">${album.artist}</div>
      </div>
    </li>`;
    })
    .join('');
};

app.innerHTML = `

  <div class="hero-area">
    <div class="piano-image"></div>

    <div class="statement">
      <ul>
        <li>Piano</li>
        <li>Composition</li>
        <li>Production</li>
        <li>Music for games</li>
        <li>All genre</li>
      </ul>

      <div class="quote">
        <div>"I love Music!"</div>
        <div>&mdash; Evan Tarrh</div>
      </div>
    </div>
  </div>

  <div class="portfolio section">
    <h3>recent </h3>
    <ul>
      <li class="star">
        <span class="thing-title sunrise"><a href="https://bsky.app/profile/etarrh.bsky.social/post/3mvxfg4bctc2s">Sunrise</a></span>
        &nbsp;&nbsp;&nbsp;
        <span class="tag">game ⍢</span>
        <span class="separator">⟡</span>
        <span class="cta">play on <a href="https://mtthgn.itch.io/sun-rise">itch.io</a></span>
        <div class="description">
          Made music & sounds for Sunrise, a platformer made for Game Boy Advance. Entered into GBA Game Jam 2026.
        </div>
      </li>
      <li class="star">
        <span class="thing-title ply"><a href="https://www.youtube.com/watch?v=RxD7EqdSaZI">Ply</a></span>
        &nbsp;&nbsp;&nbsp;
        <span class="tag">chamber music ❀</span>
        <span class="separator">⟡</span>
        <span class="cta">watch on <a href="https://www.youtube.com/watch?v=RxD7EqdSaZI">youtube</a></span>
        <div class="description">
          A piece of chamber music for piano, cello, and trumpet. Written for Walden Creative Musicians Retreat 2026.
        </div>
      </li>
      <li class="star">
        <span class="thing-title feb-2026"><a href="https://evantarrh.bandcamp.com/album/february-2026">23 Songs I Made In February 2026</a></span>
        &nbsp;&nbsp;&nbsp;
        <span class="tag">album ◉</span>
        <span class="separator">⟡</span>
        <span class="cta">listen on <a href="https://evantarrh.bandcamp.com/album/february-2026">bandcamp</a></span>
        <div class="description">
          I did a song-a-day challenge in February 2026. Lots of different kinds of sounds in there!
        </div>
      </li>
    </ul>
  </div>

  <div class="portfolio section">
    <h3>more </h3>
    <ul class="more-list">
      <li>
        <span>
          <span class="thing-title-simple">
            <a href="https://evantarrh.bandcamp.com/album/undergrowth-single">Undergrowth&nbsp;</a>
          </span>
          <span class="tag">single ⚀</span>
          <span class="separator-small">•</span>
        </span>
        <span class="description-small">song featured on Infloresce Records' 2025 Snowdrop Festival</span>
      </li>
      <li>
        <span>
          <span class="thing-title-simple">
            <a href="https://evantarrh.bandcamp.com/album/songs-for-wayward-minds">songs for wayward minds&nbsp;</a>
          </span>
          <span class="tag">album ◉</span>
        </span>
        <span class="description-small">ambient-ish cozy music from 2024. songs to do laundry to</span>
      </li>
      <li>
        <span>
          <span class="thing-title-simple">
            <a href="https://evantarrh.bandcamp.com/album/more-room-2-grow">room 2 grow&nbsp;</a>
          </span>
          <span class="tag">album ◉</span>
        </span>
        <span class="description-small">2022 album with limited-edition print and 19 bonus tracks</span>
      </li>
      <li>
        <span>
          <span class="thing-title-simple">
            <a href="https://mariopartygod.itch.io/bug-band-beta">bug band&nbsp;</a>
          </span>
          <span class="tag">game ⍢</span>
        </span>
        <span class="description-small">narrative + rhythm game about bugs who rock out</span>
      </li>
      <li>
        <span>
          <span class="thing-title-simple">
            <a href="https://evantarrh.bandcamp.com/album/truffle-hogs-ost">Truffle Hogs&nbsp;</a>
          </span>
          <span class="tag">game ⍢</span>
        </span>
        <span class="description-small">peaked #2 on iOS App Store multiplayer games chart</span>
      </li>
      <li>
        <span>
          <span class="thing-title-simple">
            <a href="http://podcasts.apple.com/us/podcast/techsetters/id1515330905">Techsetters (theme song)&nbsp;</a>
          </span>
          <span class="tag">podcast ☊</span>
        </span>
        <span class="description-small">70+ ratings on Apple Podcasts</span>
      </li>
      <li>
        <span>
          <span class="thing-title-simple">
            <a href="https://visibleworld.neocities.org/jam/">jam&nbsp;</a>
          </span>
          <span class="tag">game ⍢</span>
        </span>
        <span class="description-small">short n sweet web game</span>
      </li>
      <li>
        <span>
            <span class="thing-title-simple">
              <a href="https://evantarrh.bandcamp.com/album/present">Present&nbsp;</a>
            </span>
            <span class="tag">album ◉</span>
        </span>
        <span class="description-small">2019 album with song featured on BBC Radio One</span>
      </li>
    </ul>
  </div>

  ${bandcampSection()}

  <div class="portfolio section">
    <h3>albums i really like</h3>
    <div class="small-album-section-info">(a random selection from a very occasionally updated list)</div>
    <ul>
      ${listeningSection()}
    </ul>
  </div>

  <div class="portfolio section">
    <h3 id="marquee-trigger">evan </h3>
    <br>
    <marquee class="marquee" id="marquee">${animateBumpyText(marqueeText)}</marquee>
  </div>


  <div class="footie">
    <div class="ev-image"></div>

    <div class="socials">
      <ul>
        <li><a href="https://evantarrh.bandcamp.com">Bandcamp</a></li>
        <li><a href="https://soundcloud.com/evantarrh">Soundcloud</a></li>
        <li><a href="https://instagram.com/evantarrh">Instagram</a></li>
        <li><a href="https://bsky.app/profile/etarrh.bsky.social">Bluesky <span class="disclaimer">(mostly shitposts)</span></a>
        <li><a class="email" id="email-me">Email me :)</a></li>
      </ul>
    </div>

    <a class="old-link" href="/folio.html">old site</a>
  </div>
`;

const emailLink = document.getElementById('email-me')!;
emailLink.addEventListener('click', () => {
  alert(
    'My email is my full name @ gmail.com. Sorry for being annoying about this, just trying to reduce spam lol',
  );
});

const heroArea = document.querySelector<HTMLElement>('.hero-area')!;

let offsetPossible = 0;
const makeDePixel = (e: MouseEvent) => {
  if (window.innerWidth < 1000) {
    // Don't
    return;
  }

  const x = e.clientX;
  const y = e.clientY;

  const big = Math.random() > 0.8;
  const offsetXPos = Math.random() > 0.5;
  const offsetYPos = Math.random() > 0.5;
  const offsetX = Math.random() * offsetPossible * (offsetXPos ? 1 : -1);
  const offsetY = Math.random() * offsetPossible * (offsetYPos ? 1 : -1);

  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.display = 'block';
  pixel.style.position = 'absolute';
  pixel.style.width = big ? '3px' : '2px';
  pixel.style.height = big ? '3px' : '2px';
  pixel.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  pixel.style.left = `${e.clientX + offsetX}px`;
  pixel.style.top = `${e.clientY + window.scrollY + offsetY}px`;

  document.body.appendChild(pixel);

  const movePixelInterval = setInterval(() => {
    const should2 = Math.random() > 0.7;
    const amt = Math.random() * 10;

    if (should2) {
      pixel.style.top = `${pixel.getBoundingClientRect().top + window.scrollY + amt}px`;
    }
  }, 500);

  setTimeout(() => {
    pixel.remove();
    clearInterval(movePixelInterval);
  }, 50000);
};

heroArea.addEventListener('mousemove', (e) => {
  const should = Math.random() > 0.9;
  offsetPossible = 0;

  if (!should) {
    return;
  }

  makeDePixel(e);
});

let pixelBloomInterval: ReturnType<typeof setInterval> | undefined;

heroArea.addEventListener('mousedown', (e) => {
  pixelBloomInterval = setInterval(() => {
    makeDePixel(e);
    offsetPossible += 1;
  }, 40);
});

document.addEventListener('mouseup', (e) => {
  offsetPossible = 0;
  clearInterval(pixelBloomInterval);
});

window.addEventListener('resize', (e) => {
  if (window.innerWidth < 1000) {
    Array.from(document.getElementsByClassName('pixel')).map((element) =>
      element.remove(),
    );
  }
});

const marqueeTrigger = document.querySelector('#marquee-trigger')!;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector<HTMLMarqueeElement>('#marquee')!.start();
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(marqueeTrigger);
