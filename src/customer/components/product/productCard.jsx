import { useNavigate } from 'react-router-dom';
import './productCard.css';
import PropTypes from 'prop-types';
export function ProductCard({product}) {
  const navigate = useNavigate();
    return (
        <div onClick={()=>navigate("/product/4")} className='productCard w-[13rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt='' />

            </div>
            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p className='font-semibold opacity-50'>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                      <p className='font-semibold'>&#8377;{product.discountedPrice}</p>
                      <p className='line-through opacity-50'>&#8377;{product.price}</p>
                      <p className='font-semibold text-green-700'>{product.discountPersent}% off</p>
                </div>
            </div>
        </div>
    )
}
ProductCard.propTypes = {
    product: PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      discountedPrice: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      discountPersent: PropTypes.number.isRequired,
      size: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
        })
      ).isRequired,
      quantity: PropTypes.number.isRequired,
      topLavelCategory: PropTypes.string.isRequired,
      secondLavelCategory: PropTypes.string.isRequired,
      thirdLavelCategory: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };