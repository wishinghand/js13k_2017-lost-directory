const file = {
  name: '',
  parent: {},
  dir: [],
  exe: () => { console.log('') },
  content: ''
}

const makeFile = (...objects) => Object.assign(file, ...objects)

export const readme = makeFile({
  name: 'README.md',
  content: '## DEMO Readme'
})
