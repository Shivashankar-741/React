import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faTrash} />;

const Listitems = (props) => {
  const listArr = props.item;
  const listItems = listArr.map((item) => {
    return (
      <div className="listitems" key={item.key}>
        <ul className="unorderlist">
          <li className="list">{item.value}</li>
          <span
            onClick={() => {
              props.delete(item.key);
            }}
          >
            {element}
          </span>
        </ul>
      </div>
    );
  });
  return <div>{listItems}</div>;
};

export default Listitems;
