import styles from "./UserAdd.module.scss";
import { useState } from "react";
import ExpandIcon from "../../icons/ExpandIcon";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Collapse from "./Collapse/Collapse";
import UserForm from "./UserForm/UserForm";

const UserAdd = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleAddUserClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.userAdd}>
      <Tooltip
        arrow
        title={isExpanded ? "Hide Form" : "Show Form"}
        placement="top"
        TransitionComponent={Zoom}>
        <div className={styles.titleContainer} onClick={handleAddUserClick}>
          <h2 className={styles.title}>Add User</h2>
          <ExpandIcon isExpanded={isExpanded} className={styles.expandIcon} />
        </div>
      </Tooltip>

      <Collapse isExpanded={isExpanded}>
        <UserForm />
      </Collapse>
    </div>
  );
};

export default UserAdd;
