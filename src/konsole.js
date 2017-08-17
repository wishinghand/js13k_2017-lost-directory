import state from './state'
import output from './output'
import out from './sample_output'

const commands = {
  clear: () => state.set({ screen: [] }),
  ls: () => output.stream(['.', '..']),
  cat: () => output.stream(out)
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
