import { Card, CardContent } from "@/components/ui/card";
import img from "@/assets/cats.jpg";

export default function PetCard() {
  return (
    <Card className="
      w-full 
      max-w-[280px] 
      sm:max-w-[300px] 
      md:max-w-[320px] 
      lg:max-w-[300px] 
      xl:max-w-[280px] 
      2xl:max-w-[300px]
      rounded-xl 
      sm:rounded-2xl 
      shadow-lg 
      hover:shadow-xl 
      overflow-hidden 
      transition-all 
      duration-300 
      hover:scale-102 
      hover:-translate-y-2
      bg-white
      border
      border-gray-100
    ">
      <div className="relative overflow-hidden">
        <img 
          src={img} 
          alt="Rocky" 
          className="
            w-full 
            h-40 
            sm:h-44 
            md:h-48 
            lg:h-44 
            xl:h-40 
            2xl:h-48 
            object-cover 
            transition-transform 
            duration-300 
            hover:scale-110
          " 
        />
        
      </div>
      
      <CardContent className="
        p-3 
        sm:p-4 
        md:p-5 
        space-y-1 
        sm:space-y-2
      ">
        <h2 className="
          text-lg 
          sm:text-xl 
          md:text-xl 
          font-bold 
          text-petify-text-slate 
          truncate
        ">
          Rocky
        </h2>
        
        <p className="
          text-xs 
          sm:text-sm 
          md:text-sm 
          text-petify-text-slate/90 
          font-medium
        ">
          Golden Retriever
        </p>
        
        <div className="
          flex 
          justify-between 
          items-center 
          sm:pt-2
        ">
          <div className="flex items-center gap-1">
            <span className="
              text-xs 
              sm:text-sm 
              text-petify-text-slate/90 
              font-medium
            ">
              ♂ Male
            </span>
          </div>
          
          <p className="
            text-xs 
            sm:text-sm 
            text-petify-text-slate/60 
            hidden 
            sm:block
          ">
            July 4, 2025
          </p>
        </div>
        
        {/* Mobile-only date */}
        <p className="
          text-xs 
          text-petify-text-slate/60 
          sm:hidden 
          pt-1
        ">
          Listed: July 4, 2025
        </p>
        
        
      </CardContent>
    </Card>
  );
}
