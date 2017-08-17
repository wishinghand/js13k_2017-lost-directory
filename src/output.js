import state from './state'

const output = {
  /**
   * @param {string[]} lines
   * @param {number?} delay
   */
  stream (lines, delay = 100) {
    lines.forEach((line, i) => {
      setTimeout(() => {
        output.push(line)
      }, delay * i)
    })
  },

  push (line) {
    const currentScreen = state.get().screen
    state.set({ screen: [...currentScreen, line] })

    // setTimeout(() => {
    //   state.set({ screen: })
    // }, delay)
  }
}

export default output
