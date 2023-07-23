import "./characterSkeleton.scss";

import ContentLoader from "react-content-loader";

const CharacterSkeleton = (props) => {
  return (
    <div className="skeleton">
      <h3 className="skeleton__header">Please select a character to see information</h3>
      <div className="skeleton__skeleton">
        <ContentLoader
          className="skeleton__main"
          speed={1}
          width={425}
          height={294}
          viewBox="0 0 425 294"
          backgroundColor="purple"
          foregroundColor="blue
        "
          {...props}
        >
          <rect x="98" y="28" rx="1" ry="2" width="128" height="16" />
          <rect x="98" y="56" rx="1" ry="2" width="127" height="16" />
          <rect x="20" y="106" rx="1" ry="5" width="370" height="26" />
          <rect x="20" y="156" rx="1" ry="5" width="360" height="26" />
          <rect x="20" y="205" rx="1" ry="5" width="158" height="26" />
          <circle cx="50" cy="50" r="30" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default CharacterSkeleton;
