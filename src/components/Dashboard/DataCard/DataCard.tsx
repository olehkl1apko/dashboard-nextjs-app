import { Paper, Typography, Tooltip, IconButton } from "@mui/material";
import { InfoOutlined as InfoOutlinedIcon } from "@mui/icons-material";

import scss from "./DataCard.module.scss";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};

export const DataCard = (props: DataCardProps) => {
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
