import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import SectionHeading from './SectionHeading';

const GROUP_ALIASES = {
  base: 'base',
  frutas: 'fruit',
  fruites: 'fruit',
  fruits: 'fruit',
  toppings: 'topping',
  salsas: 'sauce',
  salses: 'sauce',
  sauces: 'sauce'
};

const ASSET_MAP = {
  base: {
    acai: '/base/Salsa Açai.webp',
    yogurt: '/base/Salsa Yoghurt.webp',
    iogurt: '/base/Salsa Yoghurt.webp'
  },
  fruit: {
    fresa: '/fruits/Trozo Fresa.webp',
    maduixa: '/fruits/Trozo Fresa.webp',
    strawberry: '/fruits/Trozo Fresa.webp',
    mango: '/fruits/Trozo Mango.webp',
    kiwi: '/fruits/Trozo Kiwi.webp',
    platano: '/fruits/Trozo plátano.webp',
    platan: '/fruits/Trozo plátano.webp',
    banana: '/fruits/Trozo plátano.webp',
    pina: '/fruits/Trozo Piña.webp',
    pinya: '/fruits/Trozo Piña.webp',
    pineapple: '/fruits/Trozo Piña.webp',
    arandanos: '/fruits/Trozo Arándano.webp',
    nabius: '/fruits/Trozo Arándano.webp',
    blueberries: '/fruits/Trozo Arándano.webp'
  },
  topping: {
    yogur: '/toppings/Yogur.webp',
    yogurt: '/toppings/Yogur.webp',
    iogurt: '/toppings/Yogur.webp',
    coco: '/toppings/Coco.webp',
    coconut: '/toppings/Coco.webp',
    chia: '/toppings/Chía.webp',
    xia: '/toppings/Chía.webp',
    miel: '/toppings/Miel.webp',
    mel: '/toppings/Miel.webp',
    honey: '/toppings/Miel.webp',
    lotus: '/toppings/Lotus.webp',
    granola: '/toppings/Granola.webp',
    oreo: '/toppings/Oreo.webp',
    'granola de chocolate': '/toppings/Granola de chocolate.webp',
    'granola de xocolata': '/toppings/Granola de chocolate.webp',
    'chocolate granola': '/toppings/Granola de chocolate.webp',
    'mix de semillas': '/toppings/Mix de semillas.webp',
    'mix de llavors': '/toppings/Mix de semillas.webp',
    'seed mix': '/toppings/Mix de semillas.webp',
    'leche condensada': '/toppings/Leche Condensada.webp',
    'llet condensada': '/toppings/Leche Condensada.webp',
    'condensed milk': '/toppings/Leche Condensada.webp',
    'leche en polvo': '/toppings/Leche en polvo.webp',
    'llet en pols': '/toppings/Leche en polvo.webp',
    'powdered milk': '/toppings/Leche en polvo.webp',
    'filipino blanco': '/toppings/Filipino Blanco.webp',
    'filipino blanc': '/toppings/Filipino Blanco.webp',
    'white filipino': '/toppings/Filipino Blanco.webp',
    'chips ahoy': '/toppings/Chips ahoy!.webp'
  },
  'topping-extra': {
    almendras: '/topping-extras/almendras.webp',
    ametlles: '/topping-extras/almendras.webp',
    almonds: '/topping-extras/almendras.webp',
    anacardos: '/topping-extras/anacardos.webp',
    anacards: '/topping-extras/anacardos.webp',
    cashews: '/topping-extras/anacardos.webp',
    pistacho: '/topping-extras/pistacho.webp',
    festuc: '/topping-extras/pistacho.webp',
    pistachio: '/topping-extras/pistacho.webp',
    proteina: '/topping-extras/proteina.webp',
    proteinas: '/topping-extras/proteina.webp',
    proteinaes: '/topping-extras/proteina.webp',
    protein: '/topping-extras/proteina.webp',
    'granola sin gluten': '/topping-extras/granola-sin-gluten.webp',
    'granola sense gluten': '/topping-extras/granola-sin-gluten.webp',
    'gluten free granola': '/topping-extras/granola-sin-gluten.webp',
    'granola de proteina': '/topping-extras/granola-de-proteina.webp',
    'protein granola': '/topping-extras/granola-de-proteina.webp'
  },
  sauce: {
    kinder: '/sauces/Kinder.webp',
    lotus: '/sauces/Lotus.webp',
    mango: '/sauces/Mango.webp',
    nutella: '/sauces/Nutella.webp',
    'nutella blanca': '/sauces/Nutella Blanca.webp',
    'white nutella': '/sauces/Nutella Blanca.webp',
    'frutas del bosque': '/sauces/Frutas del bosque.webp',
    'fruites del bosc': '/sauces/Frutas del bosque.webp',
    berries: '/sauces/Frutas del bosque.webp',
    'pudin de chia': '/sauces/Pudin de chia.webp',
    'puding de xia': '/sauces/Pudin de chia.webp',
    'chia pudding': '/sauces/Pudin de chia.webp',
    'crema de cacahuete': '/sauces/Crema de cacahuete.webp',
    'crema de cacauet': '/sauces/Crema de cacahuete.webp',
    'peanut butter': '/sauces/Crema de cacahuete.webp',
    'dulce de leche': '/sauces/Dulce de leche oscuro.webp',
    'xocolata negra': '/sauces/Chocolate negro.webp',
    'chocolate negro': '/sauces/Chocolate negro.webp',
    'dark chocolate': '/sauces/Chocolate negro.webp'
  },
  'sauce-extra': {
    rafaello: '/sauce-extras/Rafaello.webp',
    pistacho: '/sauce-extras/Pistatxo.webp',
    festuc: '/sauce-extras/Pistatxo.webp',
    pistachio: '/sauce-extras/Pistatxo.webp',
    'happy hippo': '/sauce-extras/Happy Hippo.webp',
    'oreo white': '/sauce-extras/Oreo White.webp'
  }
};

