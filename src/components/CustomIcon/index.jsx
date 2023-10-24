import { IconContext } from "react-icons";

import { TbSquareRoot } from "react-icons/tb";
import { AiOutlinePercentage, AiOutlineMinus } from "react-icons/ai";
import { FaDivide, FaTimes, FaPlus, FaEquals } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";

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
