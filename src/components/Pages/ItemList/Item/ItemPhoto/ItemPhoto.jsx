import { Box } from '@mui/material'

export default function ItemPhoto({photo, name}) {
  return (
    <Box flexBasis={{ xs: '100%', md: '50%' }} mr={{ xs: 0, md: 2 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={photo} alt={name} style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: '8px', marginBottom: '16px' }} />
    </Box>
  )
}
