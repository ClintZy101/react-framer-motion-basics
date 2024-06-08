import { Button } from '@nextui-org/react'
import React from 'react'

export default function HeroSection () {
    return (
        <div className="h-[1000px] bg-[url('/coffee-dark.jpg')] bg-no-repeat bg-contain font-sans">

            <div className="p-5 pt-10 text-center contain-content">
                <h1 className="text-[120px] font-bold text-white ">Savor the Richness</h1>
                <h1 className="text-[120px] font-bold text-white  -mt-10">of Every Brew</h1>

                <span className="">
                    <h2 className="text-white text-lg mb-5  text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, similique debitis cupiditate repudiandae quasi fugiat veritatis at, delectus culpa doloribus incidunt voluptatem possimus nisi voluptatibus odio quia, maxime reiciendis! Explicabo.</h2>
                </span>


                <Button radius="full" size="lg" className="text-lg font-bold bg-white">
                    Order Now
                </Button>
            </div>
        </div>
    )
}
