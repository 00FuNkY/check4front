import { useState } from 'react';

function triple(number) {
  number *= 3;
  return number;
}

function divideBy3(number) {
  number /= 3;
  return number;
}

function Conversion() {
  const [ecocupEntree, setEcocupEntree] = useState({ input1: 0 });
  const [eurosEntree, setEurosEntree] = useState({ input2: 0 });

  return (
    <>
      <h1>Conversion</h1>
      <div>
        <label htmlFor="ecocupentree">ecocups</label>
        <input
          type="number"
          id="ecocupentree"
          name="ecocupentree"
          onChange={(e) =>
            setEcocupEntree({ ...ecocupEntree, input1: e.target.value })
          }
        ></input>{' '}
        =
        <p style={{ display: 'inline-block' }}>
          {triple(ecocupEntree.input1)} euros
        </p>
      </div>
      <div>
        <label htmlFor="ecocupentree">euros</label>
        <input
          type="number"
          id="ecocupentree"
          name="ecocupentree"
          onChange={(e) =>
            setEurosEntree({ ...eurosEntree, input2: e.target.value })
          }
        ></input>{' '}
        =
        <p style={{ display: 'inline-block' }}>
          {divideBy3(eurosEntree.input2)} ecopcups
        </p>
      </div>
    </>
  );
}

export default Conversion;
