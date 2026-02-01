import React from 'react';
import Image from 'next/image';

// Import logo images
import XeroLogo from '@/assets/Affiliate logos/Xero Wordmark_Blue.png';
import RampLogo from '@/assets/Affiliate logos/Ramp_Logo.jpg';
import DextLogo from '@/assets/Affiliate logos/Dext-By-IRIS-LOGO-DIGITAL-WHITE.eps_Dext-By-IRIS-LOGO-DIGITAL-ORANGE.png';
import SynderLogo from '@/assets/Affiliate logos/Synder logo(horizontal).png';
import FloatLogo from '@/assets/Affiliate logos/Float_Logo_RGB_Float-Logo-RGB-Black.jpg';
import OwnrLogo from '@/assets/Affiliate logos/logo-default.jpg';
import VennLogo from '@/assets/Affiliate logos/venn.svg';

interface LogoProps {
    className?: string;
}

// Ownr Logo
export const OwnrLogoComponent: React.FC<LogoProps> = ({ className = '' }) => (
    <Image
        src={OwnrLogo}
        alt="Ownr"
        width={300}
        height={120}
        className={className}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
    />
);

// Venn Logo - invert colors since it's white on transparent
export const VennLogoComponent: React.FC<LogoProps> = ({ className = '' }) => (
    <Image
        src={VennLogo}
        alt="Venn"
        width={300}
        height={120}
        className={className}
        style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            filter: 'invert(1)'
        }}
        unoptimized
    />
);

// Xero Logo
export const XeroLogoComponent: React.FC<LogoProps> = ({ className = '' }) => (
    <Image
        src={XeroLogo}
        alt="Xero"
        width={300}
        height={120}
        className={className}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
    />
);

// Ramp Logo - new clean version
export const RampLogoComponent: React.FC<LogoProps> = ({ className = '' }) => (
    <Image
        src={RampLogo}
        alt="Ramp"
        width={300}
        height={120}
        className={className}
        style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain'
        }}
    />
);

// Dext Logo
export const DextLogoComponent: React.FC<LogoProps> = ({ className = '' }) => (
    <Image
        src={DextLogo}
        alt="Dext"
        width={300}
        height={120}
        className={className}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
    />
);

// Synder Logo
export const SynderLogoComponent: React.FC<LogoProps> = ({ className = '' }) => (
    <Image
        src={SynderLogo}
        alt="Synder"
        width={300}
        height={120}
        className={className}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
    />
);

// Float Logo
export const FloatLogoComponent: React.FC<LogoProps> = ({ className = '' }) => (
    <Image
        src={FloatLogo}
        alt="Float"
        width={300}
        height={120}
        className={className}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
    />
);

// QuickBooks Online Logo
export const QBOLogoComponent: React.FC<LogoProps> = ({ className = '' }) => (
    <svg width="100%" height="100%" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid meet">
        <text x="10" y="50" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="700" fill="#2CA01C">QuickBooks</text>
    </svg>
);

// A2X Logo
export const A2XLogoComponent: React.FC<LogoProps> = ({ className = '' }) => (
    <svg width="100%" height="100%" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid meet">
        <text x="10" y="55" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="700" fill="#0891B2">A2X</text>
    </svg>
);

// Logo component mapper
export const ToolLogo: React.FC<{ toolId: string; className?: string }> = ({ toolId, className = '' }) => {
    switch (toolId) {
        case 'ownr':
            return <OwnrLogoComponent className={className} />;
        case 'venn':
            return <VennLogoComponent className={className} />;
        case 'xero':
            return <XeroLogoComponent className={className} />;
        case 'ramp':
            return <RampLogoComponent className={className} />;
        case 'dext':
            return <DextLogoComponent className={className} />;
        case 'synder':
            return <SynderLogoComponent className={className} />;
        case 'float':
            return <FloatLogoComponent className={className} />;
        case 'qbo':
            return <QBOLogoComponent className={className} />;
        case 'a2x':
            return <A2XLogoComponent className={className} />;
        default:
            return null;
    }
};
