const entry = {
  name: '',
  parent: null,
  dir: null,
  exe: () => { console.log(`{this.name}`) },
  content: '' // this is what the file contains if this instantiates a file vs directory
}

export const makeEntry = (...objects) => Object.assign(entry, ...objects)

export const readme = makeEntry({
  name: 'README.md',
  content: '## DEMO Readme'
})
