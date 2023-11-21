import { type Review } from './components/pages/Home/Reviews/Review'

export const socialMedia = {
  faceBock: 'https://www.facebook.com/people/Valley-Saw-Service-Inc/100063789630805/',
  googleMyBusiness: 'https://www.google.com/maps/place/Hotel+Gega/@40.7023013,19.9563056,17z/data=!3m1!4b1!4m9!3m8!1s0x135a98afa1dcc131:0xed57db82851863d9!5m2!4m1!1i2!8m2!3d40.7022973!4d19.9588805!16s%2Fg%2F11cm_hxyh8?entry=ttu',
  yelp: 'https://www.yelp.com/biz/valley-saw-service-phoenix-2'
}

export const contactPhone = '04-530-1316'
export const address = 'Berat, RFG, Rruga Gjergi Fishta street'
export const addressCords = { latitude: 46.58635156377568, longitude: 2.1796793230151184 }

export const reviews: Review[] = [
  {
    content: 'These guys are good. We have used them for all our specific blade needs and they have never failed. I highly suggest that you look into using them if you are in aluminum/metal manufacturing. Good turnaround and quality.',
    author: 'Shawn P.'
  },
  {
    content: 'Great customer service.',
    author: 'Jose C.'
  },
  {
    content: 'Same day turn around on custom cold saw blades!',
    author: 'Linda T.'
  }
]
