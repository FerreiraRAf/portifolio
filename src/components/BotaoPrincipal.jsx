import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ variant }) => ({
    minWidth: 170,
    padding: '0.75rem 1.75rem',
    borderRadius: 8,
    border: '2px solid #1dea53',
    fontWeight: 700,
    textTransform: 'none',
    boxShadow: 'none',
    transition: 'background-color 0.15s, box-shadow 0.15s',
    ...(variant === 'contained'
        ? {
            backgroundColor: '#1f1f1f',
            color: '#4dff7c',
            '&:hover': {
                backgroundColor: '#4dff7c',
                boxShadow: '0 0 24px rgba(29, 234, 83, 0.45)',
                color: '#1f1f1f',
            },
        }
        : {
            color: '#1dea53',
            backgroundColor: 'rgba(31, 31, 31, 0.6)',
            '&:hover': {
                borderColor: '#1dea53',
                backgroundColor: 'rgba(29, 234, 83, 0.15)',
            },
        }),
    '&:focus-visible': {
        outline: '3px solid #1dea53',
        outlineOffset: 3,
    },
}));

export default function BotaoPrincipal({ text, variant = 'contained', href, icon, ...props}) {
    return (
        <ColorButton variant={variant} href={href}  {...props} sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {icon && <span >{icon}</span>}
            {text}
        </ColorButton>
    );
}