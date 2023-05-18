const CONST = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
} as const

const RANDOM_OBJ = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
} 


const reduced: Record<keyof typeof RANDOM_OBJ, any> = Object.keys(RANDOM_OBJ).reduce((obj, key) => {
  // @ts-expect-error
  obj[key] = 1;
  return obj;
}, {} as Record<keyof typeof RANDOM_OBJ, any>)

const reduced_const: Record<keyof typeof CONST, any> = Object.keys(CONST).reduce((obj, key) => {
  obj[key] = 1;
  return obj;
}, {} as Record<keyof typeof CONST, any>)