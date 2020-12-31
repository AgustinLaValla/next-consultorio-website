import { FaPhoneSquare, FaMapMarkedAlt } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import styled, { css, StyledComponent } from 'styled-components';

const Icon = css`
    color:  #f00946;
    font-size: 50px;
`;

const PhoneIcon = styled(FaPhoneSquare)`
    ${Icon}
`;
const MapMarketIcon = styled(FaMapMarkedAlt)`
    ${Icon}
`;

interface InfoData {
    icon: StyledComponent<IconType, any, {}, never>,
    title: string;
    description: string;
    phone? : string;
    direction?: Direction; 
}

export interface Direction {
    code: number;
    city: string;
    address: string;
}

export const infoData: InfoData[] = [
    {
        icon: PhoneIcon,
        title: 'Teléfono',
        description: 'Comunicate con nosotros',
        phone: '02296-453869'
    },
    {
        icon: MapMarketIcon,
        title: 'Dirección',
        description: 'Nuestro Consultorio',
        direction: {
            code: 7150,
            city: 'Ayacucho',
            address: 'Saez Peña 1524'
        }
    }
]