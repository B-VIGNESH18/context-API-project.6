import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  weeksAgo,
  lorenIpsum,
  property1DefaultPosition,
  lorenIpsumWidth,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  const lorenIpsumStyle = useMemo(() => {
    return {
      width: lorenIpsumWidth,
    };
  }, [lorenIpsumWidth]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut
          vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam
          maecenas sed at vitae facilisis. .
        </div>
        <div className="weeks-ago">{weeksAgo}</div>
      </div>
      <div className="loren-ipsum-parent">
        <div className="loren-ipsum" style={lorenIpsumStyle}>
          {lorenIpsum}
        </div>
        <div className="edit-parent">
          <img className="edit-icon1" alt="" src="/edit.svg" />
          <img className="edit-icon1" alt="" src="/iconsdelete.svg" />
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
