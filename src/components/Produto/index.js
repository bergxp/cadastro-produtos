import { useRef, useState } from "react";
import { Button, Container, Form, Input, Tittle } from "./styles";
import { useForm } from "react-hook-form";
import Tabela from "../Tabela";
import { Table, Th, Thead, Tr } from "../Tabela/styles";
// import { Container } from './styles';

function Produto() {
  const { register, handleSubmit } = useForm();
  const [produto, setProduto] = useState([]);
  const descricaoRef = useRef(null);
  const quantidadeRef = useRef(null);
  const valorRef = useRef(null);

  const onSubmit = (data) => {
    const descricao = data.descricao.trim();
    const quantidade = data.quantidade.trim();
    const valor = data.valor.trim();

    if (descricao === "" || quantidade === "" || valor === "") {
      alert("Preencha os campos");
      return
    }
    const produtoExistente = produto.find((p) => p.descricao === descricao)
      if(produtoExistente){
        alert("Este produto já foi cadastrado")
        return
    } else {
      const dados = {
        descricao: data.descricao,
        quantidade: Number(data.quantidade),
        valor: Number(data.valor),
        id: Math.floor(Math.random() * 100),
      };
      setProduto([...produto, dados]);
    }
  };

  const handleRemove = (id) => {
    console.log(id)
    setProduto((prevProduto) => prevProduto.filter(produto => produto.id !== id));
    console.log(produto);
  }

  return (
    <>
      <Container>
        <Tittle>
          <h1>Cadastro de Produtos</h1>
        </Tittle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            ref={descricaoRef}
            type="text"
            id="descricao"
            placeholder="Descrição"
            {...register("descricao")}
          ></Input>
          <Input
            ref={quantidadeRef}
            type="number"
            id="quantidade"
            placeholder="Quantidade"
            {...register("quantidade")}
          ></Input>
          <Input
            ref={valorRef}
            type="number"
            id="Valor"
            placeholder="Valor"
            {...register("valor")}
          ></Input>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>

      {produto.length > 0 ? (
        <Tabela produtos={produto}handleRemove={handleRemove} />
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
    </>
  );
}

export default Produto;
