

# Aprendiendo Hooks

## Descripción

Este proyecto sencillo muestra una lista de items, un buscador y un segundero. 

Al escribir sobre el buscador se filtrarán los items de la lista por título. También se puede activar el cronómetro con un botón y apagarlo. Todo por detrás utiliza los "hooks" presentados para la versión 16.7 alpha de React. 
Se demuestra que el código producido es mucho más compacto comparado con la utilización de clases estándar.

useState: retorna un array de dos elementos. El primer elemento es una variable que se establece inicialmente en un valor por defecto pasado a "useState" y el segundo elemento es una función que permite alterar el valor de la variable.

useEffect: Se ejecuta asincrónicamente, después de las renderizaciones. Reemplaza a los métodos componentDidMount, componentDidUpdate y componentWillUnmount.

useLayoutEffect: Es similar a useEffect, pero se ejecuta sincronicamentente.

## Live Demo

Se puede acceder a una demostración en vivo del proyecto mediante CodeSandBox. Por el momento arroja error ya que se trata de una versión alfa de React. 

https://codesandbox.io/s/github/correooke/hooks-simple

### Autor: Emiliano Ocariz
