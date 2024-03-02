"use server";
import DynamicFooterLinks from "./dynamicFooterLinks";

export default async function Footer() {
  return (
    <footer className="flex h-[100px] bg-purple mt-40 py-20 md:py-0 md:mt-0">
      <div className="footer-container flex flex-col grow items-center justify-evenly ">
        <DynamicFooterLinks />
        <p className="text-[4rem] font-normal text-white">
          © matheuswebcoder.vercel.app 2024
        </p>
      </div>
    </footer>
  );
}
