import React from "react";
import Delete from "../assets/img/delete.png"
import Edit from "../assets/img/edit.png"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="img"
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="person"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <img src={Edit} alt="edit" />
            <img src={Delete} alt="delete" />
          </div>
        </div>
      </div>

      <div className="menu">m</div>
    </div>
  );
};

export default Single;
