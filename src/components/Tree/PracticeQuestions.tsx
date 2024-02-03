import { CloseIcon } from "@chakra-ui/icons"
import { Badge, Box, Button, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react"
import { actions } from '../home/home.slice'
import React from "react"
import { useDispatch } from "react-redux"

type PracticeQuestionProps ={
    data: any
}
export const PracticeQuestions = (props: PracticeQuestionProps) => {
    const{data} = props
    const dispatch = useDispatch()
    return (
    <Box zIndex={99999} pos="relative">
      <Box
        onClick={() => null}
        pos="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="black"
        opacity={0.4}
      />
      <Box
        p="0px 30px 30px"
        position="fixed"
        w={['100%', '60%', '40%']}
        bg="white"
        top={0}
        right={0}
        bottom={0}
        borderLeftWidth={'1px'}
        overflowY="scroll"
      >
        <Flex
          mt="20px"
          justifyContent="space-between"
          alignItems="center"
          zIndex={1}
        >

          <Button
            onClick={()=>{
                dispatch(actions.setOnClose(false))
              }}
            colorScheme="yellow"
            ml="5px"
            leftIcon={<CloseIcon width="8px" />}
            iconSpacing={0}
            size="xs"
          >
            <Text
              as="span"
              ml="10px"
            >
              Close
            </Text>
          </Button>
        </Flex>
        <Heading
          as='h1'
          color='black'
          fontSize={['28px', '33px', '40px']}
          fontWeight={700}
        // mb={['2px', '2px', '5px']}
        >
          Exercise
        </Heading>
        {
                data.map((result, index) => {
                    return(
                    <List>
                        <ListItem key={index}>
                            <Badge>Practice</Badge>
                            <Text>{(result as any).question}</Text>
                            <Text>{(result as any).sample}</Text>
                        </ListItem>
                    </List>
                    )
                })
            }
      </Box>
    </Box>
        // <Box
        //     pt={['25px', '20px', '25px']}
        //     pb={['20px', '15px', '30px']}
        //     // borderBottomWidth={1}
        //     mb='30px'
        // >
        //     <Box
        //         pt={['25px', '20px', '25px']}
        //         pb={['20px', '15px', '30px']}
        //         borderBottomWidth={1}
        //         mb='30px'
        //     >
        //         <Heading
        //             as='h2'
        //             color='black'
        //             fontSize={['13px', '14px', '20px']}
        //             mb={['2px', '2px', '5px']}
        //         >
        //             Exercise
        //         </Heading>
        //     </Box>
        //     {
        //         data.map((result, index) => {
        //             return(
        //             <List>
        //                 <ListItem key={index}>
        //                     <Badge>Practice</Badge>
        //                     <Text>{(result as any).question}</Text>
        //                     <Text>{(result as any).sample}</Text>
        //                 </ListItem>
        //             </List>
        //             )
        //         })
        //     }
        // </Box>
    )
}