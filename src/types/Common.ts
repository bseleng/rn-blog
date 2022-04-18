export type TNavigatiion = {
  navigate: (route: string, params?: {}) => void,
  getParam: (param:string) => any,
  goBack: () => void
}