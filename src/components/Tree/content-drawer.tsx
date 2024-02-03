import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { CheckIcon, CloseIcon, RepeatIcon } from '@chakra-ui/icons';
import React from 'react';
import { MapContent } from './MapContent';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from "../home/home.slice";
import { selectProgress } from '../home/home.selector';

export function ContentDrawer(props) {
  const progressValue = useSelector(selectProgress);
  const dispatch = useDispatch();
  
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
            onClick={() => {
              if(progressValue <100){
              dispatch(actions.setProgressBar(progressValue+10));
              }
            }}
            colorScheme="red"
            leftIcon={<CheckIcon />}
            size="xs"
            iconSpacing={0}
          >
            <Text
              as="span"
              // d={['block', 'none', 'none', 'block']}
              ml="10px"
            >
              Mark as Done
            </Text>
          </Button>


          <Button
            onClick={() => null}
            colorScheme="brand"
            leftIcon={<RepeatIcon />}
            size="xs"
            iconSpacing={0}
          >
            <Text
              as="span"
              // d={['block', 'none', 'none', 'block']}
              ml="10px"
            >
              Mark as Pending
            </Text>
          </Button>

          <Button
            onClick={() => null}
            colorScheme="yellow"
            ml="5px"
            leftIcon={<CloseIcon width="8px" />}
            iconSpacing={0}
            size="xs"
          >
            <Text
              as="span"
              // d={['block', 'none', 'none', 'block']}
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
          {props.title}
        </Heading>
        <Text fontSize={['13px', '14px', '15px']}>{props.description}</Text>
        <MapContent {...props} />
      </Box>
    </Box>
  );
}
