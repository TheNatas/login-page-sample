import { PropsWithChildren } from "react";

const Overlay = ({ children }: PropsWithChildren<{}>) => {
  return(
    <div style={{width: '100%', height: '100%', position: 'absolute', zIndex: '-3'}}>
      {children}
    </div>
  )
};

export default Overlay;