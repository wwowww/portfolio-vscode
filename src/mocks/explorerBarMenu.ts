import ReactIcon from '@/assets/icons/ReactIcon.svg';
import HtmlIcon from 'src/assets/icons/HtmlIcon.svg';
import SassIcon from 'src/assets/icons/SassIcon.svg';
import TsIcon from 'src/assets/icons/TsIcon.svg';
import JsonIcon from 'src/assets/icons/JsonIcon.svg';
import FolderIcon from 'src/assets/icons/FolderIcon.svg';

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
  {
    id: 5,
    icon: FolderIcon,
    path: '/code-examples',
    title: 'code-examples'
  },
]