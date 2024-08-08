import * as React from "react";
import { Col, Input, InputNumber, Row } from "antd";
import { Form } from "antd";
export interface IProfitProps {
  setProfit: React.Dispatch<React.SetStateAction<IProfit[]>>;
  profit: IProfit;
}

export interface IProfit {
  name: string;
  value: number;
}

const Profit = (props: IProfitProps) => {
  const { profit, setProfit } = props;
  return (
    <Row gutter={[12,0]}>
      <Col span={12}>
        <Form.Item label="Название">
          <Input
            value={profit.name}
            onChange={(v) => {
              setProfit((p) => {
                p.find((el) => el == profit).name = v.currentTarget?.value;
                return [...p];
              });
            }}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="Руб">
          <InputNumber
            value={profit.value}
            onChange={(v) => {
              setProfit((p) => {
                p.find((el) => el == profit).value = v;
                return [...p];
              });
            }}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default Profit;
