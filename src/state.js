import render from './render'

const state = {
  user: 'land',
  host: 'lost',
  path: '~',
  lastDirPath: '',
  value: '',
  caret: '$',
  screen: []
}

export default {
  get: () => state,
  set: obj => {
    for (const key in obj) state[key] = obj[key]
    console.log(state)
    render(state)
  }
}
