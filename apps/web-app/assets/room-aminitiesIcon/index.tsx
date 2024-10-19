import React from "react";

interface LogoProps {
  width?: string | number;
  height?: string | number;
}

export const DentalCare: React.FC<LogoProps> = ({
  width = 100, // Default width
  height = 100, // Default height
}) => {
  return (
<svg width={width} height={height} viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_410_84)">
<path d="M33.2351 3.70371C31.1787 3.07635 29.2388 2.13706 27.4696 0.911899C27.2441 0.755767 26.9455 0.755767 26.72 0.911899C24.9508 2.13699 23.011 3.07635 20.9545 3.70371C20.6776 3.78823 20.4883 4.04375 20.4883 4.3333V5.4232C19.4492 5.44722 18.4114 5.65285 17.4504 6.02811C15.5719 6.7621 13.5027 6.7621 11.6243 6.02811C6.13855 3.88591 0.0196594 7.62168 4.4211e-05 13.1344C-0.00364187 14.2285 0.223184 15.2629 0.674136 16.2089C4.10936 23.415 4.22146 24.5143 4.44467 26.7045C4.68104 29.024 4.90681 29.8838 5.28509 32.2953C5.74177 35.0275 9.82358 35.2799 10.6819 32.659L13.0764 25.3617C13.5397 23.9493 15.5359 23.951 15.9985 25.3618L18.3931 32.6589C19.251 35.2748 23.3326 35.0318 23.7899 32.295L24.314 29.1517C25.081 24.5505 23.2922 25.3145 27.5823 16.2666C31.3123 14.6563 33.7013 10.9933 33.7013 6.96306V4.3333C33.7013 4.04375 33.512 3.78816 33.2351 3.70371ZM23.0154 28.9353L22.4913 32.0784C22.2634 33.4433 20.0779 33.5723 19.6439 32.2486L17.2494 24.9515C16.3893 22.3293 12.6834 22.3354 11.8255 24.9515L9.43088 32.249C8.99763 33.572 6.81165 33.4437 6.58358 32.0786C6.10768 29.0475 5.99183 28.9014 5.75434 26.571C5.51567 24.2296 5.39594 23.0545 1.86237 15.6425C1.49712 14.8761 1.31341 14.0339 1.31644 13.139C1.33296 8.49456 6.58924 5.475 11.1452 7.25426C13.3326 8.1089 15.742 8.10897 17.9293 7.25426C18.7388 6.93818 19.6126 6.76335 20.4883 6.73972V6.96299C20.4883 10.8723 22.7312 14.4058 26.2116 16.0866C22.0207 25.0157 23.7371 24.6067 23.0154 28.9353ZM29.9527 7.3424L26.4829 10.8015C26.1884 11.095 25.6996 11.0448 25.4702 10.7L24.1537 8.72263C23.9522 8.41998 24.0343 8.01142 24.3369 7.80994C24.6395 7.60858 25.0481 7.69047 25.2496 7.99312L26.1214 9.30273L29.0231 6.41002C29.2806 6.15337 29.6973 6.15396 29.954 6.41146C30.2108 6.66896 30.2101 7.08575 29.9527 7.3424Z" fill="#A75F37"/>
</g>
<defs>
<clipPath id="clip0_410_84">
<rect width="33.7013" height="33.7013" fill="white" transform="translate(0 0.792297)"/>
</clipPath>
</defs>
</svg>

)}

export const HairDryer : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
<svg width={width} height={height} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_410_69)">
<path d="M27.0768 15.4779C27.0506 15.4779 27.0249 15.4773 26.9993 15.4755L7.86954 14.3869C7.1537 14.3461 6.5957 13.7544 6.5957 13.0385V2.44356C6.5957 1.72771 7.1537 1.13535 7.86954 1.09516L26.9999 0.00654127C27.0249 0.00479389 27.0506 0.00421143 27.0768 0.00421143C30.8796 0.00421143 33.9748 3.09882 33.9748 6.90287V8.57978C33.9748 12.3832 30.8802 15.4779 27.0768 15.4779ZM9.29657 11.7623L27.1129 12.7764C29.4101 12.7578 31.274 10.8822 31.274 8.57978V6.90287C31.274 4.60041 29.4107 2.72547 27.1129 2.70625L9.29657 3.72031V11.7623Z" fill="#A75F37"/>
<path d="M7.94519 14.3887H2.99486C2.24815 14.3887 1.64355 13.7841 1.64355 13.0379V2.47734C1.64355 1.73121 2.24815 1.12662 2.99486 1.12662H7.94519C8.69191 1.12662 9.29592 1.73121 9.29592 2.47734V13.0385C9.29592 13.7841 8.69191 14.3887 7.94519 14.3887ZM4.34442 11.6878H6.59505V3.82749H4.34442V11.6878ZM23.1893 31.3418C22.9593 31.3418 22.7275 31.326 22.4933 31.2922C21.2014 31.1064 20.0592 30.429 19.2775 29.3847C18.4959 28.3398 18.1685 27.0543 18.3532 25.7641L20.0912 13.6152C20.1955 12.876 20.8799 12.3588 21.6196 12.4689C22.3588 12.5743 22.8707 13.2587 22.7653 13.9972L21.0278 26.1474C20.9434 26.7252 21.0902 27.2995 21.4402 27.766C21.7891 28.2332 22.3005 28.5355 22.8777 28.6187C24.0665 28.7906 25.1796 27.9582 25.3514 26.7642L27.2136 13.7322C27.3196 12.9931 27.9999 12.4788 28.7419 12.5859C29.4811 12.6914 29.9931 13.3752 29.8882 14.1143L28.0261 27.1469C27.6772 29.581 25.5803 31.3418 23.1893 31.3418Z" fill="#A75F37"/>
<path d="M20.8167 19.4293H18.2964C17.5509 19.4293 16.9463 18.8247 16.9463 18.0785C16.9463 17.3324 17.5509 16.7278 18.2964 16.7278H20.8167C21.5623 16.7278 22.1669 17.3324 22.1669 18.0785C22.1669 18.8247 21.5629 19.4293 20.8167 19.4293ZM30.5421 37.2817C29.2548 37.2817 27.6816 37.1902 25.8387 36.9171C23.8013 36.6136 22.3713 35.7615 21.5873 34.3822C20.3554 32.2137 21.3217 29.7184 21.4359 29.4412C21.7207 28.7515 22.5094 28.423 23.1996 28.7067C23.8875 28.9904 24.2166 29.7755 23.9364 30.4634C23.7675 30.8898 23.439 32.1846 23.9411 33.0571C24.2952 33.6716 25.067 34.0712 26.2348 34.2447C31.1572 34.9751 33.9011 34.2849 33.9268 34.2779C34.6467 34.0822 35.3881 34.5063 35.5856 35.2256C35.7819 35.9455 35.3579 36.6876 34.6379 36.8839C34.55 36.9072 33.1323 37.2817 30.5421 37.2817Z" fill="#A75F37"/>
</g>
<defs>
<clipPath id="clip0_410_69">
<rect width="37.2775" height="37.2775" fill="white" transform="translate(0 0.00421143)"/>
</clipPath>
</defs>
</svg>

)} 

