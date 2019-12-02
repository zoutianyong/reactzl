import styled ,{keyframes}from "styled-components"


 const rotate =keyframes`
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  `
  
//   const rotate =keyframes`
//     100% {
//       -webkit-transform: rotate(360deg);
//               transform: rotate(360deg);
//     }
//   `
//    const dash =keyframes`
//     0% {
//       stroke-dasharray: 1, 200;
//       stroke-dashoffset: 0;
//     }
//     50% {
//       stroke-dasharray: 89, 200;
//       stroke-dashoffset: -35px;
//     }
//     100% {
//       stroke-dasharray: 89, 200;
//       stroke-dashoffset: -124px;
//     }
//   `
 const  dash=keyframes `
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  `
//  const  color=keyframes `
//     100%,
//     0% {
//       stroke: #d62d20;
//     }
//     40% {
//       stroke: #0057e7;
//     }
//     66% {
//       stroke: #008744;
//     }
//     80%,
//     90% {
//       stroke: #ffa700;
//     }
//   `
  const color = keyframes ` 
    100%,
    0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%,
    90% {
      stroke: #ffa700;
    }
  `

export const LoadingContainer =styled.div`
 position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;


.loader {
  position: relative;
  margin: 0 auto;
  width: 100px;
}
.loader:before {
  content: '';
  display: block;
  padding-top: 100%;
}

.circular {
  -webkit-animation: ${rotate} 2s linear infinite;
          animation: ${rotate} 2s linear infinite;
  height: 100%;
  -webkit-transform-origin: center center;
          transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  -webkit-animation: ${dash} 1.5s ease-in-out infinite, ${color} 6s ease-in-out infinite;
          animation: ${dash} 1.5s ease-in-out infinite, ${color} 6s ease-in-out infinite;
  stroke-linecap: round;
}


body {
  background-color: #eee;
}

.showbox {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5%;
}

`