import  Logo from '../assets/imgs/logo.png';
import { Link } from 'react-router';
const Sidebar : React.FC = () => {
  return (
    <div className='w-[90%] h-[88px] border flex justify-between items-center'>
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
      <div className='w-1/5 h-full border flex justify-between items-center font-Poppins text-white'>
        <button className='w-[45%] h-3/5 border'>Sign Up</button>
        <button className='w-[45%] h-3/5 border'>Log In</button>
      </div>
    </div>
  );
}
export default Sidebar;