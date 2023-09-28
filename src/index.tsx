import React from 'react';
import {
  PartitionOutlined,
} from '@ant-design/icons'

import { IPlugin } from '@veramo-community/agent-explorer-plugin';
import { GraphView } from './GraphView';

const Plugin: IPlugin = {
    init: () => {
        return {
          name: 'Graph view',
          description: 'Explore contacts and credentials in a graph view',
          requiredMethods: ['dataStoreORMGetVerifiableCredentials', 'dataStoreORMGetIdentifiers', 'didManagerFind'],
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
          hasCss: true,
        }
    }
};

export default Plugin;