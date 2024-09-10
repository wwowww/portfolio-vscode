import FilesIcon from '@/assets/icons/FilesIcon.svg';
import CodeIcon from '@/assets/icons/CodeIcon.svg';
import PencilIcon from '@/assets/icons/PencilIcon.svg';
import MailIcon from '@/assets/icons/MailIcon.svg';
import ExtensionIcon from '@/assets/icons/ExtensionIcon.svg';
import AccountIcon from '@/assets/icons/AccountIcon.svg';
import SettingIcon from '@/assets/icons/SettingIcon.svg';

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
  {
    id: 4,
    icon: ExtensionIcon,
    path: "/code-examples",
  }
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