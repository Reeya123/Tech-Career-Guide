import {
    Button,
    Container,
    Flex,
    Link,
    Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { logout } from '../login/login.asyncAction';

type MenuLinkProps = {
    text: string;
    link: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    isFancy?: boolean;
};

function MenuLink(props: MenuLinkProps) {
    const { text, link, target = '_self', isFancy = false } = props;

    const gradientProp = isFancy ? {
        bgGradient: 'linear(to-r, yellow.100, teal.100)',
        bgClip: 'text',
        _hover: {
            color: 'yellow.100'
        }
    } : {};

    return <Link
        borderBottomWidth={0}
        borderBottomColor='gray.500'
        _hover={{ textDecoration: 'none', borderBottomColor: 'white' }}
        fontWeight={500}
        href={link}
        target={target}
        {...gradientProp}
    >
        {text}
    </Link>;
}

export function RoadmapPageHeader() {
    const dispatch = useDispatch<AppDispatch>()
    let navigate = useNavigate()

    const handleLogout=()=>{
        dispatch(logout()).then(()=>{
            navigate('/')
        })
    }

    return (
        <Container maxW='container.md' position='relative' bg="gray.900">
            <Flex justifyContent='space-between' alignItems={'center'} mt='20px'>
                <Stack shouldWrapChildren isInline spacing='15px' alignItems='center' color='gray.50'
                    fontSize='15px'>
                    <MenuLink text={'Roadmaps'} link={'/roadmaps'} />
                    <MenuLink text={'Guides'} link={'/guides'} />

                    <Button ml='10px' bgGradient='linear(to-l, yellow.700, red.600)' p='7px 10px' rounded='4px'
                        _hover={{ textDecoration: 'none', bgGradient: 'linear(to-l, red.800, yellow.700)' }}
                        fontWeight={500} onClick={handleLogout}>Logout</Button>
                </Stack>
            </Flex>
        </Container>
    );
}
