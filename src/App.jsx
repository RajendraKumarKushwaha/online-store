
import { Footer } from './customer/components/footer/footer'
import { Navigation } from './customer/components/navigation/navigation'
//import { Product } from './customer/components/product/product'
import { HomePage } from './customer/pages/homepage/homepage'

function App() {
  

  return (
    <>
     <div>
      <Navigation/>
     </div>
     <div>
     <HomePage/>
     {/* <Product/> */}
     </div>
     <Footer/>
    </>
  )
}

export default App
