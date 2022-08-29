import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-FFPJE1KZ19';

export const initAnalytics = () => {
  if (!ReactGA.isInitialized && typeof window !== 'undefined') {  
    const trackingIds = [TRACKING_ID];
    
    try {
      ReactGA.initialize(
        trackingIds.map(trackingId => ({
          trackingId
        })),
        {
          testMode: window.location.hostname !== 'datafabrikken.norge.no',
          gaOptions: { anonymizeIp: true }
        }
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    
  }
};

export const registerPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
};
