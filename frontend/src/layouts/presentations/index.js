import { Grid } from "@mui/material";
import Post from "components/Post";
import SuiBox from "components/SuiBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={15}>
              <Post />
            </Grid>
            <Grid item xs={12} lg={15}>
              <Post />
            </Grid>
            <Grid item xs={12} lg={15}>
              <Post />
            </Grid>
          </Grid>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Tables;