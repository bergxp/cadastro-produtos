import React from 'react';
import { Button, Table, Tbody, Td, Th, Thead, Tr } from './styles';
import {FaEdit, FaTrash} from "react-icons/fa"
 
// import { Container } from './styles';

function Tabela({produtos, handleRemove}) {
  return (
    <Table>   
      <Thead>
      <Tr>
   
        <Th>Produto</Th>
        <Th>Quantidade</Th>
        <Th>Valor</Th>
        <Th colSpan={2}>Ação</Th>
      </Tr>
      </Thead>
      <Tbody>
        {produtos.map((item) => (
          <Tr key={item.id}>
           
            <Td>{item.descricao}</Td>
            <Td>{item.quantidade} UND</Td>
            <Td>{item.valor} R$</Td>
            <Td><Button><FaEdit/></Button> <Button onClick={() =>handleRemove(item.id)}><FaTrash/></Button></Td>
          </Tr>
          
        ))

        }
      {/* <Tr>
        <Td>{id}</Td>
        <Td>{descricao}</Td>
        <Td>{quantidade}</Td>
        <Td>{valor}</Td>
        <Td><Button><FaEdit/></Button> <Button><FaTrash/></Button></Td>
      </Tr> */}
      </Tbody>
      
    </Table>
  )
}

export default Tabela;