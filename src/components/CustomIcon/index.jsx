import { IconContext } from "react-icons";
import {
  FaEquals,
  AiOutlinePercentage,
  FaDivide,
  FaTimes,
  AiOutlineMinus,
  FaPlus,
  FaEquals,
  FiDelete,
} from "react-icons";

const CustomIcon = ({ icon, color, size }) => {
  const iconMap = {
    squareRoot: TbSquareRoot,
    percentage: AiOutlinePercentage,
    division: FaDivide,
    multiplication: FaTimes,
    decrease: AiOutlineMinus,
    sum: FaPlus,
    equal: FaEquals,
    delete: FiDelete,
  };

  const IconComponent = iconMap[icon];

  return (
    <IconContext.Provider value={{ color, size }}>
      <IconComponent />
    </IconContext.Provider>
  );
};

export default CustomIcon;
