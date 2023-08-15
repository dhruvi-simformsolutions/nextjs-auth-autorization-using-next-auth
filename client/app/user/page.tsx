"use client";
import React from "react";
import { Table } from "antd";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  const dataSource = [
    {
      key: "1",
      name: session?.user?.username,
      email: session?.user?.email,
      role: session?.user?.role,
    }
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  return (
    <div className="user-container">
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default page;
