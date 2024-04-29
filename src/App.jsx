import { useState } from 'react'
import imageConfetti from './assets/imageConfetti.svg'
import imageCurrency from './assets/imageCurrency.svg'
import imagePlane from './assets/imagePlane.svg'
import iconApi from './assets/iconApi.svg'
import iconBudgeting from './assets/iconBudgeting.svg'
import iconOnline from './assets/iconOnline.svg'
import iconOnboarding from './assets/iconOnboarding.svg'
import viteLogo from '/vite.svg'
import './App.css'


const hero = {
  header: 'Next generation digital banking',
  sub: 'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more'
}

const faetures = {
  header: 'Why choose Easybank?',
  paragraph: 'We leverage open banking to turn your bank account into your financial hub. Control your finances like never before.'
}

const faetures = [
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



export default function App () {
  return(
    <div>

    </div>
  )
}