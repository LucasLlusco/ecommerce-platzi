import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({date, totalPrice, totalProducts}) => {

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-full sm:w-80">
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light text-xs'>{date}</span>
          <span className='font-light'>{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard