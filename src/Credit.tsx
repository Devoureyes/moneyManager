import * as React from "react";
import { Col, Form, Input, InputNumber, Row } from "antd";

export interface ICreditProps {
  setCredit: React.Dispatch<React.SetStateAction<ICredit[]>>;
  credit: ICredit;
}

export interface ICredit {
  name: string;
  value: number;
}

const Credit = (props: ICreditProps) => {
  const { credit, setCredit } = props;
  return (
    <Row gutter={[12,0]}>
      <Col span={12}>
        <Form.Item label="Название">
          <Input
            value={credit.name}
            onChange={(v) => {
              setCredit((p) => {
                p.find((el) => el == credit).name = v.currentTarget?.value;
                return [...p];
              });
            }}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="Руб">
          <InputNumber
            value={credit.value}
            onChange={(v) => {
              setCredit((p) => {
                p.find((el) => el == credit).value = v;
                return [...p];
              });
            }}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default Credit;
