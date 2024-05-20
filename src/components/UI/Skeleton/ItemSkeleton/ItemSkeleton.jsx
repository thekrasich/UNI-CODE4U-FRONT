import { Box, Skeleton, Divider } from '@mui/material';

export default function ItemSkeleton() {
  return (
    <>
      <Skeleton variant="rectangular"
        sx={{
          width:{xs: "90vw", md: "39vw"},
          height:"42.6vh" 
        }}
      />
      <Box 
        sx={{
           flexBasis: { xs: '100%', md: '50%' },
           width: {xs: '90vw'}
        }}
      >
        <Box mb={2}>
          <Skeleton variant="text" height={40} />
          <Divider sx={{ mt: "12px", mb: "8px" }} />
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box>
              <Skeleton variant="text" width="10vw"/>
              <Skeleton variant="text" width="85%" />
            </Box>
            <Skeleton variant="rectangular" width={150} height={50} />
          </Box>
          <Skeleton variant="text" width="50%" />
        </Box>
        <Skeleton variant="text" width="100%" height={300} />
      </Box>
    </>
  )
}
