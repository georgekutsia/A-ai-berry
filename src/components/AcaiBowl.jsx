export default function AcaiBowl({ className = '' }) {
  return (
    <div className={`acai-bowl ${className}`.trim()} aria-hidden="true">
      <div className="acai-bowl__shadow" />
      <div className="acai-bowl__body">
        <div className="acai-bowl__rim" />
        <div className="acai-bowl__inner">
          <div className="acai-bowl__base">
            <span className="acai-bowl__swirl acai-bowl__swirl--one" />
            <span className="acai-bowl__swirl acai-bowl__swirl--two" />
            <span className="acai-bowl__swirl acai-bowl__swirl--three" />
          </div>

          <div className="acai-bowl__toppings">
            <span className="acai-bowl__cluster acai-bowl__cluster--mango">
              <span className="piece piece--mango" />
              <span className="piece piece--mango" />
              <span className="piece piece--mango" />
              <span className="piece piece--mango" />
            </span>

            <span className="acai-bowl__cluster acai-bowl__cluster--banana">
              <span className="piece piece--banana" />
              <span className="piece piece--banana" />
              <span className="piece piece--banana" />
            </span>

            <span className="acai-bowl__cluster acai-bowl__cluster--granola">
              <span className="piece piece--granola" />
              <span className="piece piece--granola" />
              <span className="piece piece--granola" />
            </span>

            <span className="acai-bowl__cluster acai-bowl__cluster--berries">
              <span className="piece piece--berry piece--berry-large" />
              <span className="piece piece--berry" />
              <span className="piece piece--berry" />
              <span className="piece piece--blueberry" />
              <span className="piece piece--blueberry" />
              <span className="piece piece--blueberry" />
            </span>

            <span className="acai-bowl__cluster acai-bowl__cluster--chia">
              <span className="piece piece--chia" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