const WEBP_ASSET_MAP = {
  base: {
    acai: '/base/Salsa A%C3%A7ai.webp'
  },
  fruit: {
    fresa: '/fruits/Trozo Fresa.webp',
    maduixa: '/fruits/Trozo Fresa.webp',
    strawberry: '/fruits/Trozo Fresa.webp',
    mango: '/fruits/Trozo Mango.webp',
    kiwi: '/fruits/Trozo Kiwi.webp',
    platano: '/fruits/Trozo pl%C3%A1tano.webp',
    platan: '/fruits/Trozo pl%C3%A1tano.webp',
    banana: '/fruits/Trozo pl%C3%A1tano.webp',
    pina: '/fruits/Trozo Pi%C3%B1a.webp',
    pinya: '/fruits/Trozo Pi%C3%B1a.webp',
    pineapple: '/fruits/Trozo Pi%C3%B1a.webp',
    arandanos: '/fruits/Trozo Ar%C3%A1ndano.webp',
    nabius: '/fruits/Trozo Ar%C3%A1ndano.webp',
    blueberries: '/fruits/Trozo Ar%C3%A1ndano.webp'
  },
  topping: {
    yogur: '/toppings/yogur.webp', yogurt: '/toppings/yogur.webp', iogurt: '/toppings/yogur.webp',
    coco: '/toppings/coco.webp', coconut: '/toppings/coco.webp',
    chia: '/toppings/chia.webp', xia: '/toppings/chia.webp',
    miel: '/toppings/miel.webp', mel: '/toppings/miel.webp', honey: '/toppings/miel.webp',
    lotus: '/toppings/lotus.webp', granola: '/toppings/granola.webp', oreo: '/toppings/oreo.webp',
    'granola de chocolate': '/toppings/granola-de-chocolate.webp',
    'granola de xocolata': '/toppings/granola-de-chocolate.webp',
    'chocolate granola': '/toppings/granola-de-chocolate.webp',
    'mix de semillas': '/toppings/mix-de-semillas.webp',
    'mix de llavors': '/toppings/mix-de-semillas.webp',
    'seed mix': '/toppings/mix-de-semillas.webp',
    'leche condensada': '/toppings/leche-condensada.webp',
    'llet condensada': '/toppings/leche-condensada.webp',
    'condensed milk': '/toppings/leche-condensada.webp',
    'leche en polvo': '/toppings/leche-en-polvo.webp',
    'llet en pols': '/toppings/leche-en-polvo.webp',
    'powdered milk': '/toppings/leche-en-polvo.webp',
    'filipino blanco': '/toppings/filipino-blanco.webp',
    'filipino blanc': '/toppings/filipino-blanco.webp',
    'white filipino': '/toppings/filipino-blanco.webp',
    'chips ahoy': '/toppings/chips-ahoy.webp'
  },
  sauce: {
    kinder: '/sauces/kinder.webp', lotus: '/sauces/lotus.webp', mango: '/sauces/mango.webp', nutella: '/sauces/nutella.webp',
    'nutella blanca': '/sauces/nutella-blanca.webp', 'white nutella': '/sauces/nutella-blanca.webp',
    'frutas del bosque': '/sauces/frutas-del-bosque.webp', 'fruites del bosc': '/sauces/frutas-del-bosque.webp', berries: '/sauces/frutas-del-bosque.webp',
    'pudin de chia': '/sauces/pudin-de-chia.webp', 'puding de xia': '/sauces/pudin-de-chia.webp', 'chia pudding': '/sauces/pudin-de-chia.webp',
    'crema de cacahuete': '/sauces/crema-de-cacahuete.webp', 'crema de cacauet': '/sauces/crema-de-cacahuete.webp', 'peanut butter': '/sauces/crema-de-cacahuete.webp',
    'dulce de leche': '/sauces/dulce-de-leche-oscuro.webp',
    'xocolata negra': '/sauces/chocolate-negro.webp', 'chocolate negro': '/sauces/chocolate-negro.webp', 'dark chocolate': '/sauces/chocolate-negro.webp'
  }
};

