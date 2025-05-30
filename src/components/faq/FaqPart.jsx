import { useState } from 'react'
import Container from '../layers/Container'
import AccordianItem from './AccordianItem'
import Button from '../layers/Button'
import FaqIcon from '../../icon/productlayouticon/FaqIcon'

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

      content:  "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history.",
    },
    
    // {
    //   title:"What are your shipping times?",

    //   content:  "Usually arrives within 1-3 business days in domestically and internationally it will take 7-21 business days, depending on the destination country and customs processing.",
    // }
  ]
  return (
       <div className="mt-16 py-16 bg-[#F4F4F4]">
                <Container>
                    <div className="flex justify-between items-end relative">
                        <div className="w-[902px] ">
                            {
                                accordianData.map((item,index)=>(
                                        <AccordianItem className={`${ index !== accordianData.length - 1 ? "mb-6" : ""}`}
                                            key={index}
                                            title={item.title}
                                            content={item.content}
                                            onToggle={()=> {setOpenIndex(openIndex === index ? null : index)
                                            }}
                                            isOpen={openIndex === index}
                                        />
                                ))
                            }
                        </div>
                        <div className="w-[544px]"> 
                            <FaqIcon className='absolute top-[18px] right-0 '/>
                            <h3 className='max-w-[317px] font-["Poppins"] font-semibold text-4xl leading-[46px] text-[#303030] mt-[173px]'>Frequently Asked Questions</h3>
                            <p className={`max-w-[395px] font-["Montserrat"] font-normal leading-[30px] text-xl text-[#303030] mt-6 mb-16`}>
                                Questions that get asked the most by our clients. Get any burning questions?
                            </p>
                            <Button text={"Ask A Question"}/>
                        </div>
                    </div>
                </Container>
            </div>
  )
}

export default FaqPart