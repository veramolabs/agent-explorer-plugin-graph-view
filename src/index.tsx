import React from 'react';
import {
  PartitionOutlined,
} from '@ant-design/icons'

import { IPlugin } from './types';
import { GraphView } from './GraphView';

const Plugin: IPlugin = {
    //@ts-ignore
    init: (agent) => {
        return {
          name: 'Graph view',
          description: 'Explore the agent\'s contacts and credentials in a graph view',
          routes: [
            {
              path: '/graph',
              element: <GraphView />,
            },
          ],
          menuItems: [
            {
              name: 'Graph view',
              path: '/graph',
              icon: <PartitionOutlined />,
            },
          ],
          
        }
    }
};

export default Plugin;