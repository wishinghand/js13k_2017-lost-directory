import state from './state'
import render from './render'
import konsole from './konsole'

const c = document.getElementById('c')

document.addEventListener('click', () => c.focus())

c.addEventListener('input', (e) => {
  const dirPath = konsole.getDirPath(state.get())
  state.set({
    lastDirPath: dirPath,
    value: c.value.slice(dirPath.length)
  })
})

c.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) konsole.run(state.get().value)
})

render(state.get())
