import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../home/home.slice'
import { PracticeQuestions } from './PracticeQuestions';
import { Progressbar } from './Progressbar';
import questions from '../../content/practicequestions.json'
import { selectOnClose } from '../home/home.selector';

type RoadmapPageHeaderType = {
  title: String,
  description: String
  data: any
};

export function RoadmapPageHeader(props: RoadmapPageHeaderType) {
  const { title, description, data } = props;
  console.log(data)
  const visiblity = useSelector(selectOnClose)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Box
      pt={['25px', '20px', '25px']}
      pb={['20px', '15px', '30px']}
      // borderBottomWidth={1}
      mb='30px'
    >
      <Container maxW='container.md' position='relative'>
        <Heading
          as='h1'
          color='black'
          fontSize={['28px', '33px', '40px']}
          fontWeight={700}
          mb={['2px', '2px', '5px']}
        >
          {title}
        </Heading>
        <Text fontSize={['13px', '14px', '15px']}>{description}</Text>
        <Flex justifyContent='space-between' alignItems={'center'} mt='20px'>
          <Stack isInline flex={1}>
            <Button
              onClick={()=>{
                dispatch(actions.setProgressBar(0));
                navigate('/home')
              }}
              size='xs'
              py='14px'
              px='10px'
              colorScheme='teal'
              variant='solid'
              _hover={{ textDecoration: 'none' }}
            >
              &larr;
              <Text as='span' ml='5px'>
                All Blueprints
              </Text>
            </Button>
            <Button
              onClick={()=>{
                dispatch(actions.setOnClose(true))
              }}
              size='xs'
              py='14px'
              px='10px'
              colorScheme='teal'
              variant='solid'
              _hover={{ textDecoration: 'none' }}
            >
              <Text as='span' ml='5px'>
                Exercise
              </Text>
            </Button>
            {visiblity && <PracticeQuestions data = {data.questions} />}
          </Stack>
        </Flex>
      </Container>
      <Progressbar />
    </Box>
  );
}
