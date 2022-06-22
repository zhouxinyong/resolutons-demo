import { mergeAll } from 'ramda'
import oldMergeAll from 'test-ramdas'

const data = [
  {
    a: 1
  },
  {
    b: 2,
    c: 3
  },
  {
    c: 4,
    d: 5
  }
]

mergeAll(data)
oldMergeAll(data)