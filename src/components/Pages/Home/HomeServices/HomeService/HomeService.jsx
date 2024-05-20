import { Typography, Grid, Card, CardContent } from '@mui/material';

export default function HomeService({header, body}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>{header}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  )
}
