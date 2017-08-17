import state from './state'

const commands = {
  clear: () => state.set({ screen: [] }),
  ls: () => state.set({
    screen: [
      ...state.get().screen,
      '.',
      '..'
    ]
  })
}

export default {
  getDirPath: state => `${state.user}@${state.host}:${state.path}${state.caret} `,
  run: value => {
    const prev = state.get()
    state.set({ value: '', screen: [...prev.screen, prev.lastDirPath + value] })
    if (value in commands) commands[value]()
    else console.log(value)
  }
}
