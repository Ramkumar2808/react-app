import React, { useEffect, useState } from "react";
import { Table, Typography, Badge, Space, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAsync } from "./usersSlice";
import { EditOutlined, DeleteOutlined, UserOutlined } from "@ant-design/icons";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const status = useSelector((state) => state.users.status);
  const totalCount = useSelector((state) => state.users.totalCount);
  // const totalPages = useSelector((state) => state.users.totalPages);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      width: 80,
      render: (_, record, index) => (page - 1) * pageSize + index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",

      render: (text) => (
        <div style={{ textTransform: "capitalize" }}>{text}</div>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" icon={<EditOutlined />} onClick={() => {}} />
          <Button type="danger" icon={<DeleteOutlined />} onClick={() => {}} />
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchUsersAsync({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  // const renderFooter = () => <div>Total Users: {totalCount}</div>;

  return (
    <div>
      <Typography.Title
        level={5}
        style={{ display: "flex", alignItems: "center" }}
      >
        <UserOutlined /> Users ({totalCount})
      </Typography.Title>
      <Table
        dataSource={users}
        columns={columns}
        pagination={{
          total: totalCount,
          current: page,
          pageSize,
          onChange: (newPage, newPageSize) => {
            setPage(newPage);
            setPageSize(newPageSize);
          },
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20],
        }}
        loading={status === "loading"}
        // footer={renderFooter}
        scroll={{
          y: 300,
        }}
      />
    </div>
  );
};

export default UsersList;
