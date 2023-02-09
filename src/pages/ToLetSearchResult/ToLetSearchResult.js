import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "./ToLetSearchResult.scss";
const ToLetSearchResult = () => {
  return (
    <>
      <div className="_se_result_page">
        <div className="card_view">
          {/* 1---------------- */}
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title=" 2 Bedroom - Family - Tollabag"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height=""
              image="/images/demo/tolet-demo.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Short Address : DIT Project,Merul Badda Sector No : Road No : 12
                House No : 53 Area Name : Badda District Name : Dhaka
              </Typography>
            </CardContent>
          </Card>
          {/* 2-- */}
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title=" 2 Bedroom - Family - Tollabag"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/images/demo/tolet-demo.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Short Address : DIT Project,Merul Badda Sector No : Road No : 12
                House No : 53 Area Name : Badda District Name : Dhaka
              </Typography>
            </CardContent>
          </Card>
          {/* 3 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title=" 2 Bedroom - Family - Tollabag"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/images/demo/tolet-demo.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Short Address : DIT Project,Merul Badda Sector No : Road No : 12
                House No : 53 Area Name : Badda District Name : Dhaka
              </Typography>
            </CardContent>
          </Card>
          {/* 4 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title=" 2 Bedroom - Family - Tollabag"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/images/demo/tolet-demo.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Short Address : DIT Project,Merul Badda Sector No : Road No : 12
                House No : 53 Area Name : Badda District Name : Dhaka
              </Typography>
            </CardContent>
          </Card>
          {/* 5 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title=" 2 Bedroom - Family - Tollabag"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/images/demo/tolet-demo.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Short Address : DIT Project,Merul Badda Sector No : Road No : 12
                House No : 53 Area Name : Badda District Name : Dhaka
              </Typography>
            </CardContent>
          </Card>
          {/* 6 */}
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={<IconButton aria-label="settings"></IconButton>}
              title=" 2 Bedroom - Family - Tollabag"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/images/demo/tolet-demo.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Short Address : DIT Project,Merul Badda Sector No : Road No : 12
                House No : 53 Area Name : Badda District Name : Dhaka
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="btn_submit">
          <button className="inner_btn">See More</button>
        </div>
      </div>
    </>
  );
};

export default ToLetSearchResult;