export const Hanger : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
<svg width={width} height={height}  viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_410_73)">
<path d="M41.6261 30.901C41.4521 30.1748 40.9824 29.5486 40.3476 29.1833L26.9015 20.9861C25.647 20.2133 25.4064 19.1386 24.8489 18.2768C24.1101 16.9343 22.7637 16.0686 21.2639 15.9271V15.4558C21.2639 15.2076 21.4126 14.9905 21.6249 14.9282C23.0437 14.5103 23.8833 13.0926 23.5785 11.6301C23.3567 10.5665 22.4934 9.70274 21.4296 9.48103C19.9661 9.17567 18.5494 10.0161 18.1316 11.435C18.0683 11.6507 17.8919 11.7956 17.6557 11.7956C17.4156 11.7956 17.2393 11.9903 17.2393 12.2304C17.2393 12.4705 17.4525 12.6653 17.6926 12.6653C18.281 12.6653 18.7927 12.2695 18.966 11.6807C19.2546 10.7007 20.2358 10.1204 21.2521 10.3326C21.982 10.4848 22.5748 11.0774 22.7274 11.8077C22.9389 12.8224 22.3592 13.8051 21.3795 14.0937C20.7994 14.2645 20.3944 14.8246 20.3944 15.4559V15.928C18.869 16.0735 17.5274 16.9656 16.7647 18.3638C16.2275 19.1941 15.9846 20.2288 14.76 20.986L1.32251 29.1746C0.678854 29.5486 0.209228 30.1748 0.0309629 30.901C-0.188716 31.8182 0.80399 32.5549 1.6356 32.1012L18.2476 22.9603C19.8653 22.0688 21.796 22.0688 23.4095 22.9603L40.0258 32.1012C40.8317 32.5467 41.8509 31.8395 41.6261 30.901Z" fill="#A75F37"/>
<path d="M5.95791 30.7141L4.375 31.5838H37.2814L35.6986 30.7141H5.95791Z" fill="#A75F37"/>
</g>
<defs>
<clipPath id="clip0_410_73">
<rect width="41.6577" height="41.6577" fill="white"/>
</clipPath>
</defs>
</svg>


)} 

