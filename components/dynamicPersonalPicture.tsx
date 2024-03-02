import { DynamicImage } from "./dynamicImage";

export default function DynamicPersonalPicture() {
  return (
    <div className="relative w-full flex justify-center h-[25vh] lg:h-[50vh] xl:justify-end">
      <DynamicImage
        src="/assets/images/personal-picture.png"
        alt="Thumb photo"
        priority
        objectFit="contain"
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 80vw"
      />
    </div>
  );
}
