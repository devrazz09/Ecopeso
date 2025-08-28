import  Logo from '../assets/imgs/logo.png';
import { Link } from 'react-router';
import Button from './Button/Button';
import { Demo } from '../hooks/try';
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
          <p><Link to={'/'}>Home</Link></p>
          <p><Link to={'donate'}>Donate</Link></p>
          <p><Link to={'merchs'}>Merchs</Link></p>
          <p><Link to={'howitworks'}>How It Works</Link></p>
      </div>
      <div className='w-1/5 h-full flex justify-between items-center font-Poppins'>
        <Button 
          children="Sign Up"
          variant="secondary" 
          textColor="white" 
          bgColor="DarkGreen"
          onClick={Demo} />
        <button className='w-[45%] h-3/5 rounded-[10px] border'>Log In</button>
      </div>
    </div>
  );
}
export default Navbar;