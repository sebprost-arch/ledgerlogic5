import React from 'react';

// Brand Colors (still useful for reference or fallbacks if needed, though we are using images now)
const colors = {
    xero: '#13B5EA',
    quickbooks: '#2CA01C',
    wagepoint: '#00B5E2',
    ramp: '#D0F142',
    venn: '#60A5FA',
    dext: '#FF6600',
    hubdoc: '#38B2AC'
};

interface LogoProps {
    className?: string;
    style?: React.CSSProperties;
    width?: number;
}

// Helper for Favicon logos (using Google's service as a reliable fallback)
const FaviconLogo: React.FC<LogoProps & { domain: string; alt: string }> = ({ domain, alt, width = 100, style, className }) => (
    <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={alt}
        width={width}
        style={{ borderRadius: '50%', ...style }}
        className={className}
    />
);

export const KarbonLogo: React.FC<LogoProps> = (props) => (
    <FaviconLogo domain="karbonhq.com" alt="Karbon" {...props} />
);

export const XeroLogo: React.FC<LogoProps> = ({ width = 100, style, className }) => (
    <svg width={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className}>
        <path fill={colors.xero} d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.585 14.655c-1.485 0-2.69-1.206-2.69-2.689 0-1.485 1.207-2.691 2.69-2.691 1.485 0 2.69 1.207 2.69 2.691s-1.207 2.689-2.69 2.689zM7.53 14.644c-.099 0-.192-.041-.267-.116l-2.043-2.04-2.052 2.047c-.069.068-.16.108-.258.108-.202 0-.368-.166-.368-.368 0-.099.04-.191.111-.263l2.04-2.05-2.038-2.047c-.075-.069-.113-.162-.113-.261 0-.203.166-.366.368-.366.098 0 .188.037.258.105l2.055 2.048 2.048-2.045c.069-.071.162-.108.26-.108.211 0 .375.165.375.366 0 .098-.029.188-.104.258l-2.056 2.055 2.055 2.051c.068.069.104.16.104.258 0 .202-.165.368-.365.368h-.01zm8.017-4.591c-.796.101-.882.476-.882 1.404v2.787c0 .202-.165.366-.366.366-.203 0-.367-.165-.368-.366v-4.53c0-.204.16-.366.362-.366.166 0 .316.125.346.289.27-.209.6-.317.93-.317h.105c.195 0 .359.165.359.368 0 .201-.164.352-.375.359 0 0-.09 0-.164.008l.053-.002zm-3.091 2.205H8.625c0 .019.003.037.006.057.02.105.045.211.083.31.194.531.765 1.275 1.829 1.29.33-.003.631-.086.9-.229.21-.12.391-.271.525-.428.045-.058.09-.112.12-.168.18-.229.405-.186.54-.083.164.135.18.391.045.57l-.016.016c-.21.27-.435.495-.689.66-.255.164-.525.284-.811.345-.33.09-.645.104-.975.06-1.095-.135-2.01-.93-2.28-2.01-.06-.21-.09-.42-.09-.645 0-.855.421-1.695 1.125-2.205.885-.615 2.085-.66 3-.075.63.405 1.035 1.021 1.185 1.771.075.419-.21.794-.734.81l.068-.046zm6.129-2.223c-1.064 0-1.931.865-1.931 1.931 0 1.064.866 1.931 1.931 1.931s1.931-.867 1.931-1.931c0-1.065-.866-1.933-1.931-1.933v.002zm0 2.595c-.367 0-.666-.297-.666-.666 0-.367.3-.665.666-.665.367 0 .667.299.667.665 0 .369-.3.667-.667.666zm-8.04-2.603c-.91 0-1.672.623-1.886 1.466v.03h3.776c-.203-.855-.973-1.494-1.891-1.494v-.002z" />
    </svg>
);

export const QuickBooksLogo: React.FC<LogoProps> = ({ width = 100, style, className }) => (
    <svg width={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className}>
        <path fill={colors.quickbooks} d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z" />
    </svg>
);

export const WagepointLogo: React.FC<LogoProps> = (props) => (
    <FaviconLogo domain="wagepoint.com" alt="Wagepoint" {...props} />
);

export const RampLogo: React.FC<LogoProps> = (props) => (
    <FaviconLogo domain="ramp.com" alt="Ramp" {...props} />
);

export const VennLogo: React.FC<LogoProps> = (props) => (
    <FaviconLogo domain="venntechnology.com" alt="Venn Technology" {...props} />
);

export const DextLogo: React.FC<LogoProps> = (props) => (
    <FaviconLogo domain="dext.com" alt="Dext" {...props} />
);

export const HubdocLogo: React.FC<LogoProps> = (props) => (
    <FaviconLogo domain="hubdoc.com" alt="Hubdoc" {...props} />
);