export const Laundry : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
<svg width={width} height={height} viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_410_44)">
<path d="M28.2158 26.4548H25.8137C25.6761 26.4548 25.5442 26.4002 25.4469 26.3029C25.3496 26.2056 25.2949 26.0736 25.2949 25.936C25.2949 25.7984 25.3496 25.6665 25.4469 25.5692C25.5442 25.4719 25.6761 25.4172 25.8137 25.4172H27.6814V14.3253C27.6814 14.1464 27.6103 13.9749 27.4839 13.8484C27.3574 13.7219 27.1858 13.6509 27.007 13.6509C26.8694 13.6509 26.7374 13.5962 26.6401 13.4989C26.5428 13.4016 26.4882 13.2697 26.4882 13.1321C26.4882 12.9945 26.5428 12.8625 26.6401 12.7652C26.7374 12.6679 26.8694 12.6133 27.007 12.6133C27.461 12.6133 27.8965 12.7936 28.2176 13.1147C28.5386 13.4358 28.719 13.8712 28.719 14.3253V25.936C28.7191 26.071 28.6665 26.2006 28.5726 26.2975C28.4786 26.3944 28.3506 26.4508 28.2158 26.4548Z" fill="#78350F"/>
<path d="M29.7517 15.2125H27.2978C27.1602 15.2125 27.0282 15.1578 26.931 15.0605C26.8337 14.9632 26.779 14.8313 26.779 14.6937C26.779 14.5561 26.8337 14.4241 26.931 14.3268C27.0282 14.2295 27.1602 14.1749 27.2978 14.1749H29.7517C29.9415 14.1739 30.1254 14.1082 30.2729 13.9888C30.4204 13.8693 30.5229 13.7032 30.5633 13.5177C30.6038 13.3322 30.5799 13.1385 30.4956 12.9685C30.4112 12.7984 30.2715 12.6622 30.0993 12.5822L17.8971 6.96874L4.92715 12.5925C4.75284 12.6677 4.6098 12.8007 4.52214 12.9691C4.43449 13.1375 4.40759 13.3309 4.44599 13.5168C4.4844 13.7027 4.58574 13.8697 4.73294 13.9896C4.88013 14.1095 5.06417 14.1749 5.254 14.1749H6.51468C6.65228 14.1749 6.78423 14.2295 6.88153 14.3268C6.97882 14.4241 7.03348 14.5561 7.03348 14.6937C7.03348 14.8313 6.97882 14.9632 6.88153 15.0605C6.78423 15.1578 6.65228 15.2125 6.51468 15.2125H5.26956C4.84118 15.2109 4.42645 15.0616 4.09526 14.7899C3.76407 14.5182 3.53666 14.1407 3.45136 13.7209C3.36606 13.3011 3.42808 12.8647 3.62697 12.4853C3.82586 12.1059 4.14946 11.8066 4.54324 11.6379L17.7104 5.93114C17.7773 5.90107 17.8498 5.88553 17.9231 5.88553C17.9964 5.88553 18.0689 5.90107 18.1358 5.93114L30.5507 11.6379C30.9389 11.8164 31.2544 12.1222 31.4448 12.5047C31.6353 12.8871 31.6893 13.3232 31.5978 13.7405C31.5064 14.1579 31.275 14.5314 30.942 14.7991C30.609 15.0669 30.1945 15.2127 29.7673 15.2125H29.7517Z" fill="#78350F"/>
<path d="M17.8854 6.91686C17.7478 6.91686 17.6158 6.8622 17.5186 6.76491C17.4213 6.66762 17.3666 6.53566 17.3666 6.39806V4.5252C17.3666 4.3876 17.4213 4.25564 17.5186 4.15835C17.6158 4.06106 17.7478 4.0064 17.8854 4.0064C18.1128 4.00715 18.3358 3.94319 18.5282 3.82196C18.7206 3.70074 18.8746 3.52727 18.9721 3.32181C19.0696 3.11635 19.1066 2.88738 19.0789 2.66166C19.0511 2.43594 18.9597 2.22277 18.8153 2.04707C18.6709 1.87137 18.4795 1.74038 18.2634 1.6694C18.0473 1.59843 17.8155 1.5904 17.5951 1.64625C17.3746 1.7021 17.1746 1.81953 17.0184 1.98482C16.8622 2.15011 16.7562 2.35644 16.7129 2.5797C16.6999 2.64694 16.6737 2.71093 16.6358 2.76799C16.5979 2.82505 16.5491 2.87405 16.4922 2.91215C16.4353 2.95025 16.3714 2.97671 16.3042 2.98999C16.237 3.00328 16.1679 3.00313 16.1007 2.98955C15.966 2.96318 15.8472 2.8845 15.7704 2.77072C15.6936 2.65695 15.665 2.51737 15.6909 2.38255C15.7673 1.98933 15.9481 1.62394 16.2145 1.32474C16.4808 1.02553 16.8228 0.80356 17.2045 0.682126C17.5862 0.560693 17.9936 0.54428 18.3838 0.63461C18.7741 0.72494 19.1328 0.918681 19.4224 1.19549C19.7119 1.4723 19.9216 1.82196 20.0293 2.20775C20.1371 2.59355 20.139 3.00125 20.0349 3.38804C19.9307 3.77484 19.7243 4.12645 19.4374 4.40596C19.1505 4.68547 18.7936 4.88257 18.4042 4.97655V6.39288C18.4049 6.46144 18.392 6.52946 18.3662 6.59301C18.3404 6.65655 18.3023 6.71435 18.2541 6.76308C18.2058 6.81181 18.1484 6.85049 18.0851 6.87688C18.0219 6.90328 17.954 6.91687 17.8854 6.91686ZM25.8127 32.7427H6.52368C6.38609 32.7427 6.25413 32.6881 6.15684 32.5908C6.05954 32.4935 6.00488 32.3615 6.00488 32.2239V14.4913C6.00625 13.9923 6.2051 13.5141 6.55798 13.1612C6.91086 12.8083 7.38908 12.6095 7.88813 12.6081H27.0215C27.1591 12.6081 27.291 12.6628 27.3883 12.76C27.4856 12.8573 27.5403 12.9893 27.5403 13.1269C27.5403 13.2645 27.4856 13.3964 27.3883 13.4937C27.291 13.591 27.1591 13.6457 27.0215 13.6457C26.9313 13.6443 26.8419 13.6609 26.7582 13.6944C26.6745 13.728 26.5984 13.7778 26.5342 13.841C26.47 13.9043 26.419 13.9797 26.3842 14.0628C26.3494 14.146 26.3314 14.2352 26.3315 14.3253V32.2239C26.3315 32.3615 26.2768 32.4935 26.1795 32.5908C26.0822 32.6881 25.9503 32.7427 25.8127 32.7427ZM7.04248 31.7051H25.2939V14.3253C25.2941 14.0916 25.3418 13.8604 25.4339 13.6457H7.88813C7.66385 13.6457 7.44875 13.7348 7.29017 13.8934C7.13158 14.052 7.04248 14.2671 7.04248 14.4913V31.7051Z" fill="#78350F"/>
<path d="M23.2861 29.1578H6.52368C6.38609 29.1578 6.25413 29.1031 6.15684 29.0059C6.05954 28.9086 6.00488 28.7766 6.00488 28.639C6.00488 28.5014 6.05954 28.3695 6.15684 28.2722C6.25413 28.1749 6.38609 28.1202 6.52368 28.1202H23.2861C23.4237 28.1202 23.5557 28.1749 23.653 28.2722C23.7502 28.3695 23.8049 28.5014 23.8049 28.639C23.8049 28.7766 23.7502 28.9086 23.653 29.0059C23.5557 29.1031 23.4237 29.1578 23.2861 29.1578Z" fill="#78350F"/>
<path d="M25.8127 32.7427H6.52368C6.38609 32.7427 6.25413 32.688 6.15684 32.5907C6.05954 32.4934 6.00488 32.3615 6.00488 32.2239V14.4913C6.00625 13.9923 6.2051 13.5141 6.55798 13.1612C6.91086 12.8083 7.38908 12.6094 7.88813 12.6081H27.0215C27.1591 12.6081 27.291 12.6627 27.3883 12.76C27.4856 12.8573 27.5403 12.9893 27.5403 13.1269C27.5403 13.2645 27.4856 13.3964 27.3883 13.4937C27.291 13.591 27.1591 13.6457 27.0215 13.6457C26.9313 13.6443 26.8419 13.6609 26.7582 13.6944C26.6745 13.7279 26.5984 13.7778 26.5342 13.841C26.47 13.9043 26.419 13.9797 26.3842 14.0628C26.3494 14.1459 26.3314 14.2352 26.3315 14.3253V32.2239C26.3315 32.3615 26.2768 32.4934 26.1795 32.5907C26.0822 32.688 25.9503 32.7427 25.8127 32.7427ZM7.04248 31.7051H25.2939V14.3253C25.2941 14.0916 25.3418 13.8604 25.4339 13.6457H7.88813C7.66385 13.6457 7.44875 13.7348 7.29017 13.8934C7.13158 14.0519 7.04248 14.267 7.04248 14.4913V31.7051Z" fill="#78350F"/>
<path d="M9.04614 32.6234C8.90855 32.6234 8.77659 32.5687 8.6793 32.4714C8.582 32.3741 8.52734 32.2422 8.52734 32.1046V30.9373C8.52734 30.7997 8.582 30.6677 8.6793 30.5704C8.77659 30.4731 8.90855 30.4185 9.04614 30.4185C9.18374 30.4185 9.3157 30.4731 9.41299 30.5704C9.51028 30.6677 9.56494 30.7997 9.56494 30.9373V32.1046C9.56494 32.2422 9.51028 32.3741 9.41299 32.4714C9.3157 32.5687 9.18374 32.6234 9.04614 32.6234ZM11.8944 32.6234C11.7568 32.6234 11.6248 32.5687 11.5275 32.4714C11.4302 32.3741 11.3756 32.2422 11.3756 32.1046V30.9373C11.3756 30.7997 11.4302 30.6677 11.5275 30.5704C11.6248 30.4731 11.7568 30.4185 11.8944 30.4185C12.0319 30.4185 12.1639 30.4731 12.2612 30.5704C12.3585 30.6677 12.4132 30.7997 12.4132 30.9373V32.1046C12.4132 32.2422 12.3585 32.3741 12.2612 32.4714C12.1639 32.5687 12.0319 32.6234 11.8944 32.6234ZM14.7426 32.6234C14.605 32.6234 14.473 32.5687 14.3757 32.4714C14.2784 32.3741 14.2238 32.2422 14.2238 32.1046V30.9373C14.2238 30.7997 14.2784 30.6677 14.3757 30.5704C14.473 30.4731 14.605 30.4185 14.7426 30.4185C14.8802 30.4185 15.0121 30.4731 15.1094 30.5704C15.2067 30.6677 15.2614 30.7997 15.2614 30.9373V32.1046C15.2614 32.2422 15.2067 32.3741 15.1094 32.4714C15.0121 32.5687 14.8802 32.6234 14.7426 32.6234ZM17.5908 32.6234C17.4532 32.6234 17.3212 32.5687 17.2239 32.4714C17.1266 32.3741 17.072 32.2422 17.072 32.1046V30.9373C17.072 30.7997 17.1266 30.6677 17.2239 30.5704C17.3212 30.4731 17.4532 30.4185 17.5908 30.4185C17.7284 30.4185 17.8603 30.4731 17.9576 30.5704C18.0549 30.6677 18.1096 30.7997 18.1096 30.9373V32.1046C18.1096 32.2422 18.0549 32.3741 17.9576 32.4714C17.8603 32.5687 17.7284 32.6234 17.5908 32.6234ZM20.439 32.6234C20.3014 32.6234 20.1694 32.5687 20.0721 32.4714C19.9748 32.3741 19.9202 32.2422 19.9202 32.1046V30.9373C19.9202 30.7997 19.9748 30.6677 20.0721 30.5704C20.1694 30.4731 20.3014 30.4185 20.439 30.4185C20.5766 30.4185 20.7085 30.4731 20.8058 30.5704C20.9031 30.6677 20.9578 30.7997 20.9578 30.9373V32.1046C20.9578 32.2422 20.9031 32.3741 20.8058 32.4714C20.7085 32.5687 20.5766 32.6234 20.439 32.6234ZM23.2872 32.6234C23.1496 32.6234 23.0176 32.5687 22.9204 32.4714C22.8231 32.3741 22.7684 32.2422 22.7684 32.1046V30.9373C22.7684 30.7997 22.8231 30.6677 22.9204 30.5704C23.0176 30.4731 23.1496 30.4185 23.2872 30.4185C23.4248 30.4185 23.5568 30.4731 23.654 30.5704C23.7513 30.6677 23.806 30.7997 23.806 30.9373V32.1046C23.806 32.2422 23.7513 32.3741 23.654 32.4714C23.5568 32.5687 23.4248 32.6234 23.2872 32.6234Z" fill="#78350F"/>
</g>
<defs>
<clipPath id="clip0_410_44">
<rect width="33.2032" height="33.2032" fill="white" transform="translate(0.911133 0.0583191)"/>
</clipPath>
</defs>
</svg>

)} 

