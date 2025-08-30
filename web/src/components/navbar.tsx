import  Logo from '../assets/imgs/logo.png';
import { Link } from 'react-router';
import Button from './Button/Button';

const Navbar : React.FC = () => {
  return (
    <div className='w-[90%] h-[88px] flex justify-between items-center mt-2'>
      <div className='flex items-center'>
        <img src={Logo} alt="Logo" />
        <p className='text-xl font-Poppins font-bold'>
          <span className='text-LightGreen'>ECO</span>
          <span className='text-Mustard'>PESO</span>
        </p>
      </div>
      <div className='font-Poppins flex justify-between w-2/5 text-base text-white'>
          <p className='hover:text-LightGreen'><Link to={'/'}>Home</Link></p>
          <p className='hover:text-LightGreen'><Link to={'donate'}>Donate</Link></p>
          <p className='hover:text-LightGreen'><Link to={'merchs'}>Merchs</Link></p>
          <p className='hover:text-LightGreen'><Link to={'howitworks'}>How It Works</Link></p>
      </div>
      <div className='w-1/5 h-full flex justify-between items-center font-Poppins'>
        <Button 
          type='submit'
          children="Sign Up"
          variant="primary"
          size='small' 
          onClick={()=>{}} />
        <Button 
          type='submit'
          children="Login"
          variant="secondary"
          size='small' 
          onClick={()=>{}} />
      </div>
    </div>
  );
}
export default Navbar;