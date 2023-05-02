import React from 'react'

function Screen2() {
  return (
    <div className="screen2   px-[10%] py-[5%] mt-[300px] space-y-10">
      <div className="flex flex-col lg:flex-row justify-center lg:items-end gap-5">
        <div className="w-full lg:w-2/3 space-y-5" data-aos="fade-up-left">
          <h2 className="text-4xl lg:text-5xl font-bold">
            With Vape Monkey NFTs you unlock a <br /> free URL showcase
          </h2>
          <p className="text-xl font-medium">
            Vape Monkey NFTs are more than just collectibles - they have
            practical uses too! Display your NFT on social media, use as a
            unique avatar, or trade with other collectors.
          </p>
          <p className="text-xl font-medium">
            Own a piece of digital history and show off your style with these
            must-have items. Start building your collection today!
          </p>
        </div>
        <div className="w-full lg:w-1/3 space-y-5" data-aos="fade-up-left">
          <h2 className="text-4xl  font-bold">
            Smart Contract Based on ERC721
          </h2>
          <p className="text-xl font-medium">
            Vape Monkey NFT Apes live in the Ethereum blockchain.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        {/* <OpenSea /> */}

        <a href="https://google.com">
          <Instagram />
        </a>
        <a href="https://twitter.com/monkey_dubai">
          <Twitter />
        </a>
        <a href="https://discord.gg/NC3RXXh8">
          <Discord />
        </a>
        {/* <EtherScan /> */}
      </div>
    </div>
  )
}

export default Screen2

