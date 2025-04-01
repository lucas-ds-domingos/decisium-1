import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, FileText, ChevronRight, Bell, LogOut } from "lucide-react";
import logo2 from "../../img/logo2.png";


const menuItems = [
  { name: "Home", icon: Home },
  { name: "Ordem de Serviço", icon: FileText },
  { name: "Contas a Pagar", icon: FileText },
  { name: "Contas a Receber", icon: FileText, subItems: ["Fluxo de Caixa", "DRE"] },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  // Fecha os submenus quando a sidebar for minimizada
  useEffect(() => {
    if (!isExpanded) {
      setOpenSubMenu(null);
    }
  }, [isExpanded]);

  return (
    <div className="flex h-screen">
      <motion.div
        animate={{ width: isExpanded ? 230 : 70 }}
        className="bg-[#2C3E50] h-full p-4 flex flex-col text-[#7F8C8D] relative rounded-xl"
      >
        <div className="flex items-center mb-4 gap-2 justify-start overflow-hidden">
        <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center">
            <img 
            src={logo2} 
            alt="Logo" 
            className={`transition-all ${isExpanded ? "w-18 h-14" : "w-12 h-auto"} object-contain`}
            />
            <motion.div 
            initial={{ opacity: 0, width: 0 }} 
            animate={{ opacity: isExpanded ? 1 : 0, width: isExpanded ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            >
            <span className="text-xl font-bold">Decisium</span>
            </motion.div>
        </button>
        </div>

        <div className="border-t-2 border-black pt-4"></div>
        
        <nav className="space-y-2">
        {menuItems.map(({ name, icon: Icon, subItems }) => (
            <div key={name} className="relative">
            <button
                className="flex items-center justify-between p-2 w-full hover:bg-[#e2e2e2] hover:text-black rounded-md"
                onClick={() => {
                if (isExpanded) {
                    setOpenSubMenu(openSubMenu === name ? null : name);
                }
                }}
                disabled={!isExpanded} // Impede clique quando minimizado
            >
                <div className="flex items-center space-x-2">
                <Icon size={24} className="flex-shrink-0" />
                <motion.div
                    initial={{ width: 0, opacity: 0, x: -10 }}
                    animate={{ width: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden whitespace-nowrap"
                >
                    {isExpanded && <span>{name}</span>}
                </motion.div>
                </div>

                {/* Ícone de seta animando quando o submenu abre */}
                {subItems && isExpanded && (
                <motion.div
                    animate={{ rotate: openSubMenu === name ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <ChevronRight size={16} />
                </motion.div>
                )}
            </button>

            {/* Submenu animado de baixo para cima */}
            {subItems && openSubMenu === name && isExpanded && (
                <motion.div
                initial={{ opacity: 0, height: 0, y: 10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="ml-6 mt-2 space-y-1"
                >
                {subItems.map((sub) => (
                    <div key={sub} className="p-2 rounded-md hover:bg-[#e2e2e2] text-sm hover:text-black">
                    {sub}
                    </div>
                ))}
                </motion.div>
            )}
            </div>
        ))}
        </nav>



        <div className="border-t-2 border-black pt-4 my-4"></div>

        <div className="mt-auto space-y-2">
        {/* Animação do texto "CENTRAL" */}
        <motion.p
            initial={{ width: 0, opacity: 0, x: -10 }}
            animate={{ width: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-3 overflow-hidden whitespace-nowrap"
        >
            {isExpanded && "CENTRAL"}
        </motion.p>

        {/* Botão de Notificação */}
        <button className="flex items-center p-2 hover:bg-blue-700 rounded-md">
            <Bell size={24} className="flex-shrink-0" />
            <motion.div
            initial={{ width: 0, opacity: 0, x: -10 }}
            animate={{ width: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="ml-2 overflow-hidden whitespace-nowrap"
            >
            {isExpanded && <span>Notificação</span>}
            </motion.div>
        </button>

        {/* Botão de Logout */}
        <button className="flex items-center p-2 hover:bg-red-700 rounded-md">
            <LogOut size={24} className="flex-shrink-0" />
            <motion.div
            initial={{ width: 0, opacity: 0, x: -10 }}
            animate={{ width: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="ml-2 overflow-hidden whitespace-nowrap"
            >
            {isExpanded && <span>Logout</span>}
            </motion.div>
        </button>
        </div>
      </motion.div>
    </div>
  );
}