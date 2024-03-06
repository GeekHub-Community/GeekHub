"use client"
import {motion} from "framer-motion";
import { useRef, useState } from "react";

interface bordetType{
  left?:boolean,
  right?: boolean,
  top?: boolean,
  bottom?: boolean,
  color?:string
}

interface HilightedBoxPropsType{
  children: React.ReactNode
}

const Cardtilt = ({children}:HilightedBoxPropsType) => {
  const boxRef = useRef<HTMLDivElement| null>(null);
  const tourchRef = useRef<HTMLDivElement| null>(null);

  const [rotateX, setRotateX] = useState('0deg');
  const [rotateY, setRotateY] = useState(')deg');
  const [border, setBorder] = useState<bordetType>({
    left: false,
    right:false,
    top: false,
    bottom:false
  });
  const [isMouseEntered, setIsMouseEnterd]= useState<boolean>(false)
    
    
    const handleMouseMove = (e:any)=>{
      setIsMouseEnterd(true);
      const rect: any= boxRef?.current?.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;
  
      const mouseX = (e.clientX - rect.left) ;
      const mouseY = (e.clientY - rect.top) ;

      if(isMouseEntered && tourchRef.current){
        tourchRef.current.style.left = `${mouseX}px`;
        tourchRef.current.style.top= `${mouseY}px`;
      }
  
      const rX=(mouseX/width - 0.5) * 30;
      const rY = (mouseY/height-0.5) * 30;
      
      setRotateX(`${rY}deg`);
      setRotateY(`${rX}deg`);

      (mouseX/width <0.25)? setBorder((border)=> ({...border, left:true})):setBorder((border)=> ({...border, left:false}));
      (mouseX/width >0.75)? setBorder((border)=> ({...border, right:true})):setBorder((border)=> ({...border, right:false}));
      (mouseY/height <0.25)? setBorder((border)=> ({...border, top:true})):setBorder((border)=> ({...border, top:false}));
      (mouseY/height >0.75)? setBorder((border)=> ({...border, bottom:true})):setBorder((border)=> ({...border, bottom:false}));
      

    }

    const handleMouseleave=()=>{
      setIsMouseEnterd(false);
      setRotateX('0deg'); setRotateY('0deg');
      setBorder({left:true, right:true, top:true, bottom:true});
      setTimeout(()=>{
        setBorder({left:false, right:false, top:false, bottom:false})
      }, 100)
    }
    
  return (
    <div className='w-full flex justify-center '
      style={{
        transformStyle: "preserve-3d",
        perspective: '1000px'
      }}
    >
    <motion.div 
    ref={boxRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseleave}
     style={{
        rotateX,
        rotateY,
        transformStyle : "preserve-3d"
        
        
    }}
    className={`mb-10  duration-300
          ${border.left? 'border-l-2':''} 
          ${border.right? 'border-r-2':''}
          ${border.top? 'border-t-2':''}
          ${border.bottom? 'border-b-2':''}
    rounded-xl origin-center flex justify-center items-center flex-col relative overflow-hidden border-indigo-400 group/card`}>

      
        {children}
      

    </motion.div>
    </div>
  )
}

export default Cardtilt;
