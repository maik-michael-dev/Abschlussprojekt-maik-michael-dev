import React, { } from 'react'
import Grundriss from './Grundriss'




export default function Bungalow() {

//  const svgRef = useRef<SVGSVGElement | null>(null)

 /* useEffect(() => {
    const el = svgRef.current?.querySelector<SVGElement>('#wintergarten')
    if (!el) return
    const handler = () => console.log('Wintergarten angeklickt')
    el.addEventListener('click', handler)
    el.style.cursor = 'pointer'
    return () => el.removeEventListener('click', handler)
  }, [])
*/
  return (
    <div>

<Grundriss />
        

    </div>
  )
}
