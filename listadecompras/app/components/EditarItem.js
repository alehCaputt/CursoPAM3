"use client"; 
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";



function EditarItem({ item, onEditFinish }) {
  const [nome, setNome] = useState(item.nome);
  const [quantidade, setQuantidade] = useState(item.quantidade);

  const handleEditItem = async () => {
    const itemRef = doc(db, "itens", item.id);
    await updateDoc(itemRef, {
      nome,
      quantidade
    });
    onEditFinish();
    alert("Item atualizado com sucesso!");
  };

  return (
    <div>
      <h2>Editar Item</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />
      <button onClick={handleEditItem}>Salvar</button>
    </div>
  );
}

export default EditarItem;
