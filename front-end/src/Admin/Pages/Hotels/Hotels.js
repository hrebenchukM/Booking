import "./Hotels.css";  
import { DataGrid } from "@mui/x-data-grid";  
import { DeleteOutline, Edit, Hotel, Add } from "@mui/icons-material"; 
import { useState, useEffect } from "react"; 
import AddHmodal from "../../сomponents/Hotels/Add/Add";
import EditHModal from "../../сomponents/Hotels/Edit/Edit";

export default function Hotels() {
  const [data, setData] = useState([]); 
  const [openModal, setOpenModal] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [modalType, setModalType] = useState(null); 

  useEffect(() => {
   
    fetch('http://localhost:8081/admin/hotels')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  const refreshData = () => {
    fetch('http://localhost:8081/admin/hotels')
      .then(res => res.json())
      .then(data => setData(data))  
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/admin/hotels/delete/${id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      setData(data.filter((item) => item.id !== id));
      console.log(`Deleted hotel with id: ${id}`);
    })
    .catch(err => console.log(err));
  };

 
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { 
      field: 'name', 
      headerName: 'Hotel Name', 
      width: 250,  
      renderCell: (params) => (
        <div className="user">
          <Hotel className="users-icon"/>
          {params.row.name} 
        </div>
      ),
    }, 
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'country', headerName: 'Country', width: 150 },
    { field: 'rating', headerName: 'Rating', width: 100 },
    { field: 'description', headerName: 'Description', width: 300 },
    
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 150, 
      renderCell: (params) => (
        <div>
          <Edit className="usersEdit"
            onClick={() => {
              setSelectedHotelId(params.row.id); 
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
    <div className="user">
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
        Add Hotel
      </button>

      {openModal && modalType === 'add' && <AddHmodal setOpen={setOpenModal} refreshData={refreshData} />}
      {openModal && modalType === 'edit' && <EditHModal setOpen={setOpenModal} hotelId={selectedHotelId} refreshData={refreshData} />}
    </div>
  );
}
