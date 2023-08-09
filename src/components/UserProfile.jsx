import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
} from "@mui/material";
import {
  LocalLibrary,
  Public,
  CalendarMonth,
  ErrorOutline,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { fetchUser } from "../api";

const UserProfile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState({});
  const [found, setFound] = useState("");

  useEffect(() => {
    const userGithubData = async () => {
      try {
        const { data } = await fetchUser(username);
        setUserData(data);
        setFound("Found");
      } catch (error) {
        console.log(error);
      }
    };

    userGithubData();
  });

  return (
    <Card className="glassmorphism user-card" sx={{ mt: 15 }}>
      {found === "Found" ? (
        <>
          <CardHeader
            className="user-header"
            avatar={
              <Avatar
                alt={userData?.login}
                src={userData?.avatar_url}
                sx={{ mb: 1.2, width: "60px", height: "60px" }}
              />
            }
            title={userData?.login}
            subheader={userData?.name}
          />
          <CardContent className="user-content">
            <Typography variant="body2" component="p" className="contents">
              <LocalLibrary color="secondary" className="icons" />
              Total Public Repository: {userData?.public_repos}
            </Typography>
            <Typography variant="body2" component="p" className="contents">
              <Public color="secondary" className="icons" />
              Total Public Gists: {userData?.public_gists}
            </Typography>
            <Typography variant="body2" component="p" className="contents">
              <CalendarMonth color="secondary" className="icons" />
              Profile Created at: {userData?.created_at?.split("T")[0]}
            </Typography>
          </CardContent>
        </>
      ) : (
        <CardContent className="user-content">
          <Typography variant="body2" component="p" className="contents">
            <ErrorOutline color="secondary" className="icons" />
            No profile found of this username
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default UserProfile;
