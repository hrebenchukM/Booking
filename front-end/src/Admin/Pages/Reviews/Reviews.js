import "./Reviews.css"; 
import { DataGrid } from "@mui/x-data-grid";  
import { DeleteOutline, Edit, Person, Add } from "@mui/icons-material"; 
import { useState, useEffect } from "react";
import { format } from "date-fns"; 
import AddRModal from "../../сomponents/Reviews/Add/Add";
import EditRModal from "../../сomponents/Reviews/Edit/Edit";
export default function Reviews() {
  const [data, setData] = useState([]); 
  const [openModal, setOpenModal] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [modalType, setModalType] = useState(null); 

  useEffect(() => {
    fetch('http://localhost:8081/admin/reviews')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  const refreshData = () => {
    fetch('http://localhost:8081/admin/reviews')
      .then(res => res.json())
      .then(data => setData(data))  
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/admin/reviews/delete/${id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      setData(data.filter((item) => item.id !== id));
      console.log(`Deleted review with id: ${id}`);
    })
    .catch(err => console.log(err));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { 
      field: 'reviewer_name', 
      headerName: 'Reviewer Name', 
      width: 250,  
      renderCell: (params) => (
        <div className="person">
          <Person className="users-icon"/>
          {params.row.reviewer_name} 
        </div>
      ),
    },
    { field: 'hotel_name', headerName: 'Hotel Name', width: 250 },
    { field: 'days_ago_num', headerName: 'Days Ago', width: 150 },
    { field: 'created', headerName: 'Created', width: 180, renderCell: (params) => (
        <div>
          {params.row.created ? format(new Date(params.row.created), 'yyyy-MM-dd') : 'N/A'}
        </div>
      )},
    { field: 'text', headerName: 'Review Text', width: 350, renderCell: (params) => (
        <div className="usersText">
          {params.row.text.length > 50 ? `${params.row.text.substring(0, 50)}...` : params.row.text}
        </div>
      )},
    
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 150, 
      renderCell: (params) => (
        <div>
          <Edit className="usersEdit"
            onClick={() => {
              setSelectedReviewId(params.row.id); 
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
        Add Review
      </button>

      {openModal && modalType === 'add' && <AddRModal setOpen={setOpenModal} refreshData={refreshData} />}
      {openModal && modalType === 'edit' && <EditRModal setOpen={setOpenModal} reviewId={selectedReviewId} refreshData={refreshData} />}
    </div>
  );
}
