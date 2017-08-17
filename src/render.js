import konsole from './konsole'

const c = document.getElementById('c')
const o = document.getElementById('o')

export default state => {
  c.value = konsole.getDirPath(state) + state.value
  o.innerHTML = ''
  state.screen.slice(Math.max(state.screen.length - 25, 0), state.screen.length).forEach(line => {
    const p = document.createElement('p')
    p.innerText = line
    o.appendChild(p)
  })
}
