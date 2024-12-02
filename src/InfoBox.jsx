import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox" style={{ marginTop: "20px" }}>
      <Card sx={{ maxWidth: 345, margin: "auto" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city || "N/A"}{" "}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography
            variant="body2"
            component={"span"}
            sx={{ color: "text.secondary" }}
          >
            <p>Temperature: {info.temp ?? "N/A"}&deg;C</p>
            <p>Humidity: {info.humidity ?? "N/A"}%</p>
            <p>Min Temp: {info.tempMin ?? "N/A"}&deg;C</p>
            <p>Max Temp: {info.tempMax ?? "N/A"}&deg;C</p>
            <p>
              Description:{" "}
              <i>
                {info.weather || "N/A"} (Feels like: {info.feelslike ?? "N/A"}
                &deg;C)
              </i>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
