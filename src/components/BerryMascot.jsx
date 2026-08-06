const mascotLayers = [
  { src: '/mascot/01-base.webp', className: 'berry-mascot__layer berry-mascot__layer--base', alt: 'Base del personaje' },
  { src: '/mascot/02-eyes.webp', className: 'berry-mascot__layer berry-mascot__layer--eyes', alt: 'Ojos del personaje' },
  { src: '/mascot/03-mouth.webp', className: 'berry-mascot__layer berry-mascot__layer--mouth', alt: 'Boca del personaje' },
  { src: '/mascot/04-leaf.webp', className: 'berry-mascot__layer berry-mascot__layer--leaf', alt: 'Hoja del personaje' },
];

export default function BerryMascot() {
  const handleLaugh = () => {
    const mascot = document.querySelector('.berry-mascot');

    if (!mascot) return;

    mascot.classList.remove('is-laughing');
    void mascot.offsetWidth;
    mascot.classList.add('is-laughing');

    window.setTimeout(() => {
      mascot.classList.remove('is-laughing');
    }, 550);
  };

  return (
    <button type="button" className="berry-mascot-button" onClick={handleLaugh} aria-label="Hacer reír a la mascota">
      <div className="berry-mascot" aria-label="Mascota de Acai Berry">
        {mascotLayers.map((layer) => (
          <img
            key={layer.src}
            src={layer.src}
            className={layer.className}
            alt={layer.alt}
          />
        ))}
      </div>
    </button>
  );
}
