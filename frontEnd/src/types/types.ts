export default interface AuthContextType {
  handleGp: () => Promise<void>
  dev: string
  devS: boolean
  loading: boolean
}
