import { resolve } from "path";

export default async function AboutUs (){
    return (
        <div className="w-[1220px] h-[829px] top-[92px] left-[1px] py-[140px] px-[220px] bg-[Black] flex
        item-center">
            
            <h1  className="text-[18px] text-[white]"  >
            
                About page

                
            </h1>
        </div>
    )
}


await new Promise((resolve) => {
    setTimeout(resolve , 5000);
    
}) ;