import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars({ nome, src, width, height }) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar 
                alt={nome} 
                src={src} 
                sx={{ 
                    width: width, 
                    height: height,
                    border: '3px solid #1dea53',
                    boxShadow: '0 0 28px rgba(29, 234, 83, 0.35)'
                }}
            />
        </Stack>
    );
}
