let template = document.createElement('template')
template.innerHTML = `
<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
  h5 {
    color: purple;
  }
  .user-card {
    padding: 1rem 2rem;
    border-radius: .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 100px;
    background-color: #6b5b95;
  }
  img {
    width: auto; 
    height: 100%;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10%;
  }
</style>
<div class="user-card">
  <img>
  <div class="info-container">
    <div class="info">
      <h5></h5>
      <p><slot name="email" /></p>
      <p><slot name="phone" /></p>
    </div>  
    <button>Hide info</button>
  </div> 
</div>
`

class UserCard extends HTMLElement {
  constructor(){
    super()
    // this.innerHTML = `${this.getAttribute('name')}`\
    this.isShowInfo = true
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('h5').innerText = this.getAttribute('name')
    this.shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('image'))
  }
  
  toggleInfo() {
    this.isShowInfo = !this.isShowInfo

    const button = this.shadowRoot.querySelector('button')
    const info = this.shadowRoot.querySelector('.info')
    if (this.isShowInfo) {
      button.innerText = "Show Info"
      info.style.display = "block"
    } else {
      button.innerText = "Hide info"
      info.style.display = "none"
    }
  }

  connectedCallback() {
    console.log('connected')

    this.shadowRoot.querySelector('button').addEventListener('click', () => this.toggleInfo())
  }

  disconnectedCallback() {
    console.log('disconnected')

    this.shadowRoot.querySelector('button').removeEventListener()
  }
}

window.customElements.define('user-card', UserCard)  
