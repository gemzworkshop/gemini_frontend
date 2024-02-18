import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

export const Sidebar = () => {

    const [model,setModel] = useState("");

    return (
        <div className='sidebar'>
            <div className="sb-drop">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Model</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={model}
                            label="model"
                            onChange={(e)=>setModel(e.target.value)}
                        >
                            <MenuItem value="pro">Gemini-Pro</MenuItem>
                            <MenuItem value="vision">Gemini-Pro Vision</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}