// const OpenSea = () => {
//     return (<svg className='hover:opacity-50 duration-200' width="50" height="50" viewBox="0 0 24 25"><path className='fill-[#F43F5E]' d="M12 0.692017C5.374 0.692017 0 6.06602 0 12.692C0 19.318 5.374 24.692 12 24.692C18.626 24.692 24 19.318 24 12.692C24 6.06602 18.629 0.692017 12 0.692017ZM5.92 13.095L5.971 13.014L9.094 8.13002C9.10446 8.11396 9.11904 8.10101 9.13621 8.09252C9.15339 8.08402 9.17253 8.08029 9.19164 8.08172C9.21075 8.08316 9.22912 8.08969 9.24484 8.10065C9.26056 8.11161 9.27305 8.12658 9.281 8.14402C9.801 9.31302 10.253 10.767 10.041 11.672C9.953 12.044 9.706 12.548 9.427 13.014C9.39121 13.0822 9.35216 13.1486 9.31 13.213C9.2999 13.2274 9.28639 13.239 9.27068 13.2469C9.25497 13.2547 9.23756 13.2586 9.22 13.258H6.013C5.99386 13.2583 5.97499 13.2534 5.95841 13.2439C5.94183 13.2343 5.92814 13.2204 5.91881 13.2037C5.90948 13.187 5.90485 13.1681 5.90541 13.1489C5.90597 13.1298 5.9117 13.1112 5.922 13.095H5.92ZM19.834 14.775C19.8342 14.7964 19.8282 14.8173 19.8167 14.8353C19.8051 14.8532 19.7885 14.8674 19.769 14.876C19.526 14.979 18.699 15.361 18.355 15.838C17.477 17.06 16.807 18.808 15.307 18.808H9.053C8.52496 18.8072 8.00226 18.7024 7.51476 18.4995C7.02726 18.2966 6.58451 17.9996 6.21183 17.6256C5.83915 17.2515 5.54384 16.8077 5.34277 16.3194C5.1417 15.8311 5.03882 15.3081 5.04 14.78V14.708C5.04 14.65 5.088 14.602 5.148 14.602H8.633C8.703 14.602 8.753 14.665 8.748 14.734C8.722 14.96 8.765 15.193 8.873 15.404C9.079 15.824 9.509 16.086 9.972 16.086H11.698V14.739H9.99C9.96999 14.7388 9.95041 14.7331 9.93338 14.7226C9.91635 14.7121 9.90251 14.6971 9.89335 14.6793C9.8842 14.6615 9.88007 14.6416 9.88142 14.6216C9.88276 14.6016 9.88954 14.5824 9.901 14.566L9.964 14.476C10.124 14.245 10.355 13.89 10.585 13.484C10.741 13.21 10.893 12.918 11.015 12.624C11.039 12.572 11.058 12.517 11.08 12.464C11.113 12.37 11.147 12.282 11.171 12.195C11.1946 12.1212 11.2162 12.0469 11.236 11.972C11.293 11.722 11.317 11.458 11.317 11.185C11.317 11.077 11.313 10.964 11.303 10.858C11.298 10.741 11.283 10.623 11.269 10.506C11.2578 10.4013 11.2418 10.2972 11.221 10.194C11.1941 10.0369 11.1614 9.88076 11.123 9.72602L11.109 9.66602C11.079 9.55802 11.053 9.45602 11.019 9.34902C10.9238 9.02042 10.8143 8.69612 10.691 8.37702C10.648 8.25699 10.6007 8.13857 10.549 8.02202C10.477 7.84402 10.403 7.68302 10.336 7.53202C10.3027 7.46733 10.2713 7.40163 10.242 7.33502C10.2095 7.26316 10.1751 7.19213 10.139 7.12202C10.115 7.06902 10.086 7.01802 10.067 6.97002L9.856 6.58202C9.827 6.52902 9.875 6.46402 9.933 6.48102L11.253 6.83802H11.263L11.436 6.88802L11.628 6.94202L11.698 6.96102V6.17802C11.698 5.79902 12 5.49202 12.377 5.49202C12.466 5.49178 12.5542 5.50955 12.6361 5.54426C12.7181 5.57898 12.7922 5.62992 12.854 5.69402C12.9817 5.8228 13.0535 5.99667 13.054 6.17802V7.34202L13.195 7.38102C13.205 7.38602 13.217 7.39102 13.226 7.39802C13.26 7.42202 13.31 7.46002 13.373 7.50802C13.423 7.54602 13.476 7.59402 13.538 7.64502C13.7355 7.8059 13.9269 7.97401 14.112 8.14902C14.326 8.34802 14.566 8.58102 14.796 8.84002C14.861 8.91402 14.923 8.98602 14.988 9.06602C15.05 9.14502 15.12 9.22202 15.178 9.29802C15.257 9.40202 15.338 9.51002 15.413 9.62202C15.446 9.67502 15.487 9.73002 15.518 9.78302C15.614 9.92502 15.696 10.071 15.775 10.218C15.809 10.285 15.842 10.359 15.871 10.431C15.96 10.628 16.03 10.827 16.073 11.029C16.0872 11.0719 16.0969 11.1161 16.102 11.161V11.171C16.116 11.228 16.121 11.291 16.126 11.355C16.1542 11.6506 16.118 11.9487 16.02 12.229C15.989 12.313 15.96 12.399 15.922 12.483C15.847 12.653 15.761 12.826 15.658 12.985C15.624 13.045 15.583 13.107 15.545 13.167C15.502 13.23 15.456 13.29 15.418 13.347C15.363 13.4227 15.3053 13.4965 15.245 13.568C15.192 13.64 15.139 13.712 15.079 13.777C14.998 13.875 14.919 13.967 14.834 14.055C14.786 14.113 14.734 14.173 14.678 14.225C14.626 14.285 14.57 14.338 14.522 14.386C14.438 14.47 14.372 14.533 14.314 14.588L14.177 14.71C14.1579 14.7292 14.132 14.74 14.105 14.74H13.054V16.086H14.376C14.671 16.086 14.952 15.982 15.18 15.788C15.257 15.721 15.595 15.428 15.996 14.986C16.0091 14.971 16.0266 14.9605 16.046 14.956L19.696 13.899C19.712 13.8944 19.7289 13.8935 19.7453 13.8965C19.7617 13.8995 19.7772 13.9062 19.7906 13.9162C19.804 13.9262 19.8148 13.9391 19.8224 13.954C19.8299 13.9689 19.8339 13.9853 19.834 14.002V14.775Z" fill="white"></path></svg>)
// }

