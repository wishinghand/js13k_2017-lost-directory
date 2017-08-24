import {makeEntry} from 'entries'
import output from 'output'

const root = makeEntry({
  name: '/',
  dir: []
})

const fakeFile = makeEntry({
  name: '.hater',
  parent: root,
  content: 'this is a fake file\nfor now'
})


const realFile = makeEntry({
  name: 'secret.exe',
  parent: root,
  exe: () => {
    output.stream(['head west', 'past the tree of molestation', 'you will find a key'])
  },
  content: 'curl http://west.oracle.gov/guide'
})

const dir = makeEntry({
  name: 'my Photos',
  parent: root,
  dir: ['fido', 'buster', 'toby'].map(name => makeEntry({
    name,
    parent: dir,
    content: name
  }))
})

export default {

}