import { useNavigate } from "react-router";
import Button from "../../../components/Button/Button";



const CTA: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div 
    className=" flex gap-8 mt-18">

      <Button
      type='button'
      children="Discover More"
      variant="primary"
      size='medium'
      onClick={()=>{navigate('/discovermore')}} 
      />

    <Button 
      type='button'
      children="Learn More"
      variant="secondary"
      size='medium'
      onClick={()=>{navigate('/learnmore')}} 
      />
      
    </div>
  )
};
export default CTA;