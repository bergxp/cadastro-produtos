import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Tittle,
  EditContainer,
  EditBox,
  BtnFechar,
} from "./styles";
import { useForm } from "react-hook-form";
import Tabela from "../Tabela";
import { Table, Th, Thead, Tr } from "../Tabela/styles";

function Produto() {
  const { register, handleSubmit } = useForm();
  const [produto, setProduto] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editProduto, setEditProduto] = useState();

  const onSubmit = (data) => {
    const descricao = data.descricao.trim();
    const quantidade = data.quantidade.trim();
    const valor = data.valor.trim();

    if (descricao === "" || quantidade === "" || valor === "") {
      alert("Preencha os campos");
      return;
    }
    const produtoExistente = produto.find((p) => p.descricao === descricao);
    if (produtoExistente) {
      alert("Este produto já foi cadastrado");
      return;
    } else {
      const dados = {
        descricao: data.descricao,
        quantidade: Number(data.quantidade),
        valor: Number(data.valor).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        id: Math.floor(Math.random() * 100),
      };
      setProduto([...produto, dados]);
    }

  };

  const handleRemove = (id) => {
    setProduto((prevProduto) =>
      prevProduto.filter((produto) => produto.id !== id)
    );
  };

  const handleEdit = (id) => {
    const produtoEditado = produto.find((produto) => produto.id === id);
    setEditProduto(produtoEditado);
    setEdit(true);
  };

  const handleEditSubmit = (data) => {
    const descricao = data.descricao.trim();
    const quantidade = data.quantidade.trim();
    const valor = data.valor.trim();

    if (descricao === "" || quantidade === "" || valor === "") {
      alert("Preencha os campos");
      return;
    }

    const produtoAtualizado = {
      ...editProduto,
      descricao: data.descricao,
      quantidade: Number(data.quantidade),
      valor: Number(data.valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
    };

    const produtosAtualizados = produto.map((p) =>
      p.id === editProduto.id ? produtoAtualizado : p
    );

    setProduto(produtosAtualizados);

    setEditProduto(null);

  };

  return (
    <>
      <Container>
        <Tittle>
          <h1>Cadastro de Produtos</h1>
        </Tittle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            id="descricao"
            placeholder="Descrição"
            {...register("descricao")}
          ></Input>
          <Input
            type="number"
            id="quantidade"
            placeholder="Quantidade"
            {...register("quantidade")}
          ></Input>
          <Input
            type="number"
            id="Valor"
            placeholder="Valor"
            {...register("valor")}
          ></Input>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>

      {produto.length > 0 ? (
        <Tabela
          produtos={produto}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      ) : (
        <>
          <Table>
            <Thead>
              <Tr>
                <Th>Produto</Th>
                <Th>Quantidade</Th>
                <Th>Valor</Th>
                <Th colSpan={2}>Ação</Th>
              </Tr>
            </Thead>
          </Table>
          <Container>
            <h2>Nenhum produto cadastrado</h2>
          </Container>
        </>
      )}

      {edit && editProduto && (
        <>
          {produto.map((item) => (
            <EditContainer key={item.id}>
              <EditBox>
                <h1>Editar Produto</h1>
                <Form onSubmit={handleSubmit(handleEditSubmit)}>
                  <Input
                    type="text"
                    id="descricao"
                    placeholder="Descrição"
                    defaultValue={item.descricao}
                    {...register("descricao")}
                  ></Input>
                  <Input
                    type="number"
                    id="quantidade"
                    placeholder="Quantidade"
                    defaultValue={item.quantidade}
                    {...register("quantidade")}
                  ></Input>
                  <Input
                    type="number"
                    id="Valor"
                    placeholder="Valor"
                    defaultValue={item.valor}
                    {...register("valor")}
                  ></Input>
                  <Button type="submit">Editar</Button>
                </Form>
                <BtnFechar onClick={() => setEdit(false)}>X</BtnFechar>
              </EditBox>
            </EditContainer>
          ))}
        </>
      )}
    </>
  );
}

export default Produto;
