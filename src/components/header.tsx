import { FaGithub } from "react-icons/fa";

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-400 to-blue-800 text-white font-bold md:text-2xl p-2 flex justify-between items-center">
          <h1 className="p-2 inline-block hover:text-gray-200">Crônometro da Massa da Amane</h1>
          <a href="http://github.com/AmaneBrazil" target="_blank" rel="noopener noreferrer">
            <FaGithub className="inline-block w-10 h-10 ml-3 hover:text-black" />
          </a>
        </header>
    );
}