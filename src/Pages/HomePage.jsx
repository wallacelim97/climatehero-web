import { ObjectPage } from "@ui5/webcomponents-react/lib/ObjectPage";
import { ObjectPageMode } from "@ui5/webcomponents-react/lib/ObjectPageMode";
import { ObjectPageSection } from "@ui5/webcomponents-react/lib/ObjectPageSection";
import React from "react";
import { connect } from "react-redux";
import { spacing } from "@ui5/webcomponents-react-base";
// import { UI } from "../redux/actionCreators";
import DraggableCard from "../Components/Containers/DraggableCard";
import Climate from "../Assets/Images/Climate.png";

function HomePage({ user }) {
    return (
        <ObjectPage
            title="Climate Hero"
            subTitle={`Welcome, ${user.data.firstName} ${user.data.lastName}`}
            image={Climate}
            mode={ObjectPageMode.Default}
            style={{
                ...spacing.sapUiContentPadding,
                height: "100vh",
                position: "absolute",
                top: "0",
            }}
        >
            <ObjectPageSection title="History" id="HomePageHistorySection">
                <DraggableCard
                    style={spacing.sapUiContentPadding}
                    cardType="History"
                />
            </ObjectPageSection>
            <ObjectPageSection title="Trends" id="HomePageTrendsSection">
                <DraggableCard
                    style={spacing.sapUiContentPadding}
                    cardType="Trends"
                />
            </ObjectPageSection>
            <ObjectPageSection title="Goals" id="HomePageGoalsSection">
                <DraggableCard
                    style={spacing.sapUiContentPadding}
                    cardType="Goals"
                />
            </ObjectPageSection>
        </ObjectPage>
    );
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(HomePage);
