import React from 'react';
import { FeaturedList } from './home/FeatureList';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import roadmaps from '../content/roadmaps.json';
// import { RoadmapPageHeader } from './home/Homeheader';
import { selectUsername } from './login/login.selector';
import { useSelector } from 'react-redux';
import Navbar from './NavBar';

function MainPage() {
  const username = useSelector(selectUsername)
  return (
    <ChakraProvider>
      <Navbar />
       <Box>
        <Container maxW="container.md" pb="90px">
          <Box py={['23px', '23px', '35px']} color="gray.200">
            <Heading
              color="black"
              fontSize={['22px', '22px', '28px']}
              mb={['8px', '8px', '15px']}
            >
              Hey {username}
            </Heading>
            <Text fontSize={['14px', '14px', '16px']} mb="10px" color="black">
              This is to create roadmaps, other
              educational content to help guide the developers in picking up the
              path and guide their learnings.
            </Text>
          </Box>
          <FeaturedList
            roadmaps={(roadmaps as any).filter(roadmap => roadmap.type === 'role')}
            title={'Role Based' }
          />
          <FeaturedList
            roadmaps={(roadmaps as any).filter(roadmap => roadmap.type === 'tool')}
            title={'Skill Based' }
          />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MainPage;

