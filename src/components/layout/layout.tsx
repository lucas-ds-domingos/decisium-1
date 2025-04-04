import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";  
import { Header } from "../header/Header";
import { useState } from "react";

export const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Controla a sidebar
  const [breadcrumb, setBreadcrumb] = useState(""); // Controla o breadcrumb

  return (
    <div className="flex h-screen">
      {/* Sidebar recebe o controle do estado */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} setBreadcrumb={setBreadcrumb} />

      {/* Área principal (Header + Conteúdo) */}
      <div className="flex-1 flex flex-col">
        <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} breadcrumb={breadcrumb} />
        <main className="flex-1 p-4 bg-gray-100">
          <Outlet /> {/* Renderiza as rotas filhas */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
