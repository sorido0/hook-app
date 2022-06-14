import React, { useCallback, useState} from 'react';

import '../01-useState/contadorApp.css';
import { ShowIncrent } from './ShowIncrent';

export const CallMemo = () => {

    const [couanter, setCouanter] = useState(10);

    const incrementPAdre = useCallback(
      (value) => {
        setCouanter( (valorContador) => valorContador + value)
      },
      [],
    )
    // const incrementPAdre = () => {
    //     setCouanter(couanter + 1);
    // }

  return (
    <>
        <h1> Use Call Back { couanter }</h1>
        <hr />

        <ShowIncrent increment={ incrementPAdre } />
    </>
  )
}
