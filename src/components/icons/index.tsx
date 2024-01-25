export type TIconProps = React.SVGProps<SVGSVGElement>;
export const Icons = {
  user: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M8 1.5C6.71443 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM4.63 12.3438C4.99171 11.7781 5.49001 11.3125 6.07895 10.99C6.6679 10.6676 7.32855 10.4985 8 10.4985C8.67146 10.4985 9.33211 10.6676 9.92105 10.99C10.51 11.3125 11.0083 11.7781 11.37 12.3438C10.4065 13.0931 9.22064 13.5 8 13.5C6.77936 13.5 5.59354 13.0931 4.63 12.3438ZM6 7.5C6 7.10444 6.1173 6.71776 6.33706 6.38886C6.55683 6.05996 6.86918 5.80362 7.23464 5.65224C7.60009 5.50087 8.00222 5.46126 8.39018 5.53843C8.77815 5.6156 9.13451 5.80608 9.41422 6.08579C9.69392 6.36549 9.8844 6.72186 9.96157 7.10982C10.0387 7.49778 9.99914 7.89992 9.84776 8.26537C9.69639 8.63082 9.44004 8.94318 9.11114 9.16294C8.78225 9.3827 8.39557 9.5 8 9.5C7.46957 9.5 6.96086 9.28929 6.58579 8.91421C6.21072 8.53914 6 8.03043 6 7.5ZM12.11 11.6506C11.5524 10.8425 10.7682 10.2174 9.85625 9.85375C10.3461 9.46791 10.7036 8.93899 10.879 8.34056C11.0543 7.74213 11.0388 7.10393 10.8346 6.51472C10.6305 5.9255 10.2477 5.41455 9.73971 5.05293C9.23169 4.69131 8.62359 4.49699 8 4.49699C7.37641 4.49699 6.76832 4.69131 6.26029 5.05293C5.75226 5.41455 5.36955 5.9255 5.16537 6.51472C4.96119 7.10393 4.9457 7.74213 5.12105 8.34056C5.2964 8.93899 5.65387 9.46791 6.14375 9.85375C5.23176 10.2174 4.44765 10.8425 3.89 11.6506C3.18536 10.8582 2.7248 9.87903 2.56378 8.83094C2.40276 7.78285 2.54816 6.71056 2.98245 5.74319C3.41675 4.77582 4.12142 3.95461 5.01163 3.37846C5.90184 2.80231 6.93962 2.49578 8 2.49578C9.06039 2.49578 10.0982 2.80231 10.9884 3.37846C11.8786 3.95461 12.5833 4.77582 13.0176 5.74319C13.4518 6.71056 13.5972 7.78285 13.4362 8.83094C13.2752 9.87903 12.8146 10.8582 12.11 11.6506Z"
        fill="#9C3233"
      />
    </svg>
  ),

  password: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M8 7C7.57975 7.00014 7.17358 7.15151 6.85574 7.42644C6.53789 7.70137 6.3296 8.08149 6.26892 8.49734C6.20825 8.91319 6.29925 9.33698 6.52529 9.69127C6.75133 10.0456 7.09731 10.3067 7.5 10.4269V11.5C7.5 11.6326 7.55268 11.7598 7.64645 11.8536C7.74021 11.9473 7.86739 12 8 12C8.13261 12 8.25979 11.9473 8.35355 11.8536C8.44732 11.7598 8.5 11.6326 8.5 11.5V10.4269C8.90269 10.3067 9.24867 10.0456 9.47471 9.69127C9.70075 9.33698 9.79175 8.91319 9.73108 8.49734C9.6704 8.08149 9.46211 7.70137 9.14426 7.42644C8.82642 7.15151 8.42025 7.00014 8 7ZM8 9.5C7.85166 9.5 7.70666 9.45601 7.58332 9.3736C7.45999 9.29119 7.36386 9.17406 7.30709 9.03701C7.25032 8.89997 7.23547 8.74917 7.26441 8.60368C7.29335 8.4582 7.36478 8.32456 7.46967 8.21967C7.57456 8.11478 7.7082 8.04335 7.85368 8.01441C7.99917 7.98547 8.14997 8.00033 8.28701 8.05709C8.42406 8.11386 8.54119 8.20999 8.6236 8.33332C8.70601 8.45666 8.75 8.60166 8.75 8.75C8.75 8.94891 8.67098 9.13968 8.53033 9.28033C8.38968 9.42098 8.19891 9.5 8 9.5ZM13 5H11V3.5C11 2.70435 10.6839 1.94129 10.1213 1.37868C9.55871 0.81607 8.79565 0.5 8 0.5C7.20435 0.5 6.44129 0.81607 5.87868 1.37868C5.31607 1.94129 5 2.70435 5 3.5V5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5ZM6 3.5C6 2.96957 6.21071 2.46086 6.58579 2.08579C6.96086 1.71071 7.46957 1.5 8 1.5C8.53043 1.5 9.03914 1.71071 9.41421 2.08579C9.78929 2.46086 10 2.96957 10 3.5V5H6V3.5ZM13 13H3V6H13V13Z"
        fill="#9C3233"
      />
    </svg>
  ),

  dropdown: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#667085"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  dropdownCircle: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM5.46967 7.96967C5.76256 7.67678 6.23744 7.67678 6.53033 7.96967L10 11.4393L13.4697 7.96967C13.7626 7.67678 14.2374 7.67678 14.5303 7.96967C14.8232 8.2626 14.8232 8.7374 14.5303 9.0303L10.5303 13.0303C10.2374 13.3232 9.7626 13.3232 9.4697 13.0303L5.46967 9.0303C5.17678 8.7374 5.17678 8.2626 5.46967 7.96967Z"
        fill="#A9A9A9"
      />
    </svg>
  ),

  close: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="#667085"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  edit: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <path
        d="M17.4236 2.997L9.95763 10.463L9.96563 14.71L14.2036 14.702L21.6666 7.24V19.998C21.6666 20.2632 21.5613 20.5176 21.3737 20.7051C21.1862 20.8926 20.9318 20.998 20.6666 20.998H4.66663C4.40141 20.998 4.14706 20.8926 3.95952 20.7051C3.77198 20.5176 3.66663 20.2632 3.66663 19.998V3.998C3.66663 3.73278 3.77198 3.47843 3.95952 3.29089C4.14706 3.10336 4.40141 2.998 4.66663 2.998L17.4236 2.997ZM21.1516 2.097L22.5666 3.511L13.3736 12.704L11.9616 12.706L11.9596 11.29L21.1516 2.097Z"
        fill="#579AFF"
      />
    </svg>
  ),
  trash: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <path
        d="M6.66663 19C6.66663 20.1 7.56663 21 8.66663 21H16.6666C17.7666 21 18.6666 20.1 18.6666 19V7H6.66663V19ZM9.12663 11.88L10.5366 10.47L12.6666 12.59L14.7866 10.47L16.1966 11.88L14.0766 14L16.1966 16.12L14.7866 17.53L12.6666 15.41L10.5466 17.53L9.13663 16.12L11.2566 14L9.12663 11.88ZM16.1666 4L15.1666 3H10.1666L9.16663 4H5.66663V6H19.6666V4H16.1666Z"
        fill="#FF6666"
      />
    </svg>
  ),

  addUser: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M19 21V15M16 18H22M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
        stroke="#344054"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  notification: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M19.5 17.7071V18H4.5V17.7071L6.35355 15.8536L6.5 15.7071V15.5V10.5C6.5 7.59437 8.02219 5.28092 10.6153 4.66653L11 4.57538V4.18V3.5C11 2.94614 11.4461 2.5 12 2.5C12.5539 2.5 13 2.94614 13 3.5V4.18V4.57506L13.3843 4.66644C15.9681 5.28076 17.5 7.60482 17.5 10.5V15.5V15.7071L17.6464 15.8536L19.5 17.7071ZM13.4135 20C13.2061 20.5806 12.6488 21 12 21C11.3443 21 10.7907 20.5813 10.5854 20H13.4135Z"
        fill="white"
        stroke="#334D6E"
      />
      <circle cx="17" cy="6" r="4.5" fill="#F7685B" stroke="white" />
    </svg>
  ),

  dropdownBlue: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      {...props}
    >
      <path d="M7 11L0.0717964 0.5H13.9282L7 11Z" fill="#109CF1" />
    </svg>
  ),

  dashboardActive: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <path
        d="M16.0303 1.18189L19.3194 4.47107C20.2287 5.38026 20.2287 6.85436 19.3194 7.76356L16.6453 10.4373C17.7659 10.6053 18.6251 11.572 18.6251 12.7395V18.1719C18.6251 19.4576 17.5827 20.5 16.297 20.5H2.32814C1.04235 20.5 0 19.4576 0 18.1719V4.20296C0 2.91716 1.04235 1.87482 2.32814 1.87482H7.76047C8.92858 1.87482 9.89584 2.73515 10.0631 3.85675L12.7378 1.18189C13.647 0.272704 15.1211 0.272704 16.0303 1.18189ZM1.55209 18.1719C1.55209 18.6004 1.89955 18.9479 2.32814 18.9479L8.53548 18.9472L8.53652 11.9635L1.55209 11.9628V18.1719ZM10.0876 18.9472L16.297 18.9479C16.7256 18.9479 17.073 18.6004 17.073 18.1719V12.7395C17.073 12.3108 16.7256 11.9635 16.297 11.9635L10.0876 11.9628V18.9472ZM7.76047 3.42691H2.32814C1.89955 3.42691 1.55209 3.77436 1.55209 4.20296V10.4107H8.53652V4.20296C8.53652 3.77436 8.18906 3.42691 7.76047 3.42691ZM10.0886 8.40327V10.4114L12.096 10.4107L10.0886 8.40327ZM13.8353 2.27939L10.5462 5.56856C10.2431 5.87162 10.2431 6.36299 10.5462 6.66606L13.8353 9.95517C14.1383 10.2582 14.6297 10.2582 14.9328 9.95517L18.222 6.66606C18.5251 6.36299 18.5251 5.87162 18.222 5.56856L14.9328 2.27939C14.6297 1.97632 14.1383 1.97632 13.8353 2.27939Z"
        fill="white"
      />
    </svg>
  ),

  dashboard: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <path
        d="M16.0303 1.18189L19.3194 4.47107C20.2287 5.38026 20.2287 6.85436 19.3194 7.76356L16.6453 10.4373C17.7659 10.6053 18.6251 11.572 18.6251 12.7395V18.1719C18.6251 19.4576 17.5827 20.5 16.297 20.5H2.32814C1.04235 20.5 0 19.4576 0 18.1719V4.20296C0 2.91716 1.04235 1.87482 2.32814 1.87482H7.76047C8.92858 1.87482 9.89584 2.73515 10.0631 3.85675L12.7378 1.18189C13.647 0.272704 15.1211 0.272704 16.0303 1.18189ZM1.55209 18.1719C1.55209 18.6004 1.89955 18.9479 2.32814 18.9479L8.53548 18.9472L8.53652 11.9635L1.55209 11.9628V18.1719ZM10.0876 18.9472L16.297 18.9479C16.7256 18.9479 17.073 18.6004 17.073 18.1719V12.7395C17.073 12.3108 16.7256 11.9635 16.297 11.9635L10.0876 11.9628V18.9472ZM7.76047 3.42691H2.32814C1.89955 3.42691 1.55209 3.77436 1.55209 4.20296V10.4107H8.53652V4.20296C8.53652 3.77436 8.18906 3.42691 7.76047 3.42691ZM10.0886 8.40327V10.4114L12.096 10.4107L10.0886 8.40327ZM13.8353 2.27939L10.5462 5.56856C10.2431 5.87162 10.2431 6.36299 10.5462 6.66606L13.8353 9.95517C14.1383 10.2582 14.6297 10.2582 14.9328 9.95517L18.222 6.66606C18.5251 6.36299 18.5251 5.87162 18.222 5.56856L14.9328 2.27939C14.6297 1.97632 14.1383 1.97632 13.8353 2.27939Z"
        fill="#4B4B4D"
      />
    </svg>
  ),

  teamActive: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <path
        d="M12.7549 8.27778C13.7209 8.27778 14.505 9.14889 14.505 10.2222V15.4989C14.505 16.8253 14.0307 18.0973 13.1866 19.0352C12.3424 19.9731 11.1975 20.5 10.0037 20.5C8.80985 20.5 7.66493 19.9731 6.82077 19.0352C5.97661 18.0973 5.50237 16.8253 5.50237 15.4989V10.2222C5.50237 9.14889 6.28542 8.27778 7.25249 8.27778H12.7549ZM12.7549 9.94444H7.25249C7.18618 9.94444 7.12259 9.97371 7.0757 10.0258C7.02881 10.0779 7.00247 10.1486 7.00247 10.2222V15.4989C7.00247 16.3832 7.31867 17.2314 7.8815 17.8567C8.44434 18.482 9.20771 18.8333 10.0037 18.8333C10.7996 18.8333 11.563 18.482 12.1258 17.8567C12.6887 17.2314 13.0049 16.3832 13.0049 15.4989V10.2222C13.0049 10.1486 12.9785 10.0779 12.9316 10.0258C12.8848 9.97371 12.8212 9.94444 12.7549 9.94444ZM1.75012 8.27778H5.13135C4.77852 8.75121 4.56305 9.33228 4.5133 9.94444H1.75012C1.68381 9.94444 1.62022 9.97371 1.57333 10.0258C1.52644 10.0779 1.5001 10.1486 1.5001 10.2222V13.8322C1.50004 14.2521 1.58561 14.6665 1.75039 15.0444C1.91517 15.4222 2.15488 15.7537 2.4515 16.0138C2.74812 16.274 3.09395 16.4561 3.463 16.5465C3.83205 16.6368 4.21474 16.6331 4.58231 16.5356C4.66731 17.0956 4.82232 17.63 5.03534 18.1267C4.44258 18.3029 3.82129 18.3252 3.21951 18.192C2.61773 18.0588 2.05159 17.7736 1.56485 17.3585C1.07812 16.9434 0.683835 16.4095 0.412491 15.798C0.141147 15.1866 1.23006e-05 14.514 0 13.8322V10.2222C0 9.14889 0.784053 8.27778 1.75012 8.27778ZM14.876 8.27778H18.2512C19.2173 8.27778 20.0013 9.14889 20.0013 10.2222V13.8333C20.0015 14.5146 19.8606 15.1868 19.5897 15.798C19.3188 16.4092 18.925 16.943 18.4388 17.3582C17.9526 17.7734 17.387 18.0588 16.7857 18.1924C16.1844 18.3261 15.5635 18.3043 14.971 18.1289C15.185 17.6311 15.34 17.0967 15.426 16.5367C15.7931 16.6331 16.1751 16.6359 16.5434 16.545C16.9116 16.4541 17.2566 16.2718 17.5524 16.0117C17.8482 15.7517 18.0873 15.4206 18.2516 15.0434C18.4159 14.6661 18.5012 14.2524 18.5012 13.8333V10.2222C18.5012 10.1486 18.4749 10.0779 18.428 10.0258C18.3811 9.97371 18.3175 9.94444 18.2512 9.94444H15.494C15.4443 9.33228 15.2288 8.75121 14.876 8.27778ZM10.0007 0.5C10.7964 0.5 11.5595 0.85119 12.1221 1.47631C12.6848 2.10143 13.0009 2.94928 13.0009 3.83333C13.0009 4.71739 12.6848 5.56524 12.1221 6.19036C11.5595 6.81548 10.7964 7.16667 10.0007 7.16667C9.20497 7.16667 8.44186 6.81548 7.87921 6.19036C7.31656 5.56524 7.00047 4.71739 7.00047 3.83333C7.00047 2.94928 7.31656 2.10143 7.87921 1.47631C8.44186 0.85119 9.20497 0.5 10.0007 0.5ZM16.5011 1.61111C17.1642 1.61111 17.8001 1.90377 18.269 2.4247C18.7379 2.94564 19.0013 3.65218 19.0013 4.38889C19.0013 5.1256 18.7379 5.83214 18.269 6.35307C17.8001 6.87401 17.1642 7.16667 16.5011 7.16667C15.838 7.16667 15.2021 6.87401 14.7332 6.35307C14.2644 5.83214 14.0009 5.1256 14.0009 4.38889C14.0009 3.65218 14.2644 2.94564 14.7332 2.4247C15.2021 1.90377 15.838 1.61111 16.5011 1.61111ZM3.50024 1.61111C4.16332 1.61111 4.79925 1.90377 5.26812 2.4247C5.73699 2.94564 6.0004 3.65218 6.0004 4.38889C6.0004 5.1256 5.73699 5.83214 5.26812 6.35307C4.79925 6.87401 4.16332 7.16667 3.50024 7.16667C2.83715 7.16667 2.20122 6.87401 1.73235 6.35307C1.26348 5.83214 1.00007 5.1256 1.00007 4.38889C1.00007 3.65218 1.26348 2.94564 1.73235 2.4247C2.20122 1.90377 2.83715 1.61111 3.50024 1.61111ZM10.0007 2.16667C9.60282 2.16667 9.22126 2.34226 8.93994 2.65482C8.65862 2.96738 8.50057 3.39131 8.50057 3.83333C8.50057 4.27536 8.65862 4.69928 8.93994 5.01185C9.22126 5.32441 9.60282 5.5 10.0007 5.5C10.3985 5.5 10.7801 5.32441 11.0614 5.01185C11.3427 4.69928 11.5008 4.27536 11.5008 3.83333C11.5008 3.39131 11.3427 2.96738 11.0614 2.65482C10.7801 2.34226 10.3985 2.16667 10.0007 2.16667ZM16.5011 3.27778C16.2359 3.27778 15.9815 3.39484 15.794 3.60321C15.6064 3.81159 15.501 4.0942 15.501 4.38889C15.501 4.68357 15.6064 4.96619 15.794 5.17456C15.9815 5.38294 16.2359 5.5 16.5011 5.5C16.7663 5.5 17.0207 5.38294 17.2083 5.17456C17.3958 4.96619 17.5012 4.68357 17.5012 4.38889C17.5012 4.0942 17.3958 3.81159 17.2083 3.60321C17.0207 3.39484 16.7663 3.27778 16.5011 3.27778ZM3.50024 3.27778C3.235 3.27778 2.98063 3.39484 2.79308 3.60321C2.60553 3.81159 2.50017 4.0942 2.50017 4.38889C2.50017 4.68357 2.60553 4.96619 2.79308 5.17456C2.98063 5.38294 3.235 5.5 3.50024 5.5C3.76547 5.5 4.01984 5.38294 4.20739 5.17456C4.39494 4.96619 4.5003 4.68357 4.5003 4.38889C4.5003 4.0942 4.39494 3.81159 4.20739 3.60321C4.01984 3.39484 3.76547 3.27778 3.50024 3.27778Z"
        fill="white"
      />
    </svg>
  ),

  team: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <path
        d="M12.7549 8.27778C13.7209 8.27778 14.505 9.14889 14.505 10.2222V15.4989C14.505 16.8253 14.0307 18.0973 13.1866 19.0352C12.3424 19.9731 11.1975 20.5 10.0037 20.5C8.80985 20.5 7.66493 19.9731 6.82077 19.0352C5.97661 18.0973 5.50237 16.8253 5.50237 15.4989V10.2222C5.50237 9.14889 6.28542 8.27778 7.25249 8.27778H12.7549ZM12.7549 9.94444H7.25249C7.18618 9.94444 7.12259 9.97371 7.0757 10.0258C7.02881 10.0779 7.00247 10.1486 7.00247 10.2222V15.4989C7.00247 16.3832 7.31867 17.2314 7.8815 17.8567C8.44434 18.482 9.20771 18.8333 10.0037 18.8333C10.7996 18.8333 11.563 18.482 12.1258 17.8567C12.6887 17.2314 13.0049 16.3832 13.0049 15.4989V10.2222C13.0049 10.1486 12.9785 10.0779 12.9316 10.0258C12.8848 9.97371 12.8212 9.94444 12.7549 9.94444ZM1.75012 8.27778H5.13135C4.77852 8.75121 4.56305 9.33228 4.5133 9.94444H1.75012C1.68381 9.94444 1.62022 9.97371 1.57333 10.0258C1.52644 10.0779 1.5001 10.1486 1.5001 10.2222V13.8322C1.50004 14.2521 1.58561 14.6665 1.75039 15.0444C1.91517 15.4222 2.15488 15.7537 2.4515 16.0138C2.74812 16.274 3.09395 16.4561 3.463 16.5465C3.83205 16.6368 4.21474 16.6331 4.58231 16.5356C4.66731 17.0956 4.82232 17.63 5.03534 18.1267C4.44258 18.3029 3.82129 18.3252 3.21951 18.192C2.61773 18.0588 2.05159 17.7736 1.56485 17.3585C1.07812 16.9434 0.683835 16.4095 0.412491 15.798C0.141147 15.1866 1.23006e-05 14.514 0 13.8322V10.2222C0 9.14889 0.784053 8.27778 1.75012 8.27778ZM14.876 8.27778H18.2512C19.2173 8.27778 20.0013 9.14889 20.0013 10.2222V13.8333C20.0015 14.5146 19.8606 15.1868 19.5897 15.798C19.3188 16.4092 18.925 16.943 18.4388 17.3582C17.9526 17.7734 17.387 18.0588 16.7857 18.1924C16.1844 18.3261 15.5635 18.3043 14.971 18.1289C15.185 17.6311 15.34 17.0967 15.426 16.5367C15.7931 16.6331 16.1751 16.6359 16.5434 16.545C16.9116 16.4541 17.2566 16.2718 17.5524 16.0117C17.8482 15.7517 18.0873 15.4206 18.2516 15.0434C18.4159 14.6661 18.5012 14.2524 18.5012 13.8333V10.2222C18.5012 10.1486 18.4749 10.0779 18.428 10.0258C18.3811 9.97371 18.3175 9.94444 18.2512 9.94444H15.494C15.4443 9.33228 15.2288 8.75121 14.876 8.27778ZM10.0007 0.5C10.7964 0.5 11.5595 0.85119 12.1221 1.47631C12.6848 2.10143 13.0009 2.94928 13.0009 3.83333C13.0009 4.71739 12.6848 5.56524 12.1221 6.19036C11.5595 6.81548 10.7964 7.16667 10.0007 7.16667C9.20497 7.16667 8.44186 6.81548 7.87921 6.19036C7.31656 5.56524 7.00047 4.71739 7.00047 3.83333C7.00047 2.94928 7.31656 2.10143 7.87921 1.47631C8.44186 0.85119 9.20497 0.5 10.0007 0.5ZM16.5011 1.61111C17.1642 1.61111 17.8001 1.90377 18.269 2.4247C18.7379 2.94564 19.0013 3.65218 19.0013 4.38889C19.0013 5.1256 18.7379 5.83214 18.269 6.35307C17.8001 6.87401 17.1642 7.16667 16.5011 7.16667C15.838 7.16667 15.2021 6.87401 14.7332 6.35307C14.2644 5.83214 14.0009 5.1256 14.0009 4.38889C14.0009 3.65218 14.2644 2.94564 14.7332 2.4247C15.2021 1.90377 15.838 1.61111 16.5011 1.61111ZM3.50024 1.61111C4.16332 1.61111 4.79925 1.90377 5.26812 2.4247C5.73699 2.94564 6.0004 3.65218 6.0004 4.38889C6.0004 5.1256 5.73699 5.83214 5.26812 6.35307C4.79925 6.87401 4.16332 7.16667 3.50024 7.16667C2.83715 7.16667 2.20122 6.87401 1.73235 6.35307C1.26348 5.83214 1.00007 5.1256 1.00007 4.38889C1.00007 3.65218 1.26348 2.94564 1.73235 2.4247C2.20122 1.90377 2.83715 1.61111 3.50024 1.61111ZM10.0007 2.16667C9.60282 2.16667 9.22126 2.34226 8.93994 2.65482C8.65862 2.96738 8.50057 3.39131 8.50057 3.83333C8.50057 4.27536 8.65862 4.69928 8.93994 5.01185C9.22126 5.32441 9.60282 5.5 10.0007 5.5C10.3985 5.5 10.7801 5.32441 11.0614 5.01185C11.3427 4.69928 11.5008 4.27536 11.5008 3.83333C11.5008 3.39131 11.3427 2.96738 11.0614 2.65482C10.7801 2.34226 10.3985 2.16667 10.0007 2.16667ZM16.5011 3.27778C16.2359 3.27778 15.9815 3.39484 15.794 3.60321C15.6064 3.81159 15.501 4.0942 15.501 4.38889C15.501 4.68357 15.6064 4.96619 15.794 5.17456C15.9815 5.38294 16.2359 5.5 16.5011 5.5C16.7663 5.5 17.0207 5.38294 17.2083 5.17456C17.3958 4.96619 17.5012 4.68357 17.5012 4.38889C17.5012 4.0942 17.3958 3.81159 17.2083 3.60321C17.0207 3.39484 16.7663 3.27778 16.5011 3.27778ZM3.50024 3.27778C3.235 3.27778 2.98063 3.39484 2.79308 3.60321C2.60553 3.81159 2.50017 4.0942 2.50017 4.38889C2.50017 4.68357 2.60553 4.96619 2.79308 5.17456C2.98063 5.38294 3.235 5.5 3.50024 5.5C3.76547 5.5 4.01984 5.38294 4.20739 5.17456C4.39494 4.96619 4.5003 4.68357 4.5003 4.38889C4.5003 4.0942 4.39494 3.81159 4.20739 3.60321C4.01984 3.39484 3.76547 3.27778 3.50024 3.27778Z"
        fill="#4B4B4D"
      />
    </svg>
  ),

  taskActive: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <path
        d="M12.7549 8.27778C13.7209 8.27778 14.505 9.14889 14.505 10.2222V15.4989C14.505 16.8253 14.0307 18.0973 13.1866 19.0352C12.3424 19.9731 11.1975 20.5 10.0037 20.5C8.80985 20.5 7.66493 19.9731 6.82077 19.0352C5.97661 18.0973 5.50237 16.8253 5.50237 15.4989V10.2222C5.50237 9.14889 6.28542 8.27778 7.25249 8.27778H12.7549ZM12.7549 9.94444H7.25249C7.18618 9.94444 7.12259 9.97371 7.0757 10.0258C7.02881 10.0779 7.00247 10.1486 7.00247 10.2222V15.4989C7.00247 16.3832 7.31867 17.2314 7.8815 17.8567C8.44434 18.482 9.20771 18.8333 10.0037 18.8333C10.7996 18.8333 11.563 18.482 12.1258 17.8567C12.6887 17.2314 13.0049 16.3832 13.0049 15.4989V10.2222C13.0049 10.1486 12.9785 10.0779 12.9316 10.0258C12.8848 9.97371 12.8212 9.94444 12.7549 9.94444ZM1.75012 8.27778H5.13135C4.77852 8.75121 4.56305 9.33228 4.5133 9.94444H1.75012C1.68381 9.94444 1.62022 9.97371 1.57333 10.0258C1.52644 10.0779 1.5001 10.1486 1.5001 10.2222V13.8322C1.50004 14.2521 1.58561 14.6665 1.75039 15.0444C1.91517 15.4222 2.15488 15.7537 2.4515 16.0138C2.74812 16.274 3.09395 16.4561 3.463 16.5465C3.83205 16.6368 4.21474 16.6331 4.58231 16.5356C4.66731 17.0956 4.82232 17.63 5.03534 18.1267C4.44258 18.3029 3.82129 18.3252 3.21951 18.192C2.61773 18.0588 2.05159 17.7736 1.56485 17.3585C1.07812 16.9434 0.683835 16.4095 0.412491 15.798C0.141147 15.1866 1.23006e-05 14.514 0 13.8322V10.2222C0 9.14889 0.784053 8.27778 1.75012 8.27778ZM14.876 8.27778H18.2512C19.2173 8.27778 20.0013 9.14889 20.0013 10.2222V13.8333C20.0015 14.5146 19.8606 15.1868 19.5897 15.798C19.3188 16.4092 18.925 16.943 18.4388 17.3582C17.9526 17.7734 17.387 18.0588 16.7857 18.1924C16.1844 18.3261 15.5635 18.3043 14.971 18.1289C15.185 17.6311 15.34 17.0967 15.426 16.5367C15.7931 16.6331 16.1751 16.6359 16.5434 16.545C16.9116 16.4541 17.2566 16.2718 17.5524 16.0117C17.8482 15.7517 18.0873 15.4206 18.2516 15.0434C18.4159 14.6661 18.5012 14.2524 18.5012 13.8333V10.2222C18.5012 10.1486 18.4749 10.0779 18.428 10.0258C18.3811 9.97371 18.3175 9.94444 18.2512 9.94444H15.494C15.4443 9.33228 15.2288 8.75121 14.876 8.27778ZM10.0007 0.5C10.7964 0.5 11.5595 0.85119 12.1221 1.47631C12.6848 2.10143 13.0009 2.94928 13.0009 3.83333C13.0009 4.71739 12.6848 5.56524 12.1221 6.19036C11.5595 6.81548 10.7964 7.16667 10.0007 7.16667C9.20497 7.16667 8.44186 6.81548 7.87921 6.19036C7.31656 5.56524 7.00047 4.71739 7.00047 3.83333C7.00047 2.94928 7.31656 2.10143 7.87921 1.47631C8.44186 0.85119 9.20497 0.5 10.0007 0.5ZM16.5011 1.61111C17.1642 1.61111 17.8001 1.90377 18.269 2.4247C18.7379 2.94564 19.0013 3.65218 19.0013 4.38889C19.0013 5.1256 18.7379 5.83214 18.269 6.35307C17.8001 6.87401 17.1642 7.16667 16.5011 7.16667C15.838 7.16667 15.2021 6.87401 14.7332 6.35307C14.2644 5.83214 14.0009 5.1256 14.0009 4.38889C14.0009 3.65218 14.2644 2.94564 14.7332 2.4247C15.2021 1.90377 15.838 1.61111 16.5011 1.61111ZM3.50024 1.61111C4.16332 1.61111 4.79925 1.90377 5.26812 2.4247C5.73699 2.94564 6.0004 3.65218 6.0004 4.38889C6.0004 5.1256 5.73699 5.83214 5.26812 6.35307C4.79925 6.87401 4.16332 7.16667 3.50024 7.16667C2.83715 7.16667 2.20122 6.87401 1.73235 6.35307C1.26348 5.83214 1.00007 5.1256 1.00007 4.38889C1.00007 3.65218 1.26348 2.94564 1.73235 2.4247C2.20122 1.90377 2.83715 1.61111 3.50024 1.61111ZM10.0007 2.16667C9.60282 2.16667 9.22126 2.34226 8.93994 2.65482C8.65862 2.96738 8.50057 3.39131 8.50057 3.83333C8.50057 4.27536 8.65862 4.69928 8.93994 5.01185C9.22126 5.32441 9.60282 5.5 10.0007 5.5C10.3985 5.5 10.7801 5.32441 11.0614 5.01185C11.3427 4.69928 11.5008 4.27536 11.5008 3.83333C11.5008 3.39131 11.3427 2.96738 11.0614 2.65482C10.7801 2.34226 10.3985 2.16667 10.0007 2.16667ZM16.5011 3.27778C16.2359 3.27778 15.9815 3.39484 15.794 3.60321C15.6064 3.81159 15.501 4.0942 15.501 4.38889C15.501 4.68357 15.6064 4.96619 15.794 5.17456C15.9815 5.38294 16.2359 5.5 16.5011 5.5C16.7663 5.5 17.0207 5.38294 17.2083 5.17456C17.3958 4.96619 17.5012 4.68357 17.5012 4.38889C17.5012 4.0942 17.3958 3.81159 17.2083 3.60321C17.0207 3.39484 16.7663 3.27778 16.5011 3.27778ZM3.50024 3.27778C3.235 3.27778 2.98063 3.39484 2.79308 3.60321C2.60553 3.81159 2.50017 4.0942 2.50017 4.38889C2.50017 4.68357 2.60553 4.96619 2.79308 5.17456C2.98063 5.38294 3.235 5.5 3.50024 5.5C3.76547 5.5 4.01984 5.38294 4.20739 5.17456C4.39494 4.96619 4.5003 4.68357 4.5003 4.38889C4.5003 4.0942 4.39494 3.81159 4.20739 3.60321C4.01984 3.39484 3.76547 3.27778 3.50024 3.27778Z"
        fill="white"
      />
    </svg>
  ),

  task: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <path
        d="M17.144 6.21429C18.7221 6.21429 20.0013 4.9351 20.0013 3.35714C20.0013 1.77919 18.7221 0.5 17.144 0.5H2.85734C1.27923 0.5 0 1.77919 0 3.35714C0 4.9351 1.27923 6.21429 2.85734 6.21429H17.144ZM1.42867 3.35714C1.42867 2.56817 2.06828 1.92857 2.85734 1.92857H17.144C17.9331 1.92857 18.5727 2.56817 18.5727 3.35714C18.5727 4.14611 17.9331 4.78571 17.144 4.78571H2.85734C2.06828 4.78571 1.42867 4.14611 1.42867 3.35714ZM8.57201 20.5C10.1501 20.5 11.4293 19.2209 11.4293 17.6429C11.4293 16.0649 10.1501 14.7857 8.57201 14.7857H2.85734C1.27923 14.7857 0 16.0649 0 17.6429C0 19.2209 1.27923 20.5 2.85734 20.5H8.57201ZM1.42867 17.6429C1.42867 16.8539 2.06828 16.2143 2.85734 16.2143H8.57201C9.36103 16.2143 10.0007 16.8539 10.0007 17.6429C10.0007 18.4319 9.36103 19.0714 8.57201 19.0714H2.85734C2.06828 19.0714 1.42867 18.4319 1.42867 17.6429ZM14.2867 10.5C14.2867 12.078 13.0074 13.3571 11.4293 13.3571H2.85734C1.27923 13.3571 0 12.078 0 10.5C0 8.922 1.27923 7.64286 2.85734 7.64286H11.4293C13.0074 7.64286 14.2867 8.922 14.2867 10.5ZM12.858 10.5C12.858 9.711 12.2184 9.07143 11.4293 9.07143H2.85734C2.06828 9.07143 1.42867 9.711 1.42867 10.5C1.42867 11.289 2.06828 11.9286 2.85734 11.9286H11.4293C12.2184 11.9286 12.858 11.289 12.858 10.5Z"
        fill="#4B4B4D"
      />
    </svg>
  ),

  requestActive: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <path
        d="M11.1546 16.2143C11.7919 16.2143 12.3085 15.7346 12.3085 15.1429C12.3085 14.5511 11.7919 14.0714 11.1546 14.0714C10.5173 14.0714 10.0007 14.5511 10.0007 15.1429C10.0007 15.7346 10.5173 16.2143 11.1546 16.2143Z"
        fill="white"
      />
      <path
        d="M15.001 16.2143C15.6383 16.2143 16.1549 15.7346 16.1549 15.1429C16.1549 14.5511 15.6383 14.0714 15.001 14.0714C14.3637 14.0714 13.8471 14.5511 13.8471 15.1429C13.8471 15.7346 14.3637 16.2143 15.001 16.2143Z"
        fill="white"
      />
      <path
        d="M18.8474 16.2143C19.4847 16.2143 20.0013 15.7346 20.0013 15.1429C20.0013 14.5511 19.4847 14.0714 18.8474 14.0714C18.2101 14.0714 17.6935 14.5511 17.6935 15.1429C17.6935 15.7346 18.2101 16.2143 18.8474 16.2143Z"
        fill="white"
      />
      <path
        d="M8.76982 20.5L0.769283 16.0714C0.307713 15.7857 0 15.3571 0 14.8571V6.14286C0 5.64286 0.307713 5.14286 0.769283 4.92857L8.46211 0.714286C8.69289 0.571429 8.92368 0.5 9.23139 0.5C9.5391 0.5 9.76989 0.571429 10.0007 0.714286L17.6935 4.92857C18.1551 5.21429 18.4628 5.64286 18.4628 6.14286V10.5H16.9242V6.14286L9.23139 1.92857L1.53857 6.14286V14.8571L9.61603 19.2857L8.76982 20.5Z"
        fill="white"
      />
    </svg>
  ),

  request: (props: TIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <path
        d="M11.1546 16.2143C11.7919 16.2143 12.3085 15.7346 12.3085 15.1429C12.3085 14.5511 11.7919 14.0714 11.1546 14.0714C10.5173 14.0714 10.0007 14.5511 10.0007 15.1429C10.0007 15.7346 10.5173 16.2143 11.1546 16.2143Z"
        fill="#4B4B4D"
      />
      <path
        d="M15.001 16.2143C15.6383 16.2143 16.1549 15.7346 16.1549 15.1429C16.1549 14.5511 15.6383 14.0714 15.001 14.0714C14.3637 14.0714 13.8471 14.5511 13.8471 15.1429C13.8471 15.7346 14.3637 16.2143 15.001 16.2143Z"
        fill="#4B4B4D"
      />
      <path
        d="M18.8474 16.2143C19.4847 16.2143 20.0013 15.7346 20.0013 15.1429C20.0013 14.5511 19.4847 14.0714 18.8474 14.0714C18.2101 14.0714 17.6935 14.5511 17.6935 15.1429C17.6935 15.7346 18.2101 16.2143 18.8474 16.2143Z"
        fill="#4B4B4D"
      />
      <path
        d="M8.76982 20.5L0.769283 16.0714C0.307713 15.7857 0 15.3571 0 14.8571V6.14286C0 5.64286 0.307713 5.14286 0.769283 4.92857L8.46211 0.714286C8.69289 0.571429 8.92368 0.5 9.23139 0.5C9.5391 0.5 9.76989 0.571429 10.0007 0.714286L17.6935 4.92857C18.1551 5.21429 18.4628 5.64286 18.4628 6.14286V10.5H16.9242V6.14286L9.23139 1.92857L1.53857 6.14286V14.8571L9.61603 19.2857L8.76982 20.5Z"
        fill="#4B4B4D"
      />
    </svg>
  ),
};