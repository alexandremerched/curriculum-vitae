import { Footer } from "./components/Footer"
import { Main } from "./components/Main"

function App() {
  return (
    <div className="flex justify-center bg-gray-200 w-screen h-screen overflow-auto print:overflow-hidden">
      <div className="flex flex-col w-[792px] h-[1120px] py-4 print:p-0">
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
