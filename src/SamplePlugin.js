import { FlexPlugin } from 'flex-plugin';
import React from 'react';

import RickPlugin from './RickPlugin';

const PLUGIN_NAME = 'SamplePlugin';

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    flex.AgentDesktopView.Panel1.Content.add(<RickPlugin key="demo-component" />)
  }
}