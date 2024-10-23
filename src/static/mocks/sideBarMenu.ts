import FilesIcon from '@/static/icons/FilesIcon.svg';
import CodeIcon from '@/static/icons/CodeIcon.svg';
import PencilIcon from '@/static/icons/PencilIcon.svg';
import MailIcon from '@/static/icons/MailIcon.svg';
import ExtensionIcon from '@/static/icons/ExtensionIcon.svg';
import AccountIcon from '@/static/icons/AccountIcon.svg';
import SettingIcon from '@/static/icons/SettingIcon.svg';

export const SIDE_BAR_MENU = [
  {
    id: 0,
    icon: FilesIcon,
    path: "/",
  },
  {
    id: 1,
    icon: CodeIcon,
    path: "/projects",
  },
  {
    id: 2,
    icon: PencilIcon,
    path: "/blog",
  },
  {
    id: 3,
    icon: MailIcon,
    path: "/contact",
  },
  // {
  //   id: 4,
  //   icon: ExtensionIcon,
  //   path: "/code-examples",
  // }
];

export const BOTTOM_MENU = [
  {
    id: 5,
    icon: AccountIcon,
    path: "/about",
  },
  {
    id: 6,
    icon: SettingIcon,
    path: "/setting"
  }
]