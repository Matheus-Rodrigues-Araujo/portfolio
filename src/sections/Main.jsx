import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export const Main = () => {
  return (
    <section id="main" className="relative bg-darkBlue grid grid-rows-2 p-40 " >
        {/* row 1 */}
        <div className="flex flex-col gap-10 justify-start  items-start">
          <h1 className="text-lightYellow font-bold sm:p-0 text-[7rem] ">
            Matheus Rodrigues Araujo
          </h1>
          <h2 className="text-diveGreen text-[6.5rem] font-bold text-left w-100 text-[10rem] font-bold text-left">
            Front-end Developer.
          </h2>
          <p className="phrase text-white font-[200] text-left text-[3rem] text-white font-[700] w-[50%] text-left text-[3rem] py-5">
            I'm deeply passionate about meticulously crafting visually stunning
            and highly functional websites that leave a lasting impression.
          </p>

          <div className="flex gap-10">
            <button className="p-3 bg-lightYellow uppercase text-[4rem] font-bold text-darkBlue ring-2 ring-lightYellow">
              Hire me
            </button>
            <button className="p-3 uppercase text-[4rem] text-lightYellow ring-2 ring-lightYellow ">
              Let's talk
            </button>
          </div>
        </div>

        <div className="grid items-center">
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/matheus-rodrigues-araujo/"
              target="_blank"
            >
              <AiFillLinkedin className="text-lightYellow w-36 h-36" />
            </a>
            <a
              href="https://github.com/Matheus-Rodrigues-Araujo"
              target="_blank"
            >
              <AiFillGithub className="text-lightYellow w-36 h-36" />
            </a>
            <a href="#contact">
              <AiFillMail className="text-lightYellow w-36 h-36" />
            </a>
          </div>
        </div>
    </section>
  );
};
