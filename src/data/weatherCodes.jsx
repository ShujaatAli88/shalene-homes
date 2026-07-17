const ip = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

const SunIcon = () => (
  <svg {...ip}><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2.2M12 19.8V22M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2 12h2.2M19.8 12H22M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" /></svg>
)
const PartlyCloudyIcon = () => (
  <svg {...ip}><circle cx="8.5" cy="8.5" r="3.2" /><path d="M9 15.5h7a3.5 3.5 0 0 0 .3-6.98A4.8 4.8 0 0 0 7.6 9.8 3.5 3.5 0 0 0 9 15.5z" /></svg>
)
const CloudIcon = () => (
  <svg {...ip}><path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 10.1 4 4 0 0 0 7 18z" /></svg>
)
const FogIcon = () => (
  <svg {...ip}><path d="M4 8h16M6 12h12M3 16h18M6 20h12" /></svg>
)
const RainIcon = () => (
  <svg {...ip}><path d="M7 14h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 6.1 4 4 0 0 0 7 14z" /><path d="M8 17l-1 3M12 17l-1 3M16 17l-1 3" /></svg>
)
const StormIcon = () => (
  <svg {...ip}><path d="M7 12h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 4.1 4 4 0 0 0 7 12z" /><path d="M13 12l-3 5h3l-2 4" /></svg>
)
const SnowIcon = () => (
  <svg {...ip}><path d="M7 12h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 4.1 4 4 0 0 0 7 12z" /><path d="M9 16v4M12 16v4M15 16v4M8 18h2M11 18h2M14 18h2" /></svg>
)

const WEATHER_CODES = {
  0:  { label: 'Clear sky',                 icon: SunIcon },
  1:  { label: 'Mainly clear',               icon: SunIcon },
  2:  { label: 'Partly cloudy',              icon: PartlyCloudyIcon },
  3:  { label: 'Overcast clouds',            icon: CloudIcon },
  45: { label: 'Fog',                        icon: FogIcon },
  48: { label: 'Rime fog',                   icon: FogIcon },
  51: { label: 'Light drizzle',              icon: RainIcon },
  53: { label: 'Moderate drizzle',           icon: RainIcon },
  55: { label: 'Dense drizzle',              icon: RainIcon },
  56: { label: 'Light freezing drizzle',     icon: RainIcon },
  57: { label: 'Dense freezing drizzle',     icon: RainIcon },
  61: { label: 'Slight rain',                icon: RainIcon },
  63: { label: 'Moderate rain',              icon: RainIcon },
  65: { label: 'Heavy rain',                 icon: RainIcon },
  66: { label: 'Light freezing rain',        icon: RainIcon },
  67: { label: 'Heavy freezing rain',        icon: RainIcon },
  71: { label: 'Slight snow',                icon: SnowIcon },
  73: { label: 'Moderate snow',              icon: SnowIcon },
  75: { label: 'Heavy snow',                 icon: SnowIcon },
  77: { label: 'Snow grains',                icon: SnowIcon },
  80: { label: 'Slight rain showers',        icon: RainIcon },
  81: { label: 'Moderate rain showers',      icon: RainIcon },
  82: { label: 'Violent rain showers',       icon: RainIcon },
  85: { label: 'Slight snow showers',        icon: SnowIcon },
  86: { label: 'Heavy snow showers',         icon: SnowIcon },
  95: { label: 'Thunderstorm',               icon: StormIcon },
  96: { label: 'Thunderstorm, slight hail',  icon: StormIcon },
  99: { label: 'Thunderstorm, heavy hail',   icon: StormIcon },
}

export function describeWeatherCode(code) {
  const entry = WEATHER_CODES[code]
  const Icon = entry ? entry.icon : CloudIcon
  return { label: entry ? entry.label : 'Weather unavailable', Icon }
}
