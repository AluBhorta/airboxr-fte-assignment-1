import React from "react";
import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  FixedBottomProminentButton,
  TopbarBackButton,
} from "../components/layout-components";

const PageTemplate: React.FC<{
  pageTitle?: string;
  showBackBtn?: boolean;
  onBackBtnClick?: () => void | Promise<void>;
  prominentBtnTitle?: string;
  onProminentBtnClick?: () => void | Promise<void>;
}> = ({
  children,
  pageTitle,
  showBackBtn,
  onBackBtnClick,
  prominentBtnTitle,
  onProminentBtnClick,
}) => {
  onBackBtnClick = onBackBtnClick === undefined ? () => {} : onBackBtnClick;
  onProminentBtnClick =
    onProminentBtnClick === undefined ? () => {} : onProminentBtnClick;

  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: onBackBtnClick,
  };

  return (
    <PageContainer>
      <FixedTopBar
        title={pageTitle || "Example Page Title"}
        leftButton={showBackBtn ? topbarLeftButton : undefined}
      />
      <FixedMiddleBodyWithVerticalScroll>
        {children}
      </FixedMiddleBodyWithVerticalScroll>
      <FixedBottomProminentButton
        title={prominentBtnTitle || "Test / Debug"}
        onClick={onProminentBtnClick}
      />
    </PageContainer>
  );
};

export default PageTemplate;
