import React from "react";
import {
    ProgressIndicator,
    Title,
    FlexBox,
    TitleLevel,
    FlexBoxDirection,
    FlexBoxAlignItems,
    FlexBoxJustifyContent
} from "@ui5/webcomponents-react";
import { sapUiContentPadding } from "@ui5/webcomponents-react-base/lib/spacing";

export default function Goal({
    name,
    startDate,
    targetDate,
    target,
    progress,
    infoState,
    ref
}) {
    console.log(ref);
    return (
        <FlexBox
            direction={FlexBoxDirection.Row}
            alignItems={FlexBoxAlignItems.Center}
            justifyContent={FlexBoxJustifyContent.Start}
            style={{ ...sapUiContentPadding, width: "100%" }}
        >
            <Title
                level={TitleLevel.H3}
                style={{ width: "30%", margin: "0px" }}
            >
                {name}
            </Title>
            <Title
                level={TitleLevel.H5}
                style={{ width: "15%", margin: "0px" }}
            >
                <p style={{ color: "grey" }}>Start Date:</p>
                {startDate}
            </Title>
            <Title
                level={TitleLevel.H5}
                style={{ width: "15%", margin: "0px" }}
            >
                <p style={{ color: "grey" }}>Target Date:</p>
                {targetDate}
            </Title>
            <Title
                level={TitleLevel.H5}
                style={{ width: "15%", margin: "0px" }}
            >
                <p style={{ color: "grey" }}>Target:</p>
                {target}
            </Title>
            <ProgressIndicator
                displayValue={`${progress}%`}
                percentValue={progress}
                width="20%"
                style={{ margin: "0px" }}
                state={infoState}
                tooltip="Test"
                zIndex="3"
            />
        </FlexBox>
    );
}
