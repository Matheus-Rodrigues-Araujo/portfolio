import { DynamicImage } from "./dynamicImage";

const imageLoader = () =>{
    return "/dancing-coffee.gif"
  }
  
export default function DynamicGif() {
  return (
    <div className="relative w-[150px] flex h-[150px] mx-auto lg:mx-0">
      <DynamicImage
        src={imageLoader()}
        alt="A coffee dancing"
        fill
        objectFit="contain"
        sizes="(max-width: 768px) 20vw, (max-width: 1200px) 50vw"
      />
    </div>
  );
}
