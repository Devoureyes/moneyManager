import * as React from "react";
import Profit, { IProfit } from "./Profit";
import { useState } from "react";
import { Button, Col, Row } from "antd";
import Credit, { ICredit } from "./Credit";

export default function App() {
  const [profit, setProfit] = useState<IProfit[]>([]);
  const [credit, setCredit] = useState<ICredit[]>([]);

  return (
    <div style={{}}>
      <h1>Удалитель долговищ, расчленитель деняк на эпизоды</h1>
      <Row gutter={[12, 0]}>
        <Col span={12}>
          <Button
            style={{ width: "100%" }}
            onClick={() => setProfit([...profit, { name: "", value: 0 }])}
          >
            Добавить дебет
          </Button>
          {profit.map((el, i) => (
            <Profit key={i} profit={el} setProfit={setProfit} />
          ))}
        </Col>
        <Col span={12}>
          <Button
            style={{ width: "100%" }}
            onClick={() => setCredit([...credit, { name: "", value: 0 }])}
          >
            Добавить кредит
          </Button>
          {credit.map((el, i) => (
            <Credit key={i} credit={el} setCredit={setCredit} />
          ))}
        </Col>
      </Row>
    </div>
  );
}
