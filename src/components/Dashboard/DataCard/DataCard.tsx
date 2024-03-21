import { Paper, Typography, Tooltip, IconButton } from "@mui/material";
import { InfoOutlined as InfoOutlinedIcon } from "@mui/icons-material";

import scss from "./DataCard.module.scss";
import { IDataRibbon } from "@/modules";

export const DataCard = (props: IDataRibbon) => {
  const { title, value, description } = props;
  return (
    <Paper className={scss.dataCard}>
      <div className={scss.header}>
        <Typography fontSize={"h6"} color={"lightslategrey"}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography
              fontSize={16}
            >{`${description} which is ${value}`}</Typography>
          }
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Typography fontSize={"h4"}>{value}</Typography>
    </Paper>
  );
};
