const c = document.getElementById('c')

const caret = '$'

const setState = (obj) => {
  for (const key in obj) state[key] = obj[key]
  console.log(state)
  render(state)
}

const state = {
  user: 'land',
  host: 'lost',
  path: '~',
  lastDirPath: '',
  value: ''
}

function getDirPath () {
  return `${state.user}@${state.host}:${state.path}${caret} `
}

c.addEventListener('input', (e) => {
  const dirPath = getDirPath()
  setState({
    lastDirPath: dirPath,
    value: c.value.slice(dirPath.length)
  })
})

function render (state) {
  c.value = getDirPath() + state.value
}

render(state)
