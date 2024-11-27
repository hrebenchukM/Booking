import "./Users.css"; 
import { DataGrid } from "@mui/x-data-grid";  
import { DeleteOutline, Edit, Person, Add } from "@mui/icons-material"; 
import { useState, useEffect } from "react"; 
import AddUModal from "../../сomponents/Users/Add/Add";
import EditUModal from "../../сomponents/Users/Edit/Edit";
import { format } from "date-fns";


export default function Users() {
  const [data, setData] = useState([]); 
  const [openModal, setOpenModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8081/admin/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  const refreshData = () => {
    fetch('http://localhost:8081/admin/users')
      .then(res => res.json())
      .then(data => setData(data))  
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/admin/users/delete/${id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      setData(data.filter((item) => item.id !== id));
      console.log(`Deleted user with id: ${id}`);
    })
    .catch(err => console.log(err));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { 
      field: 'name', 
      headerName: 'User', 
      width: 250,  
      renderCell: (params) => (
        <div className="person">
          <Person className="users-icon"/>
          {params.row.name} 
        </div>
      ),
    }, 
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 200 },
    { field: 'birthday', headerName: 'Birthday', width: 150, renderCell: (params) => (
        <div>
          {params.row.birthday ? format(new Date(params.row.birthday), 'yyyy-MM-dd') : 'N/A'}
        </div>
      )},
    { field: 'country', headerName: 'Country', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'currency', headerName: 'Currency', width: 100 },
    { field: 'active', headerName: 'Active', width: 150 },
    
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 100, 
      renderCell: (params) => (
        <div>

            <Edit className="usersEdit"
             onClick={() => {
                setSelectedUserId(params.row.id); 
                setModalType('edit'); 
                setOpenModal(true); 
              }}
               />


          <DeleteOutline
            className="usersDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </div>
      )
    },
  ];

  return (
    <div className="users">
      <DataGrid
        rows={data}  
        checkboxSelection 
        disableSelectionOnClick  
        columns={columns} 
      />
      <button 
        className="addButton" 
        onClick={() => {
          setModalType('add'); 
          setOpenModal(true); 
        }}
      >
        <Add style={{ marginRight: '10px' }} />
        Add User
      </button>

      {openModal && modalType === 'add' && <AddUModal setOpen={setOpenModal} refreshData={refreshData} />}
      {openModal && modalType === 'edit' && <EditUModal setOpen={setOpenModal} userId={selectedUserId} refreshData={refreshData} />}
    </div>
  );
}
