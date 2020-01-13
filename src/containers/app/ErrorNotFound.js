import React from 'react'
import { Typography } from '@material-ui/core'

const ErrorNotFound = () => {
    return (
        <div>
            <Typography variant="h4" >
                Error: The path does not exist.
            </Typography>
            <Typography variant="h6" >
                Please check the URL and try again.
            </Typography>
        </div>
    )
}

export default ErrorNotFound