export const Razor : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_410_51)">
<path d="M27.8988 8.08833C27.6788 7.86831 27.3219 7.86831 27.1018 8.08833L25.105 10.0851L19.1154 4.09549L21.1122 2.09868C21.3323 1.8786 21.3323 1.52175 21.1122 1.30161C20.8921 1.08159 20.5352 1.08159 20.3151 1.30161L14.7261 6.89062C14.506 7.11069 14.506 7.46755 14.7261 7.68769C14.9462 7.90782 15.303 7.90771 15.5231 7.68769L16.7215 6.48935L22.7111 12.4789L21.5127 13.6773C21.2926 13.8974 21.2926 14.2542 21.5127 14.4743C21.7328 14.6945 22.0897 14.6944 22.3097 14.4743L27.8987 8.88534C28.1189 8.66527 28.1189 8.30841 27.8988 8.08833ZM17.5186 5.69234L18.3184 4.89256L24.308 10.8822L23.5082 11.6819L17.5186 5.69234ZM3.43674 21.3724C3.2166 21.1525 2.8598 21.1524 2.63967 21.3724C2.41959 21.5925 2.41959 21.9494 2.63967 22.1695L7.03101 26.5609C7.25115 26.781 7.60795 26.781 7.82802 26.5609C8.0481 26.3408 8.04816 25.984 7.82808 25.7638L3.43674 21.3724Z" fill="#78350F"/>
<path d="M28.2151 8.40422L20.7966 0.985783C19.8684 0.0575703 18.366 0.0574575 17.4376 0.985783L14.4106 4.01287C13.4845 4.93895 13.4845 6.44573 14.4106 7.37186L15.5255 8.48684L15.3019 8.71052C14.5258 9.48663 14.3667 10.6491 14.8233 11.5843L13.758 12.6497C13.0752 13.3326 12.2183 13.8152 11.2802 14.0454C10.142 14.3245 9.10244 14.9101 8.27375 15.7387L1.24278 22.7697C-0.187697 24.2002 -0.187697 26.5277 1.24278 27.9581C2.6732 29.3885 5.0006 29.3885 6.43113 27.9581L13.4621 20.927C14.2907 20.0985 14.8763 19.0589 15.1555 17.9206C15.3855 16.9826 15.8681 16.1257 16.5511 15.4427L17.6155 14.3784C18.5337 14.829 19.6989 14.6902 20.4902 13.8989L20.714 13.6752L21.829 14.7902C22.755 15.7162 24.2618 15.7163 25.188 14.7902L28.215 11.7631C29.1433 10.835 29.1434 9.33254 28.2151 8.40422ZM15.7542 14.6457C14.9255 15.4744 14.3399 16.514 14.0609 17.6522C13.8307 18.5903 13.3482 19.4471 12.6652 20.13L5.63412 27.161C4.64318 28.152 3.03079 28.152 2.03985 27.161C1.04885 26.1701 1.04885 24.5577 2.03985 23.5667L9.07082 16.5357C9.75382 15.8527 10.6107 15.3701 11.5488 15.14C12.687 14.8609 13.7266 14.2752 14.5552 13.4467L15.5243 12.4775L16.7233 13.6766L15.7542 14.6457ZM19.6932 13.102C19.1542 13.641 18.2817 13.6412 17.7427 13.102L16.0989 11.4582C15.5611 10.9204 15.5611 10.0454 16.0989 9.50765L16.3226 9.28396L19.9169 12.8783L19.6932 13.102ZM27.4181 10.9661L24.391 13.9932C23.9044 14.4799 23.1127 14.4799 22.6261 13.9932C21.5148 12.882 16.1396 7.50672 15.2077 6.57484C14.7211 6.08819 14.7211 5.29642 15.2077 4.80994L18.2348 1.78285C18.7225 1.29508 19.5119 1.29508 19.9997 1.78285L27.4181 9.20129C27.9058 9.68906 27.9058 10.4784 27.4181 10.9661Z" fill="#A75F37"/>
</g>
<defs>
<clipPath id="clip0_410_51">
<rect width="28.7413" height="28.7413" fill="white" transform="translate(0.167969 0.289673)"/>
</clipPath>
</defs>
</svg>

)}

