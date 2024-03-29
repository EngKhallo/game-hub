import { FaWindows, FaPlaystation, FaAndroid, FaApple, FaLinux, FaXbox } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { MdPhoneIphone } from 'react-icons/md';
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from '../interfaces';

interface Props {
    platforms: Platform[];
}

export const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        android: FaAndroid,
        mac: FaApple,
        linux: FaLinux,
        xbox: FaXbox,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={'10px'}>
            {platforms.map(platform =>
                <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
            )}
        </HStack>
    )
}
