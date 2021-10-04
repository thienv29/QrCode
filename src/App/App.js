import { Grid } from "@material-ui/core";
import FormControll from "../components/FormControll";
import Qrcode from "../components/Qrcode";
import Options from "../components/Options";
import "./App.scss";

function App() {
  const className = 'container-child'
  return (
    <div className="App">
      <Grid container className='container' justifyContent="space-between">
        <Grid
          className={className}
        >
          <FormControll  />
          <Options />
        </Grid>
        <Qrcode   />
      </Grid>
    </div>
  );
}

export default App;
