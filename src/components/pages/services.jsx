import React, { useState } from 'react'
import SingleService from '../single-service';
import FormSeo from '../formSeo';
import FormSupport from '../formSupport';
import FormBrand from '../formBrand';

const body = document.getElementById('body');

export default function Services() {

    const [datas, setData] = useState('')

    const handleData = (e) => {
        setData(e.target.value)
        body.classList.add('overflow')
    }

    const handleClose = () => {
        setData('');
        body.classList.remove('overflow')
    }
    const data = [
        {
            src: "logo2.png",
            title: "SEO",
            text: "Studies show that 5 first rankings show interest in online readers. Your ranking should be within these figures, especially compared to your market competitors.",
            value: "seo"
        },
        {
            src: "logo1.png",
            title: "Branding",
            text: "After analyzing the market, the product/service and vision of investors we start to conceptualize the brand name and the detailed implementation strategies in the market. ",
            value: "brand"
        },
        {
            src: "logo3.png",
            title: "Support",
            text: "Your web site standard maintenance will have up-to-date information, back up service, speed and continuous performance monitoring.",
            value: "support"
        },
    ]
    return (
        <div className="services-content">
            {data.map(item =>
                <SingleService
                    key={item.title}
                    logo={item.src}
                    title={item.title}
                    text={item.text}
                    valueBtn={item.value}
                    onClick={handleData}
                />
            )}
            {datas === 'seo' && <FormSeo close={handleClose} />}
            {datas === 'brand' && <FormBrand close={handleClose} />}
            {datas === 'support' && <FormSupport close={handleClose} />}
        </div>
    )
}
