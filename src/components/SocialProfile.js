import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';

import { socialData as socials } from '../socialData';
import { profileData as profile } from '../profileInformation';

//#region ICONS

import SocialButton from './SocialButton';
//#endregion

export default function SocialProfileWithImage() {
  console.log(socials);
  return (
    <Center>
      <Box
        py={'10%'}
        w={'full'}
        h={'full'}
        // bg={useColorModeValue('white', 'gray.800')}
        bg={'black'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'3xl'}
            maxW={'200px'}
            src={profile.avatar}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading
              color={'white'}
              fontSize={'4xl'}
              fontWeight={500}
              fontFamily={'body'}
            >
              @{profile.user}
            </Heading>
            <Text fontSize={'2xl'} color={'rgba(255, 255, 255, 0.6)'}>
              {profile.description}
            </Text>
          </Stack>
          <Center py={8}>
            <Stack spacing={12} align={'center'} w={'full'}>
              {socials.map((social) => (
                <SocialButton key={social.name} information={social} />
              ))}
            </Stack>
          </Center>
        </Box>
      </Box>
    </Center>
  );
}
