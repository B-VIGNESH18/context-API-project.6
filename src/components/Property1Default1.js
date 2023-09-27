import { useMemo } from "react";
import "./Property1Default1.css";

const Property1Default1 = ({
  iconshome,
  home,
  showIconshome,
  property1DefaultBackgroundColor,
  property1DefaultPadding,
  homeColor,
  homeFontWeight,
  homeFontSize,
  homeLineHeight,
  homeOpacity,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      backgroundColor: property1DefaultBackgroundColor,
      padding: property1DefaultPadding,
    };
  }, [property1DefaultBackgroundColor, property1DefaultPadding]);

  const homeStyle = useMemo(() => {
    return {
      color: homeColor,
      fontWeight: homeFontWeight,
      fontSize: homeFontSize,
      lineHeight: homeLineHeight,
      opacity: homeOpacity,
    };
  }, [homeColor, homeFontWeight, homeFontSize, homeLineHeight, homeOpacity]);

  return (
    <div className="property-1default1" style={property1Default1Style}>
      <div className="iconshome-parent">
        {showIconshome && <img className="iconshome" alt="" src={iconshome} />}
        <div className="home" style={homeStyle}>
          {home}
        </div>
      </div>
    </div>
  );
};

export default Property1Default1;
