/**
 * Tracking utilities for affiliate links
 * Generates UTM parameters to track performance across different page sections
 */

export type AffiliateContext = 'quiz_results' | 'top_picks' | 'hero_cta' | 'comparison';

interface UTMParams {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: AffiliateContext;
    utm_term: string;
}

/**
 * Builds a tracked affiliate URL with UTM parameters
 * @param baseUrl - Original affiliate URL
 * @param context - Where the link appears on the page
 * @param toolName - Name of the tool (for utm_term)
 * @returns URL with UTM parameters appended
 */
export const buildAffiliateUrl = (
    baseUrl: string,
    context: AffiliateContext,
    toolName: string
): string => {
    // Skip if URL is a placeholder
    if (baseUrl.includes('{{') || !baseUrl || baseUrl === '#') {
        return baseUrl;
    }

    const params: UTMParams = {
        utm_source: 'ledgerlogic',
        utm_medium: 'affiliate',
        utm_campaign: 'tools_page',
        utm_content: context,
        utm_term: toolName.toLowerCase().replace(/\s+/g, '_')
    };

    const urlParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        urlParams.set(key, value);
    });

    const separator = baseUrl.includes('?') ? '&' : '?';

    return `${baseUrl}${separator}${urlParams.toString()}`;
};

/**
 * Track affiliate click event (for analytics)
 * @param toolName - Name of the tool clicked
 * @param context - Where the click occurred
 */
export const trackAffiliateClick = (toolName: string, context: AffiliateContext): void => {
    // Can be extended to send to Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'affiliate_click', {
            event_category: 'affiliate',
            event_label: toolName,
            tool_name: toolName,
            click_context: context
        });
    }

    // Console log for debugging
    console.log('Affiliate click:', { toolName, context });
};
