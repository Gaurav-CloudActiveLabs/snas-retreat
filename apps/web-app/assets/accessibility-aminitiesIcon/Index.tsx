import React from "react";

interface LogoProps {
  width?: string | number;
  height?: string | number;
}

export const wheelchair : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 37 37" fill="none">
<g clip-path="url(#clip0_413_138)">
<mask id="mask0_413_138"  maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="37">
<path d="M0.513916 0.559761H36.715V36.7608H0.513916V0.559761Z" fill="white"/>
</mask>
<g mask="url(#mask0_413_138)">
<path d="M20.7339 26.1197C20.7339 31.4109 16.4445 35.7003 11.1533 35.7003C5.86208 35.7003 1.57275 31.4109 1.57275 26.1197C1.57275 20.8285 5.86208 16.5392 11.1533 16.5392C16.4445 16.5392 20.7339 20.8285 20.7339 26.1197Z" stroke="#A75F37" stroke-width="2.12116" stroke-miterlimit="10"/>
<path d="M11.1534 31.4579C8.2099 31.4579 5.81519 29.0631 5.81519 26.1196C5.81519 23.1762 8.2099 20.7814 11.1534 20.7814C14.097 20.7814 16.4917 23.1762 16.4917 26.1196C16.4917 29.0631 14.097 31.4579 11.1534 31.4579Z" stroke="#A75F37" stroke-width="2.12116" stroke-miterlimit="10"/>
<path d="M35.6545 31.4579C35.6545 33.8009 33.7552 35.7003 31.4122 35.7003C29.0693 35.7003 27.1699 33.8009 27.1699 31.4579C27.1699 29.115 29.0693 27.2156 31.4122 27.2156C33.7552 27.2156 35.6545 29.115 35.6545 31.4579Z" stroke="#A75F37" stroke-width="2.12116" stroke-miterlimit="10"/>
<path d="M11.1536 16.5392H28.2306C29.9807 16.5392 31.4124 17.9709 31.4124 19.7209V27.2156" stroke="#A75F37" stroke-width="2.12116" stroke-miterlimit="10"/>
<path d="M6.91089 17.528V1.62028" stroke="#A75F37" stroke-width="2.12116" stroke-miterlimit="10"/>
<path d="M20.1921 22.9379H31.4122" stroke="#A75F37" stroke-width="2.12116" stroke-miterlimit="10"/>
<path d="M0.512207 1.62033H7.9716C9.72156 1.62033 11.1533 3.05211 11.1533 4.80207V16.5391" stroke="#A75F37" stroke-width="2.12116" stroke-miterlimit="10"/>
<path d="M11.1536 12.2968H27.1701L27.0993 16.5391" stroke="#A75F37" stroke-width="2.12116" stroke-miterlimit="10"/>
<path d="M15.3958 16.5391V12.2968" stroke="#A75F37" stroke-width="2.12116" stroke-miterlimit="10"/>
</g>
</g>
<defs>
<clipPath id="clip0_413_138">
<rect width="36.201" height="36.201" fill="white" transform="translate(0.513916 0.559753)"/>
</clipPath>
</defs>
</svg>
)}

export const Lift : React.FC<LogoProps> = ({
    width = 100, // Default width
    height = 100, // Default height
  }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 28" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.448 0 0 0.448 0 1V27C0 27.553 0.448 28 1 28H23C23.552 28 24 27.553 24 27V25C24 24.448 23.552 24 23 24C22.448 24 22 24.448 22 25V26H20V9C20 8.448 19.552 8 19 8H5C4.448 8 4 8.448 4 9V26H2V2H22V9C22 9.551 22.448 10 23 10C23.552 10 24 9.551 24 9V1C24 0.448 23.552 0 23 0H1ZM9 4C8.448 4 8 4.448 8 5C8 5.552 8.448 6 9 6H15C15.552 6 16 5.552 16 5C16 4.448 15.552 4 15 4H9ZM6 10H11V26H6V10ZM13 10H18V26H13V10ZM25 11C24.744 11 24.488 11.097 24.293 11.293L22.293 13.293C21.903 13.683 21.903 14.317 22.293 14.707C22.683 15.097 23.317 15.097 23.707 14.707L24 14.414V19.586L23.707 19.293C23.317 18.903 22.683 18.903 22.293 19.293C21.903 19.683 21.903 20.317 22.293 20.707L24.293 22.707C24.683 23.098 25.317 23.098 25.707 22.707L27.707 20.707C28.097 20.317 28.097 19.683 27.707 19.293C27.317 18.903 26.683 18.903 26.293 19.293L26 19.586V14.414L26.293 14.707C26.683 15.097 27.317 15.097 27.707 14.707C28.097 14.317 28.097 13.683 27.707 13.293L25.707 11.293C25.512 11.097 25.256 11 25 11Z" fill="#A75F37"/>
        </svg>
)}

