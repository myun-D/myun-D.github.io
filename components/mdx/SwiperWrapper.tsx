import { ReactNode } from "react";

export const SwiperWrapper = ({children, color}: {children: ReactNode, color: any}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);