function normalizeAssetKey(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[!]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function getCategory(groupName, isExtra = false) {
  const groupKey = GROUP_ALIASES[normalizeAssetKey(groupName)];

  if (!groupKey) {
    return null;
  }

  if (!isExtra) {
    return groupKey;
  }

  if (groupKey === 'topping') {
    return 'topping-extra';
  }

  if (groupKey === 'sauce') {
    return 'sauce-extra';
  }

  return null;
}

function getAssetSrc(groupName, itemLabel, isExtra = false) {
  const category = getCategory(groupName, isExtra);

  if (!category) {
    return null;
  }

  const assetKey = normalizeAssetKey(itemLabel);

  return WEBP_ASSET_MAP[category]?.[assetKey] ?? ASSET_MAP[category]?.[assetKey] ?? null;
}

function ComboParts({ combo }) {
  return (
    <div className="build-table__combo" aria-label={combo}>
      {combo.split(' + ').map((part, index) => (
        <span key={`${part}-${index}`} className="build-table__combo-line">
          {index > 0 ? <em>+</em> : null}
          <span>{part}</span>
        </span>
      ))}
    </div>
  );
}

function BuildSizeTable({ sizes, badgeLabel, badgePrefix }) {
  return (
    <div className="build-table">
      {sizes.map((item) => (
        <article key={item.name} className="build-table__row">
          <div className="build-table__size">
            <strong>{item.name}</strong>
            <span>{item.volume}</span>
          </div>
          <ComboParts combo={item.combo} />
          <strong className="build-table__price">{item.price}</strong>
          <div className="build-table__extra-block">
            <span className="build-table__extra-label">{badgeLabel}</span>
            <span className="build-table__extra">
              <span className="build-table__extra-prefix">{badgePrefix}</span>{' '}
              <span className="build-table__extra-value">{item.extra}</span>
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

function OptionGroup({ group, index, onVisualOpen }) {
  const itemRefs = useRef([]);
  const hoverBoostTimers = useRef(new WeakMap());

  const startBoostTimer = (node) => {
    if (!node || typeof window === 'undefined') {
      return;
    }

    if (hoverBoostTimers.current.has(node)) {
      return;
    }

    const timerId = window.setTimeout(() => {
      node.classList.add('is-hover-boosted');
    }, 3000);

    hoverBoostTimers.current.set(node, timerId);
  };

  const clearBoostTimer = (node) => {
    if (!node || typeof window === 'undefined') {
      return;
    }

    const timerId = hoverBoostTimers.current.get(node);

    if (timerId) {
      window.clearTimeout(timerId);
      hoverBoostTimers.current.delete(node);
    }

    node.classList.remove('is-hover-boosted');
  };

  const handleVisualKeyDown = (event, assetSrc, label) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onVisualOpen(assetSrc, label);
    }
  };

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean);

    if (!items.length || typeof window === 'undefined') {
      return undefined;
    }

    let frameId = 0;
    const portraitMobileQuery = window.matchMedia('(max-width: 959px) and (orientation: portrait)');

    const resetItems = () => {
      items.forEach((item) => {
        item.classList.remove('is-centered', 'is-near-centered', 'is-far-centered');
      });
    };

    const updateFocus = () => {
      frameId = 0;

      if (!portraitMobileQuery.matches) {
        resetItems();
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const rankedItems = items
        .map((item) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;

          return { item, distance: Math.abs(itemCenter - viewportCenter) };
        })
        .filter(({ item }) => {
          const rect = item.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < window.innerHeight;
        })
        .sort((left, right) => left.distance - right.distance);

      resetItems();

      rankedItems.slice(0, 1).forEach(({ item, distance }) => {
        if (distance < 100) {
          item.classList.add('is-centered');
        }
      });

      rankedItems.slice(1, 3).forEach(({ item, distance }) => {
        if (distance < 190) {
          item.classList.add('is-near-centered');
        }
      });

      rankedItems.slice(3, 5).forEach(({ item, distance }) => {
        if (distance < 280) {
          item.classList.add('is-far-centered');
        }
      });
    };

    const requestUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateFocus);
      }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      resetItems();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [group]);

  return (
    <article className={`option-group option-group--${index}`.trim()}>
      <h3>
        {group.name}
        {group.note ? <span>{group.note}</span> : null}
      </h3>
      <ul>
        {group.items.map((item, itemIndex) => (
          (() => {
            const label = typeof item === 'string' ? item : item.label;
            const assetSrc = getAssetSrc(group.name, label);

            return (
              <li
                key={label}
                ref={(node) => {
                  itemRefs.current[itemIndex] = node;
                }}
                onMouseEnter={(event) => startBoostTimer(event.currentTarget)}
                onMouseLeave={(event) => clearBoostTimer(event.currentTarget)}
                onFocus={(event) => startBoostTimer(event.currentTarget)}
                onBlur={(event) => clearBoostTimer(event.currentTarget)}
                className={`option-group__item${assetSrc ? ' option-group__item--has-visual' : ''}`}
              >
                <span className="option-group__item-label">
                  {label}
                  {typeof item === 'string' || !item.note ? null : (
                    <span className="option-group__item-note">{` ${item.note}`}</span>
                  )}
                </span>
                {assetSrc ? (
                  <img
                    className="option-group__item-visual"
                    src={assetSrc}
                    alt={label}
                    role="button"
                    tabIndex="0"
                    aria-label={`Ampliar imagen de ${label}`}
                    onClick={() => onVisualOpen(assetSrc, label)}
                    onKeyDown={(event) => handleVisualKeyDown(event, assetSrc, label)}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
              </li>
            );
          })()
        ))}
      </ul>
      {group.extras?.length ? (
        <div className="option-group__extras">
          <h4>{group.extrasLabel}</h4>
          <ul>
            {group.extras.map((extra, extraIndex) => {
              const assetSrc = getAssetSrc(group.name, extra, true);

              return (
                <li
                  key={extra}
                  ref={(node) => {
                    itemRefs.current[group.items.length + extraIndex] = node;
                  }}
                  onMouseEnter={(event) => startBoostTimer(event.currentTarget)}
                  onMouseLeave={(event) => clearBoostTimer(event.currentTarget)}
                  onFocus={(event) => startBoostTimer(event.currentTarget)}
                  onBlur={(event) => clearBoostTimer(event.currentTarget)}
                  className={`option-group__item${assetSrc ? ' option-group__item--has-visual' : ''}`}
                >
                  <span className="option-group__item-label">{extra}</span>
                  {assetSrc ? (
                    <img
                      className="option-group__item-visual"
                      src={assetSrc}
                      alt={extra}
                      role="button"
                      tabIndex="0"
                      aria-label={`Ampliar imagen de ${extra}`}
                      onClick={() => onVisualOpen(assetSrc, extra)}
                      onKeyDown={(event) => handleVisualKeyDown(event, assetSrc, extra)}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

export default function CustomBowlSection({ content }) {
  const [activeVisual, setActiveVisual] = useState(null);

  const openVisual = (src, label) => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 959px)').matches) {
      setActiveVisual({ src, label });
    }
  };

  return (
    <section id="custom" className="page-section">
      <div className="panel panel--custom">
        <SectionHeading title={content.title} subtitle={content.subtitle} centered />

        <div className="build-table-wrap">
          <BuildSizeTable
            sizes={content.sizes}
            badgeLabel={content.badge}
            badgePrefix={content.badgePrefix}
          />
        </div>

        <div className="menu-grid menu-grid--options">
          {content.groups.map((group, index) => (
            <OptionGroup key={group.name} group={group} index={index} onVisualOpen={openVisual} />
          ))}
        </div>

        {activeVisual && typeof document !== 'undefined'
          ? createPortal(
            <div
            className="option-visual-preview"
            role="dialog"
            aria-modal="true"
            aria-label={`Vista ampliada de ${activeVisual.label}`}
            onClick={() => setActiveVisual(null)}
          >
            <img src={activeVisual.src} alt={activeVisual.label} onClick={(event) => event.stopPropagation()} />
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position) => (
              <button
                key={position}
                type="button"
                className={`option-visual-preview__close option-visual-preview__close--${position}`}
                onClick={() => setActiveVisual(null)}
                aria-label="Cerrar imagen ampliada"
              >
                ×
              </button>
            ))}
            </div>,
            document.body,
          )
          : null}
      </div>
    </section>
  );
}
