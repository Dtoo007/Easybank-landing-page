import { useState } from 'react'
import imageConfetti from './assets/imageConfetti.jpg'
import imageCurrency from './assets/imageCurrency.jpg'
import imagePlane from './assets/imagePlane.jpg'
import iconApi from './assets/iconApi.svg'
import iconBudgeting from './assets/iconBudgeting.svg'
import iconOnline from './assets/iconOnline.svg'
import iconOnboarding from './assets/iconOnboarding.svg'
import iconClose from './assets/iconClose.svg'
import iconOpen from './assets/iconOpen.svg'
import bgDesktop from './assets/bgDesktop.svg'
import logo from './assets/logo.svg'
import './App.css'


const heros = [
  {title: 'Next generation digital banking'},
 { paragraph: 'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more'}
]

const featre = {
  header: 'Why choose Easybank?',
  paragraph: 'We leverage open banking to turn your bank account into your financial hub. Control your finances like never before.'
}

const features = [
  {
    id: 1,
    icon: iconOnline,
    heading: 'Online Banking',
    body: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },

  {
    id: 2,
    icon: iconOnboarding,
    heading: 'Fast Onboarding',
    body: 'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limits.',
  },

  {
    id: 3,
    icon: iconBudgeting,
    heading: 'Simple Budgeting',
    body: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },

  {
    id: 4,
    icon: iconApi,
    heading: 'Open AI',
    body: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
]

const blog = [ 
  {
    id: 1,
    image: imageCurrency,
    title: 'Receive money in any currency with no fees',
    author: 'Claire Robbinson',
    article: 'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only receive money in a single ...'
  },
  {
    id: 1,
    // image: imageRestaurant,
    title: 'Treat yourself without worrying about money',
    author: 'Wilson Hutton',
    article: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each months. That means you ...'
  },
  {
    id: 1,
    image: imagePlane,
    title: 'Take your Easybank card where you go', 
    author: 'Wilson Hutton',
    article: 'We want you to enjoy your travels. That is why we don\'t charge any fees on puchases while you\'re abroad. We will even show you ...',
  },
  {
    id: 1,
    image: imageConfetti,
    title: 'Our invite-only Beta accounts are now live ',
    author: 'Claire Robbinson',
    article: 'After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site ...' ,
  },
]

const navs = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'About' },
  { id: 3, label: 'Contact' },
  { id: 3, label: 'Blog' },
  { id: 3, label: 'Careers' }
];


export default function App () {
  return(
    <div>
      <Nav navs={navs}/>
      <Hero/>
      <Section features={features}/>
    </div>
  )
}

function Button ({children}) {
  return (
    <button>{children}</button>
  )
}

function Nav ({navs}) {
  const [navToggle, setNavToggle] = useState(true);
  function handleToggle () {
    setNavToggle(prev => !prev)
  }
return (
  <nav>
    <div className='nav'>
    <diV><img src={logo} alt='logo'></img></diV>
    <div className='nav-bg'>
    <div className={navToggle ? 'nav-links' : 'nav-links-mobile'}> 
          { navs.map(nav => (
      <ul key={nav.id}>
        <li>{nav.label}</li>
      </ul>
    ))}
    </div>
    </div>

    <div><Button>Request Invite</Button></div>
    <div className='hamburger'>
    { navToggle ? <img src={iconOpen} alt='hamburger-open' className='hamburger-open' onClick={handleToggle}></img> :
      <img src={iconClose} alt='hamburger-close' className='hamburger-close' onClick={handleToggle}></img>
      }
    </div>
  </div>
  </nav>
)
}


function Hero () {
  return(
    <header>
      <div className='body'>
        <div  className='content'>
        <h1>Next generation digital banking</h1>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more</p>
        <div><Button>Request invite</Button></div>
        </div>
         <div className='hero-img'>
       <img src={bgDesktop} alt='image mockup' className='bg-desktop'></img></div>
      </div>
    </header>
  )
}

function Section ({features}) {
  return (
    <section>
      <div>
        <h1>Why choose Easybank</h1>
        <p>We leverage open banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div>
        {features.map(feature => (
          <div key={feature.id}>
          <img>{feature.icon}</img>
          <h4>{feature.heading}</h4>
          <p>{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}