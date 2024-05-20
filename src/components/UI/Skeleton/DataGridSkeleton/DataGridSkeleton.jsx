import { Box, Skeleton } from '@mui/material'
import React from 'react'

export default function DataGridSkeleton() {
  return (
    <Box>
        <Skeleton 
            variant="rectangular" 
            sx={{
                width: '80vw',
                height: '60vh'
            }}
        />
    </Box>
  )
}
