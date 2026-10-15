import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardCurso({ image, title, description, git, site, buttonGit, buttonText }) {
    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: 360,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#2a2a2a',
                color: '#f0f0f0',
                border: '1px solid #3a3a3a',
                borderRadius: '12px',
                boxShadow: 'none',
                overflow: 'hidden',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                '&:hover': {
                    borderColor: '#1dea53',
                    boxShadow: '0 0 24px rgba(29, 234, 83, 0.15)',
                },
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                    aspectRatio: '16 / 9',
                    objectFit: 'cover',
                    borderBottom: '1px solid #3a3a3a',
                }}
            />

            <CardContent sx={{ flexGrow: 1, padding: '1.25rem' }}>
                <Typography
                    component="h3"
                    sx={{
                        fontFamily: 'var(--font-display, inherit)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        lineHeight: 1.25,
                        letterSpacing: '-0.01em',
                        marginBottom: '0.75rem',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'var(--font-body, inherit)',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        color: '#a0a0a0',
                    }}
                >
                    {description}
                </Typography>
            </CardContent>

            <CardActions sx={{ padding: '0 1.25rem 1.25rem', justifyContent: 'center', display: 'flex', gap: '1rem' }}>

                {git && (
                    <Button
                        href={git}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                        padding: '0.5rem 1.25rem',
                        border: '1.5px solid #1dea53',
                        borderRadius: '8px',
                        color: '#1dea53',
                        fontFamily: 'var(--font-body, inherit)',
                        fontWeight: 700,
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#1dea53',
                            color: '#1f1f1f',
                        },
                        '&:focus-visible': {
                            outline: '3px solid #1dea53',
                            outlineOffset: 3,
                        },
                    }}
                >
                    {buttonGit}
                </Button>
                )}

                {site && (
                    <Button
                        href={site}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                        padding: '0.5rem 1.25rem',
                        border: '1.5px solid #1dea53',
                        borderRadius: '8px',
                        color: '#1dea53',
                        fontFamily: 'var(--font-body, inherit)',
                        fontWeight: 700,
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#1dea53',
                            color: '#1f1f1f',
                        },
                        '&:focus-visible': {
                            outline: '3px solid #1dea53',
                            outlineOffset: 3,
                        },
                    }}
                >
                    {buttonText}
                </Button>
                )}
            </CardActions>
        </Card>
    );
}