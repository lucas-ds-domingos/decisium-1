import React from "react";
import Table, { Column } from "../../components/teste/TesteCo"; // 

type User = {
  id: number;
  name: string;
  email: string;
};

const Home: React.FC = () => {
  const users: User[] = [
    { id: 1, name: "João", email: "joao@email.com" },
    { id: 2, name: "Maria", email: "maria@email.com" },
  ];


  const columns: Column<User>[] = [
    { header: "ID", accessor: "id" },
    { header: "Nome", accessor: "name" },
    { header: "E-mail", accessor: "email" },
  ];

  return (
    <div>
      <Table columns={columns} data={users} />
    </div>
  );
};

export default Home;
