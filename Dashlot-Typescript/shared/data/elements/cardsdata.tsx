
interface Background {
  id: number
  src: string
  text1: string
  text2: string
  color: string
  class: string

}
export const Backgroundcards: Background[] = [
  { id: 1, src: "../../../assets/images/faces/11.jpg", text1: 'Adam Smith', text2: 'Finished by today', color: 'primary', class: 'fixed-white' },
  { id: 2, src: "../../../assets/images/faces/12.jpg", text1: 'Elisha Corner', text2: 'Completed 24 days back', color: 'secondary', class: 'fixed-white' },
  { id: 3, src: "../../../assets/images/faces/1.jpg", text1: 'Sarah Alina', text2: 'Completed today', color: 'warning', class: 'fixed-white' },
  { id: 4, src: "../../../assets/images/faces/8.jpg", text1: 'Monica Karen', text2: 'Pending from 4 days', color: 'info', class: 'fixed-white' },
  { id: 5, src: "../../../assets/images/faces/5.jpg", text1: 'Samantha sid', text2: 'In leave for 1 month', color: 'success', class: 'fixed-white' },
  { id: 6, src: "../../../assets/images/faces/14.jpg", text1: 'Sebastien steyn', text2: 'Completed by Tomorrow', color: 'danger', class: 'fixed-white' },
  { id: 7, src: "../../../assets/images/faces/13.jpg", text1: 'Jacob Smith', text2: 'Finished by 24,Nov', color: 'light', class: 'dark' },
  { id: 8, src: "../../../assets/images/faces/16.jpg", text1: 'Pope Adam', text2: 'Completed on 24,may', color: 'dark', class: 'white' }
];

interface Grid {
  id: number
  src: string
  text1: string

}
export const Gridcards: Grid[] = [
  { id: 1, src: "../../../assets/images/media/102.jpg", text1: 'Morphology of a typical fruit.' },
  { id: 2, src: "../../../assets/images/media/101.jpg", text1: 'Research improves ability & agility !' },
  { id: 3, src: "../../../assets/images/media/103.jpg", text1: 'Most tropical areas are suitable' },
  { id: 4, src: "../../../assets/images/media/104.jpg", text1: 'Are They seasonal fruits ?' },
];
interface Gridmarkup {
  id: number
  src: string
  text1: string
  color: string

}
export const Gridmarkupcards: Gridmarkup[] = [
  { id: 1, src: "../../../assets/images/media/83.jpg", text1: 'Product A', color: 'primary' },
  { id: 2, src: "../../../assets/images/media/84.jpg", text1: 'Product B', color: 'secondary' },
  { id: 3, src: "../../../assets/images/media/85.jpg", text1: 'Product-C', color: 'light' }
];
interface Mountain {
  id: number
  src: string
  text1: string
  text2: string
  color: string
  class: string

}
export const Mountaincards: Mountain[] = [
  { id: 1, src: "../../../assets/images/media/61.jpg", text1: 'Mountains', text2: 'New', color: 'primary', class: "" },
  { id: 2, src: "../../../assets/images/media/66.jpg", text1: 'Hills', text2: 'Hot', color: 'secondary', class: "" },
  { id: 3, src: "../../../assets/images/media/72.jpg", text1: 'Nature', text2: 'Offer', color: 'light', class: "dark" }
];
