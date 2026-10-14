/**
 * Real-Time Website Visitor Tracker for Shashikant Raj Portfolio
 * Sends an instant alert to Shashikant's Telegram bot when someone visits.
 */

interface GeoData {
  city?: string;
  region?: string;
  country_name?: string;
  country_code?: string;
  org?: string;
  ip?: string;
}

function getDeviceInfo() {
  const ua = navigator.userAgent;
  let os = 'Unknown OS';
  if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Macintosh|Mac OS X/i.test(ua)) os = 'macOS';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
  else if (/Linux/i.test(ua)) os = 'Linux';

  let browser = 'Unknown Browser';
  if (/Edg/i.test(ua)) browser = 'Microsoft Edge';
  else if (/Chrome/i.test(ua)) browser = 'Chrome';
  else if (/Safari/i.test(ua)) browser = 'Safari';
  else if (/Firefox/i.test(ua)) browser = 'Firefox';

  const isMobile = /Mobi|Android|iPhone/i.test(ua);
  const deviceType = isMobile ? '?? Mobile' : '?? Desktop';

  return {
    os,
    browser,
    deviceType,
    screen: `${window.screen.width}x${window.screen.height}`,
  };
}

export async function trackVisitorNotification(): Promise<void> {
  // Only execute in browser
  if (typeof window === 'undefined') return;

  // Session check to prevent spamming on page refreshes
  const SESSION_KEY = 'shashi_visitor_tracked_v1';
  if (sessionStorage.getItem(SESSION_KEY)) {
    return;
  }

  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '8849810492:AAFve1TYaQ4cpdSRQHuzxozSwVV0Ik--fDc';
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || '2045468954';

  if (!botToken || !chatId) {
    return;
  }

  // Mark as tracked for this session
  sessionStorage.setItem(SESSION_KEY, 'true');

  try {
    // 1. Fetch IP Geolocation
    let geo: GeoData = {};
    try {
      const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
      if (res.ok) {
        geo = await res.json();
      }
    } catch {
      // Fallback
    }

    const locationStr = [geo.city, geo.region, geo.country_name].filter(Boolean).join(', ') || 'Unknown Location';
    const flag = geo.country_code
      ? geo.country_code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : '??';

    // 2. Device info
    const dev = getDeviceInfo();

    // 3. Referrer info
    const ref = document.referrer ? new URL(document.referrer).hostname : 'Direct / Bookmark';

    // 4. Time in IST
    const nowIST = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium',
    });

    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const envTag = isLocalhost ? ' [LOCAL TESTING]' : '';

    // 5. Construct Telegram Message
    const message = [
      `?? *NEW WEBSITE VISITOR ALERT!* ??${envTag}`,
      `?????????????????????`,
      `?? *Location:* ${locationStr} ${flag}`,
      geo.org ? `?? *Network/ISP:* ${geo.org}` : '',
      `?? *Device:* ${dev.deviceType} (${dev.os} · ${dev.browser})`,
      `??? *Screen:* ${dev.screen}`,
      `?? *Source:* ${ref}`,
      `?? *Page:* \`${window.location.pathname}${window.location.hash || ''}\``,
      `? *Time (IST):* ${nowIST}`,
      `?????????????????????`,
      `?? *Site:* [sashibitcode.vercel.app](https://sashibitcode.vercel.app)`,
    ]
      .filter(Boolean)
      .join('\n');

    // 6. Send directly to Telegram
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });
  } catch (err) {
    // Fail silently so visitor experience is never affected
    console.debug('Tracker status:', err);
  }
}
