import React from 'react'
import Header from './Header'
import Categories from './Categories'
import BestBuy from './BestBuy'
import Testimonials from './Testimonials'

export default function Home() {
    return (
        <div>
            <Header/>
            <Categories/>
            <BestBuy/>
            <Testimonials/>

        </div>
    )
}
