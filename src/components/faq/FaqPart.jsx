import { useState } from 'react'
import Container from '../layers/Container'
import AccordianItem from './AccordianItem'
import Button from '../layers/Button'
import FaqIcon from '../../icon/FaqIcon'

const FaqPart = () => {

  let [openIndex, setOpenIndex]=useState(null)
  let accordianData=[
    {
      title:"Which payment methods do you accept?",

      content:"You can pay using all major credit and debit cards, along with Mobile Banking, PayPal, Apple Pay, and Google Pay, for a smooth checkout.",
    },
    
    {
      title:"How long will it take for my order to arrive?",

      content: "Shipping times vary depending on your location and the shipping method selected at checkout.",
    },
    
    {
      title: "Do you offer international delivery?",

      content:  "Yes, we offer international shipping to most countries. Shipping times and costs may vary based on your country & location.",
    },
    
    {
      title:"Can I track my order?",

      content:  "Absolutely! You'll receive a tracking number and a link to the carrier's website once your order ships, allowing you to track your package in real-time. Alternatively, you can always check your order's status by logging into your account and viewing your order history.",
    },
    
    // {
    //   title:"What are your shipping times?",

    //   content:  "Usually arrives within 1-3 business days in domestically and internationally it will take 7-21 business days, depending on the destination country and customs processing.",
    // }
  ]
  return (
      <div className='bg-[#F4F4F4]'>


        <Container className="pb-24  pt-20" >
          <div className='flex justify-between  gap-x-33'>
            <div className=' w-[902px]'>
                {accordianData.map((item, index)=>(
                  <AccordianItem
                  key={index}
                  title={item.title}
                  content={item.content} 
                  onToggle={()=>
                    setOpenIndex(openIndex===index
                      ?
                      null:index)
                    }
                    isOpen={openIndex===index}
                  />
                ))}
            </div>

            <div className='flex items-end '>
             <div className=''>
                  <div className=' flex justify-end translate-y-[-64px]'>
                  <FaqIcon/>
                  </div>
                <h3 className='font-semibold text-4xl text-[#303030] pb-6 font-["Poppins"] leading-[46px] '>Frequently
                <br />Asked Questions
                </h3>
              <p className='font-normal text-xl text-[#303030]  mb-16 font-["Montserrat"] leading-6 max-w-[392px]' >Questions that get asked the most by our clients. Get any burning questions?</p>
              <Button text="Ask A Question" />
              
             </div>
            </div>
          </div>
        </Container>
      </div>
  )
}

export default FaqPart