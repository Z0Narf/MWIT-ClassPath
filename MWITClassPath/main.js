import './tailwind.css'
import javascriptLogo from './javascript.svg'
import { setupButton } from './pagelink.js'
import { showTime } from './clock.js'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="clock"></h1>
    <div class="card">
      <button id="url" type="button">Go to page1</button>
    </div>
    <div class="card">
      <button id="url1" type="button">
        <img src="D:\_Website Creator\MWIT ClassPath\MWITClassPath\picture\Rickroll.jpg" alt="actually picture is not load TT" />
      </button>
    </div>
    <div class="card">
      <button id="url2" type="button2">Go to page3</button>
    </div>
    <p class="read-the-docs">
      This is the MWITClassPath
    </p>
  </div>
`

const url = 'https://youtu.be/62_osPKmIIg'
const button = document.querySelector('#url')
setupButton(button, url)

const url1 = 'https://www.example.com/'
const button1 = document.querySelector('#url1')
setupButton(button1, url1)

const url2 = 'https://www.example2.com/'
const button2 = document.querySelector('#url2')
setupButton(button2, url2)

showTime();
