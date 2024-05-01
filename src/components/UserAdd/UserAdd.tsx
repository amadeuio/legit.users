import { useState } from "react";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Collapse from "./Collapse/Collapse";
import UserForm from "./UserForm/UserForm";
import ExpandIcon from "../../icons/ExpandIcon";
import styles from "./UserAdd.module.scss";

const UserAdd = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
