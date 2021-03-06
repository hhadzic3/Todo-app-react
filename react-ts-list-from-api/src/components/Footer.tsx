import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const Footer = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://harunhadzic.ml/">
          Harun Hadzic
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }