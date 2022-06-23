import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography,
    Grid,
} from '@mui/material';

const Noticia = ({ noticia }) => {
    const { urlToImage, url, title, description, source } = noticia;

    return (
        <Grid item md={6} lg={4} height={'250'}>
            <Card className='animate__animated animate__fadeIn'>
                {urlToImage && (
                    <CardMedia
                        image={urlToImage}
                        component={'img'}
                        alt={`Imagen de la noticia ${title}`}
                    />
                )}
                <CardContent>
                    <Typography variant='body1' color='error'>
                        {source.name}
                    </Typography>
                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='body2'>{description}</Typography>
                </CardContent>
                <CardActions>
                    <Link
                        href={url}
                        target='_blank'
                        variant='button'
                        width='100%'
                        textAlign='center'
                        sx={{ textDecoration: 'none' }}
                    >
                        Leer Noticia
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Noticia;
