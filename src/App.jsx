
import { Route, Routes } from 'react-router-dom'
import { CustomerRoutes } from './routers/customerRouters'
//import { Product } from './customer/components/product/product'
//
//import { HomePage } from './customer/pages/homepage/homepage'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/*' element={<CustomerRoutes/>}></Route>

    </Routes>
   
    
    </>
  )
}

export default App
