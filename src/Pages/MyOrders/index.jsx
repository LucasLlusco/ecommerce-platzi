import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { useShoppingCartContext } from '../../Context/shoppingCartContext'

function MyOrders() {
  const { order } = useShoppingCartContext();

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      <div className='flex flex-col w-full sm:w-80 px-2'>
      {
        order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        ))
      }        
      </div>


    </Layout>
  )
}

export default MyOrders