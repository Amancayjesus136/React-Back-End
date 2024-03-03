import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MenuUser from '../layouts/MenuUser';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CenteredCard = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '45vh',
});

const Card = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <MenuUser />

            <div className="container" style={{ marginTop: '70px' }}>
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <CenteredCard>
                            <MuiCard sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="static/images/crud.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Empezar a trabajar con una base de datos MySQL con Laravel para realizar un CRUD
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        {/* Resto del contenido colapsado */}
                                    </CardContent>
                                </Collapse>
                            </MuiCard>
                        </CenteredCard>
                    </div>

                    <div className="col-12 col-sm-4">
                        <CenteredCard>
                            <MuiCard sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="static/images/login.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Como crear tu propia autenticacion sin usar librerias de laravel desde 0 usando MYSQL
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        {/* Resto del contenido colapsado */}
                                    </CardContent>
                                </Collapse>
                            </MuiCard>
                        </CenteredCard>
                    </div>

                    <div className="col-12 col-sm-4">
                        <CenteredCard>
                            <MuiCard sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="static/images/apirest.jpg"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Como integrar API de Consulta de DNI, RUC, TIPO DE CAMBIO en tu sistema usando laravel
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Method:</Typography>
                                        {/* Resto del contenido colapsado */}
                                    </CardContent>
                                </Collapse>
                            </MuiCard>
                        </CenteredCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
