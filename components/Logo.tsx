import { cn } from '@/lib/utils'
import { SquareDashedBottomIcon, SquareDashedKanbanIcon, SquareDashedMousePointerIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'



function Logo({
    fontSize ="text-2xl",
    iconSize = 20
}:{
    fontSize?:string,
    iconSize?:number
}) {
    
  return (
    <Link href="/" className={cn
        ("text-2xl font-extrabold flex items-center gap-2",
            fontSize
         )}>
            <div className="rounded-xl bg-gradient-to-r from-orange-300 to-orange-600 p-2 ">
                <SquareDashedBottomIcon size={iconSize}
                className="stroke-blue-900  " /></div>
                <div>
                    <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Deep</span>
                    <span className="text-blue-900 dark:text-stone-300">Scrape</span>
                </div>

            
    </Link>
  )
}

export default Logo