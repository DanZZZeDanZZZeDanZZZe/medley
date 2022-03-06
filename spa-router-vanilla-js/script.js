function route(event) {
  event = event || window.event
  event.preventDefault()
  window.history.pushState({}, "", event.target.href)
  handleLocation()
}

const paths = {
  404: './pages/404.html',
  "/": './pages/main.html',
  "/info": './pages/info.html',
  "/about": './pages/about.html',
} 

async function handleLocation() {
  const path = window.location.pathname
  const route = paths[path] || paths[404] 
  const html = await fetch(route).then(data => data.text())
  document.querySelector('#page').innerHTML = html
}

// called when going back or forward
window.onpopstate = handleLocation
window.route = route

handleLocation()
