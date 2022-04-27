export type TNavigatiion = {
  navigate: (route: string, params?: {}) => void,
  getParam: (param:string) => any,
  goBack: () => void,
  addListener: (event:string, callback:()=> void) => TListener,
}

export type TListener = {
  remove: () => void

}