const Discord = () => (
  <svg
    className="hover:opacity-50 duration-200"
    width="50"
    height="50"
    viewBox="0 0 23 26"
    fill="none"
  >
    <path
      className="fill-[#F43F5E]"
      d="M20.1755 0.22937H3.32983C1.90926 0.22937 0.752686 1.38594 0.752686 2.81908V19.8157C0.752686 21.2488 1.90926 22.4054 3.32983 22.4054H17.5858L16.9195 20.0797L18.5287 21.5757L20.0498 22.9837L22.7527 25.3722V2.81908C22.7527 1.38594 21.5961 0.22937 20.1755 0.22937ZM15.323 16.6477C15.323 16.6477 14.8704 16.1071 14.4933 15.6294C16.1401 15.1642 16.7687 14.1334 16.7687 14.1334C16.2533 14.4728 15.763 14.7117 15.323 14.8751C14.6944 15.1391 14.091 15.3151 13.5001 15.4157C12.2933 15.6419 11.187 15.5791 10.2441 15.4031C9.52754 15.2648 8.91154 15.0637 8.39611 14.8625C8.10697 14.7494 7.79269 14.6111 7.4784 14.4351C7.44069 14.4099 7.40297 14.3974 7.36526 14.3722C7.34011 14.3597 7.32754 14.3471 7.31497 14.3345C7.08869 14.2088 6.96297 14.1208 6.96297 14.1208C6.96297 14.1208 7.5664 15.1265 9.16297 15.6042C8.78583 16.0819 8.32069 16.6477 8.32069 16.6477C5.5424 16.5597 4.4864 14.7368 4.4864 14.7368C4.4864 10.6888 6.29669 7.40766 6.29669 7.40766C8.10697 6.04994 9.82926 6.08766 9.82926 6.08766L9.95497 6.23851C7.69211 6.89223 6.64869 7.88537 6.64869 7.88537C6.64869 7.88537 6.92526 7.73451 7.3904 7.5208C8.73554 6.92994 9.80411 6.76651 10.2441 6.7288C10.3195 6.71623 10.3824 6.70366 10.4578 6.70366C11.2247 6.60308 12.0921 6.57794 12.9973 6.67851C14.1915 6.8168 15.4738 7.1688 16.7813 7.88537C16.7813 7.88537 15.7881 6.94251 13.651 6.2888L13.827 6.08766C13.827 6.08766 15.5493 6.04994 17.3595 7.40766C17.3595 7.40766 19.1698 10.6888 19.1698 14.7368C19.1698 14.7368 18.1013 16.5597 15.323 16.6477ZM9.47726 10.7768C8.76068 10.7768 8.19497 11.4054 8.19497 12.1722C8.19497 12.9391 8.77326 13.5677 9.47726 13.5677C10.1938 13.5677 10.7595 12.9391 10.7595 12.1722C10.7721 11.4054 10.1938 10.7768 9.47726 10.7768ZM14.0658 10.7768C13.3493 10.7768 12.7835 11.4054 12.7835 12.1722C12.7835 12.9391 13.3618 13.5677 14.0658 13.5677C14.7824 13.5677 15.3481 12.9391 15.3481 12.1722C15.3481 11.4054 14.7824 10.7768 14.0658 10.7768Z"
      fill="white"
    ></path>
  </svg>
)

const Twitter = () => (
  <svg
    className="hover:opacity-50 duration-200"
    width="50"
    height="50"
    viewBox="0 0 25 20"
    fill="none"
  >
    <path
      className="fill-[#F43F5E]"
      d="M24.6602 2.35752C23.7614 2.75565 22.8082 3.01699 21.8321 3.13283C22.8488 2.52346 23.6295 1.55849 23.9971 0.408739C23.0306 0.982287 21.9731 1.38639 20.8704 1.60358C19.9722 0.646676 18.6926 0.048645 17.2763 0.048645C14.557 0.048645 12.3523 2.25327 12.3523 4.97239C12.3523 5.35836 12.3959 5.73411 12.4798 6.09458C8.38759 5.88918 4.75947 3.92896 2.33087 0.949957C1.90712 1.67718 1.66431 2.52308 1.66431 3.42533C1.66431 5.13364 2.53366 6.64068 3.85478 7.52371C3.07286 7.49922 2.30814 7.28803 1.62447 6.90777C1.62419 6.92839 1.62419 6.94902 1.62419 6.96974C1.62419 9.35539 3.32144 11.3455 5.57387 11.7979C4.8488 11.9951 4.08825 12.0239 3.35031 11.8822C3.97684 13.8384 5.79531 15.2619 7.94988 15.3018C6.26472 16.6223 4.14156 17.4095 1.83475 17.4095C1.43725 17.4095 1.04538 17.3862 0.660156 17.3407C2.83919 18.7378 5.42734 19.553 8.20797 19.553C17.2649 19.553 22.2174 12.05 22.2174 5.54343C22.2174 5.32986 22.2127 5.11752 22.2032 4.90639C23.1671 4.20954 23.9991 3.34641 24.6602 2.35752Z"
      fill="white"
    ></path>
  </svg>
)

