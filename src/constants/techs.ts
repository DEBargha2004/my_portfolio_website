import nextjs from '../../public/tech/next-js.svg'
import algolia from '../../public/tech/algolia.svg'
import firebase from '../../public/tech/firebase.svg'
import tailwind from '../../public/tech/tailwind-css.svg'
import clerk from '../../public/tech/clerk.svg'
import framer from '../../public/tech/framer-motion.svg'
import react from '../../public/tech/react.svg'
import radix from '../../public/tech/radix-ui.svg'
import zod from '../../public/tech/zod.svg'
import typescript from '../../public/tech/typescript.svg'
import stripe from '../../public/tech/stripe.svg'
import hf from '../../public/tech/hf.svg'
import langchain from '../../public/tech/langchain.png'
import pinecone from '../../public/tech/pinecone.png'
import mui from '../../public/tech/material-ui.svg'
import node from '../../public/tech/nodejs.svg'
import mysql from '../../public/tech/mysql.svg'
import openai from '../../public/tech/openai.svg'
import rhf from '../../public/tech/rhf.png'
import rrd from '../../public/tech/react-router-dom.svg'
import formik from '../../public/tech/formik.png'
import express from '../../public/tech/express.svg'
import nodemailer from '../../public/tech/nodemailer.png'
import vite from '../../public/tech/vite.png'
import nivo from '../../public/tech/nivo.png'
import netlify from '../../public/tech/netlify.svg'
import vercel from '../../public/tech/vercel.png'
import three from '../../public/tech/three.svg'
import cra from '../../public/tech/cra.svg'
import html from '../../public/tech/html.svg'
import css from '../../public/tech/css.svg'
import js from '../../public/tech/javascript.svg'
import github from '../../public/tech/github.svg'
import git from '../../public/tech/git.svg'
import gitbash from '../../public/tech/gitbash.svg'
import c from '../../public/tech/c.svg'
import vscode from '../../public/tech/vscode.svg'
import postman from '../../public/tech/postman.svg'
import shadcn from '../../public/tech/shadcn.svg'
import clerkLogo from '../../public/tech/clerk-logo.svg'
import chatgpt from '../../public/tech/chatgpt.svg'

export const techs = {
  next: {
    image: nextjs,
    title: 'Next JS',
    link: 'https://nextjs.org/'
  },
  react: {
    image: react,
    title: 'React JS',
    link: 'https://react.dev/'
  },
  algolia: {
    image: algolia,
    title: 'Algolia',
    link: 'https://www.algolia.com/'
  },
  firebase: {
    image: firebase,
    title: 'Firebase',
    link: 'https://firebase.google.com/'
  },
  tailwind: {
    image: tailwind,
    title: 'Tailwind CSS',
    link: 'https://tailwindcss.com/'
  },
  clerk: {
    image: clerk,
    title: 'Clerk',
    link: 'https://clerk.com/'
  },
  framer: {
    image: framer,
    title: 'Framer Motion',
    link: 'https://www.framer.com/motion/'
  },
  radix: {
    image: radix,
    title: 'Radix UI',
    link: 'https://www.radix-ui.com/'
  },
  zod: {
    image: zod,
    title: 'Zod',
    link: 'https://zod.dev/'
  },
  rhf: {
    image: rhf,
    title: 'React Hook Form',
    link: 'https://react-hook-form.com/'
  },
  typescript: {
    image: typescript,
    title: 'Typescript',
    link: 'https://www.typescriptlang.org/'
  },
  stripe: {
    image: stripe,
    title: 'Stripe',
    link: 'https://stripe.com/'
  },
  hf: {
    image: hf,
    title: 'Hugging Face',
    link: 'https://huggingface.co/'
  },
  pinecone: {
    image: pinecone,
    title: 'Pinecone',
    link: 'https://www.pinecone.io/'
  },
  langchain: {
    image: langchain,
    title: 'Langchain',
    link: 'https://www.langchain.com/'
  },
  mui: {
    image: mui,
    title: 'Material UI',
    link: 'https://mui.com/'
  },
  node: {
    image: node,
    title: 'Node JS',
    link: 'https://nodejs.org'
  },
  mysql: {
    image: mysql,
    title: 'MySQL',
    link: 'https://www.mysql.com/'
  },
  openai: {
    image: openai,
    title: 'OpenAI',
    link: 'https://openai.com/'
  },
  rrd: {
    image: rrd,
    title: 'React Router Dom',
    link: 'https://reactrouter.com/'
  },
  formik: {
    image: formik,
    title: 'Formik',
    link: 'https://formik.org/'
  },
  express: {
    image: express,
    title: 'Express',
    link: 'https://expressjs.com/'
  },
  nodemailer: {
    image: nodemailer,
    title: 'Node Mailer',
    link: 'https://nodemailer.com/'
  },
  vite: {
    image: vite,
    title: 'Vite',
    link: 'https://vitejs.dev/'
  },
  nivo: {
    image: nivo,
    title: 'Nivo',
    link: 'https://nivo.rocks/'
  },
  netlify: {
    image: netlify,
    title: 'Netlify',
    link: 'https://www.netlify.com/'
  },
  vercel: {
    image: vercel,
    title: 'Vercel',
    link: 'https://vercel.com/'
  },
  three: {
    image: three,
    title: 'Three JS',
    link: 'https://threejs.org/'
  },
  cra: {
    image: cra,
    title: 'Create React App',
    link: 'https://create-react-app.dev/'
  },
  shadcn: {
    image: shadcn,
    title: 'Shadcn UI',
    link: 'https://ui.shadcn.com/'
  }
}

export const skills: { image: any; title: string; link?: string }[] = [
  {
    image: html,
    title: 'HTML'
  },
  {
    image: css,
    title: 'CSS'
  },
  {
    image: js,
    title: 'JavaScript'
  },
  {
    image: git,
    title: 'Git',
    link: 'https://git-scm.com/'
  },
  {
    image: gitbash,
    title: 'Gitbash',
    link: 'https://git-scm.com/'
  },
  {
    image: github,
    title: 'Github',
    link: 'https://github.com/'
  },
  techs.next,
  techs.react,
  techs.firebase,
  techs.tailwind,
  {
    image: clerkLogo,
    title: 'Clerk',
    link: 'https://clerk.com/'
  },
  techs.shadcn,
  techs.framer,
  techs.rhf,
  techs.zod,
  techs.typescript,
  techs.langchain,
  techs.pinecone,
  {
    image: chatgpt,
    title: 'ChatGPT',
    link: ''
  },
  techs.mui,
  techs.mui,
  techs.mui,
  techs.openai,
  techs.rrd,
  techs.formik,
  techs.express,
  techs.three,
  {
    image: vscode,
    title: 'VS Code',
    link: 'https://code.visualstudio.com/'
  },
  {
    image: postman,
    title: 'Postman',
    link: 'https://www.postman.com/'
  },
  {
    image: c,
    title: 'C'
  }
]