export const Slipper : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_410_80)">
        <path d="M8.23968 29.2728C7.16663 29.2737 6.10555 29.0473 5.12626 28.6087C4.14697 28.17 3.27166 27.529 2.55793 26.7277C1.84419 25.9264 1.30821 24.9831 0.985243 23.9598C0.662278 22.9365 0.559651 21.8565 0.684114 20.7906L2.22836 7.66159C2.34632 6.63383 2.66708 5.63969 3.17206 4.7368C3.67703 3.8339 4.35617 3.0402 5.17012 2.40169C5.98032 1.75884 6.90993 1.28299 7.90518 1.00168C8.90044 0.720369 9.9416 0.639168 10.9684 0.762776H10.9673C12.0228 0.882991 13.0427 1.21746 13.9644 1.74568C14.8862 2.2739 15.6904 2.98476 16.3277 3.8347C16.9711 4.6799 17.4352 5.64751 17.6915 6.6783C17.9479 7.70909 17.9912 8.78136 17.8187 9.82945L15.7183 22.8851C15.4361 24.6658 14.5279 26.2873 13.157 27.4581C11.7861 28.629 10.0425 29.2725 8.23968 29.2728ZM10.036 3.07619C8.80531 3.07619 7.61725 3.4868 6.63627 4.2607C6.06734 4.70706 5.59262 5.26185 5.23959 5.89295C4.88657 6.52405 4.66225 7.21892 4.57964 7.93731L3.03421 21.0687C2.87378 22.4444 3.26557 23.8276 4.12364 24.9149C4.98171 26.0021 6.23599 26.7046 7.61133 26.8682C10.4052 27.1984 12.9363 25.2826 13.3824 22.5088L15.4817 9.45671C15.7219 7.95979 15.3515 6.47116 14.4391 5.26298C13.5268 4.0548 12.1944 3.29155 10.6892 3.11524C10.4724 3.08938 10.2543 3.07635 10.036 3.07619Z" fill="#A75F37"/>
        <path d="M15.8936 15.5428C15.7085 15.543 15.526 15.4998 15.3608 15.4165C15.1955 15.3333 15.0521 15.2123 14.9422 15.0635L10.0042 8.40255L3.5976 12.969C3.34179 13.1459 3.02663 13.215 2.72028 13.1613C2.41393 13.1076 2.14104 12.9355 1.96063 12.6821C1.78023 12.4288 1.70681 12.1146 1.75628 11.8075C1.80574 11.5005 1.9741 11.2253 2.22494 11.0414L9.57579 5.80159C9.82826 5.62243 10.1408 5.54912 10.4466 5.59732C10.7524 5.64552 11.0272 5.81142 11.2123 6.05955L16.8438 13.6554C16.9745 13.8314 17.0537 14.0403 17.0725 14.2588C17.0914 14.4772 17.0492 14.6966 16.9507 14.8925C16.8521 15.0883 16.7011 15.253 16.5145 15.368C16.3278 15.483 16.1128 15.544 15.8936 15.5439V15.5428ZM30.8899 38.5763C29.0873 38.576 27.3438 37.9328 25.973 36.7621C24.6021 35.5915 23.6938 33.9703 23.4113 32.1899L21.3109 19.1342C21.1383 18.0859 21.1814 17.0134 21.4378 15.9824C21.6942 14.9514 22.1584 13.9836 22.8019 13.1382C23.4392 12.2884 24.2435 11.5777 25.1652 11.0497C26.087 10.5217 27.1069 10.1874 28.1624 10.0675C32.4638 9.55984 36.3924 12.6543 36.9001 16.9651L38.4467 30.0942C38.5712 31.1601 38.4685 32.2403 38.1455 33.2636C37.8224 34.287 37.2863 35.2304 36.5725 36.0317C35.8586 36.8329 34.9832 37.474 34.0037 37.9126C33.0243 38.3511 31.9631 38.5774 30.8899 38.5763ZM28.4404 12.4188C27.7025 12.5028 26.9894 12.7366 26.345 13.1059C25.7006 13.4752 25.1384 13.9723 24.6928 14.5665C24.2425 15.1577 23.9177 15.8345 23.7382 16.5557C23.5587 17.2768 23.5284 18.027 23.6491 18.7602L25.7484 31.8136C25.9592 33.1458 26.6783 34.3444 27.7546 35.1574C28.8308 35.9704 30.1804 36.3344 31.5195 36.1729C32.895 36.0093 34.1495 35.3066 35.0076 34.2192C35.8657 33.1317 36.2574 31.7482 36.0966 30.3723L34.5512 17.2432C34.3796 15.7818 33.6483 14.4766 32.4945 13.5654C31.3408 12.6543 29.8983 12.2448 28.4404 12.4188Z" fill="#A75F37"/>
        <path d="M23.2359 24.8461C23.0167 24.8459 22.8019 24.7848 22.6154 24.6697C22.429 24.5546 22.2781 24.3899 22.1797 24.1941C22.0813 23.9983 22.0392 23.779 22.0581 23.5607C22.077 23.3423 22.1562 23.1335 22.2868 22.9575L27.9171 15.3641C28.1019 15.1155 28.3767 14.9492 28.6827 14.9009C28.9887 14.8527 29.3014 14.9264 29.5537 15.1061L36.9057 20.3459C37.0323 20.4361 37.1398 20.5504 37.2223 20.6822C37.3047 20.8139 37.3603 20.9607 37.386 21.114C37.4118 21.2672 37.407 21.4241 37.3721 21.5755C37.3372 21.727 37.2728 21.8701 37.1826 21.9967C37.0924 22.1232 36.9781 22.2308 36.8464 22.3132C36.7146 22.3956 36.5679 22.4513 36.4146 22.477C36.2613 22.5027 36.1045 22.498 35.953 22.4631C35.8015 22.4282 35.6584 22.3638 35.5319 22.2736L29.1265 17.7059L24.1873 24.3681C24.0772 24.5167 23.9338 24.6374 23.7685 24.7204C23.6033 24.8034 23.4208 24.8465 23.2359 24.8461Z" fill="#A75F37"/>
        </g>
        <defs>
        <clipPath id="clip0_410_80">
        <rect width="37.8666" height="37.8666" fill="white" transform="translate(0.630859 0.709717)"/>
        </clipPath>
        </defs>
        </svg>
           
)} 

