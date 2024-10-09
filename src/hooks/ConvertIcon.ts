import * as Icons from "react-icons/fa6";
import { IconType } from "react-icons";

interface Props {
  icon: string;
}

const ConvertIcon = ({ icon }: Props): IconType => {
  const IconComponent: IconType =
    (Icons as { [key: string]: IconType })[icon] || Icons.FaDiceD20;

  return IconComponent;
};

export default ConvertIcon;
