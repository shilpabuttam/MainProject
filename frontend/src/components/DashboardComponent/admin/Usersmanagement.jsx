import React, { useState, useEffect } from "react";
import { Table, Button, Input, Select, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const UserManagement = () => {
  const [usersData, setUsersData] = useState({ users: [] });
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "", status: "Active" });
  const [isAdding, setIsAdding] = useState(false);

  // Function to generate a 5-digit unique ID
  const generateUniqueId = () => Math.floor(10000 + Math.random() * 90000);

  // Load users from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("usersData");
    if (savedData) {
      try {
        setUsersData(JSON.parse(savedData));
      } catch (error) {
        console.error("Error parsing users from localStorage", error);
        localStorage.removeItem("usersData");
      }
    } else {
      // Default users if no data is found
      const defaultUsersData = {
        users: [
          { id: generateUniqueId(), name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active", isEditing: false },
          { id: generateUniqueId(), name: "Alice Smith", email: "alice.smith@example.com", role: "Employee", status: "Active", isEditing: false },
          { id: generateUniqueId(), name: "Bob Johnson", email: "bob.johnson@example.com", role: "Third-Party Admin", status: "Inactive", isEditing: false },
          { id: generateUniqueId(), name: "Emma Brown", email: "emma.brown@example.com", role: "Super Admin", status: "Active", isEditing: false },
        ],
      };
      setUsersData(defaultUsersData);
      localStorage.setItem("usersData", JSON.stringify(defaultUsersData));
    }
  }, []);

  // Save users to localStorage whenever they change
  useEffect(() => {
    if (usersData.users.length > 0) {
      localStorage.setItem("usersData", JSON.stringify(usersData));
    }
  }, [usersData]);

  const handleDelete = (id) => {
    const updatedUsers = usersData.users.filter(user => user.id !== id);
    setUsersData({ users: updatedUsers });
  };

  const handleEditToggle = (id) => {
    setUsersData({
      users: usersData.users.map(user =>
        user.id === id ? { ...user, isEditing: !user.isEditing } : user
      ),
    });
  };

  const handleEditChange = (id, field, value) => {
    setUsersData({
      users: usersData.users.map(user =>
        user.id === id ? { ...user, [field]: value } : user
      ),
    });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsersData({
        users: [...usersData.users, { id: generateUniqueId(), ...newUser, isEditing: false }],
      });
      setNewUser({ name: "", email: "", role: "", status: "Active" });
      setIsAdding(false);
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name", render: (text, record) => 
        record.isEditing ? <Input value={text} onChange={(e) => handleEditChange(record.id, "name", e.target.value)} /> : text
    },
    { title: "Email", dataIndex: "email", key: "email", render: (text, record) => 
        record.isEditing ? <Input value={text} onChange={(e) => handleEditChange(record.id, "email", e.target.value)} /> : text
    },
    { title: "Role", dataIndex: "role", key: "role", render: (text, record) => 
        record.isEditing ? (
            <Select value={text} onChange={(value) => handleEditChange(record.id, "role", value)}>
              <Option value="ThirdParty">ThirdParty</Option>
              <Option value="Employee">Employee</Option>
            </Select>
          )  : text
    },
    { title: "Status", dataIndex: "status", key: "status", render: (text, record) => 
        record.isEditing ? (
          <Select value={text} onChange={(value) => handleEditChange(record.id, "status", value)}>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        ) : text
    },
    { title: "Actions", key: "actions", render: (_, record) => (
        <Space>
          {record.isEditing ? (
            <Button type="primary" onClick={() => handleEditToggle(record.id)}>Save</Button>
          ) : (
            <Button onClick={() => handleEditToggle(record.id)}>Edit</Button>
          )}
          <DeleteOutlined style={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(record.id)} />
        </Space>
      )
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Management</h2>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
        <Button type="primary" onClick={() => setIsAdding(!isAdding)}>Add User</Button>
      </div>

      {isAdding && (
        <div style={{ marginBottom: "20px", display: "flex", gap: "10px", alignItems: "center" }}>
          <Input placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
          <Input placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
          <Select value={newUser.role} onChange={(value) => setNewUser({ ...newUser, role: value })}>
            <Option value="Employee">Employee</Option>
            <Option value="ThirdParty">ThirdParty</Option>
          </Select>
          <Select value={newUser.status} onChange={(value) => setNewUser({ ...newUser, status: value })}>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
          <Button type="primary" onClick={handleAddUser}>Save</Button>
        </div>
      )}

      <Table dataSource={usersData.users} columns={columns} rowKey="id" pagination={false} />
    </div>
  );
};

export default UserManagement;
