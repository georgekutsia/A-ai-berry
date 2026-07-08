import { useEffect, useRef } from 'react';

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
    acai: '/base/Salsa Açai.png',
    yogurt: '/base/Salsa Yoghurt.png',
    iogurt: '/base/Salsa Yoghurt.png'
  },
  fruit: {
    fresa: '/fruits/Trozo Fresa.png',
    maduixa: '/fruits/Trozo Fresa.png',
    strawberry: '/fruits/Trozo Fresa.png',
    mango: '/fruits/Trozo Mango.png',
    kiwi: '/fruits/Trozo Kiwi.png',
    platano: '/fruits/Trozo plátano.png',
    platan: '/fruits/Trozo plátano.png',
    banana: '/fruits/Trozo plátano.png',
    pina: '/fruits/Trozo Piña.png',
    pinya: '/fruits/Trozo Piña.png',
    pineapple: '/fruits/Trozo Piña.png',
    arandanos: '/fruits/Trozo Arándano.png',
    nabius: '/fruits/Trozo Arándano.png',
    blueberries: '/fruits/Trozo Arándano.png'
  },
  topping: {
    yogur: '/toppings/Yogur.png',
    yogurt: '/toppings/Yogur.png',
    iogurt: '/toppings/Yogur.png',
    coco: '/toppings/Coco.png',
    coconut: '/toppings/Coco.png',
    chia: '/toppings/Chía.png',
    xia: '/toppings/Chía.png',
    miel: '/toppings/Miel.png',
    mel: '/toppings/Miel.png',
    honey: '/toppings/Miel.png',
    lotus: '/toppings/Lotus.png',
    granola: '/toppings/Granola.png',
    oreo: '/toppings/Oreo.png',
    'granola de chocolate': '/toppings/Granola de chocolate.png',
    'granola de xocolata': '/toppings/Granola de chocolate.png',
    'chocolate granola': '/toppings/Granola de chocolate.png',
    'mix de semillas': '/toppings/Mix de semillas.png',
    'mix de llavors': '/toppings/Mix de semillas.png',
    'seed mix': '/toppings/Mix de semillas.png',
    'leche condensada': '/toppings/Leche condensada.png',
    'llet condensada': '/toppings/Leche condensada.png',
    'condensed milk': '/toppings/Leche condensada.png',
    'leche en polvo': '/toppings/Leche en polvo.png',
    'llet en pols': '/toppings/Leche en polvo.png',
    'powdered milk': '/toppings/Leche en polvo.png',
    'filipino blanco': '/toppings/Filipino blanco.png',
    'filipino blanc': '/toppings/Filipino blanco.png',
    'white filipino': '/toppings/Filipino blanco.png',
    'chips ahoy': '/toppings/Chips Ahoy!.png'
  },
  'topping-extra': {
    almendras: '/topping-extras/Almendras.png',
    ametlles: '/topping-extras/Almendras.png',
    almonds: '/topping-extras/Almendras.png',
    anacardos: '/topping-extras/Anacardos.png',
    anacards: '/topping-extras/Anacardos.png',
    cashews: '/topping-extras/Anacardos.png',
    pistacho: '/topping-extras/Pistacho.png',
    festuc: '/topping-extras/Pistacho.png',
    pistachio: '/topping-extras/Pistacho.png',
    proteina: '/topping-extras/Proteínas.png',
    proteinas: '/topping-extras/Proteínas.png',
    proteinaes: '/topping-extras/Proteínas.png',
    protein: '/topping-extras/Proteínas.png',
    'granola sin gluten': '/topping-extras/Granola sin gluten.png',
    'granola sense gluten': '/topping-extras/Granola sin gluten.png',
    'gluten free granola': '/topping-extras/Granola sin gluten.png',
    'granola de proteina': '/topping-extras/Granola de proteína.png',
    'protein granola': '/topping-extras/Granola de proteína.png'
  },
  sauce: {
    kinder: '/sauces/Kinder.png',
    lotus: '/sauces/Lotus.png',
    mango: '/sauces/Mango.png',
    nutella: '/sauces/Nutella.png',
    'nutella blanca': '/sauces/Nutella Blanca.png',
    'white nutella': '/sauces/Nutella Blanca.png',
    'frutas del bosque': '/sauces/Frutas del bosque.png',
    'fruites del bosc': '/sauces/Frutas del bosque.png',
    berries: '/sauces/Frutas del bosque.png',
    'pudin de chia': '/sauces/Pudin de chia.png',
    'puding de xia': '/sauces/Pudin de chia.png',
    'chia pudding': '/sauces/Pudin de chia.png',
    'crema de cacahuete': '/sauces/Crema de cacahuete.png',
    'crema de cacauet': '/sauces/Crema de cacahuete.png',
    'peanut butter': '/sauces/Crema de cacahuete.png',
    'dulce de leche': '/sauces/Dulce de leche oscuro.png',
    'xocolata negra': '/sauces/Chocolate negro.png',
    'chocolate negro': '/sauces/Chocolate negro.png',
    'dark chocolate': '/sauces/Chocolate negro.png'
  },
  'sauce-extra': {
    rafaello: '/sauce-extras/Rafaello.png',
    pistacho: '/sauce-extras/Pistatxo.png',
    festuc: '/sauce-extras/Pistatxo.png',
    pistachio: '/sauce-extras/Pistatxo.png',
    'happy hippo': '/sauce-extras/Happy Hippo.png',
    'oreo white': '/sauce-extras/Oreo White.png'
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

  return ASSET_MAP[category]?.[normalizeAssetKey(itemLabel)] ?? null;
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

function OptionGroup({ group, index }) {
  const itemRefs = useRef([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean);

    if (!items.length || typeof window === 'undefined') {
      return undefined;
    }

    let frameId = 0;
    const mobileQuery = window.matchMedia('(max-width: 959px)');

    const resetItems = () => {
      items.forEach((item) => {
        item.classList.remove('is-centered', 'is-near-centered');
        item.style.removeProperty('--item-scale');
        item.style.removeProperty('--item-shift');
        item.style.removeProperty('--item-brightness');
        item.style.removeProperty('--item-visual-progress');
        item.style.removeProperty('--item-visual-scale');
        item.style.removeProperty('--item-visual-opacity');
      });
    };

    const updateFocus = () => {
      frameId = 0;

      if (!mobileQuery.matches) {
        resetItems();
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const rankedItems = items
        .map((item) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - viewportCenter);

          return {
            item,
            distance
          };
        })
        .filter(({ item }) => {
          const rect = item.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < window.innerHeight;
        })
        .sort((left, right) => left.distance - right.distance);

      resetItems();

      rankedItems.slice(0, 2).forEach((entry) => {
        if (entry.distance < 190) {
          entry.item.classList.add('is-centered');
          const focusAmount = Math.max(0, 1 - entry.distance / 190);
          const scale = 1.18 + focusAmount * 0.32;
          const shift = 0.1 + focusAmount * 0.08;
          const brightness = 1.04 + focusAmount * 0.06;
          const visualProgress = 0.62 + focusAmount * 0.38;
          const visualScale = 0.92 + focusAmount * 0.14;
          const visualOpacity = 0.72 + focusAmount * 0.28;

          entry.item.style.setProperty('--item-scale', scale.toFixed(3));
          entry.item.style.setProperty('--item-shift', `${shift.toFixed(3)}rem`);
          entry.item.style.setProperty('--item-brightness', brightness.toFixed(3));
          entry.item.style.setProperty('--item-visual-progress', visualProgress.toFixed(3));
          entry.item.style.setProperty('--item-visual-scale', visualScale.toFixed(3));
          entry.item.style.setProperty('--item-visual-opacity', visualOpacity.toFixed(3));
        }
      });

      rankedItems.slice(2, 4).forEach((entry) => {
        if (entry.distance < 280) {
          entry.item.classList.add('is-near-centered');
          const focusAmount = Math.max(0, 1 - entry.distance / 280);
          const scale = 1.06 + focusAmount * 0.16;
          const shift = 0.04 + focusAmount * 0.06;
          const brightness = 1.02 + focusAmount * 0.04;
          const visualProgress = 0.18 + focusAmount * 0.3;
          const visualScale = 0.82 + focusAmount * 0.1;
          const visualOpacity = 0.18 + focusAmount * 0.42;

          entry.item.style.setProperty('--item-scale', scale.toFixed(3));
          entry.item.style.setProperty('--item-shift', `${shift.toFixed(3)}rem`);
          entry.item.style.setProperty('--item-brightness', brightness.toFixed(3));
          entry.item.style.setProperty('--item-visual-progress', visualProgress.toFixed(3));
          entry.item.style.setProperty('--item-visual-scale', visualScale.toFixed(3));
          entry.item.style.setProperty('--item-visual-opacity', visualOpacity.toFixed(3));
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
                    alt=""
                    aria-hidden="true"
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
                  className={`option-group__item${assetSrc ? ' option-group__item--has-visual' : ''}`}
                >
                  <span className="option-group__item-label">{extra}</span>
                  {assetSrc ? (
                    <img
                      className="option-group__item-visual"
                      src={assetSrc}
                      alt=""
                      aria-hidden="true"
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
            <OptionGroup key={group.name} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
