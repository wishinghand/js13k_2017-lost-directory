# js13k_2017-lost-directory

## Conceit
You are lost in the labyrinth that is a poorly organized file folder directory. Using basic command line commands, navigate your way to the `exit.exe`.

## To-do:
- css to have `<input>` box w/blinking cursor, text wraparound
    - `<div>` above it to show latest command and its output
- Black background, and `rgb(0, 255, 0)` colored text
- Three commands
    - `ls`
    - `run`
    - `cd`
    - possibility of saving variables as "inventory"

### Usage
Run `npm install`

- `npm start`
  - builds files from `./src/index.js` as an entry point
  - places files into `./build`
  - serves `./build`
  - watches `./src` for specific file types

- `npm test` (doesn't actually run tests)
  - builds minified files from `./src/index.js` as an entry point
  - places files into `./build`
  - builds a single html file and moves assets into `./compile`
  - serves `./compile`
  - watches `./src` for specific file types

- `npm run package`
  - builds minified files from `./src/index.js` as an entry point
  - places files into `./build`
  - builds a single html file and moves assets into `./compile`
  - zips `./compile` into a `./releases`
>>>>>>> 975850f3135482e312b6a7700d01e5e07d4b598c
