import Property1Default1 from "../components/Property1Default1";
import SectionCard from "../components/SectionCard";
import "./Note.css";

const Note = () => {
  return (
    <div className="note">
      <div className="note-child" />
      <div className="note-item" />
      <div className="note-inner">
        <div />
      </div>
      <div className="notes-app">Notes App</div>
      <div className="frame-div">
        <div className="instance-wrapper">
          <Property1Default1
            iconshome="/iconsdescription.svg"
            home="Notes"
            showIconshome
            property1DefaultBackgroundColor="#203562"
            property1DefaultPadding="var(--padding-5xs) var(--padding-base)"
            homeColor="#f5f5f5"
            homeFontWeight="500"
            homeFontSize="24px"
            homeLineHeight="33.6px"
            homeOpacity="unset"
          />
        </div>
      </div>
      <SectionCard />
      <div className="title-parent">
        <div className="title">Title</div>
        <div className="line-parent">
          <div className="frame-child" />
          <div className="take-a-note">Take a note...</div>
        </div>
        <div className="add-a-note-wrapper">
          <div className="add-a-note">Add a Note</div>
        </div>
      </div>
    </div>
  );
};

export default Note;
