export async function trackUserIP() {
  try {
    const DISCORD_WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
    
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const userIP = ipData.ip;
    
    const geoResponse = await fetch(`https://ip-api.com/json/${userIP}`);
    const geoData = await geoResponse.json();
    const country = geoData.country || 'Unknown';
    const countryCode = geoData.countryCode || '??';
    
    const timestamp = new Date().toISOString();
    const browserInfo = navigator.userAgent.split(' ')[0];
    const currentPage = window.location.pathname;
    
    const discordPayload = {
      embeds: [{
        title: "🌍 New Website Visitor",
        color: 0x00ff00,
        fields: [
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
            name: "📱 Browser",
            value: browserInfo,
            inline: true
          },
          {
            name: "🔗 Page",
            value: currentPage,
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
        body: JSON.stringify(discordPayload),
        credentials: 'same-origin',
        mode: 'cors',
      });
      
      console.log('✅ Analytics data sent successfully');
    } else {
      console.log('⚠️ Webhook not configured');
    }
    
  } catch (error) {
    console.error('❌ Error in analytics:', error);
  }
} 