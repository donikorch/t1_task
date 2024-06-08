interface CartIconProps {
  counter?: boolean;
}

const CartIcon = ({ counter = false }: CartIconProps) => (
  <>
    {counter ? (
      <svg
        width='24'
        height='25'
        viewBox='0 0 24 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20.2841 6.95283H16.888L13.3201 0.73421C13.1431 0.425303 12.7592 0.324446 12.4625 0.510187C12.1665 0.695927 12.0707 1.09737 12.2483 1.40694L15.4303 6.95283H5.13806L8.32005 1.4069C8.49766 1.09733 8.40185 0.695883 8.10582 0.510143C7.80857 0.324402 7.42591 0.425259 7.24829 0.734166L3.68035 6.95279H0.28418V8.25996H1.64069L3.2285 17.1172C3.39451 18.0446 4.16965 18.7173 5.07178 18.7173H15.4966C16.3987 18.7173 17.1738 18.0446 17.3392 17.1178L18.9276 8.25996H20.2842C20.2841 8.25996 20.2841 6.95283 20.2841 6.95283ZM16.1106 16.8772C16.0556 17.1861 15.7974 17.4102 15.4965 17.4102H5.07178C4.77088 17.4102 4.51272 17.1862 4.45718 16.8766L2.91207 8.25996H17.6563L16.1106 16.8772Z'
          fill='currentColor'
        />
        <ellipse
          cx='17.0943'
          cy='18.7173'
          rx='6.1898'
          ry='6.10012'
          fill='#F14F4F'
        />
        <path
          d='M15.9336 17.1212V16.4172L17.8536 15.9372V21.6172H17.1736V16.7532L15.9336 17.1212Z'
          fill='#FFFFFF'
        />
      </svg>
    ) : (
      <>
        <svg
          width='24'
          height='22'
          viewBox='0 0 24 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M24 7.85714H19.9246L15.6431 0.381348C15.4307 0.00999118 14.97 -0.111255 14.614 0.112035C14.2588 0.335325 14.1438 0.817929 14.357 1.19008L18.1753 7.85714H5.82466L9.64304 1.19003C9.85618 0.817876 9.7412 0.335272 9.38597 0.111982C9.02927 -0.111308 8.57007 0.00993831 8.35693 0.381295L4.07541 7.85709H0V9.42853H1.62781L3.53319 20.0764C3.73239 21.1913 4.66256 22 5.74513 22H18.2549C19.3374 22 20.2676 21.1913 20.4661 20.0771L22.3721 9.42853H24C24 9.42853 24 7.85714 24 7.85714ZM18.9916 19.7879C18.9258 20.1592 18.6159 20.4286 18.2548 20.4286H5.74513C5.38404 20.4286 5.07425 20.1593 5.0076 19.7872L3.15347 9.42853H20.8465L18.9916 19.7879Z'
            fill='currentColor'
          />
        </svg>
      </>
    )}
  </>
);

export default CartIcon;