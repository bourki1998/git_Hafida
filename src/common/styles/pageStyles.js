import { makeStyles } from '@mui/styles';
import background from "../../assets/background.jpg";

export const pageStyles = makeStyles((theme) => ({
    hcpBackground: {
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    screen: {
        minHeight: "100vh",
        [theme.breakpoints.down("md")]: {
            minHeight: "130vh",
        },
        [theme.breakpoints.down("sm")]: {
            minHeight: "130vh",
        },
    },
}));
  