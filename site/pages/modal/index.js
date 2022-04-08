import React, { useState } from 'react'
import { Modal, Button, Space } from "../../../src";
import "../../../src/modal/style";
import "../../../src/button/style";
import "../../../src/space/style";

import Markdown from "../../components/markdown"
import "./index.css"
import {
  Delete,
} from '@mui/icons-material';

export default () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return <div className="">
    <h1>Modal</h1>
    <div className="examples">
      <Button type="outlined" onClick={showModal}>Open Modal</Button>
      <Modal
        visible={isModalVisible}
        onClose={handleClose}
      >
        <Modal.Title>
          Title
        </Modal.Title>
        <Modal.Content dividers>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal.Content>
        <Modal.Actions>
          <Space>
            <Button type="outlined" color="primary" onClick={handleClose}>
              Return
            </Button>
            <Button type="filled" color="primary">
              Submit
            </Button>
            <Button
              type="filled"
              color="secondary"
            >
              Click
            </Button>
          </Space>
        </Modal.Actions>
      </Modal>
    </div>
    <Markdown children={`
\`\`\`javascript
export default () => <div className="page">
  <h1>Modal</h1>
  <div className="examples">
    <Button type="outlined" onClick={showModal}>Open Modal</Button>
    <Modal
      visible={isModalVisible}
      onClose={handleClose}
    >
      <Modal.Title>
        Title
      </Modal.Title>
      <Modal.Content dividers>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal.Content>
      <Modal.Actions>
        <Space>
          <Button type="outlined" color="primary" onClick={handleClose}>
            Return
          </Button>
          <Button type="filled" color="primary">
            Submit
          </Button>
          <Button
            type="filled"
            color="secondary"
          >
            Click
          </Button>
        </Space>
      </Modal.Actions>
    </Modal>
  </div>    
</div>
\`\`\`
        `} />

    <Markdown children={`
## API

| Property  | Description | Type | Default |
| --------- | ------- | ------- | ------- |

        `} />
  </div>
}