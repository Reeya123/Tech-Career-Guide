import { Badge, Box, Heading, Link, List, ListItem } from "@chakra-ui/react"
import React from "react"

export const MapContent = (props) => {
    return (
        <Box
            pt={['25px', '20px', '25px']}
            pb={['20px', '15px', '30px']}
            // borderBottomWidth={1}
            mb='30px'
        >
            <Box
                pt={['25px', '20px', '25px']}
                pb={['20px', '15px', '30px']}
                borderBottomWidth={1}
                mb='30px'
            >
                <Heading
                    as='h2'
                    color='black'
                    fontSize={['13px', '14px', '20px']}
                    mb={['2px', '2px', '5px']}
                >
                    Resources
                </Heading>
            </Box>
            {
                props.links.map((result, index) => {
                    return(
                    <List>
                        <ListItem key={index}>
                            {result.read ? (<Badge colorScheme="yellow">Read</Badge>) : (<Badge>Watch</Badge>)}
                            <Link href={result.link} target="_blank">{result.id}</Link>
                        </ListItem>
                    </List>
                    )
                })
            }
        </Box>
    )
}