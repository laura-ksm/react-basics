import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const User = ({ login, avatar, followers, following, url }) => {
    
    const classes = useStyles();
    
    return (
        <CardContent>
            <Grid container >
                <Grid item xs={3}>
                    <Link href={url} target="_blank" rel="noopener">{login}</Link>
                    <Typography variant="h6" gutterBottom></Typography>
                    <Avatar alt={login} src={avatar} className={classes.large} />
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="body1" gutterBottom>followers: {followers}</Typography>
                    <Typography variant="body1" gutterBottom>following: {following}</Typography>
                </Grid>
            </Grid>
        </CardContent>
    )
}

export default User
