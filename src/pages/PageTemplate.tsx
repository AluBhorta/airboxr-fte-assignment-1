import React from "react";
import { useHistory } from "react-router-dom";

import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  FixedBottomProminentButton,
  TopbarBackButton
} from "../components/layout-components";

const PageTemplate: React.FC<{
  pageTitle?: string;
  showBackBtn?: boolean;
  showProminentBtn?: boolean;
  prominentBtnTitle?: string;
  disableProminentBtn: boolean;
  onProminentBtnClick?: () => void | Promise<void>;
}> = ({
  children,
  pageTitle,
  showBackBtn,
  showProminentBtn,
  prominentBtnTitle,
  disableProminentBtn,
  onProminentBtnClick
}) => {
  const history = useHistory();

  const onBackBtnClick = () => history.goBack();

  onProminentBtnClick =
    onProminentBtnClick === undefined
      ? () => console.log("Clicked Prominent")
      : onProminentBtnClick;

  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: onBackBtnClick
  };

  return (
    <>
      <PageContainer>
        <FixedTopBar
          title={pageTitle || "Example Page Title"}
          leftButton={showBackBtn ? topbarLeftButton : undefined}
        />
        <FixedMiddleBodyWithVerticalScroll>
          {children}
        </FixedMiddleBodyWithVerticalScroll>
        {showProminentBtn && (
          <FixedBottomProminentButton
            disabled={disableProminentBtn}
            title={prominentBtnTitle || "Next"}
            onClick={onProminentBtnClick}
          />
        )}
      </PageContainer>
    </>
  );
};

export default PageTemplate;
