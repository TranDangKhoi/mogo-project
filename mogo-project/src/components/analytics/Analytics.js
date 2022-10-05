import React from "react";
import { AnalyticsData } from "./AnalyticsData";
import "./analytics.scss";
import Container from "../container/Container";
const Analytics = () => {
  return (
    <div className="analytics">
      <Container>
        <div className="analytics-list">
          {AnalyticsData.length > 0 &&
            AnalyticsData.map((item) => (
              <div className="analytics-item" key={item.id}>
                <h4 className="analytics-item-count">{item.count}</h4>
                <span className="analytics-item-text">{item.name}</span>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Analytics;
