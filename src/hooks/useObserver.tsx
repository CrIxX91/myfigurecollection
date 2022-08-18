
import { RefObject, useEffect, useState } from "react";



const useObserver = (ref:RefObject<Element>,options:any) => {

    const {rootMargin} = options;
    const [observerEntry, setObserverEntry] = useState<IntersectionObserverEntry | undefined> (undefined);

    useEffect(() => {
        if(!ref?.current) return;
        const observer = new IntersectionObserver(
            ([entry])=>{
                setObserverEntry(entry);
                if(entry.isIntersecting){
                    console.log("last one in viewport");
                    observer.unobserve(entry.target);
                }
            },{rootMargin});

            observer.observe(ref.current);
      
    }, [ref, rootMargin])
    
    return observerEntry;
}
  
export default useObserver;