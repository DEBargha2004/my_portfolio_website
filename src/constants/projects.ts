import chatAuthPage from '../../public/project/chat-auth.png'
import chatDmPage from '../../public/project/chat-dm.png'
import chatFriendsPage from '../../public/project/chat-friends.png'
import chatGroupsPage from '../../public/project/chat-group.png'
import chatPostPage from '../../public/project/chat-post.png'
import chatHomePage from '../../public/project/chat-home.png'
import paint from '../../public/project/paint.png'
import clientEmHome from '../../public/project/client-em-home.png'
import clientEmBooking1 from '../../public/project/client-em-booking-1.png'
import clientEmBooking2 from '../../public/project/client-em-booking-2.png'
import clientEmOrders from '../../public/project/client-em-orders.png'
import adminEmLogin from '../../public/project/admin-em-login.png'
import adminEmHome from '../../public/project/admin-em-home.png'
import adminEmItemsCardview from '../../public/project/admin-em-items-card-view.png'
import adminEmItemsTableView from '../../public/project/admin-em-items-table-view.png'
import adminEm from '../../public/project/admin-em-items-add.png'
import adminEmOrdersTable from '../../public/project/admin-em-orders-table.png'
import adminEmOrder from '../../public/project/admin-em-order.png'
import adminEmSidebar from '../../public/project/admin-em-sidebar.png'
import ecommerceLogin from '../../public/project/ecommerce-login.png'
import ecommerceHome from '../../public/project/ecommence-home.png'
import ecommerceCart from '../../public/project/ecommence-cart.png'
import ecommerceProduct from '../../public/project/ecommerce-product.png'
import ecommerceOrders from '../../public/project/ecommerce-orders.png'
import ecommerceCheckout from '../../public/project/ecommence-checkout.png'
import pdfchatbotLogin from '../../public/project/pdfchatbot-login.png'
import pdfchatbotHome from '../../public/project/pdfchatbot-home.png'
import pdfchatbotChat from '../../public/project/pdfchatbot-chat.png'
import pdfchatbotPricing from '../../public/project/pdfchatbot-pricing.png'
import dalleAuth from '../../public/project/dalle-auth.png'
import dalleHome1 from '../../public/project/dalle-home.png'
import dalleHome2 from '../../public/project/dalle-home2.png'
import dalleCreate from '../../public/project/dalle-create.png'
import dalleCreateLoading from '../../public/project/dalle-create-loading.png'
import twistflixAuth from '../../public/project/twistflix-auth.png'
import twistflixHome1 from '../../public/project/twistflix-home-1.png'
import twistflixHome2 from '../../public/project/twistflix-home-2.png'
import twistflixMovie1 from '../../public/project/twistflix-movie-1.png'
import twistflixMovie2 from '../../public/project/twistflix-movie-2.png'
import twistflixPerson from '../../public/project/twistflix-person.png'
import twistflixSeries1 from '../../public/project/twistflix-series-1.png'
import twistflixSeries2 from '../../public/project/twistflix-series-2.png'
import twistflixSeason1 from '../../public/project/twistflix-season-1.png'
import twistflixEpisode1 from '../../public/project/twistflix-episode-1.png'
import twistflixEpisode2 from '../../public/project/twistflix-episode-2.png'
import twistflixEpisode3 from '../../public/project/twistflix-episode-3.png'
import drawerAuth from '../../public/project/drawer-auth.png'
import drawerHomeUpload from '../../public/project/drawer-home-upload.png'
import drawerHomeDelete from '../../public/project/drawer-home-delete.png'
import drawerHome from '../../public/project/drawer-home.png'
import drawerOtp from '../../public/project/drawer-otp.png'
import nivoHome from '../../public/project/nivo-home.png'
import nivoChart1 from '../../public/project/nivo-chart-1.png'
import nivoChart2 from '../../public/project/nivo-chart-2.png'
import nivoChart3 from '../../public/project/nivo-chart-3.png'
import calculator1 from '../../public/project/calculator-1.png'
import calculator2 from '../../public/project/calculator-2.png'
import solarSystem from '../../public/project/solar-system.png'
import localneed1 from '../../public/project/localneed1.png'
import localneed2 from '../../public/project/localneed2.png'
import localneed3 from '../../public/project/localneed3.png'
import localneed4 from '../../public/project/localneed4.png'
import localneed5 from '../../public/project/localneed5.png'
import localneed6 from '../../public/project/localneed6.png'

