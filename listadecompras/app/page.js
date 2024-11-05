// app/page.js
"use client";

import { useState } from "react";
import ListaDeItens from "./components/ListaDeItens";
import AdicionarItem from "./components/AdicionarItem";
import EditarItem from "./components/EditarItem";
import './style.css'; // Ajuste o caminho conforme necessário

export default function Home() {
  const [itemParaEditar, setItemParaEditar] = useState(null);

  const handleEdit = (item) => {
    setItemParaEditar(item);
  };

  const handleEditFinish = () => {
    setItemParaEditar(null);
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      {itemParaEditar ? (
        <EditarItem item={itemParaEditar} onEditFinish={handleEditFinish} />
      ) : (
        <AdicionarItem onEdit={handleEdit} />
      )}
      <ListaDeItens onEdit={handleEdit} />
    </div>
  );
}
