import React from 'react';


const LoaderImage = () => (
  <span 
    dangerouslySetInnerHTML={{
      __html: 
      `<style>
        .loader_image{
        display:block;
        margin:auto;
      }
      </style>
      <svg class="loader_image" viewBox="-250 -350 1000 1000" height="500" width="500">
     <ellipse
       name="torso"
       cx="270"
       cy="250"
       rx="175"
       ry="119"
       style="fill:lime"
     />

     <ellipse
       name="head"
       cx="215"
       cy="150"
       rx="85"
       ry="61"
       style="fill:lime"
     />

     <ellipse
       name="left_leg"
       cx="425"
       cy="255"
       rx="57"
       ry="72"
       style="fill:lime"
     />

     <ellipse
       name="right_eye"
       cx="179"
       cy="96"
       rx="26"
       ry="18"
       style="fill:lime"
     />

     <ellipse
       name="left_eye"
       cx="241"
       cy="97"
       rx="24"
       ry="21"
       style="fill:lime"
     />

     <ellipse
       name="left_foot"
       cx="455"
       cy="326"
       rx="35"
       ry="21"
       style="fill:lime"
     />

     <ellipse
       name="right_arm"
       cx="152"
       cy="335"
       rx="43"
       ry="36"
       style="fill:lime"
     />

     <ellipse
       name="right_hand"
       cx="133"
       cy="365"
       rx="29"
       ry="20"
       style="fill:lime"
     />

     <ellipse
       name="left_hand"
       cx="340"
       cy="360"
       rx="30"
       ry="21"
       style="fill:lime"
     />

     <ellipse
       name="left_hand_big_toe"
       cx="325"
       cy="379"
       rx="5"
       ry="4"
       style="fill:lime"
     />

     <ellipse
       name="left_hand_mid_toe"
       cx="345"
       cy="382"
       rx="5"
       ry="4"
       style="fill:lime"
     />

     <ellipse
       name="left_hand_lil_toe"
       cx="362"
       cy="374"
       rx="5"
       ry="4"
       style="fill:lime"
     />

     <ellipse
       name="right_hand_big_toe"
       cx="144"
       cy="384"
       rx="5"
       ry="4"
       style="fill:lime"
     />

     <ellipse
       name="right_hand_mid_toe"
       cx="124"
       cy="384"
       rx="5"
       ry="4"
       style="fill:lime"
     />

     <ellipse
       name="right_hand_lil_toe"
       cx="107"
       cy="372"
       rx="5"
       ry="4"
       style="fill:lime"
     />

     <ellipse
       name="left_foot_big_toe"
       cx="435"
       cy="343"
       rx="6"
       ry="5"
       style="fill:lime"
     />

     <ellipse
       name="left_foot_mid_toe"
       cx="465"
       cy="346"
       rx="6"
       ry="5"
       style="fill:lime"
     />

     <ellipse
       name="left_foot_lil_toe"
       cx="485"
       cy="336"
       rx="6"
       ry="5"
       style="fill:lime"
     />

   </svg>`
    }}
  />
);

export default LoaderImage;
