import { Menu, Bell, LogOut } from "lucide-react";


interface HeaderProps {
    isExpanded: boolean;
    setIsExpanded: (expanded: boolean) => void;
    breadcrumb: string;
  }
  
export function Header({ isExpanded, setIsExpanded, breadcrumb }: HeaderProps) {
    return (
    <header className="bg-white flex items-center justify-between w-full h-20 px-6 shadow-2xl">
      {/* Ícone do Menu + Texto */}
      <div className="flex items-center gap-4">
      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-120"
      >
        <Menu size={24} color="#a9b1b9" className="transition-all duration-300 " />
      </button>
        <p className="text-gray-700 font-medium">{breadcrumb || ""}</p>
      </div>

      {/* Ícones de Bell e LogOut */}
      <div className="flex items-center gap-4">
        <button>
          <Bell size={24} color="#a9b1b9" />
        </button>
        <button className="flex items-center space-x-2 p-2 hover:bg-red-700 rounded-md">
          <LogOut size={24} color="#a9b1b9" />
        </button>
      </div>
    </header>
  );
}
