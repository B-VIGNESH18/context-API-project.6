import Property1Default1 from "./Property1Default1";
import Property1Default from "./Property1Default";
import "./SectionCard.css";

const SectionCard = () => {
  return (
    <div className="note-inner1">
      <div className="frame-wrapper">
        <div className="instance-parent">
          <Property1Default1
            iconshome="/iconsdescription1.svg"
            home="My Notes"
            showIconshome
            property1DefaultBackgroundColor="unset"
            property1DefaultPadding="var(--padding-5xs) 0px"
            homeColor="#203562"
            homeFontWeight="600"
            homeFontSize="24px"
            homeLineHeight="33.6px"
            homeOpacity="unset"
          />
          <Property1Default1
            iconshome="/iconsdescription1.svg"
            home="Recently viewed"
            showIconshome={false}
            property1DefaultBackgroundColor="unset"
            property1DefaultPadding="8px 16px"
            homeColor="#203562"
            homeFontWeight="600"
            homeFontSize="16px"
            homeLineHeight="22.4px"
            homeOpacity="0.7"
          />
          <div className="notes-card-parent">
            <Property1Default
              weeksAgo="5 days ago"
              lorenIpsum="Feedbacks"
              property1DefaultPosition="relative"
              lorenIpsumWidth="155px"
            />
            <Property1Default
              weeksAgo="2 weeks ago"
              lorenIpsum="Weekly Task"
              property1DefaultPosition="relative"
              lorenIpsumWidth="155px"
            />
            <Property1Default
              weeksAgo="3 weeks ago"
              lorenIpsum="Lyrics"
              property1DefaultPosition="relative"
              lorenIpsumWidth="155px"
            />
            <Property1Default
              weeksAgo="3 weeks ago"
              lorenIpsum="Loren ipsum"
              property1DefaultPosition="relative"
              lorenIpsumWidth="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
