import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mt="20px" padding="20px" >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            {" "}
            <DownloadOutlined /> Download Reportes
          </Button>
        </Box>
      </Box>

      {/* Grid & Chart */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          sx={{
            gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" }, // Responsive grid
            backgroundColor: colors.primary[900], // No need for `${}`
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Email Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" }, // Responsive grid
            backgroundColor: colors.primary[900], // No need for `${}`
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+14%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" }, // Responsive grid
            backgroundColor: colors.primary[900], // No need for `${}`
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <StatBox
            title="32,441"
            subtitle="New Client"
            progress="0.5"
            increase="+54%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" }, // Responsive grid
            backgroundColor: colors.primary[900], // No need for `${}`
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Row 2 */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              md: "span 12",
              lg: "span 8 ",
            }, // Responsive grid
            backgroundColor: colors.primary[900],
            gridRow: "span 2",
          
          }}
        >
          <Box
            mt="10px"
            p=" 0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.grey[100]}
              >
                $59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" ml="-20px">
            <LineChart isDashbord={true} />
          </Box>
        </Box>

        {/* Transaction */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              md: "span 12",
              lg: "span 4 ",
            }, // Responsive grid
            backgroundColor: colors.primary[900], 
            gridRow: "span 2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            borderBottom={`4px soild ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
            rowGap="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transaction
            </Typography>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="15px"
                borderBottom={`4px soild ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[100]}
                    variant="h6"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>

                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 5px"
                  borderRadius="4px"
                  color={colors.grey[100]}
                >
                  {transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              md: "span 12",
              lg: "span 4 ",
            }, // Responsive grid
            backgroundColor: colors.primary[900], // No need for `${}`
            gridRow: "span 2",
          }}
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h6" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h6"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              md: "span 12",
              lg: "span 4 ",
            },
          }}
          gridRow="span 2"
          backgroundColor={colors.primary[900]}
        >
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", sm: "span 12", md: "span 12", lg:"span 4" }, // Responsive grid
            backgroundColor: colors.primary[900], 
         
          }}
          gridRow="span 2"

        >
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
