import { Link, useLocation } from "react-router-dom";
import { AppLinks } from "shared/enums";
import cn from 'classnames'
import styles from './styles.module.scss'
import { IconProps } from "shared/assets/icons";

interface Props {
  name: string
  path: AppLinks
  Icon: (props: IconProps) => React.ReactElement
}

export const SidebarLink = ({ name, path, Icon }: Props) => {
  const { pathname } = useLocation()
  const isCurrent = path === pathname

  return (
    <div className={cn(styles.link, { [styles.active]: isCurrent })}>
      <Link to={path}>
        <Icon />
        {name}
      </Link>
    </div>
  )
}