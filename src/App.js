import {data} from './data';
import User from './components/User'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

const App = () => {

  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ backgroundColor: '#cfe8fc'}}>
      <Typography variant="h4" gutterBottom>Github Users</Typography>
      {data.map( user => {
        return <User key={User.id} {...user} />
      })}
    </Card>
  );
}

export default App