export const Sweater : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_410_87)">
        <path d="M16.6149 0.0446777C7.46163 0.0446777 0.0341797 7.31256 0.0341797 16.2691C0.0341797 25.2257 7.46163 32.4936 16.6149 32.4936C25.7681 32.4936 33.1955 25.2257 33.1955 16.2691C33.1955 7.31256 25.7681 0.0446777 16.6149 0.0446777ZM16.6149 0.720696C25.3943 0.720696 32.5047 7.67828 32.5047 16.2691C32.5047 24.8606 25.3943 31.8176 16.6149 31.8176C7.83539 31.8176 0.725041 24.8606 0.725041 16.2691C0.725041 7.67828 7.83539 0.720696 16.6149 0.720696ZM11.088 6.80486C9.56323 6.80486 8.32452 8.01697 8.32452 9.50894V24.0433C8.32452 24.133 8.36091 24.219 8.42569 24.2824C8.49047 24.3457 8.57833 24.3814 8.66995 24.3814H11.088V25.3954C11.088 25.485 11.1244 25.571 11.1891 25.6344C11.2539 25.6978 11.3418 25.7334 11.4334 25.7334H21.7963C21.8879 25.7334 21.9758 25.6978 22.0406 25.6344C22.1054 25.571 22.1417 25.485 22.1417 25.3954V24.3814H24.5598C24.6514 24.3814 24.7392 24.3457 24.804 24.2824C24.8688 24.219 24.9052 24.133 24.9052 24.0433V9.50894C24.9052 8.01697 23.6665 6.80486 22.1417 6.80486H11.088ZM11.088 7.48088H12.4697C12.4976 8.5385 12.9466 9.54362 13.7209 10.282C14.4952 11.0204 15.5337 11.4336 16.6149 11.4336C17.6961 11.4336 18.7345 11.0204 19.5088 10.282C20.2831 9.54362 20.7321 8.5385 20.76 7.48088H22.1417C23.2955 7.48088 24.2143 8.37999 24.2143 9.50894V14.2411H22.1417V13.227C22.1417 13.1374 22.1054 13.0514 22.0406 12.988C21.9758 12.9246 21.8879 12.889 21.7963 12.889C21.7047 12.889 21.6168 12.9246 21.5521 12.988C21.4873 13.0514 21.4509 13.1374 21.4509 13.227V14.5385L20.9141 14.2749C20.8662 14.2515 20.8135 14.2394 20.76 14.2394C20.7066 14.2394 20.6538 14.2515 20.606 14.2749L19.3783 14.8765L18.1506 14.2749C18.1028 14.2515 18.05 14.2394 17.9966 14.2394C17.9431 14.2394 17.8904 14.2515 17.8425 14.2749L16.6149 14.8765L15.3872 14.2749C15.3393 14.2515 15.2866 14.2394 15.2331 14.2394C15.1797 14.2394 15.1269 14.2515 15.0791 14.2749L13.8514 14.8765L12.6237 14.2749C12.5724 14.2494 12.5155 14.2368 12.4579 14.2384C12.4084 14.2402 12.3599 14.2524 12.3156 14.2742L11.7788 14.5378V13.227C11.7794 13.1819 11.7707 13.137 11.7532 13.0952C11.7358 13.0533 11.7099 13.0154 11.6772 12.9835C11.6445 12.9516 11.6055 12.9264 11.5627 12.9095C11.5199 12.8926 11.474 12.8843 11.4279 12.885C11.3365 12.8864 11.2494 12.9232 11.1857 12.9873C11.122 13.0514 11.0869 13.1376 11.088 13.227V14.2411H9.01538V9.50894C9.01538 8.37999 9.93422 7.48088 11.088 7.48088ZM13.1605 7.48088H13.8514C13.8514 7.72628 13.886 7.96762 13.9516 8.19746C13.9441 8.20037 13.9367 8.20352 13.9295 8.20693L13.3132 8.45773C13.2136 8.14122 13.1621 7.81207 13.1605 7.48088ZM14.5423 7.48088H18.6874C18.6874 8.01876 18.4691 8.5346 18.0804 8.91494C17.6917 9.29527 17.1645 9.50894 16.6149 9.50894C16.0652 9.50894 15.538 9.29527 15.1493 8.91494C14.7606 8.5346 14.5423 8.01876 14.5423 7.48088ZM19.3783 7.48088H20.0692C20.0692 7.81754 20.0139 8.14473 19.9172 8.45773L19.2989 8.2076C19.292 8.20468 19.2851 8.20198 19.2781 8.19949C19.3444 7.96546 19.3781 7.72374 19.3783 7.48088ZM14.2176 8.82075C14.3661 9.07629 14.5589 9.30411 14.7868 9.50083C14.781 9.50804 14.7755 9.51548 14.7703 9.52314L14.3951 10.0606C14.0621 9.78747 13.785 9.45509 13.5785 9.08102L14.1955 8.83157C14.2027 8.82821 14.2099 8.8246 14.2169 8.82075H14.2176ZM19.0121 8.82075C19.0194 8.82416 19.0268 8.82732 19.0343 8.83022L19.6512 9.08034C19.4446 9.45417 19.1675 9.78632 18.8346 10.0592L18.4595 9.52246C18.4543 9.51458 18.4487 9.50691 18.4429 9.49948C18.6709 9.30275 18.8643 9.07561 19.0128 8.82075H19.0121ZM15.3561 9.88143C15.6463 10.0268 15.9537 10.1234 16.2694 10.1627C16.2692 10.1696 16.2692 10.1766 16.2694 10.1836V10.8373C15.8117 10.7928 15.3677 10.659 14.9637 10.4439L15.3409 9.90373C15.3463 9.8965 15.3513 9.88906 15.3561 9.88143ZM17.8736 9.88143C17.8784 9.88906 17.8834 9.8965 17.8888 9.90373L18.2667 10.4439C17.8625 10.6592 17.4183 10.7929 16.9603 10.8373V10.1836C16.96 10.1766 16.9596 10.1696 16.9589 10.1627C17.2746 10.1241 17.5834 10.0274 17.8736 9.88143ZM9.01538 14.9171H11.088V15.0253C11.0799 15.0668 11.0799 15.1094 11.088 15.151V15.5931H9.01538V14.9171ZM22.1417 14.9171H24.2143V15.5931H22.1417V14.9171ZM12.4697 14.9556L13.6973 15.5559C13.7452 15.5793 13.7979 15.5914 13.8514 15.5914C13.9049 15.5914 13.9576 15.5793 14.0055 15.5559L15.2331 14.9556L16.4608 15.5559C16.5086 15.5793 16.5614 15.5914 16.6149 15.5914C16.6683 15.5914 16.7211 15.5793 16.7689 15.5559L17.9966 14.9556L19.2242 15.5559C19.2721 15.5793 19.3248 15.5914 19.3783 15.5914C19.4318 15.5914 19.4845 15.5793 19.5324 15.5559L20.76 14.9556L21.4509 15.2936V15.8885L20.9141 15.6276C20.8662 15.6043 20.8135 15.5921 20.76 15.5921C20.7066 15.5921 20.6538 15.6043 20.606 15.6276L19.3783 16.2279L18.1506 15.6276C18.1028 15.6043 18.05 15.5921 17.9966 15.5921C17.9431 15.5921 17.8904 15.6043 17.8425 15.6276L16.6149 16.2279L15.3872 15.6276C15.3393 15.6043 15.2866 15.5921 15.2331 15.5921C15.1797 15.5921 15.1269 15.6043 15.0791 15.6276L13.8514 16.2279L12.6237 15.6276C12.5725 15.6019 12.5155 15.5891 12.4579 15.5904C12.4084 15.5922 12.3599 15.6044 12.3156 15.6262L11.7788 15.8899V15.2936L12.4697 14.9556ZM9.01538 16.2691H11.088V22.3533H9.01538V16.2691ZM22.1417 16.2691H24.2143V22.3533H22.1417V16.2691ZM12.4697 16.3077L13.6973 16.908C13.7452 16.9313 13.7979 16.9434 13.8514 16.9434C13.9049 16.9434 13.9576 16.9313 14.0055 16.908L15.2331 16.3077L16.4608 16.908C16.5086 16.9313 16.5614 16.9434 16.6149 16.9434C16.6683 16.9434 16.7211 16.9313 16.7689 16.908L17.9966 16.3077L19.2242 16.908C19.2721 16.9313 19.3248 16.9434 19.3783 16.9434C19.4318 16.9434 19.4845 16.9313 19.5324 16.908L20.76 16.3077L21.4509 16.6457V23.7053H11.7788V16.6457L12.4697 16.3077ZM9.01538 23.0293H9.70624V23.7053H9.01538V23.0293ZM10.3971 23.0293H11.088V23.7053H10.3971V23.0293ZM22.1417 23.0293H22.8326V23.7053H22.1417V23.0293ZM23.5235 23.0293H24.2143V23.7053H23.5235V23.0293ZM11.7788 24.3814H12.8151V25.0574H11.7788V24.3814ZM13.506 24.3814H14.1968V25.0574H13.506V24.3814ZM14.8877 24.3814H15.5786V25.0574H14.8877V24.3814ZM16.2694 24.3814H16.9603V25.0574H16.2694V24.3814ZM17.6511 24.3814H18.342V25.0574H17.6511V24.3814ZM19.0329 24.3814H19.7237V25.0574H19.0329V24.3814ZM20.4146 24.3814H21.4509V25.0574H20.4146V24.3814Z" fill="#A75F37"/>
        </g>
        <defs>
        <clipPath id="clip0_410_87">
        <rect width="33.1614" height="32.4489" fill="white" transform="translate(0.0341797 0.0446777)"/>
        </clipPath>
        </defs>
        </svg>
              
)}

