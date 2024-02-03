import { Box, Heading, Text, Tooltip } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import React from 'react';
import { actions } from "./home.slice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type HomeGridItemProps = {
  title: string;
  subtitle: string;
  isCommunity?: boolean;
  colorIndex?: number;
  url: string;
  roadmap: any
};

export function HomeItem(props: HomeGridItemProps) {
  const {
    title,
    subtitle,
    isCommunity,
    url,
  } = props;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnClick =()=>{
    navigate(`${url}`);
    dispatch(actions.setRoadmapProps(props.roadmap))
  }

  return (
    <Box
      position='relative'
      onClick={handleOnClick}
      _hover={{
        textDecoration: 'none',
        bg: 'rgba(255,255,255,.10)'
      }}
      sx={{
        // On mobile devices, don't change the scale
        '@media (hover: none)': {
          '&:hover': {
            bg: 'rgba(255,255,255,.05)'
          }
        }
      }}
      flex={1}
      shadow='2xl'
      className={'home-roadmap-item'}
      bg={'rgba(255,255,255,.05)'}
      color='white'
      p='15px'
      rounded='10px'
      pos='relative'
    >
      {isCommunity && (
        <Tooltip label={'Community contribution'} hasArrow placement='top'>
          <InfoIcon opacity={0.5} position='absolute' top='10px' right='10px' />
        </Tooltip>
      )}

      <Heading
        fontSize={['17px', '17px', '22px']}
        color="black"
        mb='5px'
        alignItems='center'
      >
        {title}

      </Heading>
      <Text color='black' fontSize={['13px']}>
        {subtitle}
      </Text>
    </Box>
  );
}
