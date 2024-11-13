import Link from 'next/link'

export default function Navbar (){
    return (
             <div className="w-[1220px] h-[80px] py-[16px] px[220px] bg-orange-400 flex flex-row text-[20px] justify-between"   >
                
                <Link  href="/"   >Home</Link>
                <br />
                <Link  href="/aboutus" >About Us</Link>
                <br />
               <Link  href="/eplore" >Explore</Link>
               <br />
               <Link  href="/explore/deals" >Deals</Link>
               <br />

                
             </div>
    )
}