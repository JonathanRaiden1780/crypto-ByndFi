// Importaciones necesarias
import React from "react";

// Definición de iconos
const icon1 = <i className="bi bi-house side_menu_img"></i>;
// Otros iconos...

// Definición de la interfaz
export interface menu {
  Items?: menu[]
  title?: string
  icon?: FunctionStringCallback
  type?: string
  selected?: boolean
  active?: boolean
  path?: string
  children?: menu[]
  badge?: string
  badgetxt?: string
}

// Exportación de MENUITEMS
export const MENUITEMS: any = [
  // Otros menús...
  {
    menutitle: "MARKET MAKER",
    Items: [
      {
        title: "Dashboard",
        icon: "fe fe-home",
        link: "/components/marketmaker/dashboard",
      },
      {
        title: "Transacciones",
        icon: "fe fe-list",
        link: "/components/marketmaker/transactions",
      },
      {
        title: "Transacciones FIAT",
        icon: "fe fe-dollar-sign",
        link: "/components/marketmaker/fiat-transactions",
      },
      // Modificar la ruta de Transacciones Blockchain
      {
        title: "Transacciones Blockchain",
        icon: "fe fe-link",
        link: "/components/marketmaker/blockchain", // Cambiar de blockchain-tx a blockchain
      },  // <-- Falta esta coma aquí
      {
        title: "Tipo de Cambio",
        icon: "fe fe-refresh-cw",
        link: "/components/marketmaker/exchange-rates",
      },
      {
        title: "Reportes",
        icon: "fe fe-file-text",
        link: "/components/marketmaker/reports",
      },
    ],
  }
  // Otros menús...
];
