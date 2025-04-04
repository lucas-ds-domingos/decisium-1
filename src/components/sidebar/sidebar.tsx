import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, FileText, ChevronRight } from "lucide-react";
import logo2 from "../../img/logo2.png";


const menuItems = [
  { name: "Home", icon: Home, path: "/home" },
  { name: "Orçamento", icon: FileText, path: "Orçamento" },
  { name: "Ordem de Serviço", icon: FileText, path: "" },
  { 
    name: "Contas a Receber", 
    icon: FileText,
    subItems: [
      { name: "Dashboard", path: "" },
      { name: "Clientes", path: "" },
      { name: "Faturamento", path: "" },
      { name: "Baixa de contas a Receber", path: "" },
      { name: "Manutenção em fechamentos", path: "" },
      { name: "Atualização de valores", path: "" },
      { name: "Conhecimento", path: "" },
      { name: "Importação de CTe", path: "" },
      { name: "Associação de Conhecimento", path: "" },
      { 
        name: "Relatórios", 
        subItems: [ // Apenas "Relatórios" tem subitens
          { name: "Ordem de Serviço", path: "" },
          { name: "Contas a receber", path: "" },
          { name: "Emissão de conhecimento", path: "" },
          { name: "Comissão dos Colaboradores", path: "" }
        ] 
      }
    ] 
  },
  {
    name: "Contas a Pagar", 
    icon: FileText,
    subItems: [
      {name: "Dashboard", path: "" },
      {name: "Fornecedores", path: "" },
      {name: "Entrada de Nota Fiscal", path: "" },
      {name: "Importação de Nota Fiscal", path: "" },
      {name: "Baixas de contas a pagar", path: "" },
      {name: "Atualização de valores", path: "" },
      {name: "Relatorios",
        subItems:[
          {name: "Contas a Pagar", path: "" },
        ]
       }
    ]
  },
  {
    name: "Fluxo de Caixa", 
    icon: FileText, 
    subItems:[
      {name: "Dashboard", path: "" },
      {name: "DRE", path: "" },
      {name: "Analise Trimestral", path: "" },
      {name: "Movimentação financeira", path: "" },
      {name: "Resultado por Equipamento", path: "" },
      {name: "Despesas por fornecedor", path: "" },
      {name: "Conciliação Bancária", path: "" },
      {name: "Faturamento anual", path: "" },
      {name: "Contas a Pagar x Receber", path: "" },
    ]
  },
  {
    name: "Configuração", 
    icon: FileText, 
    subItems:[
      {name: "Empresa", path: "" },
      {name: "Colaboradores", path: "" },
      {name: "Equipamentos", path: "" },
      {name: "Localização", path: "",
        subItems:[
          {name: "Pais", path: "" },
          {name: "Estado", path: "" },
          {name: "Cidade", path: "" },
          {name: "Bairro", path: "" },
          {name: "Logradouro", path: "" },
        ]
       }
    ]
  }
];


export default function Sidebar({
  isExpanded,
  setIsExpanded,
  setBreadcrumb,
}: { 
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  setBreadcrumb: (path: string) => void;
}) {
  const navigate = useNavigate();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isExpanded) {
      setOpenSubMenu(null);
      setOpenSubSubMenu(null);
    }
  }, [isExpanded]);

  return (
    <div className="flex h-screen font-Roboto">
      <motion.div
        animate={{ width: isExpanded ? 240 : 80 }}
        className="bg-[#2C3E50] h-full p-4 flex flex-col text-white relative"
        ref={sidebarRef}
      >
        <div className="flex items-center mb-4 gap-2 justify-start">
          <img 
            src={logo2} 
            alt="Logo" 
            className={`transition-all ${isExpanded ? "w-12 h-12" : "w-12 h-auto"} object-contain`}
          />
          {isExpanded && <span className="text-2xl font-bold transition-opacity duration-300">Decisium</span>}
        </div>

        <div className="border-t-2 border-black pt-4"></div>

        <div 
          ref={contentRef}
          className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#4a5a6b] scrollbar-track-transparent hover:scrollbar-thumb-[#5a6b7c] pr-2"
        >
          <nav className="pr-2">
            {menuItems.map(({ name, icon: Icon, path, subItems }) => (
              <div key={name} className="relative">
                <button
                  className="flex items-center text-sm justify-between p-1 w-full hover:bg-[#e2e2e2] hover:text-black"
                  onClick={() => {
                    if (subItems) {
                      setOpenSubMenu(openSubMenu === name ? null : name);
                    } else if (path) {
                      navigate(path);
                      setBreadcrumb(name);
                    }
                  }}
                  disabled={!isExpanded}
                >
                  <div className="flex items-center space-x-1">
                    <Icon size={24} />
                    {isExpanded && <span>{name}</span>}
                  </div>
                  {subItems && isExpanded && (
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${openSubMenu === name ? "rotate-90" : ""}`}
                    />
                  )}
                </button>

                {subItems && openSubMenu === name && isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-6 mt-0"
                  >
                    {subItems.map((sub) => (
                      <div key={sub.name} className="relative">
                        <button
                          onClick={() => {
                            if (sub.subItems) {
                              setOpenSubSubMenu(openSubSubMenu === sub.name ? null : sub.name);
                            } else if (sub.path) {
                              navigate(sub.path);
                              setBreadcrumb(`${name} > ${sub.name}`);
                            }
                          }}
                          className="p-1 rounded-md hover:bg-[#e2e2e2] text-sm hover:text-black w-full flex justify-between items-center text-left"
                        >
                          {sub.name}
                          {sub.subItems && (
                            <ChevronRight
                              size={12}
                              className={`transition-transform ${openSubSubMenu === sub.name ? "rotate-90" : ""}`}
                            />
                          )}
                        </button>

                        {sub.subItems && openSubSubMenu === sub.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-6 mt-1 space-y-1"
                          >
                            {sub.subItems.map((subSub) => (
                              <button
                                key={subSub.name}
                                onClick={() => {
                                  if (subSub.path) {
                                    navigate(subSub.path);
                                    setBreadcrumb(`${name} > ${sub.name} > ${subSub.name}`);
                                  }
                                }}
                                className="p-2 rounded-md hover:bg-gray-300 text-xs w-full text-left"
                              >
                                {subSub.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </motion.div>
    </div>
  );
}
