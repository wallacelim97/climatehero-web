import React from "react";
import { motion } from "framer-motion";
import GoalsCard from "../GoalsCard";
import TrendsCard from "../TrendsCard";
import HistoryCard from "../HistoryCard";
import CalendarCard from "../CalendarCard";

export default function DraggableCard(props) {
    const renderContent = card => {
        if (card === "Goals") {
            return <GoalsCard style={{ ...props.style, height: "100%" }} />;
        } else if (card === "Trends") {
            return <TrendsCard style={{ ...props.style, height: "100%" }} />;
        } else if (card === "History") {
            return <HistoryCard style={{ ...props.style, height: "100%" }} />;
        } else if (card === "Calendar") {
            return <CalendarCard style={{ ...props.style, height: "100%" }} />;
        } else {
            console.error("Attempted to render invalid Card");
        }
    };

    return (
        <motion.div
            style={{
                width: "auto",
                height: "100%",
                justifyContent: "center",
                alignItems: "top",
                display: "block"
            }}
            drag
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}
        >
            {renderContent(props.card)}
        </motion.div>
    );
}
