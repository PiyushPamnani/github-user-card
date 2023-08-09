import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Typography, Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Home = () => {
  const [username, setUsername] = useState("");

  return (
    <Stack sx={{ alignItems: "center" }}>
      <Typography variant="h3" fontSize={34} sx={{ mt: 15 }}>
        GitHub User Card
      </Typography>

      <Box
        height="400px"
        sx={{
          width: { md: "500px", sx: "380px" },
          display: "flex",
          mt: 2,
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid gray",
        }}
      >
        <Typography
          variant="overline"
          fontWeight={300}
          fontSize={22}
          sx={{ mt: 12 }}
        >
          Enter Github username here:
        </Typography>

        <Paper
          component="form"
          sx={{
            borderRadius: 20,
            border: "1px solid #e3e3e3",
            pl: 2,
            boxShadow: "none",
            mt: "8px",
          }}
        >
          <input
            type="text"
            placeholder="Search....           (Ex: ...github.com/{username})"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="search-input"
          />

          <Link to={username}>
            <IconButton type="submit" sx={{ p: "10px", color: "black" }}>
              <Search />
            </IconButton>
          </Link>
        </Paper>
      </Box>
    </Stack>
  );
};

export default Home;