import { type Project } from '@/types/project'
import { techs } from './techs'

export const projects: Project[] = [
  {
    title: 'Social Media & Chat App',
    github: 'https://github.com/DEBargha2004/next-chat-fixed',
    website: 'https://next-chat-sable.vercel.app/',
    description: `
        This is a social media and a chat application combo like instagram
        where you can upload posts,like,comment and share them as well as you
        can message to an user directly and also you can create groups, make
        admins,add,remove etc.
      `,
    images: [
      chatAuthPage,
      chatHomePage,
      chatDmPage,
      chatGroupsPage,
      chatFriendsPage,
      chatPostPage
    ],
    techStack: [
      techs.next,
      techs.react,
      techs.firebase,
      techs.tailwind,
      techs.clerk,
      techs.algolia,
      techs.framer,
      techs.vercel
    ]
  },
  {
    title: 'Paint',
    description: `This is a paint application where you can draw,write texts insert 
    image from your computer as well as from internet,fill color in a closed space,pick a color. You can also add as many slides 
    as possible and save them.This application has a undo and a redo feature`,
    github: 'https://github.com/DEBargha2004/paint',
    website: 'https://slotiad-paint.netlify.app/',
    images: [paint],
    techStack: [
      techs.vite,
      techs.react,
      techs.tailwind,
      techs.framer,
      techs.netlify
    ]
  },
  {
    title: 'Event Management(client)',
    description: `This is the client part of an event management project meant 
    for commercial pupose. In this website people can select food, occasion date
    etc. and can make an order. The orders are stored in the orders page which then can be 
    edited in future if needed`,
    github: '',
    website: 'https://client-event-management.vercel.app/',
    images: [clientEmHome, clientEmBooking1, clientEmBooking2, clientEmOrders],
    techStack: [
      techs.next,
      techs.react,
      techs.typescript,
      techs.clerk,
      techs.firebase,
      techs.shadcn,
      techs.radix,
      techs.tailwind,
      techs.rhf,
      techs.zod,
      techs.vercel
    ]
  },
  {
    title: 'Event Management(admin)',
    description: `This is the client part of an event management project meant 
    for commercial pupose. In this website the admin can manage all the orders like
    scheduling, completing and cancelling them also the admin can edit orders`,
    github: '',
    website: 'https://admin-event-management.vercel.app/',
    images: [
      adminEmLogin,
      adminEmHome,
      adminEmItemsCardview,
      adminEmItemsTableView,
      adminEm,
      adminEmOrdersTable,
      adminEmOrder,
      adminEmSidebar
    ],
    techStack: [
      techs.next,
      techs.react,
      techs.typescript,
      techs.firebase,
      techs.clerk,
      techs.shadcn,
      techs.radix,
      techs.tailwind,
      techs.rhf,
      techs.zod,
      techs.vercel
    ]
  },
  {
    title: 'E-Commerce',
    description: `An ecommerce application made with next js and payment handled by 
    stripe.This app is backed by firebase for storage and clerk for authentication
    , Also once a payment is made the webhook receives payload from stripe `,
    github: 'https://github.com/DEBargha2004',
    website: 'https://next-ecommerce-kappa-one.vercel.app/',
    images: [
      ecommerceLogin,
      ecommerceHome,
      ecommerceProduct,
      ecommerceCart,
      ecommerceOrders,
      ecommerceCheckout
    ],
    techStack: [
      techs.next,
      techs.react,
      techs.firebase,
      techs.clerk,
      techs.stripe,
      techs.tailwind,
      techs.vercel
    ]
  },
  {
    title: 'PDF Chatbot',
    description: `This is a pdf chatbot that is capable of performing conversations
    with a given pdf taken as context.This app also supports subscription with stripe
    and authentication provided by clerk.`,
    github: 'https://github.com/DEBargha2004/pdfchatbot',
    website: '',
    images: [
      pdfchatbotLogin,
      pdfchatbotHome,
      pdfchatbotChat,
      pdfchatbotPricing
    ],
    techStack: [
      techs.next,
      techs.react,
      techs.firebase,
      techs.clerk,
      techs.shadcn,
      techs.radix,
      techs.stripe,
      techs.typescript,
      techs.tailwind,
      techs.hf,
      techs.langchain,
      techs.pinecone
    ]
  },
  {
    title: 'DALL-E Clone',
    description: `This is an ai powered application integrated with openai api
    and mysql. The frontend is managed using react and Material UI. This application
    also supports infinite scrolling and skeleton loader.`,
    github: 'https://github.com/DEBargha2004/Dalle-clone',
    website: '',
    images: [
      dalleAuth,
      dalleHome1,
      dalleHome2,
      dalleCreate,
      dalleCreateLoading
    ],
    techStack: [
      techs.cra,
      techs.react,
      techs.mui,
      techs.node,
      techs.mysql,
      techs.openai,
      techs.rrd,
      techs.express
    ]
  },
  {
    title: 'Twistflix',
    description: `This a Netflix clone project. This app supports watching
    movie or series trailers that are arranged by genre.This app also supports 
    searching movies, series as well as person depending on your location`,
    github: 'https://github.com/DEBargha2004/Twistflix',
    website: 'https://gleeful-semifreddo-feef56.netlify.app/',
    images: [
      twistflixAuth,
      twistflixHome1,
      twistflixHome2,
      twistflixMovie1,
      twistflixMovie2,
      twistflixPerson,
      twistflixSeries1,
      twistflixSeries2,
      twistflixSeason1,
      twistflixEpisode1,
      twistflixEpisode2,
      twistflixEpisode3
    ],
    techStack: [
      techs.vite,
      techs.react,
      techs.clerk,
      techs.framer,
      techs.rrd,
      techs.netlify
    ]
  },
  {
    title: 'Drawer',
    description: `This a cloud storage platform where you can store
    image,videos,texts and pdf files. The authentication is solely 
    handled by this app and uses nodemailer for sending otp required 
    during changing password`,
    github: 'https://github.com/DEBargha2004/Backup',
    website: '',
    images: [
      drawerAuth,
      drawerOtp,
      drawerHome,
      drawerHomeUpload,
      drawerHomeDelete
    ],
    techStack: [
      techs.cra,
      techs.react,
      techs.mui,
      techs.rrd,
      techs.formik,
      techs.node,
      techs.express,
      techs.nodemailer,
      techs.mysql
    ]
  },
  {
    title: 'Chartpedia',
    description: `This is a Chart application meant for learning
    and understanding about charts. This app supports upto 26 different
    chart types. Also you can create your own custom data in the the specified 
    format and can visualize`,
    github: 'https://github.com/DEBargha2004/Chartpedia',
    website: 'https://idyllic-seahorse-db0098.netlify.app/',
    images: [nivoHome, nivoChart1, nivoChart2, nivoChart3],
    techStack: [techs.cra, techs.react, techs.nivo, techs.rrd, techs.netlify]
  },
  {
    title: 'Calculator',
    description: `This is a fully functional calculator application
    made using react and vite.`,
    github: 'https://github.com/DEBargha2004/vite-calculator',
    website: 'https://resilient-bavarois-e54d9c.netlify.app/',
    images: [calculator1, calculator2],
    techStack: [techs.react, techs.vite, techs.netlify]
  },
  {
    title: 'Solar System 3d',
    description: `A 3D application built using three js to visualize solar system`,
    github: 'https://github.com/DEBargha2004/solar_system',
    website: 'https://peppy-dolphin-afeba3.netlify.app/',
    images: [solarSystem],
    techStack: [techs.three, techs.vite, techs.netlify]
  },
  {
    title: 'Localneed',
    description: `A web interface for localneed company`,
    github: 'https://github.com/DEBargha2004/localneed_final',
    website: 'https://deluxe-cuchufli-6e43bd.netlify.app/',
    images: [
      localneed1,
      localneed2,
      localneed3,
      localneed4,
      localneed5,
      localneed6
    ],
    techStack: [
      techs.cra,
      techs.react,
      techs.tailwind,
      techs.netlify,
      techs.framer
    ]
  }
]
