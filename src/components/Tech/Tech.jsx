import TechBadge from '../TechBadge/TechBadge';

export default function Tech({ name, list, color }) {
  return (
    <>
      <div className="mt-14 px-35" style={{ height: '2rem' }}>
        <h2 className="text-2xl font-bold text-left w-full">
          <span className="text-[#59f4e1]">{name}</span>
        </h2>
      </div>

      <div style={{ height: '2rem' }} />

      <div className="flex gap-[1rem] pl-[140px]">
        {list.map((icon, index) => (
          <TechBadge key={index} icon={icon} color={color} />
        ))}
      </div>

      
    </>
  );
}
