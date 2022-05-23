import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineUnorderedList,
  AiOutlineInstagram,
  AiOutlineHeart,
} from 'react-icons/ai'
import { VscSettingsGear } from 'react-icons/vsc'
import { BsCompass } from 'react-icons/bs'
import { GiWorld } from 'react-icons/gi'
import { AiOutlineLock } from 'react-icons/ai'
import { RiPriceTag3Line, RiTwitterLine } from 'react-icons/ri'
import { GrFacebook } from 'react-icons/gr'
import { BsLinkedin } from 'react-icons/bs'
export const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
    icon: <AiOutlineInfoCircle />,
  },
  {
    id: 3,
    title: 'Products',
    url: '/products',
    icon: <AiOutlineUnorderedList />,
  },
  {
    id: 4,
    title: 'Wishlists',
    url: '/wishlist',
    icon: <AiOutlineHeart />,
  },
  {
    id: 5,
    title: 'Settings',
    url: '/settings',
    icon: <VscSettingsGear />,
  },
]

export const goalsData = [
  {
    id: 1,
    title: 'Mission',
    icon: <BsCompass />,
  },
  {
    id: 2,
    title: 'Global Delivery',
    icon: <GiWorld />,
  },
  {
    id: 3,
    title: 'Secured Payments',
    icon: <AiOutlineLock />,
  },
  {
    id: 4,
    title: 'Best Offers',
    icon: <RiPriceTag3Line />,
  },
]

export const contactData = [
  {
    id: 1,
    name: 'Instagram',
    icon: <AiOutlineInstagram />,
    url: 'https://www.instagram.com',
  },
  {
    id: 2,
    name: 'Facebook',
    icon: <GrFacebook />,
    url: 'https://www.facebook.com',
  },
  {
    id: 3,
    name: 'Twitter',
    icon: <RiTwitterLine />,
    url: 'https://www.twitter.com',
  },
  {
    id: 4,
    name: 'Linkedin',
    icon: <BsLinkedin />,
    url: 'https://www.linkedin.com',
  },
]
