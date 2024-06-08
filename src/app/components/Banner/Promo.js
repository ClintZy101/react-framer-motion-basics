import Image from 'next/image'
import React from 'react'

export default function Promo () {
    return (
        <div className=''>
            <Image
                src="/summersale.png"
                width={ 1500 }
                height={ 500 }
                alt="Picture of the author"

            />
        </div>
    )
}
