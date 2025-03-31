import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "../sidebar/sidebar";

export function Layout() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <Sidebar setSelectedItem={setSelectedItem} />
            <div style={{ flex: 1, padding: "20px" }}>
                <Outlet context={{ selectedItem }} /> 
            </div>
        </div>
    );
}