export const Tea : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_410_63)">
        <path d="M8.61488 1.16003C8.61488 1.16003 7.37473 17.8144 22.2786 18.8228C22.2786 18.8228 19.9242 21.1558 14.3426 21.5516C8.76109 21.9474 3.01267 18.1032 1.55859 1.75382L8.61488 1.16003Z" fill="#A75F37"/>
        <path d="M26.6984 14.9138C31.7293 14.0462 34.0865 10.2466 34.6059 6.91835C35.0071 4.34769 34.3373 1.92753 32.8991 0.753234C31.4181 -0.455492 30.0181 -0.0510667 28.9228 0.853326C28.7441 0.349055 28.3721 0.00500443 27.9448 0.00500443H1.56165C0.988195 0.00500443 0.512655 0.623877 0.473542 1.42068C0.466655 1.56602 -0.0374028 13.7895 6.28879 20.4394H1.54752C0.945285 20.4394 0.457031 21.1194 0.457031 21.9581C0.457031 22.7968 0.945285 23.4768 1.54752 23.4768H32.8889C33.4911 23.4768 33.9794 22.7968 33.9794 21.9581C33.9794 21.1194 33.4911 20.4394 32.8889 20.4394H23.2179C24.7409 18.8383 25.8652 16.9146 26.6984 14.9138ZM31.7958 3.3737C32.4148 3.87908 32.6749 4.98993 32.4746 6.27329C32.1757 8.18881 30.7747 10.5225 27.8395 11.5415C28.5026 9.0632 28.8061 6.67895 28.9412 4.84655C29.2681 4.25842 30.4904 2.30724 31.7958 3.3737ZM10.9549 20.4394C3.62053 17.0188 2.71686 6.82724 2.64022 3.04256H26.8661C26.7897 6.82908 25.8855 17.0192 18.5519 20.4394H10.9549Z" fill="#352517"/>
        </g>
        <defs>
        <clipPath id="clip0_410_63">
        <rect width="34.2637" height="23.477" fill="white" transform="translate(0.457031)"/>
        </clipPath>
        </defs>
        </svg>
         
)}

