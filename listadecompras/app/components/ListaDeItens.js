import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";

function ListaDeItens({ onEdit }) {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "itens"), (querySnapshot) => {
      const novosItens = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItens(novosItens);
    });

    // Limpa a assinatura quando o componente é desmontado
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "itens", id));
    alert("Item deletado com sucesso!");
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      <ul>
        {itens.map(item => (
          <li key={item.id}>
            {item.nome} - {item.quantidade}
            <button onClick={() => onEdit(item)}>Editar</button>
            <button onClick={() => handleDelete(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeItens;
