import { useState } from 'react'
import React, { useEffect } from 'react';
import imageConfetti from './assets/imageConfetti.jpg'
import imageCurrency from './assets/imageCurrency.jpg'
import imagePlane from './assets/imagePlane.jpg'
import imageRestaurant from './assets/imageRestaurant.jpg'
import iconApi from './assets/iconApi.svg'
import iconBudgeting from './assets/iconBudgeting.svg'
import iconOnline from './assets/iconOnline.svg'
import iconOnboarding from './assets/iconOnboarding.svg'
import iconClose from './assets/iconClose.svg'
import iconOpen from './assets/iconOpen.svg'
import bgDesktop from './assets/bgDesktop.svg'
import logo from './assets/logo.svg'
import logoFooter from './assets/logoFooter.svg'
import iconInstagram from './assets/iconInstagram.svg'
import iconTwitter from './assets/iconTwitter.svg'
import iconYoutube from './assets/iconYoutube.svg'
import iconPinterest from './assets/iconPinterest.svg'
import iconFacebook from './assets/iconFacebook.svg'

import './App.css'


// const heros = [
//   {title: 'Next generation digital banking'},
//  { paragraph: 'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more'}
// ]

// const featre = {
//   header: 'Why choose Easybank?',
//   paragraph: 'We leverage open banking to turn your bank account into your financial hub. Control your finances like never before.'
// }

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

const blogs = [ 
  {
    id: 1,
    image: imageCurrency,
    title: 'Receive money in any currency with no fees',
    author: 'Claire Robbinson',
    article: 'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only receive money in a single ...'
  },
  {
    id: 1,
    image: imageRestaurant,
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
      <Article blogs={blogs}/>
      <Footer/>
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
    <div><img src={logo} alt='logo' className='logo'></img></div>
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
      <div className='section'>
      <div className='features-content'>
        <h1>Why choose Easybank?</h1>
        <p>We leverage open banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className='features'>
        {features.map(feature => (
          <div key={feature.id} className='feature'>
          <img src={feature.icon}></img>
          <h4>{feature.heading}</h4>
          <p>{feature.body}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

function Article ({blogs}) {
    useEffect(() => {
      const containers = document.querySelectorAll('.article');
      let maxHeight = 100;
  
      // Find the maximum height among all containers
      containers.forEach(container => {
        maxHeight = Math.max(maxHeight, container.clientHeight);
      });
  
      // Set the height of all containers to the maximum height
      containers.forEach(container => {
        container.style.height = maxHeight + '%';
      });
    }, []);
  
  return (
    <article>
      <div className='article-body'>
      
      <h1>Latest Articles</h1>
    
        <div className='articles'>
    {blogs.map(blog=>(
      <div key={blog.id} className='article'>
        <img src={blog.image} className='article-img'></img>
        <div className='article-content'>
        <p>{blog.author}</p>
        <h4>{blog.title}</h4>
        <p>{blog.article}</p>
        </div>
      </div>
    ))}
    </div> 
    </div>
    </article>
  )
}

function Footer ({children}) {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-content'>
          <div className='footer-social'>
            <div><img src={logoFooter}></img></div>
           <div>
           <img src={iconFacebook} className='footer-img'></img>
            <img src={iconYoutube} className='footer-img'></img>
            <img src={iconTwitter} className='footer-img'></img>
            <img src={iconPinterest} className='footer-img'></img>
            <img src={iconInstagram} className='footer-img'></img>
           </div>
          </div>
          <div className='footer-links'>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className='footer-cta'>
        <div><Button>Request Invite</Button></div>
        <p>&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}