export let name = 'foo module'
export const obj = {
    a:1,
    b:2,
    c(){
      return this.a + this.b + 3
    },
    d: {
      e:1
    }
}
export function hello () {
    console.log('hello')
}
