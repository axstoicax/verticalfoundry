import {schemaFor} from '../structured-data.mjs';
export const metadata={title:'Contact VerticalFoundry | Email, Phone & Inquiries',description:'Contact VerticalFoundry for business systems questions, customer support and partnerships.',alternates:{canonical:'/contact/'}};
export default function Layout({children}){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schemaFor('/contact/')).replace(/</g,'\\u003c')}}/>{children}</>}