export const Towel : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.47 28.4583H27.6709V35.3205C27.6709 35.6514 27.5394 35.9687 27.3054 36.2027C27.0714 36.4367 26.7541 36.5681 26.4232 36.5681H7.20276C6.87185 36.5681 6.5545 36.4367 6.32052 36.2027C6.08653 35.9687 5.95508 35.6514 5.95508 35.3205V8.70135C5.95426 8.18254 6.05584 7.66868 6.254 7.1892C6.45216 6.70973 6.743 6.27408 7.10985 5.90723C7.47671 5.54038 7.91235 5.24954 8.39183 5.05138C8.8713 4.85322 9.38517 4.75164 9.90397 4.75246H31.47V28.4583ZM31.47 4.75246C32.4793 4.75246 33.4472 5.15339 34.1608 5.86704C34.8745 6.58069 35.2754 7.54861 35.2754 8.55787V27.2106C35.2754 27.5415 35.144 27.8588 34.91 28.0928C34.676 28.3268 34.3587 28.4583 34.0278 28.4583H27.6709V8.55787C27.6709 7.54969 28.0709 6.58272 28.7832 5.86924C29.4955 5.15577 30.4618 4.75411 31.47 4.75246Z" fill="#EFD3B4"/>
        <path d="M27.6709 28.4583H31.47V4.75246M27.6709 28.4583V35.3205C27.6709 35.6514 27.5394 35.9687 27.3054 36.2027C27.0714 36.4367 26.7541 36.5681 26.4232 36.5681H7.20276C6.87185 36.5681 6.5545 36.4367 6.32052 36.2027C6.08653 35.9687 5.95508 35.6514 5.95508 35.3205V8.70135C5.95426 8.18254 6.05584 7.66868 6.254 7.1892C6.45216 6.70973 6.743 6.27408 7.10985 5.90723C7.47671 5.54038 7.91235 5.24954 8.39183 5.05138C8.8713 4.85322 9.38517 4.75164 9.90397 4.75246H31.47M27.6709 28.4583H34.0278C34.3587 28.4583 34.676 28.3268 34.91 28.0928C35.144 27.8588 35.2754 27.5415 35.2754 27.2106V8.55787C35.2754 7.54861 34.8745 6.58069 34.1608 5.86704C33.4472 5.15339 32.4793 4.75246 31.47 4.75246M27.6709 28.4583V8.55787C27.6709 7.54969 28.0709 6.58272 28.7832 5.86924C29.4955 5.15577 30.4618 4.75411 31.47 4.75246" stroke="#78350F" stroke-width="1.09171" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.95508 32.4383H27.6708V35.3205C27.6708 35.6514 27.5394 35.9687 27.3054 36.2027C27.0714 36.4367 26.7541 36.5681 26.4232 36.5681H7.20275C6.87185 36.5681 6.5545 36.4367 6.32051 36.2027C6.08653 35.9687 5.95508 35.6514 5.95508 35.3205V32.4383ZM27.6708 24.3285H35.2754V27.2106C35.2754 27.5415 35.144 27.8588 34.91 28.0928C34.676 28.3268 34.3586 28.4583 34.0277 28.4583H27.6708V24.3285Z" fill="#FFFAF0" stroke="#5F363A" stroke-width="0.233939" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          
)}

export const WaterBottel : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_410_60)">
        <path d="M24.6105 25.5516V25.3902C24.5029 24.3681 24.3953 23.3999 24.1802 22.4316C23.4809 19.3116 24.1802 16.4068 24.6643 14.9544C24.9871 13.9323 25.1484 12.9641 25.0946 11.9958C24.9871 8.28408 22.7278 6.72409 21.3829 6.13237C20.8988 5.9172 20.576 5.43306 20.576 4.94893V4.411H20.6298C21.0602 4.411 21.3829 4.08824 21.3829 3.6579V0.753084C21.3829 0.322742 21.0602 -1.52588e-05 20.6298 -1.52588e-05H14.4975C14.0671 -1.52588e-05 13.7444 0.322742 13.7444 0.753084V3.6579C13.7444 4.08824 14.0671 4.411 14.4975 4.411H14.5513V4.94893C14.5513 5.43306 14.2285 5.9172 13.7444 6.13237C12.3995 6.72409 10.194 8.23029 10.0327 11.9958C9.97886 12.9103 10.1402 13.9323 10.463 14.9544C10.9471 16.4068 11.6464 19.3654 10.9471 22.4316C10.732 23.3999 10.6244 24.4219 10.5168 25.4978V25.5516C10.463 26.1971 10.463 26.8964 10.463 27.5957V31.8991C10.463 33.2977 11.5926 34.4274 12.9913 34.4274H22.1898C23.5884 34.4274 24.7181 33.2977 24.7181 31.8991V27.5957C24.6643 26.9502 24.6643 26.2509 24.6105 25.5516C24.6105 25.6054 24.6105 25.6054 24.6105 25.5516ZM11.9692 14.524C11.8616 14.2013 11.8078 13.8785 11.7002 13.5558H23.4271C23.3733 13.8785 23.2657 14.2013 23.1581 14.524C22.6202 16.1378 21.8671 19.3654 22.6202 22.8081C22.7816 23.4537 22.8353 24.0992 22.9429 24.7985H12.1306C12.1844 24.0992 12.292 23.4537 12.4533 22.8081C13.2064 19.3654 12.4533 16.1378 11.9692 14.524ZM15.2506 1.55998H19.823V2.9048H15.2506V1.55998ZM14.3899 7.58477C15.4657 7.10064 16.1112 6.07858 16.1112 5.00272V4.46479H19.0161V5.00272C19.0161 6.13237 19.7154 7.15443 20.7374 7.58477C21.9209 8.1227 23.3733 9.30615 23.5347 11.942H11.5926C11.7002 9.30615 13.1526 8.1227 14.3899 7.58477ZM23.1581 31.8991C23.1581 32.4371 22.7278 32.8674 22.1898 32.8674H12.9375C12.3995 32.8674 11.9692 32.4371 11.9692 31.8991V27.5957C11.9692 27.1654 11.9692 26.735 12.023 26.3047H23.1043C23.1043 26.735 23.1581 27.1654 23.1581 27.5957V31.8991Z" fill="#A75F37"/>
        <path d="M17.5639 23.0771C19.339 23.0771 20.7914 21.6247 20.7914 19.8496C20.7914 18.2896 18.5859 15.9227 18.1556 15.4923C17.9942 15.331 17.8328 15.2772 17.6177 15.2772C17.4025 15.2772 17.1873 15.3847 17.0797 15.4923C16.6494 15.9227 14.4439 18.2896 14.4439 19.8496C14.3901 21.6247 15.7887 23.0771 17.5639 23.0771ZM17.5639 17.1599C18.4246 18.182 19.2314 19.3116 19.2314 19.8496C19.2314 20.764 18.4783 21.5171 17.5639 21.5171C16.6494 21.5171 15.8963 20.764 15.8963 19.8496C15.8963 19.3116 16.7032 18.182 17.5639 17.1599Z" fill="#A75F37"/>
        </g>
        <defs>
        <clipPath id="clip0_410_60">
        <rect width="34.4274" height="34.4274" fill="white" transform="translate(0.349609)"/>
        </clipPath>
        </defs>
        </svg>
           
)}

