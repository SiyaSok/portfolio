/** @format */
// import Image from "next/image";
import { FileCode, FolderGit2 } from "lucide-react";
import Link from "next/link";

// import logo from "@/assets/images/logo-white.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=' bg-gradient-to-br from-black via-zinc-900 to-black py-4 mt-24'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
        <div className='mb-4 md:mb-0'>
          {/* <Image src={logo} alt='Logo' className='h-8 w-auto' /> */}
        </div>
        <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0'>
          <ul className='flex space-x-4 text-white '>
            <li>
              <Link href='/resume_.pdf' className='flex gap-2 items-center'>
                {" "}
                <FileCode className='w-5 h-5' />
                Resume
              </Link>
            </li>
            <li>
              <Link href='/resume_.pdf' className='flex gap-2 items-center'>
                {" "}
                <FolderGit2 className='w-5 h-5' />
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-sm text-white mt-2 md:mt-0'>
            &copy; {currentYear} SiyandaSokhela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
