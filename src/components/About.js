import React from 'react';
import { Heading } from '@chakra-ui/react';
import MenuUser from '../layouts/MenuUser';

const About = () => {
    return (
        <>
            <MenuUser />

            <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'right', height: '10vh' }}>
                <Heading
                    as='h4'
                    size='xs'
                    color='black'
                    style={{ marginTop: '50px' }}>
                    Info
                </Heading>

                <Heading
                    as='h6'
                    size='xs'
                    color='gray'
                    display="flex"
                    justifyContent="right"
                    alignItems="right">
                    Soy un estudiante apasionado de la informática, con un año de experiencia y un título en informática. Mi enfoque profesional se centra en demostrar que los jóvenes tienen el potencial de crecer y contribuir significativamente a las empresas que confían en sus habilidades.<br />
                    Tengo sólidos conocimientos en desarrollo de software, bases de datos y varios lenguajes de programación.
                    Mi objetivo principal es continuar creciendo profesionalmente, por lo que estoy en búsqueda de oportunidades que me brinden aprendizaje y desarrollo.<br /><br />
                    Me caracterizo por la orientación al logro, capacidad de análisis, compromiso y proactividad.
                    He adquirido experiencia en proyectos múltiples. Además, soy programador "full stack", con habilidades en frameworks como React y Angular para el frontend, y Laravel, PHP nativo y NodeJs para el backend. Además, tengo experiencia en el manejo de diversas bases de datos como MySQL, SQL Server, Oracle y MongoDB.
                </Heading>
            </div>
        </>
    );
};

export default About;
