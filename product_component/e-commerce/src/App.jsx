import { ProductInfo } from './components/ProductInfo'

function App() {

  return (
    <>
      <div>
        <ProductInfo dataSource = {"../data/product.json"} />
      </div>
    </>
  )
}

export default App
