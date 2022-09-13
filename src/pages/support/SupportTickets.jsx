import React, { useState } from "react";
import "./SupportTickets.css";
import { HiOutlineChevronRight } from "react-icons/hi";
import { IoIosOpen } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { supports } from "../../utils/data";

const SupportTickets = () => {
  // const [openModal, setOpenModal] = useState(false);
  const [current, setCurrent] = useState(null);
  const toggle = (index) => {
    if (index === current) setCurrent(null);
    else setCurrent(index);
  };
  const navigate = useNavigate();
  return (
    <div className="responsive-table-container">
      <div className="single-widget table">
        <div className="table-top-header">
          <div className="table-title">All Support Tickets</div>
        </div>
        <div className="widget-container">
          <div
            className="table-header"
            style={{
              gridTemplateColumns: "50px 50px auto 150px  100px 150px",
            }}
          >
            <div></div>
            <div>#</div>
            <div>Subjects</div>
            <div>Ticket Id</div>
            <div className="text-center">Solved</div>
            <div className="text-center">Options</div>
          </div>
          <div>
            {supports.map((support, index) => (
              <>
                <div
                  className="table-row"
                  style={{
                    gridTemplateColumns: "50px 50px auto 150px 100px 150px",
                  }}
                >
                  <div
                    className="action-column"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggle(index)}
                  >
                    <HiOutlineChevronRight />
                  </div>
                  <div>{support.id}</div>
                  <div>{support.subject}</div>
                  <div>{support.ticket_id}</div>
                  <div className="action-column">
                    <label class="confi-switch">
                      <input type="checkbox" defaultChecked={support.status} />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <div className="action-column">
                    <button
                      title="View"
                      className="table-btn tb-edit"
                      onClick={() => navigate(`${support.id}`)}
                    >
                      <IoIosOpen />
                    </button>
                    <button title="Delete" className="table-btn tb-delete">
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>
                {current === index && (
                  <div className="row-extra">
                    <div className="row-extra-row">
                      <div>Last Replay</div>
                      <div>{support.last_replay}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Seller Name</div>
                      <div>{support.seller}</div>
                    </div>
                    <div className="row-extra-row">
                      <div>Category</div>
                      <div>{support.creating_date}</div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTickets;
