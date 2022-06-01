import { Button, Link, Text } from '@chakra-ui/react';
import React from 'react';
import {
  FaDiscord,
  FaTwitter,
  FaTwitch,
  FaTelegram,
  FaInstagram,
  FaRegHandPointRight,
} from 'react-icons/fa';

const SocialButton = ({ information }) => {
  const { name, url } = information;

  const returnIcon = (name) => {
    switch (name) {
      case 'Discord':
        return <FaDiscord />;
      case 'Twitter':
        return <FaTwitter />;
      case 'Instagram':
        return <FaInstagram />;
      case 'Twitch':
        return <FaTwitch />;
      case 'Telegram':
        return <FaTelegram />;
      default:
    }
  };

  return (
    <Button
      as={Link}
      href={url}
      target={'_blank'}
      size={'lg'}
      width={'50%'}
      height={'50px'}
      leftIcon={<FaRegHandPointRight />}
      rightIcon={returnIcon(name)}
      iconSpacing={5}
      bg={'rgb(34, 34, 34)'}
      variant="solid"
      fontSize={'3xl'}
      color={'white'}
      _hover={{
        bg: 'rgb(34, 34, 34)',
        transform: 'scale(1.05)',
        textDecoration: 'none',
      }}
    >
      <Text color={'white'} fontSize={'2xl'}>
        {name}
      </Text>
    </Button>
  );
};

export default SocialButton;
