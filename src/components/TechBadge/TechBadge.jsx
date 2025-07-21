import './TechBadge.css';

export default function TechBadge({ icon, color = '#59f4e1' }) {
  const techName = icon
    .replace(/^devicon-/, "")
    .replace(/-plain.*/, "")
    .replace(/-original.*/, "")
    .replace(/plusplus.*/, "++")


    .replace(/^\w/, (c) => c.toUpperCase());

  const bgColor = darkenAndFade(color);

  return (
    <div
      className="tech-badge border-1 w-fit pr-4 pt-[5px] pb-[1px] pl-3 rounded-full border-[#0d2624] flex items-center gap-2
      hover:scale-105 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-300 ease-in-out"
      style={{ backgroundColor: bgColor } }
    >
      <span style={{ color }}>
        <i className={icon}></i>
      </span>
      <span style={{ color }} className="text-lg font-bold align-top pb-1">
        {techName}
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
