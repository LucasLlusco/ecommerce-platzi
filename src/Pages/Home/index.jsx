import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We don't have anything :(</div>
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <div className='w-full sm:w-auto px-2'>
       <input
        type="text"
        placeholder='Search a product'
        className='w-full sm:w-80 rounded-lg border border-black p-2 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />       
      </div>

      <div className='px-2 grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home