const Instagram = () => (
  <svg
    className="hover:opacity-50 duration-200"
    width="50"
    height="50"
    viewBox="0 0 22 23"
    fill="none"
  >
    <path
      className="fill-[#F43F5E]"
      d="M7.33397 11.8008C7.33397 9.77581 8.97515 8.13382 11.0002 8.13382C13.0252 8.13382 14.6673 9.77581 14.6673 11.8008C14.6673 13.8257 13.0252 15.4677 11.0002 15.4677C8.97515 15.4677 7.33397 13.8257 7.33397 11.8008ZM5.3516 11.8008C5.3516 14.9204 7.88047 17.4492 11.0002 17.4492C14.1199 17.4492 16.6488 14.9204 16.6488 11.8008C16.6488 8.68118 14.1199 6.15241 11.0002 6.15241C7.88047 6.15241 5.3516 8.68118 5.3516 11.8008ZM15.5524 5.92845C15.5521 6.65747 16.1428 7.24869 16.8719 7.24898C17.6009 7.24927 18.1922 6.65852 18.1925 5.92951C18.1928 5.20049 17.602 4.60927 16.8729 4.60898H16.8724C16.1437 4.60932 15.553 5.19978 15.5524 5.92845ZM6.55602 20.7545C5.48352 20.7057 4.90058 20.527 4.51319 20.3761C3.9996 20.1762 3.63316 19.9381 3.24788 19.5533C2.8626 19.1686 2.62411 18.8025 2.42504 18.2889C2.27403 17.9017 2.09538 17.3186 2.04663 16.2462C1.9933 15.0867 1.98265 14.7384 1.98265 11.8009C1.98265 8.86334 1.99418 8.51601 2.04663 7.35555C2.09547 6.28309 2.27544 5.70115 2.42504 5.31281C2.62499 4.79924 2.86313 4.43281 3.24788 4.04754C3.63263 3.66228 3.99872 3.4238 4.51319 3.22474C4.90041 3.07373 5.48352 2.89509 6.55602 2.84634C7.71555 2.79301 8.06387 2.78237 11.0002 2.78237C13.9365 2.78237 14.2852 2.79389 15.4457 2.84634C16.5182 2.89518 17.1002 3.07514 17.4885 3.22474C18.0021 3.4238 18.3686 3.66281 18.7538 4.04754C19.1391 4.43228 19.3767 4.79924 19.5767 5.31281C19.7277 5.70001 19.9063 6.28309 19.9551 7.35555C20.0084 8.51601 20.0191 8.86334 20.0191 11.8009C20.0191 14.7384 20.0084 15.0857 19.9551 16.2462C19.9062 17.3186 19.7267 17.9016 19.5767 18.2889C19.3767 18.8025 19.1386 19.1689 18.7538 19.5533C18.3691 19.9377 18.0021 20.1762 17.4885 20.3761C17.1013 20.5271 16.5182 20.7058 15.4457 20.7545C14.2862 20.8078 13.9378 20.8185 11.0002 20.8185C8.06255 20.8185 7.7152 20.8078 6.55602 20.7545ZM6.46493 0.867397C5.29387 0.920725 4.49366 1.10641 3.79482 1.37833C3.07108 1.65913 2.4584 2.03586 1.84616 2.64711C1.23392 3.25836 0.858142 3.87198 0.577323 4.59569C0.305392 5.29494 0.119705 6.09469 0.0663745 7.2657C0.0121644 8.43856 -0.000244141 8.81353 -0.000244141 11.8008C-0.000244141 14.788 0.0121644 15.163 0.0663745 16.3359C0.119705 17.507 0.305392 18.3066 0.577323 19.0059C0.858142 19.7291 1.23401 20.3435 1.84616 20.9545C2.45831 21.5654 3.07108 21.9416 3.79482 22.2232C4.49498 22.4952 5.29387 22.6808 6.46493 22.7342C7.63846 22.7875 8.01283 22.8008 11.0002 22.8008C13.9876 22.8008 14.3625 22.7884 15.5355 22.7342C16.7066 22.6808 17.5063 22.4952 18.2056 22.2232C18.9289 21.9416 19.542 21.5657 20.1542 20.9545C20.7665 20.3432 21.1415 19.7291 21.4231 19.0059C21.695 18.3066 21.8816 17.5069 21.934 16.3359C21.9873 15.1621 21.9998 14.788 21.9998 11.8008C21.9998 8.81353 21.9873 8.43856 21.934 7.2657C21.8807 6.0946 21.695 5.2945 21.4231 4.59569C21.1415 3.87242 20.7655 3.25933 20.1542 2.64711C19.543 2.03489 18.9289 1.65913 18.2065 1.37833C17.5063 1.10641 16.7065 0.919845 15.5363 0.867397C14.3634 0.814069 13.9884 0.800781 11.0011 0.800781C8.01371 0.800781 7.63846 0.813189 6.46493 0.867397Z"
      fill="white"
    ></path>
  </svg>
)

