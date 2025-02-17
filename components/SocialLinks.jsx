import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const socialData = [
    {
        title: "Github",
        icon: <Github />,
        href: "https://github.com/priyanshujainsss"
    },
    {
        title: "Linkedin",
        icon: <Linkedin />,
        href: "https://in.linkedin.com/in/priyanshu-jain-agrawal"
    },
]
const SocialLinks = () => {
    return (
        <TooltipProvider>

            <div className='flex gap-3 items-center'>
                {
                    socialData?.map(item => (
                        <Tooltip key={item?.title}>
                            <TooltipTrigger asChild>
                                <div className='text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect'>

                                    <Link href={item?.href} key={item?.title} target='_blank'>
                                        <span>
                                            {item?.icon}
                                        </span>
                                    </Link>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent className='bg-hoverColor text-black font-semibold p-1'>{item?.title}</TooltipContent>
                        </Tooltip>

                    ))
                }
            </div>
        </TooltipProvider>
    )
}

export default SocialLinks