import { IconProps } from "shared/assets/icons";
import { AppLinks } from "shared/enums";

export interface Link {
  name: string;
  path: AppLinks;
  Icon: (props: IconProps) => React.ReactElement;
}