// const EtherScan = () => <svg className='hover:opacity-50 duration-200' width="50" height="50" viewBox="0 0 25 25" fill="none"><path className='fill-[#F43F5E]' d="M4.99665 11.5902C4.99668 11.456 5.02321 11.3232 5.07473 11.1992C5.12625 11.0753 5.20174 10.9628 5.29687 10.8681C5.392 10.7734 5.50489 10.6985 5.62906 10.6476C5.75323 10.5967 5.88624 10.5708 6.02044 10.5714L7.71777 10.5769C7.9884 10.5769 8.24794 10.6845 8.43931 10.8758C8.63068 11.0672 8.73818 11.3267 8.73818 11.5974V18.0158C8.92935 17.9592 9.174 17.8988 9.44322 17.8354C9.62974 17.7915 9.79597 17.6859 9.91495 17.5357C10.0339 17.3855 10.0987 17.1995 10.0987 17.0079V9.04682C10.0987 8.77617 10.2062 8.5166 10.3976 8.3252C10.589 8.13381 10.8485 8.02625 11.1192 8.0262H12.8216C13.0923 8.02625 13.3518 8.13381 13.5432 8.3252C13.7346 8.5166 13.8421 8.77617 13.8421 9.04682V16.436C13.8421 16.436 14.268 16.2636 14.6826 16.0885C14.8367 16.0234 14.9681 15.9143 15.0606 15.7749C15.1531 15.6355 15.2025 15.4719 15.2026 15.3046V6.49567C15.2026 6.22508 15.3101 5.96556 15.5014 5.7742C15.6927 5.58284 15.9522 5.47531 16.2228 5.47526H17.9235C18.194 5.47552 18.4533 5.58314 18.6444 5.77448C18.8356 5.96582 18.943 6.22521 18.943 6.49567V13.7495C20.4174 12.681 21.9117 11.3957 23.0975 9.85031C23.2696 9.62599 23.3834 9.36257 23.4289 9.08356C23.4744 8.80454 23.4501 8.5186 23.3582 8.25124C22.8093 6.67201 21.9368 5.22475 20.7964 4.00209C19.6561 2.77942 18.273 1.80828 16.7358 1.15079C15.1986 0.493306 13.5411 0.16396 11.8693 0.183832C10.1975 0.203704 8.54824 0.572354 7.02709 1.26619C5.50595 1.96003 4.14639 2.96378 3.03543 4.2132C1.92447 5.46263 1.08656 6.93022 0.575331 8.52205C0.0641012 10.1139 -0.109193 11.7949 0.0665362 13.4576C0.242265 15.1202 0.763149 16.7279 1.59585 18.1777C1.74093 18.4278 1.95437 18.6313 2.2111 18.7643C2.46783 18.8973 2.75718 18.9542 3.04516 18.9285C3.36688 18.9002 3.76744 18.8601 4.24367 18.8043C4.45094 18.7807 4.64229 18.6817 4.78129 18.5262C4.92029 18.3706 4.99723 18.1694 4.99745 17.9608V11.5902" fill="white"></path><path className='fill-[#F43F5E]' d="M4.96045 21.8838C6.75311 23.1879 8.87159 23.9707 11.0815 24.1456C13.2915 24.3204 15.5067 23.8805 17.4821 22.8745C19.4576 21.8685 21.1162 20.3356 22.2745 18.4455C23.4328 16.5553 24.0457 14.3816 24.0453 12.1647C24.0453 11.8874 24.0324 11.6144 24.014 11.3422C19.6235 17.8904 11.5168 20.9517 4.96045 21.8838" fill="white"></path></svg>
