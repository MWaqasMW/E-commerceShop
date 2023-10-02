import {css} from "styled-components"

export const mobile=(props)=>{
    return css`

    @media only screen and (max-width: 360px) {
       ${props}
      }
      `;
}
export const sub_mobiles=(props)=>{
    return css`

    @media only screen and (max-width: 556px) {
       ${props}
      }
      `;
}
export const tablets=(props)=>{
    return css`

    @media only screen and (max-width: 768px) {
       ${props}
      }
      `;
}
export const sub_tablets=(props)=>{
    return css`

    @media only screen and (max-width: 1042px) {
       ${props}
      }
      `;
}