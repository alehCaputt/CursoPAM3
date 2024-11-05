import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

function AdicionarItem({ item }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");

  // Efeito para preencher o formulário quando um item é editado
  useEffect(() => {
    if (item) {
      setNome(item.nome);
      setQuantidade(item.quantidade);
    } else {
      setNome("");
      setQuantidade("");
    }
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (item) {
      // Se estiver editando um item, atualize-o
      await updateDoc(doc(db, "itens", item.id), {
        nome,
        quantidade,
      });
      alert("Item atualizado com sucesso!");
    } else {
      // Se estiver adicionando um novo item, crie-o
      await addDoc(collection(db, "itens"), {
        nome,
        quantidade,
      });
      alert("Item adicionado com sucesso!");
    }

    // Limpa os campos após o envio
    setNome("");
    setQuantidade("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do item"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        required
      />
      <button type="submit">{item ? "Atualizar Item" : "Adicionar Item"}</button>
    </form>
  );
}

export default AdicionarItem;
