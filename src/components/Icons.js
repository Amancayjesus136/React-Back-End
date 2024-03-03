import React from 'react'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Icons = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', alignItems: 'center' }}>
            <XIcon size={30} style={{ marginRight: '20px'}} />
            <GitHubIcon size={30} style={{ marginRight: '20px'}} />
            <InstagramIcon size={30} style={{ marginRight: '20px'}} />
            <LinkedInIcon size={30} style={{ marginRight: '20px'}} />
        </div>
    )
}

export default Icons
