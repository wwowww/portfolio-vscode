import ReactIcon from '@/static/icons/ReactIcon.svg';
import HtmlIcon from '@/static/icons/HtmlIcon.svg';
import SassIcon from '@/static/icons/SassIcon.svg';
import TsIcon from '@/static/icons/TsIcon.svg';
import JsonIcon from '@/static/icons/JsonIcon.svg';
import FolderIcon from '@/static/icons/FolderIcon.svg';

export const EXPLORER_BAR_MENU = [
  {
    id: 0,
    icon: ReactIcon,
    path: "/",
    title: "home.tsx"
  },
  {
    id: 1,
    icon: HtmlIcon,
    path: '/about',
    title: 'about.html'
  },
  {
    id: 2,
    icon: SassIcon,
    path: '/contact',
    title: 'contact.scss'
  },
  {
    id: 3,
    icon: TsIcon,
    path: '/projects',
    title: 'projects.ts'
  },
  {
    id: 4,
    icon: JsonIcon,
    path: '/blog',
    title: 'blog.json'
  },
  // {
  //   id: 5,
  //   icon: FolderIcon,
  //   path: '/code-examples',
  //   title: 'code-examples'
  // },
]