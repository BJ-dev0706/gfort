export async function trackUserIP() {
  try {
    const DISCORD_WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
    
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const userIP = ipData.ip;
    
    const geoResponse = await fetch(`http://ip-api.com/json/${userIP}`);
    const geoData = await geoResponse.json();
    const country = geoData.country || 'Unknown';
    const countryCode = geoData.countryCode || '??';
    
    const timestamp = new Date().toISOString();
    const userAgent = navigator.userAgent;
    const referrer = document.referrer || 'Direct visit';
    const currentPage = window.location.href;
    
    const discordPayload = {
      embeds: [{
        title: "🌍 New Website Visitor",
        color: 0x00ff00,
        fields: [
          {
            name: "🌐 IP Address",
            value: `${userIP} - [P-check](https://www.ip2proxy.com/${userIP}#proxyresult)`,
            inline: true
          },
          {
            name: "🏳️ Country",
            value: `${country} (${countryCode})`,
            inline: true
          },
          {
            name: "📅 Timestamp",
            value: timestamp,
            inline: true
          },
          {
            name: "📱 User Agent",
            value: userAgent.substring(0, 100) + (userAgent.length > 100 ? '...' : ''),
            inline: false
          },
          {
            name: "🔗 Page URL",
            value: currentPage,
            inline: false
          },
          {
            name: "📍 Referrer",
            value: referrer,
            inline: false
          }
        ],
        timestamp: timestamp,
        footer: {
          text: "Gfort Website Tracker"
        }
      }]
    };
    
    if (DISCORD_WEBHOOK_URL && DISCORD_WEBHOOK_URL !== 'YOUR_DISCORD_WEBHOOK_URL_HERE') {
      await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordPayload)
      });
      
      console.log('✅ IP tracking data sent to Discord successfully');
    } else {
      console.log('⚠️ Discord webhook URL not configured. IP:', userIP);
    }
    
  } catch (error) {
    console.error('❌ Error tracking IP:', error);
  }
} 