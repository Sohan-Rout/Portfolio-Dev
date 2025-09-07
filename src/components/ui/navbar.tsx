import { useState } from "react";
import { Home, Github, Instagram, Music2, Linkedin, Phone } from "lucide-react";
import CalendarModal from "../CalendarModal";

export default function Navbar() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  return (
    <main>
      <nav className="bg-white rounded-full border border-gray-200 shadow-sm px-6 py-3">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <a href="/" title="Home">
              <div className="hover:rounded-full text-black p-2 hover:bg-black hover:text-white duration-300">
                <Home size={22}/>
              </div>
            </a>
            <a
              href="https://github.com/Thakurayush124"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <div className="hover:rounded-full text-black p-2 hover:bg-black hover:text-white duration-300">
                <Github size={22}/>
              </div>
            </a>
            <a
              href="https://www.instagram.com/ayushthakur1242021/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <div className="hover:rounded-full text-black p-2 hover:bg-black hover:text-white duration-300">
                <Instagram size={22}/>
              </div>
            </a>
            <a
              href="https://open.spotify.com/user/31rahoimntfuabtabsdy6p6n5p3i?si=ca3300486f544e3c"
              target="_blank"
              rel="noopener noreferrer"
              title="Music"
            >
              <div className="hover:rounded-full text-black p-2 hover:bg-black hover:text-white duration-300">
                <Music2 size={22} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-thakur-542bb4202/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <div className="hover:rounded-full text-black p-2 hover:bg-black hover:text-white duration-300">
                <Linkedin size={22} />
              </div>
            </a>
          </div>
          <button
            onClick={() => setIsCalendarOpen(true)}
            className="bg-black flex gap-2 items-center text-white hover:text-neutral-200 px-6 py-2.5 rounded-full hover:scale-105 duration-300 text-sm font-medium"
          >
            <Phone size={18} />
            Book a call
          </button>
        </div>
      </nav>

      {/* Render modal when open */}
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </main>
  );
}
