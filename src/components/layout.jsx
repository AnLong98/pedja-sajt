import Header from './header'

export default function Layout({ children }) {
  return (
    <div class="h-screen w-screen p-0 mr-0 ml-0 flex flex-col overflow-x-hidden">
      <Header />
      <main>{children}</main>
    </div>
  )
}