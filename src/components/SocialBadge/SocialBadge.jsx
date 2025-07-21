import './SocialBadge.css';

export default function SocialBadge({ icon, color }) {
  const techName = icon
    .replace(/^devicon-/, "")
    .replace(/-plain.*/, "")
    .replace(/^\w/, (c) => c.toUpperCase());


  return (
    <div
      className=" w-1 pl-3 flex items-center gap-2
      hover:scale-112 transition-transform duration-300 ease-in-out"
     
    >
      <span style={{ color }}>
        <i className={icon}></i>
      </span>
      <span style={{ color }} className="text-lg font-bold align-top">
      </span>
    </div>
  );
}



function hexToRgb(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function darkenAndFade(hex, alpha = 0.15, factor = 0.7) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${Math.floor(r * factor)}, ${Math.floor(g * factor)}, ${Math.floor(b * factor)}, ${alpha})`;
}
